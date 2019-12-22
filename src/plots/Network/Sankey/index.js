import React from 'react';
import PathDiagram from '../PathDiagram';
import sankeyNodeGenerator from './sankeyNodeGenerator';

const Sankey = props => {};

Sankey.nodeGenerator = sankeyNodeGenerator;

Sankey.propTypes = {
  ...PathDiagram.propTypes
};

Sankey.defaultProps = {
  ...PathDiagram.defaultProps
};

export default Sankey;
