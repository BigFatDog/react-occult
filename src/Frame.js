import React, { useState, useEffect, useRef } from 'react';
import {
  object,
  string,
  func,
  array,
  arrayOf,
  oneOfType,
  bool,
  node,
  number
} from 'prop-types';
import filterDefs from './utils/filterDefs';
import SpanOrDiv from './utils/SpanOrDiv';
import generateFrameTitle from './svg/frameFunctions/generateFrameTitle';
import drawMarginPath from './svg/frameFunctions/drawMarginPath';
import {
  AnnotationLayer,
  VisualizationLayer,
  InteractionLayer
} from './layers';

import { projectedYMiddle } from './constants/coordinateNames';

const getCanvasScale = context => {
  const devicePixelRatio = window.devicePixelRatio || 1;

  const backingStoreRatio =
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;

  return devicePixelRatio / backingStoreRatio;
};

const Frame = props => {
  const frontCanvasRef = useRef(null);
  const backCanvasRef = useRef(null);
  const [frontCanvas, setFrontCanvas] = useState(null);
  const [backCanvas, setBackCanvas] = useState(null);
  const [voronoiHover, setVoronoiHover] = useState(null);

  const updateCanvas = () => {
    if (frontCanvasRef && frontCanvasRef.current) {
      const _frontContext = frontCanvasRef.current.getContext('2d');
      const canvasScale = getCanvasScale(_frontContext);
      _frontContext.scale(canvasScale, canvasScale);
      setFrontCanvas(frontCanvasRef.current);
    }

    if (backCanvasRef && backCanvasRef.current) {
      const _backContext = backCanvasRef.current.getContext('2d');

      _backContext.mozImageSmoothingEnabled = false;
      _backContext.webkitImageSmoothingEnabled = false;
      _backContext.msImageSmoothingEnabled = false;
      _backContext.imageSmoothingEnabled = false;

      const canvasScale = getCanvasScale(_backContext);
      _backContext.scale(canvasScale, canvasScale);
      setBackCanvas(backCanvasRef.current);
    }
  };

  useEffect(() => {
    updateCanvas();
  }, []);

  const {
    name,
    title,
    className,
    frameKey,
    matte,
    margin,
    xScale,
    yScale,
    rScale,
    additionalDefs,
    backgroundGraphics,
    foregroundGraphics,
    beforeElements,
    afterElements,
    useSpans,
    axesTickLines,
    canvasRendering,
    width,
    height,
    annotations,
    canvasPostProcess,
    renderPipeline,
    renderOrder,
    annotationSettings,
    hoverAnnotation,
    axes,
    legendSettings,
    data,
    adjustedSize,
    adjustedPosition,
    defaultSVGRule,
    defaultHTMLRule,
    projectedCoordinateNames,
    interaction,
    interactionOverflow,
    customClickBehavior,
    customHoverBehavior,
    customDoubleClickBehavior,
    points,
    showLinePoints,
    overlay,
    columns,
    projection,
    disableCanvasInteraction = false
  } = props;

  const size = [width, height];
  const devicePixelRatio = window.devicePixelRatio || 1;

  const finalFilterDefs = filterDefs({
    matte,
    key: matte && (frameKey || name),
    additionalDefs
  });

  const finalBackgroundGraphics =
      typeof backgroundGraphics === 'function'
          ? backgroundGraphics({ size, margin })
          : backgroundGraphics;

  const finalForegroundGraphics =
      typeof foregroundGraphics === 'function'
          ? foregroundGraphics({ size, margin })
          : foregroundGraphics;

  const generatedTitle = generateFrameTitle({
    title,
    size
  });

  const areaAnnotations = [];

  const totalAnnotations = annotations
      ? [...annotations, ...areaAnnotations]
      : areaAnnotations;

  if (voronoiHover) {
    if (Array.isArray(voronoiHover)) {
      totalAnnotations.push(...voronoiHover);
    } else {
      totalAnnotations.push(voronoiHover);
    }
  }

  const annotationLayer = ((totalAnnotations && totalAnnotations.length > 0) ||
      legendSettings) && (
      <AnnotationLayer
          legendSettings={legendSettings}
          margin={margin}
          axes={axes}
          voronoiHover={setVoronoiHover}
          annotationHandling={annotationSettings}
          pointSizeFunction={
            annotationSettings.layout && annotationSettings.layout.pointSizeFunction
          }
          labelSizeFunction={
            annotationSettings.layout && annotationSettings.layout.labelSizeFunction
          }
          annotations={totalAnnotations}
          svgAnnotationRule={(d, i, thisALayer) =>
              defaultSVGRule({
                d,
                i,
                annotationLayer: thisALayer,
                ...renderPipeline
              })
          }
          htmlAnnotationRule={(d, i, thisALayer) =>
              defaultHTMLRule({
                d,
                i,
                annotationLayer: thisALayer,
                ...renderPipeline
              })
          }
          useSpans={useSpans}
          size={adjustedSize}
          position={[
            adjustedPosition[0] + margin.left,
            adjustedPosition[1] + margin.top
          ]}
      />
  );

  let marginGraphic = null;
  if (typeof matte === 'function') {
    marginGraphic = matte({ size, margin });
  } else if (React.isValidElement(matte)) {
    marginGraphic = matte;
  } else if (matte === true) {
    marginGraphic = (
        <path
            fill="white"
            transform={`translate(${-margin.left},${-margin.top})`}
            d={drawMarginPath({
              margin,
              size,
              inset: 0
            })}
            className={`${name}-matte`}
        />
    );
  }

  return (
      <SpanOrDiv
          span={useSpans}
          className={`${className} frame ${name}`}
          style={{
            background: 'none'
          }}
      >
        {beforeElements && (
            <SpanOrDiv span={useSpans} className={`${name} frame-before-elements`}>
              {beforeElements}
            </SpanOrDiv>
        )}
        <SpanOrDiv
            span={useSpans}
            className="frame-elements"
            style={{ height: `${height}px`, width: `${width}px` }}
        >
          <SpanOrDiv
              span={useSpans}
              className="visualization-layer"
              style={{ position: 'absolute' }}
          >
            {(axesTickLines || backgroundGraphics) && (
                <svg
                    className="background-graphics"
                    style={{ position: 'absolute' }}
                    width={width}
                    height={height}
                >
                  {backgroundGraphics && (
                      <g aria-hidden={true} className="background-graphics">
                        {finalBackgroundGraphics}
                      </g>
                  )}
                  {axesTickLines && (
                      <g
                          transform={`translate(${margin.left},${margin.top})`}
                          key="visualization-tick-lines"
                          className={'axis axis-tick-lines'}
                          aria-hidden={true}
                      >
                        {axesTickLines}
                      </g>
                  )}
                </svg>
            )}
            {canvasRendering && (
                <canvas
                    className="frame-canvas frame-canvas-front"
                    ref={frontCanvasRef}
                    style={{
                      position: 'absolute',
                      left: `0px`,
                      top: `0px`,
                      width: `${width}px`,
                      height: `${height}px`
                    }}
                    width={width * devicePixelRatio}
                    height={height * devicePixelRatio}
                />
            )}

            {canvasRendering && (
                <canvas
                    className="frame-canvas frame-canvas-hidden"
                    ref={backCanvasRef}
                    style={{
                      position: 'absolute',
                      left: `0px`,
                      top: `0px`,
                      width: `${width}px`,
                      height: `${height}px`
                    }}
                    width={width * devicePixelRatio}
                    height={height * devicePixelRatio}
                />
            )}
            <svg
                className="visualization-layer"
                style={{ position: 'absolute' }}
                width={width}
                height={height}
            >
              {finalFilterDefs}
              />
              <VisualizationLayer
                  title={generatedTitle}
                  frameKey={frameKey}
                  axes={axes}
                  size={adjustedSize}
                  position={adjustedPosition}
                  canvasPostProcess={canvasPostProcess}
                  projectedCoordinateNames={projectedCoordinateNames}
                  frontCanvas={frontCanvas}
                  backCanvas={backCanvas}
                  matte={marginGraphic}
                  margin={margin}
                  renderPipeline={renderPipeline}
                  renderOrder={renderOrder}
                  width={width}
                  height={height}
                  xScale={xScale}
                  yScale={yScale}
                  data={data}
                  voronoiHover={setVoronoiHover}
              />
              {generatedTitle && <g className="frame-title">{generatedTitle}</g>}
              {foregroundGraphics && (
                  <g aria-hidden={true} className="foreground-graphics">
                    {finalForegroundGraphics}
                  </g>
              )}
            </svg>
          </SpanOrDiv>

          <InteractionLayer
              useSpans={useSpans}
              hoverAnnotation={hoverAnnotation}
              projectedX={projectedCoordinateNames.x}
              projectedY={projectedCoordinateNames.y}
              projectedYMiddle={projectedYMiddle}
              interaction={interaction}
              voronoiHover={setVoronoiHover}
              customClickBehavior={customClickBehavior}
              customHoverBehavior={customHoverBehavior}
              customDoubleClickBehavior={customDoubleClickBehavior}
              points={points}
              showLinePoints={showLinePoints}
              canvasRendering={canvasRendering}
              position={adjustedPosition}
              margin={margin}
              size={adjustedSize}
              svgSize={size}
              xScale={xScale}
              yScale={yScale}
              enabled={true}
              overlay={overlay}
              oColumns={columns}
              rScale={rScale}
              projection={projection}
              interactionOverflow={interactionOverflow}
              disableCanvasInteraction={disableCanvasInteraction}
              renderPipeline={renderPipeline}
          />
          {annotationLayer}
          {afterElements && (
              <SpanOrDiv span={useSpans} className={`${name} frame-after-elements`}>
                {afterElements}
              </SpanOrDiv>
          )}
        </SpanOrDiv>
      </SpanOrDiv>
  );
};

Frame.defaultProps = {
  name: '',
  title: { title: '', orient: 'top' },
  className: '',
  frameKey: '',
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
  additionalDefs: null,
  backgroundGraphics: null,
  foregroundGraphics: null,
  beforeElements: null,
  afterElements: null,
  useSpans: false,
  canvasRendering: false,
  width: 600,
  height: 400,
  annotationSettings: {},
  annotations: [],
  legendSettings: null,
  canvasPostProcess: 'chunkClose',
  axes: [],
  renderPipeline: {}
};

Frame.propTypes = {
  name: string,
  title: object,
  className: string,
  data: array,
  frameKey: string,
  useSpans: bool,
  canvasRendering: bool,
  width: number,
  height: number,
  margin: object,
  axes: arrayOf(node),
  adjustedPosition: array,
  adjustedSize: array,
  beforeElements: object,
  backgroundGraphics: object,
  axesTickLines: node,
  additionalDefs: array,
  foregroundGraphics: object,
  annotationSettings: object,
  annotations: arrayOf(object),
  hoverAnnotation: oneOfType([bool, object, array, func]),
  legendSettings: object,
  afterElements: object,
  canvasPostProcess: oneOfType([string, func]),
  renderPipeline: object,
  defaultSVGRule: func,
  defaultHTMLRule: func,
  projectedCoordinateNames: object,
  interaction: object,
  interactionOverflow: bool,
  customClickBehavior: func,
  customHoverBehavior: func,
  customDoubleClickBehavior: func,
  points: array,
  showLinePoints: bool,
  overlay: array,
  columns: object,
  rScale: func,
  projection: string,
  disableCanvasInteraction: bool
};

export default Frame;
