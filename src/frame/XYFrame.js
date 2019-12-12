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
  getFrameScopeExtent,
  getAdjustedPositionSize,
  toMarginGraphic,
  toPipeline
} from './utils';
import toAxes from '../axis/toAxes';
import renderAnnotations from '../plots/Annotation/renderAnnotations';
import HTMLTooltipAnnotation from '../plots/Annotation/widgets/HTMLTooltipAnnotation';

const isPlot = type =>
  ['Hexbin', 'Contour', 'Heatmap', 'Line', 'Scatter', 'Trendline'].includes(
    type
  );

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
    children,
    // interactions
    hoverAnnotation,
    interaction,
    customClickBehavior,
    customHoverBehavior,
    customDoubleClickBehavior,
    overlay,
    columns,
    interactionOverflow,
    disableCanvasInteraction,
    //tooltip
    tooltipContent,
    xScaleType,
    yScaleType
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

  // assign key
  const idMap = {};
  const plotChildren = React.Children.toArray(children)
    .filter(d => isPlot(d.type.name))
    .map(d => {
      const baseKey = d.type.name;
      if (!d.key) {
        if (idMap[baseKey] !== undefined && idMap[baseKey] !== null) {
          d.key = baseKey + '-' + idMap[baseKey];
          idMap[baseKey]++;
        } else {
          d.key = baseKey + '-' + 0;
          idMap[baseKey] = 0;
        }
      }

      return d;
    });

  const frameScopeExtent = getFrameScopeExtent(plotChildren);
  const xRange = [0, adjustedSize[0]];
  const yRange = [adjustedSize[1], 0];

  const frameXScale = xScaleType()
    .domain(frameScopeExtent.xExtent)
    .range(xRange);
  const frameYScale = yScaleType()
    .domain(frameScopeExtent.yExtent)
    .range(yRange);

  // canvasPipeline
  const { canvasPipeline, svgPipeline, xyPoints } = plotChildren
    .map((d, i) =>
      toPipeline({
        ...d.props,
        frameXScale,
        frameYScale,
        margin,
        adjustedSize,
        size
      })
    )
    .reduce(
      (acc, cur) => {
        acc.canvasPipeline = acc.canvasPipeline.concat(cur.canvasPipe);
        acc.svgPipeline = acc.svgPipeline.concat(cur.svgPipe);
        acc.xyPoints = acc.xyPoints.concat(cur.xyPoints);

        return acc;
      },
      { canvasPipeline: [], svgPipeline: [], xyPoints: [] }
    );

  const screenCoordinates = plotChildren
    .map(d =>
      d.props.data.map(e => ({
        ...e,
        x: d.props.xAccessor(e),
        y: d.props.yAccessor(e),
        screenCoordinates: [
          frameXScale(d.props.xAccessor(e)),
          frameYScale(d.props.yAccessor(e))
        ],
        key: d.key
      }))
    )
    .reduce((acc, cur) => {
      acc = [...acc, ...cur];
      return acc;
    }, []);

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

  // axisPipeline
  const axesDefs = React.Children.toArray(children)
    .filter(d => d.type.name === 'XAxis' || d.type.name === 'YAxis')
    .map(d => d.props);

  const { axes, axesTickLines } = toAxes({
    axesDefs,
    margin,
    adjustedSize,
    xScale: frameXScale,
    yScale: frameYScale,
    xyPoints
  });

  const htmlAnnotations = tooltipContent
    ? screenCoordinates
        .filter(e => {
          if (voronoiHover) {
            const hoverObj =
              Array.isArray(voronoiHover) && voronoiHover.length > 0
                ? voronoiHover[0]
                : Object.assign({}, voronoiHover);

            if (hoverObj.hasOwnProperty('x') && hoverObj.hasOwnProperty('y')) {
              if (typeof hoverObj.x.getMonth === 'function') {
                // is date
                return (
                  hoverObj.x.toISOString() === e.x.toISOString() &&
                  hoverObj.y === e.y
                );
              } else {
                return hoverObj.x === e.x && hoverObj.y === e.y;
              }
            } else {
              return false;
            }
          }

          return false;
        })
        .map((d, i) => {
          const _data = {
            ...d,
            x: frameXScale(d.x),
            y: frameYScale(d.y)
          };

          return (
            <HTMLTooltipAnnotation
              tooltipContent={tooltipContent}
              tooltipContentArgs={_data}
              i={i}
              d={_data}
              useSpans={useSpans}
            />
          );
        })
    : [];

  const accessors = plotChildren.map(d => ({
    xAccessor: d.props.xAccessor,
    yAccessor: d.props.yAccessor
  }));

  const svgAnnotations = renderAnnotations(annotations, {
    xScale: frameXScale,
    yScale: frameYScale,
    frontCanvas,
    adjustedSize,
    adjustedPosition,
    size,
    margin,
    accessors
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
    />
  );

  return (
    <SpanOrDiv span={useSpans} className={`${className} frame ${name}`}>
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
              voronoiHover={setVoronoiHover}
            >
              {svgPipeline}
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
          data={screenCoordinates}
          enabled={true}
          useCanvas={canvasPipeline.length > 0}
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
  matte: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.func,
    PropTypes.object
  ]),
  beforeElements: PropTypes.object,
  afterElements: PropTypes.object,
  backgroundGraphics: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  foregroundGraphics: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  canvasPostProcess: PropTypes.string,
  hoverAnnotation: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.bool
  ]),
  interaction: PropTypes.func,
  customClickBehavior: PropTypes.func,
  customHoverBehavior: PropTypes.func,
  customDoubleClickBehavior: PropTypes.func,
  overlay: PropTypes.object,
  columns: PropTypes.object,
  interactionOverflow: PropTypes.func,
  disableCanvasInteraction: PropTypes.func,
  tooltipContent: PropTypes.func,
  xScaleType: PropTypes.func,
  yScaleType: PropTypes.func
};

XYFrame.defaultProps = {
  width: 800,
  height: 600,
  name: '',
  className: '',
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
  title: { title: '', orient: 'top' },
  useSpans: false,
  beforeElements: null,
  afterElements: null,
  backgroundGraphics: null,
  foregroundGraphics: null,
  additionalDefs: null,
  canvasPostProcess: 'chunkClose',
  xScaleType: scaleLinear,
  yScaleType: scaleLinear
};

export default XYFrame;
