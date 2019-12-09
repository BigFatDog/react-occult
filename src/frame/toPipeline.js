import toRenderedAreas from '../plots/BasePlot/toRenderedAreas';
import toRenderedPoints from '../plots/BasePlot/toRenderedPoints';
import toRenderedLines from '../plots/BasePlot/toRenderedLines';
import stringToFn from '../utils/stringToFn';
import { max } from 'd3-array';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const naturalLanguageLineType = {
  line: { items: 'line', chart: 'line chart' },
  area: { items: 'summary', chart: 'summary chart' },
  summary: { items: 'summary', chart: 'summary chart' },
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
    lineStyle,
    lineClass,
    lineCustomMarks,
    lineRenderMode,
    lineType,
    areaStyle,
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
    frameXScale: xScale,
    frameYScale: yScale
  } = props;

  const { projection, ...rest } = props;

  const { projectedLines, projectedAreas, projectedPoints } = projection({
    frameXScale: xScale,
    frameYScale: yScale,
    ...rest
  });

  const lineAriaLabel =
    lineType &&
    lineType.type !== undefined &&
    typeof lineType.type === 'string' &&
    naturalLanguageLineType[lineType.type];

  if (lineType && lineType.type && lineType.type === 'stackedarea') {
    const maxY = projectedLines.map(d => max(d._xyCoordinates, d => d.yTop));
    yScale.domain([0, Math.max(...maxY)]);
  }

  const { svgPipeline: lineSvg, canvasPipeline: lineCanvas } = toRenderedLines({
    useCanvas: lineUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(lineStyle, emptyObjectReturnFunction, true),
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
    styleFn: stringToFn(areaStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(areaClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(areaRenderMode, undefined, true),
    customMarks: areaCustomMarks,
    data: projectedAreas
  });

  const {
    svgPipeline: pointsSvg,
    canvasPipeline: pointsCanvas
  } = toRenderedPoints({
    useCanvas: pointUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(pointStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(pointClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(pointRenderMode, undefined, true),
    customMarks: pointCustomMarks,
    data: projectedPoints
  });

  const svgPipe = [...areaSvg, ...lineSvg, ...pointsSvg];
  const canvasPipe = [...areaCanvas, ...lineCanvas, ...pointsCanvas];

  return {
    svgPipe,
    canvasPipe
  };
};

export default toPipeline;
