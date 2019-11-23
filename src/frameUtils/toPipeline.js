import getExtent from '../plots/BasePlot/getExtent';
import contouringProjection from '../plots/Contour/projection';
import hexbinProjection from '../plots/Hexbin/projection';
import toRenderedAreas from '../plots/BasePlot/toRenderedAreas';
import toRenderedPoints from '../plots/BasePlot/toRenderedPoints';
import heatmapProjection from '../plots/Heatmap/projection';
import lineProjection from '../plots/Line/projection';
import toRenderedLines from '../plots/BasePlot/toRenderedLines';
import stringToFn from '../utils/stringToFn';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const toPipeline = props => {
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
    sAccessor,
    xExtent,
    yExtent,
    showPoints,
    frameXScale: xScale,
    frameYScale: yScale,
    plotType,
    adjustedSize: size
  } = props;

  // extents
  const { finalXExtent, finalYExtent } = getExtent({
    data,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent
  });

  let projectedLines = [];
  let projectedAreas = [];
  let projectedPoints = [];
  if (plotType === 'Contour') {
    const { threshold, resolution, bandWidth, neighborhood } = props;
    // data projection
    const {
      projectedAreas: areas,
      projectedPoints: points
    } = contouringProjection({
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
  } else if (plotType === 'Hexbin') {
    const { bins, cellPx, binValue, binMax, customMark } = props;
    // data projection
    const { projectedAreas: areas, projectedPoints: points } = hexbinProjection(
      {
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
      }
    );

    projectedAreas = areas;
    projectedPoints = points;
  } else if (plotType === 'Heatmap') {
    const {
      xBins,
      yBins,
      xCellPx,
      yCellPx,
      binMax,
      binValue,
      customMark
    } = props;
    // data projection
    const {
      projectedAreas: areas,
      projectedPoints: points
    } = heatmapProjection({
      xBins,
      yBins,
      xCellPx,
      yCellPx,
      binMax,
      binValue,
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
  } else if (plotType === 'Line') {
    const {
      projectedAreas: areas,
      projectedPoints: points,
      projectedLines: lines
    } = lineProjection({
      data,
      finalXExtent,
      finalYExtent,
      xAccessor,
      yAccessor,
      sAccessor,
      showPoints,
      size
    });

    projectedLines = lines;
    projectedAreas = areas;
    projectedPoints = points;
  }

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
