import React from 'react';
import PathDiagram from '../PathDiagram';
import dagreEdgeGenerator from './dagreEdgeGenerator';
import hierarchicalRectNodeGenerator from '../hierarchicalRectNodeGenerator';

const Dagree = props => {};

Dagree.edgeGenerator = ({ graph }) =>
  graph ? dagreEdgeGenerator(graph.graph().rankdir) : null;
Dagree.nodeGenerator = hierarchicalRectNodeGenerator;

Dagree.propTypes = {
  ...PathDiagram.propTypes
};

Dagree.defaultProps = {
  ...PathDiagram.defaultProps
};

export default Dagree;
