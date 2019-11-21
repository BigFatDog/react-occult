import getExtent from './getExtent';
import contouringProjection from '../plots/Contour/projection';
import hexbinProjection from '../plots/Hexbin/projection';
import toRenderedAreas from '../plots/Contour/toRenderedAreas';
import { stringToFn } from '../archive/data/dataFunctions';
import toRenderedPoints from '../plots/Contour/toRenderedPoints';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const toPipeline = props => {
  const {
    data,
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
    frameYScale: yScale,
    plotTye,
    adjustedSize: size,
  } = props;

  // extents
  const { finalXExtent, finalYExtent } = getExtent({
    data,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent
  });

  let projectedAreas, projectedPoints = [];
  if (plotTye === 'Contour') {
    const {
      threshold,
      resolution,
      bandWidth,
      neighborhood,
    } = props;
    // data projection
    const { projectedAreas:areas, projectedPoints:points } = contouringProjection({
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

    projectedAreas = areas;
    projectedPoints = points;
  } else {
    const {
      bins,
      cellPx,
      binValue,
      binMax,
      customMark,
    } = props;
    // data projection
    const { projectedAreas:areas, projectedPoints:points } = hexbinProjection({
      bins,
      cellPx,
      binValue,
      binMax,
      customMark,
      data,
      finalXExtent,
      finalYExtent,
      xAccessor,
      yAccessor,
      sAccessor,
      showPoints,
      size
    });

    projectedAreas = areas;
    projectedPoints = points;
  }

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

export default toPipeline;
