import React from 'react';
import {
  object,
  func,
  array,
  oneOfType,
  bool,
  number
} from 'prop-types';

const Contour = props => {
  return <div />;
};

Contour.propTypes = {
  data: array,
  threshold: number,
  bandwidth: number,
  areaStyle: oneOfType([object, func]),
  pointStyle: oneOfType([object, func]),
  canvas: bool
};

Contour.defaultProps = {
  data: [],
  threshold: 1,
  bandwidth: 15,
  areaStyle: {
    fill: 'none',
    stroke: 'red',
    strokeWidth: 0.5
  },
  pointStyle: {
    r: 2,
    fill: 'red'
  },
  canvas: true
};

export default Contour;
