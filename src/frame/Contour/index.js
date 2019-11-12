import React from 'react';
import { object, func, array, oneOfType, bool, number } from 'prop-types';

const Contour = props => {
  const { data, threshold, bandwidth, areaStyle, pointStyle, canvas } = props;

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
  canvas: bool
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
