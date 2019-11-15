import React, { useState, useEffect } from 'react';
import { node, func, string, array, object, oneOfType, bool } from 'prop-types';

import drawCanvas from './drawCanvas';

const VisualizationLayer = props => {
  const {
    matte,
    matteClip,
    frameKey,
    margin,
    title,
    ariaTitle,
    children,
    canvasPipeline
  } = props;

  const canvasDrawing = [];

  useEffect(() => {
    drawCanvas({
      props,
      canvasDrawing: canvasPipeline
    });
  });

  const axes = null;
  const renderedAxes = axes && (
    <g key="visualization-axis-labels" className="axis axis-labels">
      {axes}
    </g>
  );

  const _title =
    (title && ariaTitle) || props.title
      ? title.props && typeof title.props.children === 'string'
        ? `titled ${title.props.children}`
        : 'with a complex title'
      : 'with no title';
  const ariaLabel = `Visualization ${_title}. Use arrow keys to navigate elements.`;

  return (
    ((renderedAxes || (children && children.length > 0)) && (
      <g
        className="data-visualization"
        key="visualization-clip-path"
        aria-label={ariaLabel}
        role="group"
        clipPath={
          matteClip && matte ? `url(#matte-clip${frameKey})` : undefined
        }
        transform={`translate(${margin.left},${margin.top})`}
      >
        {children}
        {matte}
        {renderedAxes}
      </g>
    )) ||
    null
  );
};

VisualizationLayer.defaultProps = {
  position: [0, 0],
  margin: { left: 0, top: 0, right: 0, bottom: 0 }
};

VisualizationLayer.propTypes = {
  frameKey: string,
  xScale: func,
  yScale: func,
  margin: object,
  size: array,
  position: array,
  canvasPostProcess: oneOfType([string, func]),
  title: oneOfType([object, string]),
  ariaTitle: string,
  matte: node,
  matteClip: bool,
  frontCanvas: object,
  backCanvas: object,
  renderOrder: array,
  voronoiHover: func,
  canvasPipeline: array
};

export default VisualizationLayer;
