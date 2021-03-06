import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  /*forceCenter,*/ forceSimulation,
  forceX,
  forceY,
  /*forceCollide,*/ forceLink,
  forceManyBody
} from 'd3-force';

import { scaleLinear } from 'd3-scale';
import { min, max } from 'd3-array';

import {
  sankeyLeft,
  sankeyRight,
  sankeyCenter,
  sankeyJustify,
  sankeyCircular
} from 'd3-sankey-circular';

import { chord, ribbon } from 'd3-chord';
import { arc } from 'd3-shape';
import {
  tree,
  hierarchy,
  pack,
  cluster,
  treemap,
  partition
} from 'd3-hierarchy';
import pathBounds from 'svg-path-bounding-box';
import AnnotationLabel from 'react-annotation/lib/Types/AnnotationLabel';

import topologicalSort from './layout/topologicalSort';
import areaLink from './layout/areaLink';
import ribbonLink from './layout/ribbonLink';
import circularAreaLink from './layout/circularAreaLink';
import radialLabelGenerator from './layout/radialLabelGenerator';
import softStack from './layout/softStack';
import circleNodeGenerator from '../../plots/Network/CirclePack/circleNodeGenerator';
import pointOnArcAtAngle from '../../utils/pointOnArcAtAngle';
import stringToFn from '../../utils/stringToFn';
import { getAdjustedPositionSize, toMarginGraphic } from '../utils';
import { nodesEdgesFromHierarchy } from './nodesEdgesFromHierarchy';
import toPipeline from '../../pipeline/network/toPipeline';

const emptyArray = [];
const genericFunction = value => () => value;
const baseNodeProps = {
  id: undefined,
  degree: 0,
  inDegree: 0,
  outDegree: 0,
  x: 0,
  y: 0,
  x1: 0,
  x0: 0,
  y1: 0,
  y0: 0,
  height: 0,
  width: 0,
  radius: 0,
  r: 0,
  direction: undefined,
  textHeight: 0,
  textWidth: 0,
  fontSize: 0,
  scale: 1,
  nodeSize: 0,
  component: -99,
  shapeNode: false
};

const baseGraphSettings = {
  nodeHash: new Map(),
  edgeHash: new Map(),
  nodes: [],
  edges: [],
  hierarchicalNetwork: false,
  type: 'force'
};

const basicMiddle = d => ({
  edge: d,
  x: (d.source.x + d.target.x) / 2,
  y: (d.source.y + d.target.y) / 2
});

const edgePointHash = {
  sankey: d => ({
    edge: d,
    x: (d.source.x1 + d.target.x0) / 2,
    y: d.circularPathData
      ? d.circularPathData.verticalFullExtent
      : ((d.y0 + d.y1) / 2 + (d.y0 + d.y1) / 2) / 2
  }),
  force: basicMiddle,
  tree: basicMiddle,
  cluster: basicMiddle
};

const hierarchicalTypeHash = {
  dendrogram: tree,
  tree,
  circlepack: pack,
  cluster,
  treemap,
  partition
};

const hierarchicalProjectable = {
  partition: true,
  cluster: true,
  tree: true,
  dendrogram: true
};

const radialProjectable = {
  partition: true,
  cluster: true,
  tree: true,
  dendrogram: true
};

function breadthFirstCompontents(baseNodes, hash) {
  const componentHash = {
    '0': { componentNodes: [], componentEdges: [] }
  };
  const components = [componentHash['0']];

  let componentID = 0;

  traverseNodesBF(baseNodes, true);

  function traverseNodesBF(nodes, top) {
    nodes.forEach(node => {
      const hashNode = hash.get(node);
      if (!hashNode) {
        componentHash['0'].componentNodes.push(node);
      } else if (hashNode.component === -99) {
        if (top === true) {
          componentID++;
          componentHash[componentID] = {
            componentNodes: [],
            componentEdges: []
          };
          components.push(componentHash[componentID]);
        }

        hashNode.component = componentID;
        componentHash[componentID].componentNodes.push(node);
        componentHash[componentID].componentEdges.push(...hashNode.edges);
        const traversibleNodes = [...hashNode.connectedNodes];
        traverseNodesBF(traversibleNodes, hash);
      }
    });
  }

  return components.sort(
    (a, b) => b.componentNodes.length - a.componentNodes.length
  );
}

const sankeyOrientHash = {
  left: sankeyLeft,
  right: sankeyRight,
  center: sankeyCenter,
  justify: sankeyJustify
};

const matrixify = ({ edgeHash, nodes, edgeWidthAccessor, nodeIDAccessor }) => {
  const matrix = [];
  nodes.forEach(nodeSource => {
    const nodeSourceID = nodeIDAccessor(nodeSource);
    const sourceRow = [];
    matrix.push(sourceRow);
    nodes.forEach(nodeTarget => {
      const nodeTargetID = nodeIDAccessor(nodeTarget);
      const theEdge = edgeHash.get(`${nodeSourceID}|${nodeTargetID}`);
      if (theEdge) {
        sourceRow.push(edgeWidthAccessor(theEdge));
      } else {
        sourceRow.push(0);
      }
    });
  });
  return matrix;
};

const computeNetworkFrameData = props => {
  const [frameData, updateFrameData] = useState({
    nodeData: [],
    edgeData: [],
    adjustedPosition: [],
    adjustedSize: [],
    backgroundGraphics: null,
    foregroundGraphics: null,
    projectedNodes: [],
    projectedEdges: [],
    renderNumber: 0,
    nodeLabelAnnotations: [],
    graphSettings: {
      type: 'empty-start',
      nodes: [],
      edges: [],
      nodeHash: new Map(),
      edgeHash: new Map(),
      hierarchicalNetwork: false
    },
    edgeWidthAccessor: stringToFn('weight'),
    margin: { top: 0, left: 0, right: 0, bottom: 0 },
    nodeIDAccessor: stringToFn('id'),
    nodeSizeAccessor: genericFunction(5),
    overlay: [],
    screenCoordinates: [],
    sourceAccessor: stringToFn('source'),
    targetAccessor: stringToFn('target'),
    svgPipeline: [],
    canvasPipeline: [],
    marginGraphic: null
  });

  const computeFrame = props => {
    const {
      margin: baseMargin,
      width,
      height,
      matte,
      hoverAnnotation,
      name,
      plotChildren
    } = props;

    const singlePlot = plotChildren[0];

    const {
      graph,
      nodes = Array.isArray(graph) || typeof graph === 'function'
        ? emptyArray
        : (graph && graph.nodes) || emptyArray,
      edges = typeof graph === 'function'
        ? emptyArray
        : Array.isArray(graph)
        ? graph
        : (graph && graph.edges) || emptyArray,
      nodeStyle: baseNodeStyle,
      nodeClass,
      edgeStyle,
      edgeClass,
      nodeRenderMode,
      edgeRenderMode,
      nodeLabels,
      customNodeIcon: baseCustomNodeIcon,
      customEdgeIcon: baseCustomEdgeIcon,
      filterRenderedNodes,
      nodeUseCanvas,
      edgeUseCanvas,
      edgeRenderKey,
      nodeRenderKey,
      nodeIDAccessor: baseNodeIDAccessor,
      sourceAccessor: baseSourceAccessor,
      targetAccessor: baseTargetAccessor,
      nodeSizeAccessor: baseNodeSizeAccessor,
      edgeWidthAccessor: baseEdgeWidthAccessor,
      nodeSize,
      hierarchyChildren,
      hierarchySum,
      nodePadding,
      angleRange
    } = singlePlot.props;
    let { edgeType, projection, direction } = singlePlot.props;
    const nodeStyle = stringToFn(baseNodeStyle, () => ({}), true);

    const { nodeGenerator, edgeGenerator } = singlePlot.type;

    const size = [width, height];
    const center = [size[0] / 2, size[1] / 2];

    const margin =
      typeof baseMargin !== 'object'
        ? {
            top: baseMargin,
            bottom: baseMargin,
            left: baseMargin,
            right: baseMargin
          }
        : Object.assign({ top: 0, bottom: 0, left: 0, right: 0 }, baseMargin);

    const marginGraphic = toMarginGraphic({ matte, size, margin, name });

    const { adjustedPosition, adjustedSize } = getAdjustedPositionSize({
      size: [width, height],
      margin
    });

    const nodeHierarchicalIDFill = {};
    const networkSettings = {
      type: singlePlot.type.name.toLowerCase(),
      graphSettings: baseGraphSettings
    };

    if (projection === 'vertical' && networkSettings.type === 'sankey') {
      direction = 'down';
    }

    networkSettings.graphSettings.nodes = nodes;
    networkSettings.graphSettings.edges = edges;

    let { edgeHash, nodeHash } = networkSettings.graphSettings;

    const createPointLayer =
      networkSettings.type === 'treemap' ||
      networkSettings.type === 'partition' ||
      networkSettings.type === 'sankey';

    const nodeIDAccessor = stringToFn(baseNodeIDAccessor, d => d.id);
    const sourceAccessor = stringToFn(baseSourceAccessor, d => d.source);
    const targetAccessor = stringToFn(baseTargetAccessor, d => d.target);

    const nodeSizeAccessor =
      typeof baseNodeSizeAccessor === 'number'
        ? genericFunction(baseNodeSizeAccessor)
        : stringToFn(baseNodeSizeAccessor, d => d.r || 5);
    const edgeWidthAccessor = stringToFn(
      baseEdgeWidthAccessor,
      d => d.weight || 1
    );

    let projectedNodes = [];
    let projectedEdges = [];

    const isHierarchical = hierarchicalTypeHash[networkSettings.type];

    const changedData =
      !frameData.projectedNodes ||
      !frameData.projectedEdges ||
      frameData.graphSettings.nodes !== nodes ||
      frameData.graphSettings.edges !== edges ||
      isHierarchical;

    if (networkSettings.type === 'dagre') {
      const dagreGraph = graph;
      const dagreNodeHash = {};
      projectedNodes = dagreGraph.nodes().map(n => {
        const baseNode = dagreGraph.node(n);
        dagreNodeHash[n] = {
          ...baseNode,
          x0: baseNode.x - baseNode.width / 2,
          x1: baseNode.x + baseNode.width / 2,
          y0: baseNode.y - baseNode.height / 2,
          y1: baseNode.y + baseNode.height / 2,
          id: n,
          shapeNode: true,
          sourceLinks: [],
          targetLinks: []
        };
        return dagreNodeHash[n];
      });
      projectedEdges = dagreGraph.edges().map(e => {
        const dagreEdge = dagreGraph.edge(e);
        const baseEdge = {
          ...dagreEdge,
          points: dagreEdge.points.map(d => ({ ...d }))
        };
        baseEdge.source = projectedNodes.find(p => p.id === e.v);
        baseEdge.target = projectedNodes.find(p => p.id === e.w);
        baseEdge.points.unshift({ x: baseEdge.source.x, y: baseEdge.source.y });
        baseEdge.points.push({ x: baseEdge.target.x, y: baseEdge.target.y });
        dagreNodeHash[e.v].targetLinks.push(baseEdge);
        dagreNodeHash[e.w].sourceLinks.push(baseEdge);
        return baseEdge;
      });
    } else if (changedData) {
      edgeHash = new Map();
      nodeHash = new Map();
      networkSettings.graphSettings.edgeHash = edgeHash;
      networkSettings.graphSettings.nodeHash = nodeHash;
      projectedNodes = [];
      projectedEdges = [];
      nodes.forEach(node => {
        const projectedNode = { ...node };
        const id = nodeIDAccessor(projectedNode);
        nodeHash.set(id, projectedNode);
        nodeHash.set(node, projectedNode);
        projectedNodes.push(projectedNode);
        projectedNode.id = id;
        projectedNode.inDegree = 0;
        projectedNode.outDegree = 0;
        projectedNode.degree = 0;
      });

      let operationalEdges = edges;
      let baseEdges = edges;

      if (isHierarchical && Array.isArray(edges)) {
        const createdHierarchicalData = softStack(
          edges,
          projectedNodes,
          sourceAccessor,
          targetAccessor,
          nodeIDAccessor
        );

        if (createdHierarchicalData.isHierarchical) {
          baseEdges = createdHierarchicalData.hierarchy;
          projectedNodes = [];
        } else {
          console.error(
            "You've sent an edge list that is not strictly hierarchical (there are nodes with multiple parents) defaulting to force-directed network layout"
          );
          networkSettings.type = 'force';
        }
      }

      if (!Array.isArray(baseEdges)) {
        networkSettings.hierarchicalNetwork = true;
        const rootNode = hierarchy(baseEdges, hierarchyChildren);

        rootNode.sum(hierarchySum || (d => d.value));

        if (isHierarchical) {
          const layout = networkSettings.layout || isHierarchical;
          const hierarchicalLayout = layout();
          const networkSettingKeys = Object.keys(networkSettings);
          if (
            (networkSettings.type === 'dendrogram' ||
              networkSettings.type === 'tree' ||
              networkSettings.type === 'cluster') &&
            hierarchicalLayout.separation
          ) {
            hierarchicalLayout.separation(
              (a, b) =>
                (nodeSizeAccessor({ ...a, ...a.data }) || 1) +
                (nodePadding || 0) +
                (nodeSizeAccessor({ ...b, ...b.data }) || 1)
            );
          }

          networkSettingKeys.forEach(key => {
            if (hierarchicalLayout[key]) {
              hierarchicalLayout[key](networkSettings[key]);
            }
          });
          const layoutSize =
            projection === 'horizontal' && isHierarchical
              ? [adjustedSize[1], adjustedSize[0]]
              : adjustedSize;
          if (!nodeSize && hierarchicalLayout.size) {
            hierarchicalLayout.size(layoutSize);
          }

          hierarchicalLayout(rootNode);
        }

        operationalEdges = nodesEdgesFromHierarchy(rootNode, nodeIDAccessor)
          .edges;
      }

      baseNodeProps.shapeNode = createPointLayer;
      if (Array.isArray(operationalEdges)) {
        operationalEdges.forEach(edge => {
          const source = sourceAccessor(edge);
          const target = targetAccessor(edge);
          const sourceTarget = [source, target];
          sourceTarget.forEach(nodeDirection => {
            if (!nodeHash.get(nodeDirection)) {
              const nodeObject =
                typeof nodeDirection === 'object'
                  ? {
                      ...baseNodeProps,
                      ...nodeDirection
                    }
                  : {
                      ...baseNodeProps,
                      id: nodeDirection,
                      createdByFrame: true
                    };

              const nodeIDValue = nodeObject.id || nodeIDAccessor(nodeObject);
              nodeHierarchicalIDFill[nodeIDValue]
                ? (nodeHierarchicalIDFill[nodeIDValue] += 1)
                : (nodeHierarchicalIDFill[nodeIDValue] = 1);

              if (!nodeObject.id) {
                const nodeSuffix =
                  nodeHierarchicalIDFill[nodeIDValue] === 1
                    ? ''
                    : `-${nodeHierarchicalIDFill[nodeIDValue]}`;
                nodeObject.id = `${nodeIDValue}${nodeSuffix}`;
              }

              nodeHash.set(nodeDirection, nodeObject);
              projectedNodes.push(nodeObject);
            }
          });

          const edgeWeight = edge.weight || 1;

          const sourceNode = nodeHash.get(source);
          const targetNode = nodeHash.get(target);

          targetNode.inDegree += edgeWeight;
          sourceNode.outDegree += edgeWeight;
          targetNode.degree += edgeWeight;
          sourceNode.degree += edgeWeight;

          const edgeKey = `${nodeIDAccessor(sourceNode) ||
            source}|${nodeIDAccessor(targetNode) || target}`;
          const newEdge = Object.assign({}, edge, {
            source: nodeHash.get(source),
            target: nodeHash.get(target)
          });
          edgeHash.set(edgeKey, newEdge);
          projectedEdges.push(newEdge);
        });
      }
    } else {
      edgeHash = new Map();
      networkSettings.graphSettings.edgeHash = edgeHash;
      projectedEdges.forEach(edge => {
        const edgeSource =
          typeof edge.source === 'string'
            ? edge.source
            : nodeIDAccessor(edge.source);
        const edgeTarget =
          typeof edge.target === 'string'
            ? edge.target
            : nodeIDAccessor(edge.target);

        const edgeKey = `${edgeSource}|${edgeTarget}`;
        edgeHash.set(edgeKey, edge);
      });
    }

    const customNodeIcon = baseCustomNodeIcon
      ? baseCustomNodeIcon
      : nodeGenerator
      ? nodeGenerator({
          center,
          angleRange,
          projection,
          direction,
          size: adjustedSize,
          nodes: projectedNodes
        })
      : circleNodeGenerator();

    const customEdgeIcon = baseCustomEdgeIcon
      ? baseCustomEdgeIcon
      : edgeGenerator
      ? edgeGenerator({
          direction,
          size: adjustedSize,
          nodes: projectedNodes,
          graph
        })
      : undefined;

    if (
      (networkSettings.type === 'sankey' ||
        networkSettings.type === 'flowchart') &&
      topologicalSort(projectedNodes, projectedEdges) === null
    ) {
      networkSettings.customSankey = sankeyCircular;
    }
    networkSettings.width = size[0];
    networkSettings.height = size[1];

    let networkSettingsChanged = false;

    ['type', 'height', 'width'].forEach(key => {
      if (
        key !== 'edgeType' &&
        key !== 'graphSettings' &&
        networkSettings[key] !== frameData.graphSettings[key]
      ) {
        networkSettingsChanged = true;
      }
    });

    //Support bubble chart with circle pack and with force
    if (networkSettings.type === 'sankey') {
      edgeType = d =>
        d.circular
          ? circularAreaLink(d)
          : edgeType === 'angled'
          ? ribbonLink(d)
          : areaLink(d);
    } else if (isHierarchical) {
      projectedNodes.forEach(node => {
        if (createPointLayer) {
          node.x = (node.x0 + node.x1) / 2;
          node.y = (node.y0 + node.y1) / 2;
        }
        if (
          typeof networkSettings.type === 'string' &&
          hierarchicalProjectable[networkSettings.type] &&
          projection === 'horizontal'
        ) {
          const ox = node.x;
          node.x = node.y;
          node.y = ox;

          if (createPointLayer) {
            const ox0 = node.x0;
            const ox1 = node.x1;
            node.x0 = node.y0;
            node.x1 = node.y1;
            node.y0 = ox0;
            node.y1 = ox1;
          }
        } else if (
          typeof networkSettings.type === 'string' &&
          radialProjectable[networkSettings.type] &&
          projection === 'radial'
        ) {
          const radialPoint =
            node.depth === 0
              ? [adjustedSize[0] / 2, adjustedSize[1] / 2]
              : pointOnArcAtAngle(
                  [adjustedSize[0] / 2, adjustedSize[1] / 2],
                  node.x / adjustedSize[0],
                  node.y / 2
                );
          node.x = radialPoint[0];
          node.y = radialPoint[1];
        } else {
          node.x = node.x;
          node.y = node.y;
          if (createPointLayer) {
            node.x0 = node.x0;
            node.x1 = node.x1;
            node.y0 = node.y0;
            node.y1 = node.y1;
          }
        }
      });
    }

    if (
      networkSettings.type !== 'static' &&
      (changedData || networkSettingsChanged)
    ) {
      let components = [
        {
          componentNodes: projectedNodes,
          componentEdges: projectedEdges
        }
      ];

      if (networkSettings.type === 'chord') {
        const radius = adjustedSize[1] / 2;

        const {
          groupWidth = 20,
          padAngle = 0.01,
          sortGroups
        } = singlePlot.props;
        const arcGenerator = arc()
          .innerRadius(radius - groupWidth)
          .outerRadius(radius);

        const ribbonGenerator = ribbon().radius(radius - groupWidth);

        const matrixifiedNetwork = matrixify({
          edgeHash: edgeHash,
          nodes: projectedNodes,
          edgeWidthAccessor,
          nodeIDAccessor
        });

        const chordLayout = chord().padAngle(padAngle);

        if (sortGroups) {
          chordLayout.sortGroups(sortGroups);
        }

        const chords = chordLayout(matrixifiedNetwork);
        const groups = chords.groups;

        groups.forEach(group => {
          const groupCentroid = arcGenerator.centroid(group);
          const groupD = arcGenerator(group);
          const groupNode = projectedNodes[group.index];
          groupNode.d = groupD;
          groupNode.index = group.index;
          groupNode.x = groupCentroid[0] + adjustedSize[0] / 2;
          groupNode.y = groupCentroid[1] + adjustedSize[1] / 2;
        });

        chords.forEach(generatedChord => {
          const chordD = ribbonGenerator(generatedChord);

          //this is incorrect should use edgeHash
          const nodeSourceID = nodeIDAccessor(
            projectedNodes[generatedChord.source.index]
          );
          const nodeTargetID = nodeIDAccessor(
            projectedNodes[generatedChord.target.index]
          );
          const chordEdge = edgeHash.get(`${nodeSourceID}|${nodeTargetID}`);
          chordEdge.d = chordD;
          const chordBounds = pathBounds(chordD);
          chordEdge.x =
            adjustedSize[0] / 2 + (chordBounds.x1 + chordBounds.x2) / 2;
          chordEdge.y =
            adjustedSize[1] / 2 + (chordBounds.y1 + chordBounds.y2) / 2;
        });
      } else if (
        networkSettings.type === 'sankey' ||
        networkSettings.type === 'flowchart'
      ) {
        const {
          orient = 'center',
          iterations = 100,
          nodePadding,
          nodePaddingRatio = nodePadding ? undefined : 0.5,
          nodeWidth = networkSettings.type === 'flowchart' ? 2 : 24,
          customSankey,
          direction = 'right'
        } = singlePlot.props;
        const sankeyOrient = sankeyOrientHash[orient];

        const actualSankey = customSankey || sankeyCircular;

        let frameExtent = [[0, 0], adjustedSize];

        if (direction === 'up' || direction === 'down') {
          frameExtent = [
            [0, 0],
            [adjustedSize[1], adjustedSize[0]]
          ];
        }

        const frameSankey = actualSankey()
          .extent(frameExtent)
          .links(projectedEdges)
          .nodes(projectedNodes)
          .nodeAlign(sankeyOrient)
          .nodeId(nodeIDAccessor)
          .nodeWidth(nodeWidth)
          .iterations(iterations);

        if (frameSankey.nodePaddingRatio && nodePaddingRatio) {
          frameSankey.nodePaddingRatio(nodePaddingRatio);
        } else if (nodePadding) {
          frameSankey.nodePadding(nodePadding);
        }

        frameSankey();

        projectedNodes.forEach(d => {
          d.height = d.y1 - d.y0;
          d.width = d.x1 - d.x0;
          d.x = d.x0 + d.width / 2;
          d.y = d.y0 + d.height / 2;
          d.radius = d.height / 2;
          d.direction = direction;
        });

        projectedEdges.forEach(d => {
          d.sankeyWidth = d.width;
          d.direction = direction;
          d.width = undefined;
        });
      } else if (networkSettings.type === 'force') {
        const {
          iterations = 500,
          edgeStrength = 0.1,
          distanceMax = Infinity,
          edgeDistance
        } = singlePlot.props;

        const linkForce = forceLink().strength(d =>
          Math.min(2.5, d.weight ? d.weight * edgeStrength : edgeStrength)
        );

        if (edgeDistance) {
          linkForce.distance(edgeDistance);
        }

        const simulation =
          networkSettings.simulation ||
          forceSimulation().force(
            'charge',
            forceManyBody()
              .distanceMax(distanceMax)
              .strength(
                networkSettings.forceManyBody ||
                  (d => -25 * nodeSizeAccessor(d))
              )
          );

        //        simulation.force("link", linkForce).nodes(projectedNodes)

        simulation.nodes(projectedNodes);

        const forceMod = adjustedSize[1] / adjustedSize[0];

        if (!simulation.force('x')) {
          simulation.force(
            'x',
            forceX(adjustedSize[0] / 2).strength(forceMod * 0.1)
          );
        }
        if (!simulation.force('y')) {
          simulation.force('y', forceY(adjustedSize[1] / 2).strength(0.1));
        }

        if (projectedEdges.length !== 0 && !simulation.force('link')) {
          simulation.force('link', linkForce);
          simulation.force('link').links(projectedEdges);
        }

        //reset alpha if it's too cold
        if (simulation.alpha() < 0.1) {
          simulation.alpha(1);
        }

        simulation.stop();

        for (let i = 0; i < iterations; ++i) simulation.tick();
      } else if (networkSettings.type === 'motifs') {
        const componentHash = new Map();
        projectedEdges.forEach(edge => {
          [edge.source, edge.target].forEach(node => {
            if (!componentHash.get(node)) {
              componentHash.set(node, {
                node,
                component: -99,
                connectedNodes: [],
                edges: []
              });
            }
          });

          componentHash.get(edge.source).connectedNodes.push(edge.target);
          componentHash.get(edge.target).connectedNodes.push(edge.source);
          componentHash.get(edge.source).edges.push(edge);
        });

        components = breadthFirstCompontents(projectedNodes, componentHash);

        const largestComponent = Math.max(
          projectedNodes.length / 3,
          components[0].componentNodes.length
        );

        const layoutSize = size[0] > size[1] ? size[1] : size[0];
        const layoutDirection = size[0] > size[1] ? 'horizontal' : 'vertical';

        const {
          iterations = 500,
          edgeStrength = 0.1,
          edgeDistance,
          padding = 0
        } = networkSettings;

        let currentX = padding;
        let currentY = padding;

        components.forEach(({ componentNodes, componentEdges }) => {
          const linkForce = forceLink().strength(d =>
            Math.min(2.5, d.weight ? d.weight * edgeStrength : edgeStrength)
          );

          if (edgeDistance) {
            linkForce.distance(edgeDistance);
          }

          const componentLayoutSize =
            Math.max(componentNodes.length / largestComponent, 0.2) *
            layoutSize;

          const xBound = componentLayoutSize + currentX;
          const yBound = componentLayoutSize + currentY;

          if (layoutDirection === 'horizontal') {
            if (yBound > size[1]) {
              currentX = componentLayoutSize + currentX + padding;
              currentY = componentLayoutSize + padding;
            } else {
              currentY = componentLayoutSize + currentY + padding;
            }
          } else {
            if (xBound > size[0]) {
              currentY = componentLayoutSize + currentY + padding;
              currentX = componentLayoutSize + padding;
            } else {
              currentX = componentLayoutSize + currentX + padding;
            }
          }

          const xCenter = currentX - componentLayoutSize / 2;
          const yCenter = currentY - componentLayoutSize / 2;

          const simulation = forceSimulation()
            .force(
              'charge',
              forceManyBody().strength(
                networkSettings.forceManyBody ||
                  (d => -25 * nodeSizeAccessor(d))
              )
            )
            .force('link', linkForce);

          simulation
            .force('x', forceX(xCenter))
            .force('y', forceY(yCenter))
            .nodes(componentNodes);

          simulation.force('link').links(componentEdges);

          simulation.stop();

          for (let i = 0; i < iterations; ++i) simulation.tick();

          const maxX = max(componentNodes.map(d => d.x));
          const maxY = max(componentNodes.map(d => d.y));
          const minX = min(componentNodes.map(d => d.x));
          const minY = min(componentNodes.map(d => d.y));

          const resetX = scaleLinear()
            .domain([minX, maxX])
            .range([currentX - componentLayoutSize, currentX - 20]);
          const resetY = scaleLinear()
            .domain([minY, maxY])
            .range([currentY - componentLayoutSize, currentY - 20]);

          componentNodes.forEach(node => {
            node.x = resetX(node.x);
            node.y = resetY(node.y);
          });
        });
      } else if (networkSettings.type === 'matrix') {
        if (networkSettings.sort) {
          projectedNodes = projectedNodes.sort(networkSettings.sort);
        }

        const gridSize = Math.min(...adjustedSize);

        const stepSize = gridSize / (projectedNodes.length + 1);

        projectedNodes.forEach((node, index) => {
          node.x = 0;
          node.y = (index + 1) * stepSize;
        });
      } else if (networkSettings.type === 'arc') {
        if (networkSettings.sort) {
          projectedNodes = projectedNodes.sort(networkSettings.sort);
        }

        const stepSize = adjustedSize[0] / (projectedNodes.length + 2);

        projectedNodes.forEach((node, index) => {
          node.x = (index + 1) * stepSize;
          node.y = adjustedSize[1] / 2;
        });
      } else if (typeof networkSettings.type === 'function') {
        networkSettings.type({
          nodes: projectedNodes,
          edges: projectedEdges
        });
      } else {
        projectedNodes.forEach(node => {
          node.x = node.x === undefined ? (node.x0 + node.x1) / 2 : node.x;
          node.y = node.y === undefined ? node.y0 : node.y;
        });
      }

      updateFrameData({
        ...frameData,
        graphSettings: {
          ...frameData.graphSettings,
          nodes: singlePlot.props.nodes,
          edges: singlePlot.props.edges
        }
      });
    }

    //filter out user-defined nodes
    projectedNodes = projectedNodes.filter(filterRenderedNodes);
    projectedEdges = projectedEdges.filter(
      d =>
        projectedNodes.indexOf(d.target) !== -1 &&
        projectedNodes.indexOf(d.source) !== -1
    );

    if (networkSettings.direction === 'flip') {
      projectedNodes.forEach(node => {
        // const ox = node.x
        // const oy = node.y
        node.x = adjustedSize[0] - node.x;
        node.y = adjustedSize[1] - node.y;
      });
    } else if (
      networkSettings.direction === 'up' ||
      networkSettings.direction === 'down'
    ) {
      const mod =
        networkSettings.direction === 'up'
          ? value => adjustedSize[1] - value
          : value => value;
      projectedNodes.forEach(node => {
        const ox = node.x;
        const ox0 = node.x0;
        const ox1 = node.x1;
        node.x = mod(node.y);
        node.x0 = mod(node.y0);
        node.x1 = mod(node.y1);
        node.y = ox;
        node.y0 = ox0;
        node.y1 = ox1;
      });
    } else if (networkSettings.direction === 'left') {
      projectedNodes.forEach(node => {
        node.x = adjustedSize[0] - node.x;
        node.x0 = adjustedSize[0] - node.x0;
        node.x1 = adjustedSize[0] - node.x1;
      });
    }
    if (typeof networkSettings.zoom === 'function') {
      networkSettings.zoom(projectedNodes, adjustedSize);
    } else if (
      networkSettings.zoom !== false &&
      networkSettings.type !== 'matrix' &&
      networkSettings.type !== 'chord' &&
      networkSettings.type !== 'sankey' &&
      networkSettings.type !== 'partition' &&
      networkSettings.type !== 'treemap' &&
      networkSettings.type !== 'circlepack' &&
      networkSettings.type !== 'dagre'
    ) {
      // ZOOM SHOULD MAINTAIN ASPECT RATIO, ADD "stretch" to fill whole area
      const xMin = min(projectedNodes.map(p => p.x - nodeSizeAccessor(p)));
      const xMax = max(projectedNodes.map(p => p.x + nodeSizeAccessor(p)));
      const yMin = min(projectedNodes.map(p => p.y - nodeSizeAccessor(p)));
      const yMax = max(projectedNodes.map(p => p.y + nodeSizeAccessor(p)));

      const xSize = Math.abs(xMax - xMin);
      const ySize = Math.abs(yMax - yMin);

      const networkAspectRatio = xSize / ySize;
      const baseAspectRatio = adjustedSize[0] / adjustedSize[1];

      let yMod, xMod;

      if (networkSettings.zoom === 'stretch') {
        yMod = 0;
        xMod = 0;
      } else if (xSize > ySize) {
        if (networkAspectRatio > baseAspectRatio) {
          xMod = 0;
          yMod = (adjustedSize[1] - (adjustedSize[0] / xSize) * ySize) / 2;
        } else {
          yMod = 0;
          xMod = (adjustedSize[0] - (adjustedSize[1] / ySize) * xSize) / 2;
        }
      } else {
        if (networkAspectRatio > baseAspectRatio) {
          xMod = 0;
          yMod = (adjustedSize[1] - (adjustedSize[0] / xSize) * ySize) / 2;
        } else {
          yMod = 0;
          xMod = (adjustedSize[0] - (adjustedSize[1] / ySize) * xSize) / 2;
        }
      }

      const projectionScaleX = scaleLinear()
        .domain([xMin, xMax])
        .range([xMod, adjustedSize[0] - xMod]);
      const projectionScaleY = scaleLinear()
        .domain([yMin, yMax])
        .range([yMod, adjustedSize[1] - yMod]);
      projectedNodes.forEach(node => {
        node.x = projectionScaleX(node.x);
        node.y = projectionScaleY(node.y);
      });
    } else if (
      networkSettings.zoom !== false &&
      networkSettings.projection !== 'radial' &&
      (networkSettings.type === 'partition' ||
        networkSettings.type === 'treemap' ||
        networkSettings.type === 'dagre')
    ) {
      const xMin = min(projectedNodes.map(p => p.x0));
      const xMax = max(projectedNodes.map(p => p.x1));
      const yMin = min(projectedNodes.map(p => p.y0));
      const yMax = max(projectedNodes.map(p => p.y1));

      const projectionScaleX = scaleLinear()
        .domain([xMin, xMax])
        .range([margin.left, adjustedSize[0] - margin.right]);
      const projectionScaleY = scaleLinear()
        .domain([yMin, yMax])
        .range([margin.top, adjustedSize[1] - margin.bottom]);
      projectedNodes.forEach(node => {
        node.x = projectionScaleX(node.x);
        node.y = projectionScaleY(node.y);
        node.x0 = projectionScaleX(node.x0);
        node.y0 = projectionScaleY(node.y0);
        node.x1 = projectionScaleX(node.x1);
        node.y1 = projectionScaleY(node.y1);
        node.zoomedHeight = node.y1 - node.y0;
        node.zoomedWidth = node.x1 - node.x0;
      });

      projectedEdges.forEach(edge => {
        if (edge.points) {
          edge.points.forEach(p => {
            p.x = projectionScaleX(p.x);
            p.y = projectionScaleY(p.y);
          });
        }
      });
    }

    projectedNodes.forEach(node => {
      node.nodeSize = nodeSizeAccessor(node);
    });

    projectedEdges.forEach(edge => {
      edge.width = edgeWidthAccessor(edge);
    });

    let legendSettings;

    if (props.legend) {
      legendSettings = props.legend;
      if (!legendSettings.legendGroups) {
        ///Something auto for networks
        const legendGroups = [
          {
            styleFn: nodeStyle,
            type: 'fill',
            items: []
          }
        ];
        legendSettings.legendGroups = legendGroups;
      }
    }

    const nodeLabelAnnotations = [];
    if (nodeLabels && projectedNodes) {
      projectedNodes.forEach((node, nodei) => {
        const feasibleLabel =
          nodeLabels && nodeLabels !== true && nodeLabels(node);

        if (nodeLabels === true || feasibleLabel) {
          const actualLabel =
            networkSettings.projection === 'radial' && node.depth !== 0
              ? radialLabelGenerator(
                  node,
                  nodei,
                  nodeLabels === true ? nodeIDAccessor : nodeLabels,
                  adjustedSize
                )
              : nodeLabels === true
              ? nodeIDAccessor(node, nodei)
              : feasibleLabel;

          let nodeLabel;

          if (React.isValidElement(actualLabel)) {
            nodeLabel = {
              key: `node-label-${nodei}`,
              type: 'basic-node-label',
              x: node.x,
              y: node.y,
              element: actualLabel
            };
          } else {
            nodeLabel = {
              key: `node-label-${nodei}`,
              className: 'node-label',
              dx: 0,
              dy: 0,
              x: node.x,
              y: node.y,
              note: { label: actualLabel },
              connector: { end: 'none' },
              type: AnnotationLabel,
              subject: { radius: nodeSizeAccessor(node) + 2 }
            };
          }

          nodeLabelAnnotations.push(nodeLabel);
        }
      });
    }

    let screenCoordinates;
    const overlay = [];
    const areaBasedTypes = ['circlepack', 'treemap', 'partition', 'chord'];
    if (
      (hoverAnnotation &&
        areaBasedTypes.find(d => d === networkSettings.type)) ||
      hoverAnnotation === 'area'
    ) {
      if (hoverAnnotation !== 'edge') {
        const renderedNodeOverlays = projectedNodes.map((d, i) => ({
          overlayData: d,
          ...customNodeIcon({
            d,
            i,
            transform: `translate(${d.x},${d.y})`,
            styleFn: () => ({ fill: 'pink', opacity: 0 })
          }).props
        }));

        overlay.push(...renderedNodeOverlays);
      }
      if (hoverAnnotation !== 'node') {
        projectedEdges.forEach((d, i) => {
          const generatedIcon = customEdgeIcon({
            d,
            i,
            transform: `translate(${d.x},${d.y})`,
            styleFn: () => ({ fill: 'pink', opacity: 0 })
          });
          if (generatedIcon) {
            overlay.push({
              overlayData: {
                ...d,
                x: d.x || (d.source.x + d.target.x) / 2,
                y: d.y || (d.source.y + d.target.y) / 2,
                edge: true
              },
              ...generatedIcon.props
            });
          }
        });
      }
    } else if (
      hoverAnnotation === 'edge' &&
      typeof networkSettings.type === 'string' &&
      edgePointHash[networkSettings.type]
    ) {
      screenCoordinates = projectedEdges.map(
        edgePointHash[networkSettings.type]
      );
    } else if (
      Array.isArray(hoverAnnotation) ||
      hoverAnnotation === true ||
      hoverAnnotation === 'node'
    ) {
      screenCoordinates = projectedNodes;
      if (changedData || networkSettingsChanged)
        screenCoordinates = [...projectedNodes];
    } else if (
      hoverAnnotation === 'all' &&
      typeof networkSettings.type === 'string'
    ) {
      screenCoordinates = [
        ...projectedEdges.map(edgePointHash[networkSettings.type]),
        ...projectedNodes
      ];
    }

    const { svgPipe, canvasPipe } = toPipeline({
      projectedEdges,
      projectedNodes,
      edgeStyle: stringToFn(edgeStyle, () => ({}), true),
      edgeClass: stringToFn(edgeClass, () => '', true),
      edgeRenderMode: stringToFn(edgeRenderMode, undefined, true),
      edgeUseCanvas,
      edgeRenderKey: edgeRenderKey
        ? edgeRenderKey
        : d => d._NWFEdgeKey || `${d.source.id}-${d.target.id}`,
      projection: networkSettings.projection,
      edgeType,
      customEdgeIcon,
      networkType: networkSettings.type,
      direction: networkSettings.direction,
      nodeStyle,
      nodeClass: stringToFn(nodeClass, () => '', true),
      nodeRenderMode: stringToFn(nodeRenderMode, undefined, true),
      nodeUseCanvas,
      customNodeIcon,
      nodeRenderKey
    });

    const svgPipeline = [...svgPipe];
    const canvasPipeline = canvasPipe.slice();

    updateFrameData({
      marginGraphic,
      adjustedPosition: adjustedPosition,
      adjustedSize: adjustedSize,
      renderNumber: frameData.renderNumber + 1,
      projectedNodes,
      projectedEdges,
      screenCoordinates,
      overlay,
      nodeIDAccessor,
      sourceAccessor,
      targetAccessor,
      nodeSizeAccessor,
      edgeWidthAccessor,
      margin,
      nodeLabelAnnotations,
      svgPipeline,
      canvasPipeline,
      graphSettings: {
        ...networkSettings.graphSettings,
        ...networkSettings,
        direction,
        projection
      },
      customNodeIcon,
      customEdgeIcon,
      nodeStyle
    });
  };

  useEffect(() => {
    computeFrame(props);
  }, []);

  return frameData;
};

export default computeNetworkFrameData;
