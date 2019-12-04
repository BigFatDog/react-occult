import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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
    voronoiHover,
    canvasPipeline
  } = props;

  useEffect(() => {
    drawCanvas({
      props,
      canvasDrawing: canvasPipeline
    });
  });

  const _title =
    (title && ariaTitle) || props.title
      ? title.props && typeof title.props.children === 'string'
        ? `titled ${title.props.children}`
        : 'with a complex title'
      : 'with no title';
  const ariaLabel = `Visualization ${_title}. Use arrow keys to navigate elements.`;

  return (
    children &&
    children.length > 0 && (
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
      </g>
    )
  );
};

VisualizationLayer.defaultProps = {
  position: [0, 0],
  margin: { left: 0, top: 0, right: 0, bottom: 0 }
};

VisualizationLayer.propTypes = {
  frameKey: PropTypes.string,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  margin: PropTypes.object,
  size: PropTypes.array,
  position: PropTypes.array,
  canvasPostProcess: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ariaTitle: PropTypes.string,
  matte: PropTypes.node,
  matteClip: PropTypes.bool,
  frontCanvas: PropTypes.object,
  backCanvas: PropTypes.object,
  voronoiHover: PropTypes.func,
  canvasPipeline: PropTypes.array,
  svgPipeline: PropTypes.array
};

export default VisualizationLayer;
