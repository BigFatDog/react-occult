import React from 'react';
import {
  object,
  func,
  array,
  oneOfType,
  bool,
  number,
  string,
  node
} from 'prop-types';
import getExtent from '../../frameUtils/getExtent';
import hexbinProjection from './projection';
import { stringToFn } from '../../archive/data/dataFunctions';
import toRenderedAreas from '../Contour/toRenderedAreas';
import toRenderedPoints from '../Contour/toRenderedPoints';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const Hexbin = props => {
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
    size,
    bins,
    cellPx,
    binValue,
    binMax,
    customMark
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
  const { projectedAreas, projectedPoints } = hexbinProjection({
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

  const contourSvgPipeline = [...areaSvg, ...pointsSvg];
  const contourCanvasPipeline = [...areaCanvas, ...pointsCanvas];
  return contourSvgPipeline;
};

Hexbin.propTypes = {
  data: array,
  areaStyle: oneOfType([object, func]),
  areaClass: oneOfType([object, func]),
  areaRenderMode: oneOfType([object, func]),
  areaCustomMarks: oneOfType([node, func]),
  pointStyle: oneOfType([object, func]),
  pointClass: oneOfType([object, func]),
  pointCustomMarks: oneOfType([node, func]),
  pointRenderMode: oneOfType([object, func]),
  useCanvas: bool,
  showPoints: bool,
  xExtent: array,
  yExtent: array,
  xAccessor: oneOfType([string, func]),
  yAccessor: oneOfType([string, func]),
  sAccessor: oneOfType([string, func]),
  bins: number,
  cellPx: number,
  binValue: d => d.length,
  binMax: number,
  customMark: oneOfType([object, func])
};

Hexbin.defaultProps = {
  data: [],
  resolution: 500,
  threshold: 10,
  bandWidth: 20,
  areaStyle: {
    fill: 'none',
    stroke: 'red',
    strokeWidth: 0.5
  },
  pointStyle: {
    r: 2,
    fill: 'red'
  },
  areaRenderMode: null,
  pointRenderMode: null,
  showPoints: true,
  useCanvas: true,
  bins: 0.05,
  binValue: d => d.length
};

export default Hexbin;
