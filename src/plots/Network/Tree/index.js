import React from 'react';
import HierarchicalDiagram from '../HierarchicalDiagram';

const Tree = props => {};

Tree.layout = null;

Tree.propTypes = {
  ...HierarchicalDiagram.propTypes
};

Tree.defaultProps = {
  ...HierarchicalDiagram.defaultProps
};

export default Tree;
