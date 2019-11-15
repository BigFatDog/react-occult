import getExtent from './getExtent';
import contouringProjection from '../plots/Contour/projection';
import toRenderedAreas from '../plots/Contour/toRenderedAreas';
import { stringToFn } from '../archive/data/dataFunctions';
import toRenderedPoints from '../plots/Contour/toRenderedPoints';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const toContourPipeline = props => {
  const {
    data,
    threshold,
    resolution,
    bandWidth,
    neighborhood,
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
    sAccessor,
    xExtent,
    yExtent,
    showPoints,
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

  // data projection
  const { projectedAreas, projectedPoints } = contouringProjection({
    threshold,
    resolution,
    bandWidth,
    neighborhood,
    data,
    finalXExtent,
    finalYExtent,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints
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

  const svgPipe = [...areaSvg, ...pointsSvg];
  const areaPipe = [...areaCanvas, ...pointsCanvas];
  return {
    svgPipe,
    areaPipe
  };
};

export default toContourPipeline;
