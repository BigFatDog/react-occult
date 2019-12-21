import React from 'react';
import HierarchicalDiagram from '../HierarchicalDiagram';

const Cluster = props => {};

Cluster.layout = null;

Cluster.propTypes = {
  ...HierarchicalDiagram.propTypes
};

Cluster.defaultProps = {
  ...HierarchicalDiagram.defaultProps
};

export default Cluster;
