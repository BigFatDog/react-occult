import React, { useEffect, useRef, useState } from 'react';
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
import filterDefs from '../utils/filterDefs';
import generateFrameTitle from '../svg/frameFunctions/generateFrameTitle';
import SpanOrDiv from '../utils/SpanOrDiv';
import VisualizationLayer from '../layers/VisualizationLayer/VisualizationLayer';

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
    margin,
    matte,
    beforeElements,
    afterElements,
    backgroundGraphics,
    foregroundGraphics
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
              {/* axisTicklines */}
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
            {/* visualization layer */}
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
  foregroundGraphics: object
};

XYFrame.defaultProps = {
  width: 800,
  height: 600,
  name: '',
  className: '',
  frameKey: '',
  title: { title: '', orient: 'top' },
  useSpans: false,
  beforeElements: null,
  afterElements: null,
  backgroundGraphics: null,
  foregroundGraphics: null,
  additionalDefs: null,
  margin: { top: 0, bottom: 0, left: 0, right: 0 }
};

export default XYFrame;
