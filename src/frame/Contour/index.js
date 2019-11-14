import React, { Fragment } from 'react';
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
import getExtent from './util/getExtent';
import contouringProjection from './projection';
import { stringToFn } from '../../data/dataFunctions';
import toRenderedElements from './toRenderedElements';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const Contour = props => {
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
    useCanvas,
    xAccessor,
    yAccessor,
    sAccessor,
    xExtent,
    yExtent,
    showPoints,
    customMarks,
    adjustedPosition,
    adjustedSize
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
  const {
    projectedAreas,
    projectedPoints,
    xScale,
    yScale
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

  const xDomain = [0, adjustedSize[0]];
  const yDomain = [adjustedSize[1], 0];

  if (xScale.domain) {
    xScale.domain(finalXExtent);
  }
  if (yScale.domain) {
    yScale.domain(finalYExtent);
  }
  xScale.range(xDomain);
  yScale.range(yDomain);

  const { svgPipeline, canvasPipeline } = toRenderedElements({
    useCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(areaStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(areaClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(areaRenderMode, undefined, true),
    customMarks: areaCustomMarks,
    data: projectedAreas
  });

  return <Fragment>{svgPipeline}</Fragment>;
};

Contour.propTypes = {
  data: array,
  resolution: number,
  threshold: number,
  bandWidth: number,
  neighborhood: bool,
  areaStyle: oneOfType([object, func]),
  areaClass: oneOfType([object, func]),
  areaRenderMode: oneOfType([object, func]),
  areaCustomMarks: oneOfType([node, func]),
  pointStyle: oneOfType([object, func]),
  useCanvas: bool,
  showPoints: bool,
  xExtent: array,
  yExtent: array,
  customMarks: object,
  xAccessor: oneOfType([string, func]),
  yAccessor: oneOfType([string, func]),
  sAccessor: oneOfType([string, func])
};

Contour.defaultProps = {
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
  showPoints: true,
  neighborhood: false,
  useCanvas: true
};

export default Contour;
