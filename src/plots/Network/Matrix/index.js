import React from 'react';
import NetworkPlot from '../NetworkPlot';

import matrixNodeGenerator from './matrixNodeGenerator';
import matrixEdgeGenerator from './matrixEdgeGenerator';

const Matrix = props => {};

Matrix.nodeGenerator = matrixNodeGenerator;
Matrix.edgeGenerator = matrixEdgeGenerator;

Matrix.propTypes = {
  ...NetworkPlot.propTypes
};

Matrix.defaultProps = {
  ...NetworkPlot.defaultProps
};

export default Matrix;
