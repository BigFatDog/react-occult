import React from 'react';
import {
  object,
  func,
  array,
  oneOfType,
  bool,
  number,
  string
} from 'prop-types';
import { group } from 'd3-array';
import getExtent from './util/getExtent';
import contouringProjection from './projection';
import renderFn from './renderFn';

const Contour = props => {
  const {
    data,
    threshold,
    resolution,
    bandWidth,
    neighborhood,
    areaStyle,
    pointStyle,
    canvas,
    xAccessor,
    yAccessor,
    sAccessor,
    xExtent,
    yExtent,
    showPoints
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

  // to render pipelines
  // const projectContours = renderFn({
  //   data,
  //   type,
  //   renderMode,
  //   eventListenersGenerator,
  //   styleFn,
  //   classFn,
  //   adjustedSize,
  //   baseMarkProps
  // });
  console.log(projectedAreas);

  return <div />;
};

Contour.propTypes = {
  data: array,
  resolution: number,
  threshold: number,
  bandWidth: number,
  neighborhood: bool,
  areaStyle: oneOfType([object, func]),
  pointStyle: oneOfType([object, func]),
  canvas: bool,
  showPoints: bool,
  xExtent: array,
  yExtent: array,
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
  showPoints: true,
  neighborhood: false,
  canvas: true
};

export default Contour;
