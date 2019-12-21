import React from 'react';
import PropTypes from 'prop-types';
import OrdinalPlot from '../OrdinalPlot';
import clusterBarLayout from './clusterBarLayout';

const ClusterBar = props => {};

ClusterBar.layout = clusterBarLayout;

ClusterBar.propTypes = {
  ...OrdinalPlot.propTypes,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  iconPadding: PropTypes.number,
  resize: PropTypes.oneOf(['fixed', 'auto']),
  innerRadius: PropTypes.number,
  offsetAngle: PropTypes.number,
  angleRange: PropTypes.array
};

ClusterBar.defaultProps = {
  ...OrdinalPlot.defaultProps,
  iconPadding: 1,
  resize: 'auto'
};

export default ClusterBar;
