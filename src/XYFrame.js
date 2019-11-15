import React, { useEffect, useRef, useState } from 'react';
import {
  object,
  string,
  array,
  oneOfType,
  bool,
  node,
  number
} from 'prop-types';
import { scaleLinear } from 'd3-scale';

import FilterDefs from './widgets/FilterDefs';
import SpanOrDiv from './widgets/SpanOrDiv';
import VisualizationLayer from './layers/VisualizationLayer';
import {
  generateFrameTitle,
  getExtent,
  getAdjustedPositionSize,
  toMarginGraphic,
  toPipeline
} from './frameUtils';

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

const XYFrame = props => {
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
    width,
    height,
    name,
    className,
    frameKey,
    renderKey,
    title,
    useSpans,
    additionalDefs,
    margin: baseMargin,
    matte,
    beforeElements,
    afterElements,
    backgroundGraphics,
    foregroundGraphics,
    canvasPostProcess,
    renderOrder,
    children
  } = props;

  const size = [width, height];
  const devicePixelRatio = window.devicePixelRatio || 1;

  const finalBackgroundGraphics =
    typeof backgroundGraphics === 'function'
      ? backgroundGraphics({ size, margin })
      : backgroundGraphics;

  const finalForegroundGraphics =
    typeof foregroundGraphics === 'function'
      ? foregroundGraphics({ size, margin })
      : foregroundGraphics;

  const userTitle =
    typeof title === 'object' && !React.isValidElement(title) && title !== null
      ? title
      : { title, orient: 'top' };
  const generatedTitle = generateFrameTitle({
    title: userTitle,
    size
  });

  const margin =
    typeof baseMargin !== 'object'
      ? {
          top: baseMargin,
          bottom: baseMargin,
          left: baseMargin,
          right: baseMargin
        }
      : Object.assign({ top: 0, bottom: 0, left: 0, right: 0 }, baseMargin);

  //todo: remove
  const marginGraphic = toMarginGraphic({ matte, size, margin, name });

  const { adjustedPosition, adjustedSize } = getAdjustedPositionSize({
    size: [width, height],
    margin
  });

  // frame scope scales
  const frameScopeExtent = React.Children.toArray(children)
    .filter(d => d.type.name === 'Contour')
    .map(d => {
      return getExtent({
        data: d.props.data,
        xAccessor: d.props.xAccessor,
        yAccessor: d.props.yAccessor,
        xExtent: d.props.xExtent,
        yExtent: d.props.yExtent
      });
    })
    .reduce(
      (acc, cur) => {
        acc.xExtent[0] = Math.min(acc.xExtent[0], cur.finalXExtent[0]);
        acc.xExtent[1] = Math.max(acc.xExtent[1], cur.finalXExtent[1]);
        acc.yExtent[0] = Math.min(acc.yExtent[0], cur.finalYExtent[0]);
        acc.yExtent[1] = Math.max(acc.yExtent[1], cur.finalYExtent[1]);
        return acc;
      },
      { xExtent: [0, 0], yExtent: [0, 0] }
    );

  const xDomain = [0, adjustedSize[0]];
  const yDomain = [adjustedSize[1], 0];

  const frameXScale = scaleLinear()
    .domain(frameScopeExtent.xExtent)
    .range(xDomain);
  const frameYScale = scaleLinear()
    .domain(frameScopeExtent.yExtent)
    .range(yDomain);

  // canvasPipeline
  const canvasPipeline = React.Children.toArray(children)
    .filter(d => {
      return d.props.useCanvas === true;
    })
    .map(d => {
      return toPipeline({
        ...d.props,
        frameXScale,
        frameYScale,
        frontCanvas
      });
    })
    .reduce((acc, cur) => {
      return acc.concat(cur.areaPipe);
    }, []);

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
          {backgroundGraphics && (
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
              {/*{axesTickLines && (*/}
              {/*  <g*/}
              {/*    transform={`translate(${margin.left},${margin.top})`}*/}
              {/*    key="visualization-tick-lines"*/}
              {/*    className={'axis axis-tick-lines'}*/}
              {/*    aria-hidden={true}*/}
              {/*  >*/}
              {/*    {axesTickLines}*/}
              {/*  </g>*/}
              {/*)}*/}
            </svg>
          )}
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
          <svg
            className="visualization-layer"
            style={{ position: 'absolute' }}
            width={width}
            height={height}
          >
            <FilterDefs
            matte
            key={matte && (frameKey || name)}
            additionalDefs
            />
            <VisualizationLayer
              title={generatedTitle}
              frameKey={frameKey}
              width={width}
              height={height}
              size={adjustedSize}
              position={adjustedPosition}
              frontCanvas={frontCanvas}
              backCanvas={backCanvas}
              matte={marginGraphic}
              margin={margin}
              canvasPostProcess={canvasPostProcess}
              canvasPipeline={canvasPipeline}
              renderOrder={renderOrder}
              voronoiHover={setVoronoiHover}
            >
              {React.Children.toArray(children)
                .filter(d => {
                  return (
                    d.type.name === 'Contour' && d.props.useCanvas === false
                  );
                })
                .map(d =>
                  React.cloneElement(d, {
                    frameXScale,
                    frameYScale,
                    frontCanvas
                  })
                )}
            </VisualizationLayer>
            {generatedTitle && <g className="frame-title">{generatedTitle}</g>}
            {foregroundGraphics && (
              <g aria-hidden={true} className="foreground-graphics">
                {finalForegroundGraphics}
              </g>
            )}
          </svg>
        </SpanOrDiv>

        {/* interactionLayer */}
        {/* annotationLayer */}
        {afterElements && (
          <SpanOrDiv span={useSpans} className={`${name} frame-after-elements`}>
            {afterElements}
          </SpanOrDiv>
        )}
      </SpanOrDiv>
    </SpanOrDiv>
  );
};

XYFrame.propTypes = {
  width: number,
  height: number,
  name: string,
  className: string,
  frameKey: string,
  renderKey: string,
  title: oneOfType([string, object]),
  useSpans: bool,
  additionalDefs: array,
  margin: oneOfType([number, object]),
  matte: oneOfType([bool, node]),
  beforeElements: object,
  afterElements: object,
  backgroundGraphics: object,
  foregroundGraphics: object,
  canvasPostProcess: string,
  renderOrder: array
};

XYFrame.defaultProps = {
  width: 800,
  height: 600,
  name: '',
  className: '',
  frameKey: '',
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
  title: { title: '', orient: 'top' },
  useSpans: false,
  beforeElements: null,
  afterElements: null,
  backgroundGraphics: null,
  foregroundGraphics: null,
  additionalDefs: null,
  canvasPostProcess: 'chunkClose',
  renderOrder: ['areas', 'lines', 'points']
};

export default XYFrame;
