import React from 'react';
import {
  object,
  func,
  array,
  oneOfType,
  bool,
  number,
  string,
  node
} from 'prop-types';
import heatmapProjection from './projection';
import Plot from '../BasePlot';

const Heatmap = props => {
  return <Plot projection={heatmapProjection} {...props} />;
};

Heatmap.propTypes = {
  data: array,
  areaStyle: oneOfType([object, func]),
  areaClass: oneOfType([object, func]),
  areaRenderMode: oneOfType([object, func]),
  areaCustomMarks: oneOfType([node, func]),
  pointStyle: oneOfType([object, func]),
  pointClass: oneOfType([object, func]),
  pointCustomMarks: oneOfType([node, func]),
  pointRenderMode: oneOfType([object, func]),
  useCanvas: bool,
  showPoints: bool,
  xExtent: array,
  yExtent: array,
  xAccessor: oneOfType([string, func]),
  yAccessor: oneOfType([string, func]),
  sAccessor: oneOfType([string, func]),
  bins: number,
  // heatmap
  cellPx: number,
  binValue: func,
  xBins: number,
  yBins: number,
  xCellPx: number,
  yCellPx: number,
  binMax: number,
  customMark: oneOfType([object, func])
};

Heatmap.defaultProps = {
  data: [],
  resolution: 500,
  threshold: 10,
  bandWidth: 20,
  areaStyle: {
    fill: 'none',
    stroke: 'red',
    strokeWidth: 0.5
  },
  pointStyle: {
    r: 2,
    fill: 'red'
  },
  areaRenderMode: null,
  pointRenderMode: null,
  showPoints: true,
  useCanvas: true,
  // heatmap config
  binValue: d => d.length,
  xBins: 0.05,
  yBins: 0.05
};

export default Heatmap;
