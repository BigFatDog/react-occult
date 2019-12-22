import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import FilterDefs from '../widgets/FilterDefs';
import SpanOrDiv from '../widgets/SpanOrDiv';
import VisualizationLayer from '../layers/VisualizationLayer';
import InteractionLayer from '../layers/InteractionLayer';

import { generateFrameTitle, toMarginGraphic } from './utils';
import { BaseProps, BaseDefaultProps } from './BaseProps';
import HTMLTooltipAnnotation from '../plots/Annotation/widgets/HTMLTooltipAnnotation';
import renderAnnotations from '../plots/Annotation/renderAnnotations';
import AnnotationLayer from '../layers/AnnotationLayer';

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
    // routine
    name,
    className,
    frameKey,
    useSpans,
    matte,
    width,
    height,
    margin,
    title,
    // render as it is
    foregroundGraphics,
    backgroundGraphics,
    additionalDefs,
    beforeElements,
    afterElements,
    canvasPostProcess,
    // generated
    frameXScale,
    frameYScale,
    canvasPipeline,
    svgPipeline,
    screenCoordinates,
    xyPoints,
    adjustedPosition,
    adjustedSize,
    // interaction
    overlay,
    interactionOverflow,
    disableCanvasInteraction,
    hoverAnnotation,
    interaction,
    customClickBehavior,
    customHoverBehavior,
    customDoubleClickBehavior,
    tooltipContent,
    // children
    children,
    plotChildren,
    //todo: remove
    oLabels,
    axes,
    axesTickLines
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

  //todo: remove
  const marginGraphic = toMarginGraphic({ matte, size, margin, name });

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
    xAccessor: d.props.xAccessor || d.props.oAccessor,
    yAccessor: d.props.yAccessor || d.props.rAccessor
  }));

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

  if (props.nodeLabelAnnotations) {
    annotations.push(...props.nodeLabelAnnotations);
  }
  // todo: network

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
            {foregroundGraphics ||
              (oLabels && (
                <g aria-hidden={true} className="foreground-graphics">
                  {finalForegroundGraphics}
                  {oLabels}
                </g>
              ))}
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

Frame.propTypes = {
  ...BaseProps,
  // generated
  frameXScale: PropTypes.func,
  frameYScale: PropTypes.func,
  annotationLayer: PropTypes.node,
  canvasPipeline: PropTypes.array,
  svgPipeline: PropTypes.array,
  // todo: duplicated?
  screenCoordinates: PropTypes.array,
  xyPoints: PropTypes.array,
  adjustedPosition: PropTypes.array,
  adjustedSize: PropTypes.array,
  plotChildren: PropTypes.array,
  axes: PropTypes.array,
  axesTickLines: PropTypes.array
};

Frame.defaultProps = {
  ...BaseDefaultProps,
  adjustedPosition: [0, 0],
  annotationLayer: null,
  axes: null,
  axesTickLines: null,
  canvasPipeline: [],
  svgPipeline: [],
  screenCoordinates: []
};

export default Frame;
