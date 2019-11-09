import React, { useState } from 'react';
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

import { curveCatmullRom } from 'd3-shape';
import { scaleLinear } from 'd3-scale';

import Frame from './Frame';
import {
  stringToFn,
  stringToArrayFn,
  objectifyType,
  adjustedPositionSize
} from './data/dataFunctions';
import { projectCoordinates } from './data/projectCoordinates';
import calculateMargin from './svg/frameFunctions/calculateMargin';
import createAreas from './svg/behaviors/createArea';
import createLines from './svg/behaviors/createLines';
import createPoints from './svg/behaviors/createPoints';
import { axisPieces, axisLines } from './layers/VisualizationLayer/axisMarks';
import Axis from './layers/VisualizationLayer/Axis';
import defaultXYSVGRule from './utils/defaultXYSVGRule';
import defaultXYHTMLRule from './utils/defaultXYHTMLRule';

import {
  projectedX,
  projectedY,
  projectedYMiddle,
  projectedYTop,
  projectedYBottom,
  projectedXMiddle,
  projectedXTop,
  projectedXBottom
} from './constants/coordinateNames';

const naturalLanguageLineType = {
  line: { items: 'line', chart: 'line chart' },
  area: { items: 'area', chart: 'area chart' },
  cumulative: { items: 'line', chart: 'cumulative chart' },
  'cumulative-reverse': { items: 'line', chart: 'cumulative chart' },
  linepercent: { items: 'line', chart: 'line chart' },
  stackedarea: { items: 'stacked area', chart: 'stacked area chart' },
  'stackedarea-invert': { items: 'stacked area', chart: 'stacked area chart' },
  stackedpercent: { items: 'stacked area', chart: 'stacked area chart' },
  'stackedpercent-invert': {
    items: 'stacked area',
    chart: 'stacked area chart'
  },
  bumparea: { items: 'ranked area', chart: 'ranked area chart' },
  'bumparea-invert': { items: 'ranked area', chart: 'ranked area chart' },
  bumpline: { items: 'ranked line', chart: 'ranked line chart' },
  difference: {
    items: 'line',
    chart: 'difference chart'
  }
};

const projectedCoordinateNames = {
  y: projectedY,
  x: projectedX,
  yMiddle: projectedYMiddle,
  yTop: projectedYTop,
  yBottom: projectedYBottom,
  xMiddle: projectedXMiddle,
  xTop: projectedXTop,
  xBottom: projectedXBottom
};

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const CartesianFrame = props => {
  const [renderPipeline, setRenderPipeline] = useState({});

  const {
    /** general */
    name,
    className,
    frameKey,
    renderKey,
    useSpans,
    width,
    height,
    margin: baseMargin,

    /** scale and accessor */
    xScale,
    yScale,
    xAccessor,
    yAccessor,
    lineDataAccessor,
    areaDataAccessor,

    xExtent: baseXExtent,
    yExtent: baseYExtent,
    invertX,
    invertY,

    // lines
    lines = [],
    lineType,
    lineStyle,
    lineClass,
    lineCurve,
    lineIDAccessor,
    showLinePoints,
    lineRenderMode,
    canvasLines,
    customLineMark,

    //points
    points = [],
    pointStyle,
    pointClass,
    pointRadius,
    pointRenderMode,
    canvasPoints,
    customPointMark,

    /** summary */
    summaries = [],
    summaryStyle,
    summaryType,
    summaryClass,
    canvasSummary,
    showSummaryPoints,
    customSummaryMarks,
    summaryRenderMode,

    /** areas */
    areas = summaries,
    canvasArea = canvasSummary,
    areaType = summaryType || { type: 'basic' },
    areaStyle = summaryStyle,

    /** annotation */
    annotationSettings,
    annotations,
    /** Decoration */
    beforeElements,
    afterElements,
    backgroundGraphics,
    foregroundGraphics,
    canvasPostProcess,
    additionalDefs,
    renderOrder,

    /** axes */
    axes: userAxes,
    baseMarkProps,

    /** legend and title */
    title,
    legendSettings,

    /** interaction */
    interaction,
    useSummariesAsInteractionLayer,
    useAreasAsInteractionLayer = useSummariesAsInteractionLayer,
    customHoverBehavior,
    customClickBehavior,
    customDoubleClickBehavior,
    hoverAnnotation,

    /** Miscellaneous */
    matte,
    defined
  } = props;

  const annotatedSettings = {
    xAccessor: stringToArrayFn(xAccessor, d => d[0]),
    yAccessor: stringToArrayFn(yAccessor, d => d[1]),
    areaDataAccessor: stringToArrayFn(areaDataAccessor, d =>
        Array.isArray(d) ? d : d.coordinates
    ),
    lineDataAccessor: stringToArrayFn(lineDataAccessor, d =>
        Array.isArray(d) ? d : d.coordinates
    ),
    lineType: objectifyType(lineType),
    areaType: objectifyType(areaType),
    lineIDAccessor: stringToFn(lineIDAccessor, l => l.occultLineID),
    areas:
        !areas || (Array.isArray(areas) && areas.length === 0)
            ? undefined
            : !Array.isArray(areas)
            ? [areas]
            : !areaDataAccessor && !areas[0].coordinates
                ? [{ coordinates: areas }]
                : areas,
    lines:
        !lines || (Array.isArray(lines) && lines.length === 0)
            ? undefined
            : !Array.isArray(lines)
            ? [lines]
            : !lineDataAccessor && !lines[0].coordinates
                ? [{ coordinates: lines }]
                : lines,
    title:
        typeof title === 'object' &&
        !React.isValidElement(title) &&
        title !== null
            ? title
            : { title, orient: 'top' },
    xExtent: (baseXExtent && baseXExtent.extent) || baseXExtent,
    yExtent: (baseYExtent && baseYExtent.extent) || baseYExtent
  };

  annotatedSettings.lineType.simpleLine =
      annotatedSettings.lineType.type === 'line' &&
      !annotatedSettings.lineType.y1 &&
      annotatedSettings.lineType.simpleLine !== false;

  if (annotatedSettings.lineType.type === 'area') {
    // $FlowFixMe
    annotatedSettings.lineType.y1 = () => 0;
  }

  const summaryStyleFn = stringToFn(
      summaryStyle,
      emptyObjectReturnFunction,
      true
  );
  const summaryClassFn = stringToFn(
      summaryClass,
      emptyStringReturnFunction,
      true
  );
  const summaryRenderModeFn = stringToFn(summaryRenderMode, undefined, true);

  const {
    xExtent,
    yExtent,
    projectedLines,
    projectedPoints,
    projectedSummaries,
    fullDataset,
    calculatedXExtent,
    calculatedYExtent
  } = projectCoordinates({
    baseMarkProps,
    lineDataAccessor: annotatedSettings.lineDataAccessor,
    areaDataAccessor: annotatedSettings.areaDataAccessor,
    xAccessor: annotatedSettings.xAccessor,
    yAccessor: annotatedSettings.yAccessor,
    lineType: annotatedSettings.lineType,
    summaryType: annotatedSettings.areaType,
    summaries: annotatedSettings.areas,
    summaryStyleFn,
    summaryClassFn,
    summaryRenderModeFn,
    points,
    lines: annotatedSettings.lines,
    showLinePoints,
    showSummaryPoints,
    xExtent: baseXExtent,
    yExtent: baseYExtent,
    invertX,
    invertY,
    adjustedSize: [width, height],
    xScaleType: xScale,
    yScaleType: yScale,
    defined,
    chartSize: [width, height]
  });

  const margin = calculateMargin({
    margin: baseMargin,
    userAxes,
    title: annotatedSettings.title
  });
  const { adjustedPosition, adjustedSize } = adjustedPositionSize({
    size: [width, height],
    margin
  });

  const xDomain = [0, adjustedSize[0]];
  const yDomain = [adjustedSize[1], 0];

  if (xScale.domain) {
    xScale.domain(xExtent);
  }
  if (yScale.domain) {
    yScale.domain(yExtent);
  }
  xScale.range(xDomain);
  yScale.range(yDomain);

  const areaAnnotations = [];

  if (annotatedSettings.areaType.label && projectedSummaries) {
    projectedSummaries.forEach((d, i) => {
      if (d.bounds) {
        const bounds = Array.isArray(d.bounds) ? d.bounds : [d.bounds];
        bounds.forEach(labelBounds => {
          const label =
              typeof annotatedSettings.areaType.label === 'function'
                  ? annotatedSettings.areaType.label(d)
                  : annotatedSettings.areaType.label;
          if (label && label !== null) {
            const labelPosition = label.position || 'center';
            const labelCenter = [
              xScale(labelBounds[labelPosition][0]),
              yScale(labelBounds[labelPosition][1])
            ] || [xScale(d._xyfCoordinates[0]), yScale(d._xyfCoordinates[1])];
            const labelContent = label.content || (p => p.value || p.id || i);

            areaAnnotations.push({
              x: labelCenter[0],
              y: labelCenter[1],
              dx: label.dx,
              dy: label.dy,
              className: label.className,
              type: label.type || AnnotationCallout,
              note: label.note || { title: labelContent(d) },
              subject: label.subject || { text: labelContent(d) },
              connector: label.connector
            });
          }
        });
      }
    });
  }

  const lineAriaLabel =
      annotatedSettings.lineType.type !== undefined &&
      typeof annotatedSettings.lineType.type !== 'function' &&
      naturalLanguageLineType[annotatedSettings.lineType.type];

  const _renderPipeline = {
    lines: {
      accessibleTransform: (data, i) => ({
        ...data[i].data[data[i].data.length - 1],
        type: 'frame-hover'
      }),
      data: projectedLines,
      styleFn: stringToFn(lineStyle, emptyObjectReturnFunction, true),
      classFn: stringToFn(lineClass, emptyStringReturnFunction, true),
      renderMode: stringToFn(lineRenderMode, undefined, true),
      canvasRender: stringToFn(canvasLines, undefined, true),
      customMark: customLineMark,
      lineCurve,
      type: annotatedSettings.lineType,
      defined: defined,
      renderKeyFn: annotatedSettings.renderKeyFn,
      ariaLabel: lineAriaLabel,
      axesData: userAxes,
      behavior: createLines
    },
    areas: {
      accessibleTransform: (data, i) => ({ ...data[i], type: 'frame-hover' }),
      data: projectedSummaries,
      styleFn: stringToFn(summaryStyle, emptyObjectReturnFunction, true),
      classFn: stringToFn(summaryClass, emptyStringReturnFunction, true),
      renderMode: stringToFn(summaryRenderMode, undefined, true),
      canvasRender: stringToFn(canvasSummary, undefined, true),
      customMark: customSummaryMarks,
      type: null,
      renderKeyFn: stringToFn(renderKey, (d, i) => `area-${i}`, true),
      behavior: createAreas
    },
    points: {
      accessibleTransform: (data, i) => ({
        type: 'frame-hover',
        ...(data[i].data || data[i])
      }),
      data: projectedPoints,
      styleFn: stringToFn(pointStyle, emptyObjectReturnFunction, true),
      classFn: stringToFn(pointClass, emptyStringReturnFunction, true),
      renderMode: stringToFn(pointRenderMode, undefined, true),
      canvasRender: stringToFn(canvasPoints, undefined, true),
      customMark: customPointMark,
      renderKeyFn: stringToFn(renderKey, (d, i) => `point-${i}`, true),
      behavior: createPoints
    }
  };

  let overlay = undefined;
  if (useAreasAsInteractionLayer && projectedSummaries) {
    overlay = createSummaries({
      xScale,
      yScale,
      data: projectedSummaries
    }).map((m, i) => ({
      ...m.props,
      style: { fillOpacity: 0 },
      overlayData: projectedSummaries && projectedSummaries[i] // luckily createSummaries is a map fn
    }));
  }

  let axes = [];
  const axesTickLines = [];
  const existingBaselines = {};

  if (userAxes) {
    axes = userAxes.map((d, i) => {
      let axisClassname = d.className || '';
      axisClassname += ' axis';
      let axisScale = yScale;
      if (existingBaselines[d.orient]) {
        d.baseline = d.baseline || false;
      }
      existingBaselines[d.orient] = true;
      if (d.orient === 'top' || d.orient === 'bottom') {
        axisClassname += ' x';
        axisScale = xScale;
      } else {
        axisClassname += ' y';
      }
      axisClassname += ` ${d.orient}`;

      let tickValues;
      if (d.tickValues && Array.isArray(d.tickValues)) {
        tickValues = d.tickValues;
      } else if (d.tickValues instanceof Function) {
        //otherwise assume a function
        tickValues = d.tickValues(fullDataset, currentProps.size, axisScale);
      }
      const axisSize = [adjustedSize[0], adjustedSize[1]];

      const axisParts = axisPieces({
        padding: d.padding,
        tickValues,
        scale: axisScale,
        ticks: d.ticks,
        orient: d.orient,
        size: axisSize,
        footer: d.footer,
        tickSize: d.tickSize
      });
      const tickLineGroup = (
          <g key={`axes-tick-lines-${i}`} className={`axis ${axisClassname}`}>
            {axisLines({
              axisParts,
              orient: d.orient,
              tickLineGenerator: d.tickLineGenerator,
              baseMarkProps,
              className: axisClassname
            })}
          </g>
      );
      axesTickLines.push(tickLineGroup);
      return (
          <Axis
              label={d.label}
              axisParts={axisParts}
              key={d.key || `axis-${i}`}
              orient={d.orient}
              size={axisSize}
              margin={margin}
              ticks={d.ticks}
              tickSize={d.tickSize}
              tickFormat={d.tickFormat}
              tickValues={tickValues}
              scale={axisScale}
              className={axisClassname}
              padding={d.padding}
              rotate={d.rotate}
              annotationFunction={d.axisAnnotationFunction}
              glyphFunction={d.glyphFunction}
              baseline={d.baseline}
              dynamicLabelPosition={d.dynamicLabelPosition}
              center={d.center}
              xyPoints={fullDataset}
              marginalSummaryType={d.marginalSummaryType}
          />
      );
    });
  }

  return (
      <Frame
          name="CartesianFrame"
          renderPipeline={_renderPipeline}
          adjustedPosition={adjustedPosition}
          width={width}
          height={height}
          adjustedSize={adjustedSize}
          xScale={xScale}
          yScale={yScale}
          axes={axes}
          axesTickLines={axesTickLines}
          title={annotatedSettings.title}
          matte={matte}
          className={className}
          useSpans={useSpans}
          frameKey={frameKey}
          additionalDefs={additionalDefs}
          annotations={
            areaAnnotations.length > 0
                ? [...annotations, ...areaAnnotations]
                : annotations
          }
          annotationSettings={annotationSettings}
          legendSettings={legendSettings}
          data={fullDataset}
          margin={margin}
          backgroundGraphics={backgroundGraphics}
          foregroundGraphics={foregroundGraphics}
          beforeElements={beforeElements}
          afterElements={afterElements}
          canvasPostProcess={canvasPostProcess}
          canvasRendering={!!(canvasArea || canvasPoints || canvasLines)}
          renderOrder={renderOrder}
          defaultSVGRule={defaultXYSVGRule({
            props,
            annotatedSettings,
            renderPipeline: _renderPipeline,
            adjustedPosition,
            adjustedSize
          })}
          defaultHTMLRule={defaultXYHTMLRule({
            props,
            annotatedSettings,
            adjustedPosition,
            adjustedSize
          })}
          projectedCoordinateNames={projectedCoordinateNames}
          overlay={overlay}
          interaction={interaction}
          projectedYMiddle={projectedYMiddle}
          customClickBehavior={customClickBehavior}
          customHoverBehavior={customHoverBehavior}
          customDoubleClickBehavior={customDoubleClickBehavior}
          points={fullDataset}
          hoverAnnotation={hoverAnnotation}
      />
  );
};

CartesianFrame.defaultProps = {
  name: '',
  title: { title: '', orient: 'top' },
  className: '',
  frameKey: '',
  useSpans: false,
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
  additionalDefs: null,
  backgroundGraphics: null,
  foregroundGraphics: null,
  beforeElements: null,
  afterElements: null,
  width: 600,
  height: 400,
  annotationSettings: {},
  annotations: [],
  legendSettings: null,
  canvasPostProcess: 'chunkClose',
  lineCurve: curveCatmullRom.alpha(0.5),
  lineType: 'line',
  showLinePoints: true,
  pointRadius: 2,
  xScale: scaleLinear(),
  yScale: scaleLinear(),
  areaDataAccessor: d => d.coordinates,
  lineDataAccessor: d => d.coordinates,
  pointDataAccessor: d => d.coordinates,
  renderOrder: ['areas', 'lines', 'points']
};

CartesianFrame.propTypes = {
  /** general */
  name: string,
  className: string,
  frameKey: string,
  renderKey: string,
  useSpans: bool,
  width: number,
  height: number,
  margin: oneOfType([number, object]),

  /** scale and accessor */
  xScale: func,
  yScale: func,
  xAccessor: oneOfType([string, func]),
  yAccessor: oneOfType([string, func]),
  xExtent: array,
  yExtent: array,
  invertX: bool,
  invertY: bool,

  /** lines */
  lines: array,
  lineType: oneOfType([string, object]),
  lineStyle: oneOfType([object, func]),
  lineClass: oneOfType([string, func]),
  lineCurve: func,
  lineDataAccessor: oneOfType([string, func]),
  showLinePoints: bool,
  lineRenderMode: oneOfType([string, object, func]),
  canvasLines: oneOfType([bool, func]),
  customLineMark: oneOfType([node, func]),

  /** areas */
  areas: array,
  areaType: oneOfType([string, object]),
  areaDataAccessor: oneOfType([string, func]),

  /** points */
  points: array,
  pointStyle: oneOfType([object, func]),
  pointRadius: oneOfType([number, func]),
  pointClass: oneOfType([string, func]),
  canvasPoints: oneOfType([bool, func]),
  customPointMark: oneOfType([node, func]),

  /** summary */
  summaries: oneOfType([array, object]),
  summaryStyle: oneOfType([object, func]),
  summaryClass: oneOfType([string, func]),
  summaryType: oneOfType([string, object]),
  canvasSummary: oneOfType([bool, func]),
  customSummaryMarks: oneOfType([node, func]),
  summaryRenderMode: oneOfType([string, object, func]),
  summaryDataAccessor: oneOfType([string, func]),
  showSummaryPoints: bool,

  /** annotation */
  annotationSettings: object,
  annotations: arrayOf(object),
  svgAnnotationRules: func,
  htmlAnnotationRules: func,

  /** Decoration */
  beforeElements: object,
  afterElements: object,
  backgroundGraphics: object,
  foregroundGraphics: object,
  canvasPostProcess: oneOfType([string, func]),
  additionalDefs: array,
  renderOrder: array,

  /** axes */
  axes: arrayOf(object),
  baseMarkProps: object,

  /** legend and title */
  title: oneOfType([string, object]),
  legendSettings: object,

  /** interaction */
  interaction: object,
  useAreasAsInteractionLayer: bool,
  useSummariesAsInteractionLayer: bool,
  customHoverBehavior: func,
  customClickBehavior: func,
  customDoubleClickBehavior: func,
  hoverAnnotation: oneOfType([bool, object, array, func]),

  /** Miscellaneous */
  matte: oneOfType([bool, node]),
  defined: func
};

export default CartesianFrame;
