import React from 'react';
import PropTypes from 'prop-types';
import OrdinalPlot from '../OrdinalPlot';
import barLayout from './barLayout';

const Bar = props => {};

Bar.layout = barLayout;

Bar.propTypes = {
  ...OrdinalPlot.propTypes,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  iconPadding: PropTypes.number,
  resize: PropTypes.oneOf(['fixed', 'auto']),
  innerRadius: PropTypes.number,
  offsetAngle: PropTypes.number,
  angleRange: PropTypes.array
};

Bar.defaultProps = {
  ...OrdinalPlot.defaultProps,
  iconPadding: 1,
  resize: 'auto'
};

export default Bar;
