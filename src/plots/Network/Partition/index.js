import React from 'react';
import HierarchicalDiagram from '../HierarchicalDiagram';
import radialRectNodeGenerator from '../radialRectNodeGenerator';
import hierarchicalRectNodeGenerator from '../hierarchicalRectNodeGenerator';
import Treemap from "../Treemap";

const Partition = props => {};

Partition.nodeGenerator = ({ size, center, projection, angleRange }) =>
  projection === 'radial'
    ? radialRectNodeGenerator(size, center, angleRange)
    : hierarchicalRectNodeGenerator();

Partition.edgeGenerator = () => () => null;

Partition.propTypes = {
  ...HierarchicalDiagram.propTypes
};

Partition.defaultProps = {
  ...HierarchicalDiagram.defaultProps
};

export default Partition;
