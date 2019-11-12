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
    yExtent
  } = props;

  const groupedMap = group(data, sAccessor);
  const groupedData = Array.from(groupedMap.keys()).map(d => ({
    s: d,
    coordinates: groupedMap.get(d).map(e => ({
      x: xAccessor(e),
      y: yAccessor(e)
    })),
    _baseData: groupedMap.get(d)
  }));

  const { finalXExtent, finalYExtent } = getExtent({
    data,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent
  });

  const projectedAreas = contouringProjection({
    threshold,
    resolution,
    bandWidth,
    neighborhood,
    data: groupedData,
    finalXExtent,
    finalYExtent
  });
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
  neighborhood: false,
  canvas: true
};

export default Contour;
