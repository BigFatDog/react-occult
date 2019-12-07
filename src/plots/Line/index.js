import React from 'react';
import PropTypes from 'prop-types';
import lineProjection from './projection';
import Plot from '../BasePlot';

const Line = props => {
  return <Plot {...props} />;
};

Line.propTypes = {
  ...Plot.propTypes,
  type: PropTypes.oneOf([
    'stackedarea',
    'stackedarea-invert',
    'stackedpercent',
    'stackedpercent-invert',
    'linepercent',
    'difference',
    'bumparea',
    'bumpline',
    'bumparea-invert',
    'line',
    'area',
    'cumulative',
    'cumulative-reverse'
  ]),
  simpleLine: PropTypes.bool
};

Line.defaultProps = {
  ...Plot.defaultProps,
  lineType: 'line',
  simpleLine: false,
  projection: lineProjection
};

export default Line;
