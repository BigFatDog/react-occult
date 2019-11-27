import React from 'react';
import PropTypes from 'prop-types';
import lineProjection from './projection';
import Plot from '../BasePlot';

const Line = props => {
  return <Plot {...props} />;
};

Line.propTypes = {
  ...Plot.propTypes,
  simpleLine: PropTypes.bool
};

Line.defaultProps = {
  ...Plot.defaultProps,
  simpleLine: false,
  projection: lineProjection
};

export default Line;
