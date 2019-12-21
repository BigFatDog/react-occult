import React from 'react';
import Bar from '../Bar';
import barLayout from '../Bar/barLayout';

const BarPercent = props => {};

BarPercent.layout = barLayout;

BarPercent.Bar = {
  ...OrdinalPlot.propTypes,
};

BarPercent.defaultProps = {
  ...Bar.defaultProps,
};

export default BarPercent;
