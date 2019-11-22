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
import lineProjection from './projection';
import { stringToFn } from '../../archive/data/dataFunctions';
import toRenderedLines from '../toRenderedLines';
import toRenderedPoints from '../toRenderedPoints';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const Line = props => {
  const {
    data,
    lineType,
    lineStyle,
    lineClass,
    lineCustomMarks,
    lineRenderMode,
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
    size
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
  const { projectedAreas, projectedPoints, projectedLines } = lineProjection({
    data,
    finalXExtent,
    finalYExtent,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints,
    size
  });

  const { svgPipeline: areaSvg, canvasPipeline: areaCanvas } = toRenderedLines({
    useCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(lineStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(lineClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(lineRenderMode, undefined, true),
    customMarks: lineCustomMarks,
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

  const lineSvgPipeline = [...areaSvg, ...pointsSvg];
  const lineCanvasPipeline = [...areaCanvas, ...pointsCanvas];
  return lineSvgPipeline;
};

Line.propTypes = {
  data: array,
  simpleLine,
  bool,
  lineType: string,
  lineStyle: oneOfType([object, func]),
  lineClass: oneOfType([object, func]),
  lineRenderMode: oneOfType([object, func]),
  lineCustomMarks: oneOfType([node, func]),
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
  sAccessor: oneOfType([string, func])
};

Line.defaultProps = {
  data: [],
  simpleLine: false,
  lineType: 'line',
  lineStyle: {
    fill: 'none',
    stroke: 'red',
    strokeWidth: 0.5
  },
  showPoints: true,
  pointStyle: {
    r: 2,
    fill: 'red'
  }
};

export default Line;
