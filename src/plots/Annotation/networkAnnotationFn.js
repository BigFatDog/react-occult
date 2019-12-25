import React from 'react';

import {
  htmlFrameHoverRule,
  svgNodeRule,
  svgReactAnnotationRule,
  svgEncloseRule,
  svgRectEncloseRule,
  svgHullEncloseRule,
  svgHighlightRule
} from './networkAnnotations';
import DesaturationLayer from './widgets/DesaturationLayer';

const defaultNetworkSVGRule = ({ frameData, frameProps }) => ({
  d: baseD,
  i
}) => {
  const {
    projectedNodes,
    projectedEdges,
    nodeIDAccessor,
    nodeSizeAccessor,
    adjustedSize,
    customNodeIcon,
    nodeStyle
  } = frameData;

  const d = baseD.ids
    ? baseD
    : baseD.edge
    ? {
        ...(projectedEdges.find(
          p =>
            nodeIDAccessor(p.source) === nodeIDAccessor(baseD.source) &&
            nodeIDAccessor(p.target) === nodeIDAccessor(baseD.target)
        ) || {}),
        ...baseD
      }
    : {
        ...(projectedNodes.find(p => nodeIDAccessor(p) === baseD.id) || {}),
        ...baseD
      };

  if (d.type === 'node') {
    return svgNodeRule({
      d,
      i,
      nodeSizeAccessor
    });
  } else if (d.type === 'desaturation-layer') {
    return DesaturationLayer({
      style: d.style instanceof Function ? d.style(d, i) : d.style,
      size: adjustedSize,
      i,
      key: d.key
    });
  } else if (d.type === 'basic-node-label') {
    return (
      <g key={d.key || `basic-${i}`} transform={`translate(${d.x},${d.y})`}>
        {baseD.element || baseD.label}
      </g>
    );
  } else if (d.type === 'react-annotation' || typeof d.type === 'function') {
    return svgReactAnnotationRule({
      d,
      i,
      projectedNodes,
      nodeIDAccessor
    });
  } else if (d.type === 'enclose') {
    return svgEncloseRule({
      d,
      i,
      projectedNodes,
      nodeIDAccessor,
      nodeSizeAccessor
    });
  } else if (d.type === 'enclose-rect') {
    return svgRectEncloseRule({
      d,
      i,
      projectedNodes,
      nodeIDAccessor,
      nodeSizeAccessor
    });
  } else if (d.type === 'enclose-hull') {
    return svgHullEncloseRule({
      d,
      i,
      projectedNodes,
      nodeIDAccessor,
      nodeSizeAccessor
    });
  } else if (d.type === 'highlight') {
    return svgHighlightRule({
      d,
      customNodeIcon,
      nodeStyle
    });
  }
  return null;
};

const defaultNetworkHTMLRule = ({ frameProps, frameData }) => ({
  d: baseD,
  i
}) => {
  const { tooltipContent, useSpans } = frameProps;
  const { projectedNodes, projectedEdges, nodeIDAccessor } = frameData;

  const d = baseD.ids
    ? baseD
    : baseD.edge
    ? {
        ...(projectedEdges.find(
          p =>
            nodeIDAccessor(p.source) === nodeIDAccessor(baseD.source) &&
            nodeIDAccessor(p.target) === nodeIDAccessor(baseD.target)
        ) || {}),
        ...baseD
      }
    : {
        ...(projectedNodes.find(p => nodeIDAccessor(p) === baseD.id) || {}),
        ...baseD
      };

  if (d.type === 'frame-hover') {
    return htmlFrameHoverRule({
      d,
      i,
      tooltipContent,
      useSpans,
      nodes: projectedNodes,
      edges: projectedEdges,
      nodeIDAccessor
    });
  }
  return null;
};

export { defaultNetworkHTMLRule, defaultNetworkSVGRule };
