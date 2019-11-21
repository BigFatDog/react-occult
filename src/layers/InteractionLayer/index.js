import React, { useState } from 'react';

import {
  object,
  string,
  func,
  array,
  arrayOf,
  oneOfType,
  bool,
  number
} from 'prop-types';

import SpanOrDiv from '../../widgets/SpanOrDiv';
import renderCanvas from './helper/renderCanvas';
import { changeVoronoi } from './helper/voronoi';
import calculateOverlay from './helper/calculateOverlay';
import { createBrush } from './helper/brushEvents';

const InteractionLayer = props => {
  let interactionContext = null;
  let canvasMap = new Map();

  const [overlayRegions, setOverlayRegions] = useState(calculateOverlay(props));

  const generateInteractionCanvas = props => {
    return (
      <canvas
        className="frame-canvas-interaction"
        ref={canvasContext => {
          const newMap = {};
          for (const i in canvasMap) {
            newMap[i] = myMap[i];
          }

          const boundCanvasEvent = canvasEvent.bind(
            null,
            canvasContext,
            overlayRegions,
            newMap
          );
          if (canvasContext) {
            canvasContext.onmousemove = e => {
              const overlay = boundCanvasEvent(e);
              if (overlay && overlay.props) {
                overlay.props.onMouseEnter();
              } else {
                changeVoronoi({});
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
          interactionContext = canvasContext;
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

  const [interactionCanvas, setInteractionCanvas] = useState(
    generateInteractionCanvas(props)
  );

  useEffect(() => {
    setOverlayRegions(calculateOverlay(props));
    setInteractionCanvas(generateInteractionCanvas(props));
  }, [overlay, points, xScale, yScale, hoverAnnotation]);

  useEffect(() => {
    renderCanvas({
      props,
      canvasMap,
      interactionCanvas,
      overlayRegions,
      interactionContext
    });
  });

  let semioticBrush = null;
  const {
    interaction,
    svgSize,
    margin,
    useSpans,
    canvasRendering,
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
    canvasRendering &&
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
  name: string,
  interaction: object,
  overlay: array,
  oColumns: object,
  xScale: func,
  yScale: func,
  rScale: func,
  svgSize: array,
  hoverAnnotation: oneOfType([bool, object, array, func]),
  interactionOverflow: object,
  size: arrayOf(number),
  points: arrayOf(object),
  position: arrayOf(number),
  enabled: bool,
  useSpans: bool,
  margin: object,
  projection: string,
  customDoubleClickBehavior: func,
  customClickBehavior: func,
  customHoverBehavior: func,
  voronoiHover: func,
  canvasRendering: bool,
  disableCanvasInteraction: bool,
  showLinePoints: string,
  renderPipeline: object
};

InteractionLayer.defaultProps = {
  svgSize: [500, 500],
  useSpans: false
};

export default InteractionLayer;
