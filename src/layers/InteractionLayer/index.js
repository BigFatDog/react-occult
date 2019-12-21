import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SpanOrDiv from '../../widgets/SpanOrDiv';
import renderCanvas from './helper/renderCanvas';
import calculateOverlay from './helper/calculateOverlay';
import { createBrush } from './helper/brushEvents';
import canvasEvent from './helper/canvasEvent';

const InteractionLayer = props => {
  const canvasMap = new Map();

  const [interactionContext, setInteractionContext] = useState(null);
  const [overlayRegions, setOverlayRegions] = useState([]);

  const {
    xScale,
    yScale,
    data,
    size,
    overlay,
    hoverAnnotation,
    useCanvas,
    voronoiHover
  } = props;

  useEffect(() => {
    setOverlayRegions(calculateOverlay(props));
  }, [xScale, yScale, data, size, overlay, hoverAnnotation]);

  const generateInteractionCanvas = props => {
    return (
      <canvas
        className="frame-canvas-interaction"
        ref={canvasContext => {
          const boundCanvasEvent = canvasEvent.bind(
            null,
            canvasContext,
            overlayRegions,
            canvasMap
          );
          if (canvasContext) {
            canvasContext.onmousemove = e => {
              const overlay = boundCanvasEvent(e);
              if (overlay && overlay.props) {
                overlay.props.onMouseEnter();
              } else {
                voronoiHover([]);
              }
            };
            canvasContext.onclick = e => {
              const overlay = boundCanvasEvent(e);
              if (overlay && overlay.props) {
                overlay.props.onClick();
              }
            };
            canvasContext.ondblclick = e => {
              const overlay = boundCanvasEvent(e);
              if (overlay && overlay.props) {
                overlay.props.onDoubleClick();
              }
            };
          }

          setInteractionContext(canvasContext);
        }}
        style={{
          position: 'absolute',
          left: `0px`,
          top: `0px`,
          imageRendering: 'pixelated',
          pointerEvents: 'all',
          opacity: 0
        }}
        width={props.svgSize[0]}
        height={props.svgSize[1]}
      />
    );
  };

  const interactionCanvas = generateInteractionCanvas(props);

  useEffect(() => {
    renderCanvas({
      props,
      canvasMap,
      overlayRegions,
      interactionContext
    });
  }, [overlayRegions]);

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
    useCanvas &&
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
  useCanvas: PropTypes.bool,
  customDoubleClickBehavior: PropTypes.func,
  customClickBehavior: PropTypes.func,
  customHoverBehavior: PropTypes.func,
  voronoiHover: PropTypes.func,
  disableCanvasInteraction: PropTypes.bool
};

InteractionLayer.defaultProps = {
  svgSize: [500, 500],
  useSpans: false,
  useCanvas: false
};

export default InteractionLayer;
