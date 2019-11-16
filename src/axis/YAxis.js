import React from 'react';
import { array, func, object, oneOfType, string, number } from 'prop-types';

const YAxis = props => {
  return <div />;
};

YAxis.propTypes = {
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

YAxis.defaultProps = {
  orient: 'left',
};

export default YAxis;
