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

const Contour = props => {
  const {
    data,
    threshold,
    resolution,
    bandwidth,
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

  console.log(finalXExtent, finalYExtent);
  return <div />;
};

Contour.propTypes = {
  data: array,
  resolution: number,
  threshold: number,
  bandwidth: number,
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
  bandwidth: 20,
  areaStyle: {
    fill: 'none',
    stroke: 'red',
    strokeWidth: 0.5
  },
  pointStyle: {
    r: 2,
    fill: 'red'
  },
  neighborhood: true,
  canvas: true
};

export default Contour;
