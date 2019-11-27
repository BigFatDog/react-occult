import React from 'react';
import PropTypes from 'prop-types';
import Plot from '../BasePlot';
import heatmapProjection from './projection';

const Heatmap = props => {
  return <Plot {...props} />;
};

Heatmap.propTypes = {
  ...Plot.propTypes,
  cellPx: PropTypes.number,
  xBins: PropTypes.number,
  yBins: PropTypes.number,
  xCellPx: PropTypes.number,
  yCellPx: PropTypes.number,
  binMax: PropTypes.number,
  binValue: PropTypes.func
};

Heatmap.defaultProps = {
  binValue: d => d.length,
  xBins: 0.05,
  yBins: 0.05,
  projection: heatmapProjection
};

export default Heatmap;
