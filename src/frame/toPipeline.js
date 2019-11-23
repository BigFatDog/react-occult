import getExtent from '../plots/BasePlot/getExtent';
import toRenderedAreas from '../plots/BasePlot/toRenderedAreas';
import toRenderedPoints from '../plots/BasePlot/toRenderedPoints';
import toRenderedLines from '../plots/BasePlot/toRenderedLines';
import stringToFn from '../utils/stringToFn';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const toPipeline = props => {
  const { projection, ...rest} = props;
  const {
    data,
    lineStyle,
    lineClass,
    lineCustomMarks,
    lineRenderMode,
    areaStyle,
    areaClass,
    areaRenderMode,
    areaCustomMarks,
    pointStyle,
    pointClass,
    pointCustomMarks,
    pointRenderMode,
    useCanvas,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent,
    frameXScale: xScale,
    frameYScale: yScale,
  } = props;

  // extents
  const { finalXExtent, finalYExtent } = getExtent({
    data,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent
  });

  const { projectedLines, projectedAreas, projectedPoints } = projection({
    finalXExtent,
    finalYExtent,
    ...rest
  });

  const { svgPipeline: lineSvg, canvasPipeline: lineCanvas } = toRenderedLines({
    useCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(lineStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(lineClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(lineRenderMode, undefined, true),
    customMarks: lineCustomMarks,
    data: projectedLines
  });

  const { svgPipeline: areaSvg, canvasPipeline: areaCanvas } = toRenderedAreas({
    useCanvas,
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
    useCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(pointStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(pointClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(pointRenderMode, undefined, true),
    customMarks: pointCustomMarks,
    data: projectedPoints
  });

  const svgPipe = [...areaSvg, ...lineSvg, ...pointsSvg];
  const areaPipe = [...areaCanvas, ...lineCanvas, ...pointsCanvas];
  return {
    svgPipe,
    areaPipe
  };
};

export default toPipeline;
