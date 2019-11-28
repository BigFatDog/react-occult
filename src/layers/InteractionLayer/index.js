import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SpanOrDiv from '../../widgets/SpanOrDiv';
import renderCanvas from './helper/renderCanvas';
import calculateOverlay from './helper/calculateOverlay';
import { changeVoronoi } from './helper/voronoi';
import { createBrush } from './helper/brushEvents';

const InteractionLayer = props => {
  let interactionCanvas = null;
  // let interactionContext = null;
  // let canvasMap = new Map();

  const overlayRegions = calculateOverlay(props);
  // const generateInteractionCanvas = props => {
  //   return (
  //     <canvas
  //       className="frame-canvas-interaction"
  //       ref={canvasContext => {
  //         const newMap = {};
  //         for (const i in canvasMap) {
  //           newMap[i] = myMap[i];
  //         }
  //
  //         const boundCanvasEvent = canvasEvent.bind(
  //           null,
  //           canvasContext,
  //           overlayRegions,
  //           newMap
  //         );
  //         if (canvasContext) {
  //           canvasContext.onmousemove = e => {
  //             const overlay = boundCanvasEvent(e);
  //             if (overlay && overlay.props) {
  //               overlay.props.onMouseEnter();
  //             } else {
  //               changeVoronoi({});
  //             }
  //           };
  //           canvasContext.onclick = e => {
  //             const overlay = boundCanvasEvent(e);
  //             if (overlay && overlay.props) {
  //               overlay.props.onClick();
  //             }
  //           };
  //           canvasContext.ondblclick = e => {
  //             const overlay = boundCanvasEvent(e);
  //             if (overlay && overlay.props) {
  //               overlay.props.onDoubleClick();
  //             }
  //           };
  //         }
  //         interactionContext = canvasContext;
  //       }}
  //       style={{
  //         position: 'absolute',
  //         left: `0px`,
  //         top: `0px`,
  //         imageRendering: 'pixelated',
  //         pointerEvents: 'all',
  //         opacity: 0
  //       }}
  //       width={props.svgSize[0]}
  //       height={props.svgSize[1]}
  //     />
  //   );
  // };


  // useEffect(() => {
  //   renderCanvas({
  //     props,
  //     canvasMap,
  //     interactionCanvas,
  //     overlayRegions,
  //     interactionContext
  //   });
  // });

  let semioticBrush = null;
  const {
    interaction,
    svgSize,
    margin,
    useSpans,
    disableCanvasInteraction,
    enabled: userEnabled
  } = props;

  let enabled = userEnabled;

  if (interaction && interaction.brush) {
    enabled = true;
    semioticBrush = createBrush(interaction, props);
  }

  if (interaction && interaction.columnsBrush) {
    enabled = true;
    semioticBrush = createColumnsBrush(interaction, props);
  }

  if (!overlayRegions && !semioticBrush) {
    return null;
  }

  const _interactionCanvas =
    !disableCanvasInteraction &&
    overlayRegions &&
    interactionCanvas;

  return (
    <SpanOrDiv
      span={useSpans}
      className="interaction-layer"
      style={{
        position: 'absolute',
        background: 'none',
        pointerEvents: 'none'
      }}
    >
      {_interactionCanvas || (
        <svg
          height={svgSize[1]}
          width={svgSize[0]}
          style={{ background: 'none', pointerEvents: 'none' }}
        >
          <g
            className="interaction-overlay"
            transform={`translate(${margin.left},${margin.top})`}
            style={{ pointerEvents: enabled ? 'all' : 'none' }}
          >
            <g className="interaction-regions">{overlayRegions}</g>
            {semioticBrush}
          </g>
        </svg>
      )}
    </SpanOrDiv>
  );
};

InteractionLayer.propTypes = {
  name: PropTypes.string,
  interaction: PropTypes.object,
  overlay: PropTypes.array,
  oColumns: PropTypes.object,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  rScale: PropTypes.func,
  svgSize: PropTypes.array,
  hoverAnnotation: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
    PropTypes.func
  ]),
  interactionOverflow: PropTypes.object,
  size: PropTypes.arrayOf(PropTypes.number),
  position: PropTypes.arrayOf(PropTypes.number),
  enabled: PropTypes.bool,
  useSpans: PropTypes.bool,
  margin: PropTypes.object,
  customDoubleClickBehavior: PropTypes.func,
  customClickBehavior: PropTypes.func,
  customHoverBehavior: PropTypes.func,
  voronoiHover: PropTypes.func,
  disableCanvasInteraction: PropTypes.bool
};

InteractionLayer.defaultProps = {
  svgSize: [500, 500],
  useSpans: false
};

export default InteractionLayer;
