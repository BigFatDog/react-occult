import React from 'react';
import HierarchicalDiagram from '../HierarchicalDiagram';
import circleNodeGenerator from './circleNodeGenerator';

const CirclePack = props => {};

CirclePack.nodeGenerator = circleNodeGenerator;
CirclePack.edgeGenerator = () => () => null;

CirclePack.propTypes = {
  ...HierarchicalDiagram.propTypes
};

CirclePack.defaultProps = {
  ...HierarchicalDiagram.defaultProps
};

export default CirclePack;
