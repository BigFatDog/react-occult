import React from 'react';
import PathDiagram from '../PathDiagram';
import dagreEdgeGenerator from './dagreEdgeGenerator';
import hierarchicalRectNodeGenerator from '../hierarchicalRectNodeGenerator';

const Dagre = props => {};

Dagre.edgeGenerator = ({ graph }) =>
  graph ? dagreEdgeGenerator(graph.graph().rankdir) : null;
Dagre.nodeGenerator = hierarchicalRectNodeGenerator;

Dagre.propTypes = {
  ...PathDiagram.propTypes
};

Dagre.defaultProps = {
  ...PathDiagram.defaultProps
};

export default Dagre;
