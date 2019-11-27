import React from 'react';
import PropTypes from 'prop-types';
import contouringProjection from './projection';
import Plot from '../BasePlot';

const Contour = props => {
  return <Plot {...props} />;
};

Contour.propTypes = {
  ...Plot.propTypes,
  resolution: PropTypes.number,
  threshold: PropTypes.number,
  bandWidth: PropTypes.number,
  neighborhood: PropTypes.bool
};

Contour.defaultProps = {
  ...Plot.defaultProps,
  resolution: 500,
  threshold: 10,
  bandWidth: 20,
  projection: contouringProjection
};

export default Contour;
