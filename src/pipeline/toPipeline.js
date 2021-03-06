import { max } from 'd3-array';

import toRenderedAreas from './toRenderedAreas';
import toRenderedPoints from './toRenderedPoints';
import toRenderedLines from './toRenderedLines';
import stringToFn from '../utils/stringToFn';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const naturalLanguageLineType = {
  line: { items: 'line', chart: 'line chart' },
  area: { items: 'summary', chart: 'summary chart' },
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

const toPipeline = props => {
  const {
    lineStyle: baseLineStyle,
    lineClass,
    lineCustomMarks,
    lineRenderMode,
    lineType,
    areaStyle: baseAreaStyle,
    areaClass,
    areaRenderMode,
    areaCustomMarks,
    pointStyle,
    pointClass,
    pointCustomMarks,
    pointRenderMode,
    areaUseCanvas,
    lineUseCanvas,
    pointUseCanvas,
    showPoints,
    frameXScale: xScale,
    frameYScale: yScale,
    yExtent
  } = props;

  const lineStyle = stringToFn(baseLineStyle, emptyObjectReturnFunction, true);
  const areaStyle = stringToFn(baseAreaStyle, emptyObjectReturnFunction, true);
  const { projection, ...rest } = props;

  const { projectedLines, projectedAreas, projectedPoints } = projection({
    frameXScale: xScale,
    frameYScale: yScale,
    ...rest,
    showPoints: true
  });

  const lineAriaLabel =
    lineType &&
    lineType.type !== undefined &&
    typeof lineType.type === 'string' &&
    naturalLanguageLineType[lineType.type];

  if (
    lineType &&
    lineType.type &&
    Object.keys(naturalLanguageLineType).includes(lineType.type)
  ) {
    const maxY = projectedLines.map(d => max(d._xyCoordinates, d => d.yTop));
    if (yExtent && yExtent.length > 0) {
      yScale.domain([yExtent[0], Math.max(...maxY)]);
    } else {
      yScale.domain([0, Math.max(...maxY)]);
    }
  }

  const { svgPipeline: lineSvg, canvasPipeline: lineCanvas } = toRenderedLines({
    useCanvas: lineUseCanvas,
    xScale,
    yScale,
    styleFn: lineStyle,
    classFn: stringToFn(lineClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(lineRenderMode, undefined, true),
    customMarks: lineCustomMarks,
    type: lineType,
    data: projectedLines,
    ariaLabel: lineAriaLabel,
    baseMarkProps: {}
  });

  const { svgPipeline: areaSvg, canvasPipeline: areaCanvas } = toRenderedAreas({
    useCanvas: areaUseCanvas,
    xScale,
    yScale,
    styleFn: areaStyle,
    classFn: stringToFn(areaClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(areaRenderMode, undefined, true),
    customMarks: areaCustomMarks,
    data: projectedAreas
  });

  const { svgPipeline: pointsSvg, canvasPipeline: pointsCanvas } =
    showPoints === true
      ? toRenderedPoints({
          useCanvas: pointUseCanvas,
          xScale,
          yScale,
          styleFn: stringToFn(pointStyle, emptyObjectReturnFunction, true),
          classFn: stringToFn(pointClass, emptyStringReturnFunction, true),
          renderFn: stringToFn(pointRenderMode, undefined, true),
          customMarks: pointCustomMarks,
          data: projectedPoints
        })
      : { svgPipeline: [], canvasPipeline: [] };

  const svgPipe = [...areaSvg, ...lineSvg, ...pointsSvg];
  const canvasPipe = [...areaCanvas, ...lineCanvas, ...pointsCanvas];

  return {
    svgPipe,
    canvasPipe,
    xyPoints: projectedPoints,
    lineStyle,
    areaStyle,
    projectedLines,
    projectedAreas
  };
};

export default toPipeline;
