import React from 'react';
import PropTypes from 'prop-types';
import trendliningProjection from './projection';
import Plot from '../BasePlot';
import { curveCardinal } from 'd3-shape';

const Trendline = props => {
  return <Plot {...props} />;
};

Trendline.propTypes = {
  ...Plot.propTypes,
  regressionType: PropTypes.oneOf([
    'logarithmic',
    'power',
    'polynomial',
    'exponential',
    'linear'
  ]),
  order: PropTypes.number,
  precision: PropTypes.number,
  controlPoints: PropTypes.number,
  curve: PropTypes.func
};

Trendline.defaultProps = {
  ...Plot.defaultProps,
  regressionType: 'linear',
  order: 2,
  precision: 4,
  controlPoints: 20,
  curve: curveCardinal,
  projection: trendliningProjection
};

export default Trendline;
