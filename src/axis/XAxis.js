import React from 'react';
import { func, string, array, object, oneOfType, number } from 'prop-types';

const XAxis = props => {
  return <div />;
};

XAxis.propTypes = {
  orient: string,
  size: array,
  label: oneOfType([string, object]),
  tickValues: array,
  ticks: number,
  tickFormat: func,
  tickLineGenerator: func,
  rotate: number,
  padding: number,
  scale: func,
  annotationFunction: func,
  className: string,
  margin: object,
  name: string
};

XAxis.defaultProps = {
  orient: 'bottom',
};

export default XAxis;
