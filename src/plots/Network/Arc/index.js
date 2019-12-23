import React from 'react';
import PathDiagram from '../PathDiagram';
import arcEdgeGenerator from './arcEdgeGenerator';

const Arc = props => {};

Arc.edgeGenerator = arcEdgeGenerator;

Arc.propTypes = {
  ...PathDiagram.propTypes
};

Arc.defaultProps = {
  ...PathDiagram.defaultProps
};

export default Arc;
