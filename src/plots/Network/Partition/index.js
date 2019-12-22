import React from 'react';
import HierarchicalDiagram from '../HierarchicalDiagram';
import radialRectNodeGenerator from '../radialRectNodeGenerator';
import hierarchicalRectNodeGenerator from '../hierarchicalRectNodeGenerator';

const Partition = props => {};

Partition.nodeGenerator = ({ size, center, networkSettings }) =>
  networkSettings.projection === 'radial'
    ? radialRectNodeGenerator(size, center, networkSettings)
    : hierarchicalRectNodeGenerator;

Partition.propTypes = {
  ...HierarchicalDiagram.propTypes
};

Partition.defaultProps = {
  ...HierarchicalDiagram.defaultProps
};

export default Partition;
