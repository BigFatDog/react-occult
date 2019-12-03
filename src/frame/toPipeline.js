import getExtent from '../plots/BasePlot/getExtent';
import toRenderedAreas from '../plots/BasePlot/toRenderedAreas';
import toRenderedPoints from '../plots/BasePlot/toRenderedPoints';
import toRenderedLines from '../plots/BasePlot/toRenderedLines';
import stringToFn from '../utils/stringToFn';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const toPipeline = props => {
  const { projection, ...rest } = props;
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
    areaUseCanvas,
    lineUseCanvas,
    pointUseCanvas,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent,
    frameXScale: xScale,
    frameYScale: yScale
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

  console.log(projectedPoints);

  const { svgPipeline: lineSvg, canvasPipeline: lineCanvas } = toRenderedLines({
    useCanvas: lineUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(lineStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(lineClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(lineRenderMode, undefined, true),
    customMarks: lineCustomMarks,
    data: projectedLines
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

  console.log(pointsSvg);
  const svgPipe = [...areaSvg, ...lineSvg, ...pointsSvg];
  const canvasPipe = [...areaCanvas, ...lineCanvas, ...pointsCanvas];

  return {
    svgPipe,
    canvasPipe
  };
};

export default toPipeline;
