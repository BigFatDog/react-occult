import React from 'react';
import HierarchicalDiagram from '../HierarchicalDiagram';
import radialRectNodeGenerator from '../radialRectNodeGenerator';
import hierarchicalRectNodeGenerator from '../hierarchicalRectNodeGenerator';

const Treemap = props => {};

Treemap.nodeGenerator = ({ size, center, projection, angleRange }) =>
  projection === 'radial'
    ? radialRectNodeGenerator(size, center, angleRange)
    : hierarchicalRectNodeGenerator();

Treemap.edgeGenerator = () => () => null;

Treemap.propTypes = {
  ...HierarchicalDiagram.propTypes
};

Treemap.defaultProps = {
  ...HierarchicalDiagram.defaultProps
};

export default Treemap;
