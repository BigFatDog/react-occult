import React from 'react';
import HierarchicalDiagram from '../HierarchicalDiagram';
import radialRectNodeGenerator from '../radialRectNodeGenerator';
import hierarchicalRectNodeGenerator from '../hierarchicalRectNodeGenerator';

const Treemap = props => {};

Treemap.nodeGenerator = ({ size, center, networkSettings }) =>
  networkSettings.projection === 'radial'
    ? radialRectNodeGenerator(size, center, networkSettings)
    : hierarchicalRectNodeGenerator;

Treemap.propTypes = {
  ...HierarchicalDiagram.propTypes
};

Treemap.defaultProps = {
  ...HierarchicalDiagram.defaultProps
};

export default Treemap;
