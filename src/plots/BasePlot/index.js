import React from 'react';
import { object, func, array, oneOfType, bool, string, node } from 'prop-types';
import getExtent from './getExtent';
import stringToFn from '../../utils/stringToFn';
import toRenderedAreas from './toRenderedAreas';
import toRenderedPoints from './toRenderedPoints';
import toRenderedLines from './toRenderedLines';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const Plot = props => {
  const {
    xAccessor,
    yAccessor,
    sAccessor,
    xExtent,
    yExtent,
    showPoints,
    size,
    data,
    projection
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
  const { projectedAreas, projectedPoints, projectedLines } = projection({
    finalXExtent,
    finalYExtent,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints,
    size,
    data,
    ...props
  });

  const {
    useCanvas,
    frameXScale: xScale,
    frameYScale: yScale,
    // line
    lineStyle,
    lineClass,
    lineRenderMode,
    lineCustomMarks,
    //area
    areaStyle,
    areaClass,
    areaRenderMode,
    areaCustomMarks,
    // points
    pointStyle,
    pointClass,
    pointRenderMode,
    pointCustomMarks
  } = props;

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

  const svgPipeline = [...lineSvg, areaSvg, ...pointsSvg];
  const canvasPipeline = [...lineCanvas, areaCanvas, ...pointsCanvas];
  return svgPipeline;
};

Plot.propTypes = {
  projection: func,
  data: array,
  lineStyle: oneOfType([object, func]),
  lineClass: oneOfType([object, func]),
  lineRenderMode: oneOfType([object, func]),
  lineCustomMarks: oneOfType([node, func]),
  lineUseCanvas: bool,
  areaStyle: oneOfType([object, func]),
  areaClass: oneOfType([object, func]),
  areaRenderMode: oneOfType([object, func]),
  areaCustomMarks: oneOfType([node, func]),
  areaUseCanvas: bool,
  pointStyle: oneOfType([object, func]),
  pointClass: oneOfType([object, func]),
  pointCustomMarks: oneOfType([node, func]),
  pointRenderMode: oneOfType([object, func]),
  pointUseCanvas: bool,
  showPoints: bool,
  xExtent: array,
  yExtent: array,
  xAccessor: oneOfType([string, func]),
  yAccessor: oneOfType([string, func]),
  sAccessor: oneOfType([string, func])
};

export default Plot;
