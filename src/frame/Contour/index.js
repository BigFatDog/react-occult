import React, { Fragment } from 'react';
import {
  object,
  func,
  array,
  oneOfType,
  bool,
  number,
  string
} from 'prop-types';
import getExtent from './util/getExtent';
import contouringProjection from './projection';

const Contour = props => {
  const {
    data,
    threshold,
    resolution,
    bandWidth,
    neighborhood,
    areaStyle,
    pointStyle,
    useCanvas,
    xAccessor,
    yAccessor,
    sAccessor,
    xExtent,
    yExtent,
    showPoints,
    customMarks
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

  console.log(projectedAreas, projectedPoints)

  // canvasRendering for canvas, renderedElements for svg
  const renderedElements = [];
  return <Fragment>{renderedElements}</Fragment>;
};

Contour.propTypes = {
  data: array,
  resolution: number,
  threshold: number,
  bandWidth: number,
  neighborhood: bool,
  areaStyle: oneOfType([object, func]),
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
  showPoints: true,
  neighborhood: false,
  useCanvas: true
};

export default Contour;
