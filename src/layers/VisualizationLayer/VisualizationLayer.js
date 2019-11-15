import React, { useState, useEffect } from 'react';
import { node, func, string, array, object, oneOfType, bool } from 'prop-types';

import drawCanvas from './drawCanvas';

const VisualizationLayer = props => {
  const [focusedPieceIndex, updateFocusedPieceIndex] = useState(null);
  const [focusedVisualizationGroup, updateFocusedVisualizationGroup] = useState(
    null
  );
  const piecesGroup = {};
  const { renderPipeline, voronoiHover } = props;

  const handleKeyDown = (e, vizgroup) => {
    // If enter, focus on the first element
    const pushed = e.keyCode;
    if (pushed !== 37 && pushed !== 39 && pushed !== 13) return;

    let newPieceIndex = 0;
    const vizGroupSetting = { focusedVisualizationGroup: null };

    // If a user pressed enter, highlight the first one
    // Let a user move up and down in stacked bar by getting keys of bars?
    if (focusedPieceIndex === null || pushed === 13) {
      vizGroupSetting.focusedVisualizationGroup = vizgroup;
    } else if (pushed === 37) {
      newPieceIndex = focusedPieceIndex - 1;
    } else if (pushed === 39) {
      newPieceIndex = focusedPieceIndex + 1;
    }

    newPieceIndex =
      newPieceIndex < 0
        ? piecesGroup[vizgroup].length + newPieceIndex
        : newPieceIndex % piecesGroup[vizgroup].length;

    const piece = renderPipeline[vizgroup].accessibleTransform(
      renderPipeline[vizgroup].data,
      newPieceIndex,
      piecesGroup[vizgroup][newPieceIndex]
    );

    voronoiHover(piece);

    updateFocusedPieceIndex(newPieceIndex);
    updateFocusedVisualizationGroup(vizGroupSetting.vizGroupSetting);
  };

  const canvasPipeline = [];

  useEffect(() => {
    drawCanvas({
      props,
      canvasDrawing: canvasPipeline,
      focusedPieceIndex,
      piecesGroup,
      focusedVisualizationGroup
    });
  });

  const {
    matte,
    matteClip,
    frameKey,
    margin,
    title,
    ariaTitle,
    children
  } = props;
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
  voronoiHover: func
};

export default VisualizationLayer;
