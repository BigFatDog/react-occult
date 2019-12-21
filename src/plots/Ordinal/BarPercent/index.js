import React from 'react';
import PropTypes from 'prop-types';
import OrdinalPlot from '../OrdinalPlot';
import barLayout from './barLayout';

const BarPercent = props => {};

BarPercent.layout = barLayout;

BarPercent.propTypes = {
  ...OrdinalPlot.propTypes,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  iconPadding: PropTypes.number,
  resize: PropTypes.oneOf(['fixed', 'auto'])
};

BarPercent.defaultProps = {
  ...OrdinalPlot.defaultProps,
  iconPadding: 1,
  resize: 'auto'
};

export default BarPercent;
