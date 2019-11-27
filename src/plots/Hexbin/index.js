import React from 'react';
import PropTypes from 'prop-types';
import hexbinProjection from './projection';
import Plot from '../BasePlot';

const Hexbin = props => {
  return <Plot {...props} />;
};

Hexbin.propTypes = {
  ...Plot.propTypes,
  bins: PropTypes.number,
  cellPx: PropTypes.number,
  binValue: PropTypes.func,
  binMax: PropTypes.number
};

Hexbin.defaultProps = {
  ...Plot.defaultProps,
  bins: 0.05,
  binValue: d => d.length,
  projection: hexbinProjection
};

export default Hexbin;
