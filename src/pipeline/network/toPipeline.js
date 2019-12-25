import drawEdges from './drawEdges';
import drawNodes from './drawNodes';

const toPipeline = ({
  projectedEdges,
  projectedNodes,
  edgeStyle,
  edgeClass,
  edgeRenderMode,
  edgeUseCanvas,
  edgeRenderKey,
  projection,
  edgeType,
  customEdgeIcon,
  networkType,
  direction,
  nodeStyle,
  nodeClass,
  nodeRenderMode,
  nodeUseCanvas,
  customNodeIcon,
  nodeRenderKey
}) => {
  console.log('-----------------')
  const { svgPipeline: edgeSvg, canvasPipeline: edgeCanvas } = drawEdges({
    data: projectedEdges,
    renderKeyFn: edgeRenderKey,
    customMark: customEdgeIcon,
    styleFn: edgeStyle,
    classFn: edgeClass,
    renderMode: edgeRenderMode,
    useCanvas: edgeUseCanvas,
    type: edgeType,
    networkType,
    direction,
    projection
  });

  const { svgPipeline: nodeSvg, canvasPipeline: nodeCanvas } = drawNodes({
    data: projectedNodes,
    renderKeyFn: nodeRenderKey,
    customMark: customNodeIcon,
    styleFn: nodeStyle,
    classFn: nodeClass,
    renderMode: nodeRenderMode,
    useCanvas: nodeUseCanvas,
    networkType,
    direction,
    projection
  });

  const svgPipe = [...edgeSvg, ...nodeSvg];
  const canvasPipe = [...edgeCanvas, ...nodeCanvas];

  return {
    svgPipe,
    canvasPipe
  };
};

export default toPipeline;
