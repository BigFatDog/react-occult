import React from 'react';
import scatterProjection from './projection';
import Plot from '../BasePlot';

const Scatter = props => {
  return <Plot {...props} />;
};

Scatter.propTypes = {
  ...Plot.propTypes
};

Scatter.defaultProps = {
  ...Plot.defaultProps,
  projection: scatterProjection
};

export default Scatter;
