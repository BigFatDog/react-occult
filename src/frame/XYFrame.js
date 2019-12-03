import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';

import FilterDefs from '../widgets/FilterDefs';
import SpanOrDiv from '../widgets/SpanOrDiv';
import VisualizationLayer from '../layers/VisualizationLayer';
import AnnotationLayer from '../layers/AnnotationLayer';
import InteractionLayer from '../layers/InteractionLayer';

import {
  generateFrameTitle,
  getExtent,
  getAdjustedPositionSize,
  toMarginGraphic,
  toPipeline
} from './utils';
import toAxes from '../axis/toAxes';
import renderAnnotations from '../plots/Annotation/renderAnnotations';
import TooltipPositioner from "../layers/InteractionLayer/TooltipPositioner";
import HTMLTooltipAnnotation from "../plots/Annotation/widgets/HTMLTooltipAnnotation";

const isPlot = type => ['Hexbin', 'Contour', 'Heatmap', 'Line'].includes(type);

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
    children,
    hoverAnnotation,
    interaction,
    customClickBehavior,
    customHoverBehavior,
    customDoubleClickBehavior,
    overlay,
    columns,
    interactionOverflow,
    disableCanvasInteraction,
    tooltipContent
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

  const allData = React.Children.toArray(children)
    .filter(d => isPlot(d.type.name))
    .map(d =>
      d.props.data.map(e => ({
        ...e,
        x: d.props.xAccessor(e),
        y: d.props.yAccessor(e)
      }))
    )
    .reduce((acc, cur) => {
      acc = [...acc, ...cur];
      return acc;
    }, []);

  // frame scope scales
  const frameScopeExtent = React.Children.toArray(children)
    .filter(d => isPlot(d.type.name))
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
        if (!acc.xExtent || !acc.yExtent) {
          acc.xExtent = cur.finalXExtent.slice();
          acc.yExtent = cur.finalYExtent.slice();
          return acc;
        } else {
          acc.xExtent[0] = Math.min(acc.xExtent[0], cur.finalXExtent[0]);
          acc.xExtent[1] = Math.max(acc.xExtent[1], cur.finalXExtent[1]);
          acc.yExtent[0] = Math.min(acc.yExtent[0], cur.finalYExtent[0]);
          acc.yExtent[1] = Math.max(acc.yExtent[1], cur.finalYExtent[1]);
          return acc;
        }
      },
      { xExtent: null, yExtent: null }
    );

  const xDomain = [0, adjustedSize[0]];
  const yDomain = [adjustedSize[1], 0];

  const frameXScale = scaleLinear()
    .domain(frameScopeExtent.xExtent)
    .range(xDomain);
  const frameYScale = scaleLinear()
    .domain(frameScopeExtent.yExtent)
    .range(yDomain);

  // axisPipeline
  const axesDefs = React.Children.toArray(children)
    .filter(d => d.type.name === 'XAxis' || d.type.name === 'YAxis')
    .map(d => d.props);

  const { axes, axesTickLines } = toAxes({
    axesDefs,
    margin,
    adjustedSize,
    xScale: frameXScale,
    yScale: frameYScale
  });

  // canvasPipeline
  const { canvasPipeline, svgPipeline } = React.Children.toArray(children)
    .filter(d => isPlot(d.type.name))
    .map(d => {
      return toPipeline({
        ...d.props,
        frameXScale,
        frameYScale,
        frontCanvas,
        margin,
        adjustedSize,
        size
      });
    })
    .reduce(
      (acc, cur) => {
        acc.canvasPipeline = acc.canvasPipeline.concat(cur.canvasPipe);
        acc.svgPipeline = acc.svgPipeline.concat(cur.svgPipe);
        return acc;
      },
      { canvasPipeline: [], svgPipeline: [] }
    );

  const annotations = React.Children.toArray(children)
    .filter(d => d.type.name === 'Annotation')
    .map(d => d.props);


  if (voronoiHover) {
    if (Array.isArray(voronoiHover)) {
      annotations.push(...voronoiHover);
    } else {
      annotations.push(voronoiHover);
    }
  }

  const tooltipAllData = allData
      .filter(e => {
        if (voronoiHover && voronoiHover.length === 1) {
          const v = voronoiHover[0];
          return v.x === e.x && v.y === e.y;
        }

        return false;
      })
      .map(d => ({
        ...d,
        x: frameXScale(d.x),
        y: frameYScale(d.y)
      }));

  const htmlAnnotations = tooltipAllData.map((d, i) => (<HTMLTooltipAnnotation
      tooltipContent={tooltipContent}
      tooltipContentArgs={d}
      i={i}
      d={d}
      useSpans={useSpans}
  />));

  const svgAnnotations = renderAnnotations(annotations, {
    xScale: frameXScale,
    yScale: frameYScale,
    frontCanvas,
    adjustedSize,
    adjustedPosition,
    size,
    margin
  });

  const annotationLayer = annotations && annotations.length > 0 && (
    <AnnotationLayer
      voronoiHover={setVoronoiHover}
      htmlAnnotations={htmlAnnotations}
      svgAnnotations={svgAnnotations}
      margin={margin}
      useSpans={useSpans}
      size={adjustedSize}
      position={[
        adjustedPosition[0] + margin.left,
        adjustedPosition[1] + margin.top
      ]}
    >
    </AnnotationLayer>
  );

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
              matte={marginGraphic}
              key={frameKey || name}
              additionalDefs={additionalDefs}
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
                .filter(d => isPlot(d.type.name))
                .map(d =>
                  React.cloneElement(d, {
                    frameXScale,
                    frameYScale,
                    frontCanvas,
                    adjustedSize,
                    size,
                    margin
                  })
                )}
              {axes && (
                <g key="visualization-axis-labels" className="axis axis-labels">
                  {axes}
                </g>
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

        <InteractionLayer
          useSpans={useSpans}
          hoverAnnotation={hoverAnnotation}
          interaction={interaction}
          voronoiHover={setVoronoiHover}
          customClickBehavior={customClickBehavior}
          customHoverBehavior={customHoverBehavior}
          customDoubleClickBehavior={customDoubleClickBehavior}
          position={adjustedPosition}
          margin={margin}
          size={adjustedSize}
          svgSize={size}
          xScale={frameXScale}
          yScale={frameYScale}
          data={allData}
          enabled={true}
          overlay={overlay}
          oColumns={columns}
          interactionOverflow={interactionOverflow}
          disableCanvasInteraction={disableCanvasInteraction}
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

XYFrame.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
  frameKey: PropTypes.string,
  renderKey: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  useSpans: PropTypes.bool,
  additionalDefs: PropTypes.array,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  matte: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  beforeElements: PropTypes.object,
  afterElements: PropTypes.object,
  backgroundGraphics: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  foregroundGraphics: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  canvasPostProcess: PropTypes.string,
  renderOrder: PropTypes.array,
  hoverAnnotation: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  interaction: PropTypes.func,
  customClickBehavior: PropTypes.func,
  customHoverBehavior: PropTypes.func,
  customDoubleClickBehavior: PropTypes.func,
  overlay: PropTypes.object,
  columns: PropTypes.object,
  interactionOverflow: PropTypes.func,
  disableCanvasInteraction: PropTypes.func,
  tooltipContent: PropTypes.func
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
