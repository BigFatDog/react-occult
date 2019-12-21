import React from 'react';
import Bar from '../Bar';
import clusterBarLayout from './clusterBarLayout';

const ClusterBar = props => {};

ClusterBar.layout = clusterBarLayout;

ClusterBar.propTypes = {
  ...Bar.propTypes,
};

ClusterBar.defaultProps = {
  ...Bar.defaultProps,
};

export default ClusterBar;
