import React from 'react';
import { object, func, array, oneOfType, bool, string, node } from 'prop-types';
import lineProjection from './projection';

import Plot from '../BasePlot';

const Line = props => {
  return <Plot projection={lineProjection} {...props} />;
};

Line.propTypes = {
  data: array,
  simpleLine: bool,
  lineType: string,
  lineStyle: oneOfType([object, func]),
  lineClass: oneOfType([object, func]),
  lineRenderMode: oneOfType([object, func]),
  lineCustomMarks: oneOfType([node, func]),
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
  sAccessor: oneOfType([string, func])
};

Line.defaultProps = {
  data: [],
  simpleLine: false,
  lineType: 'line',
  lineStyle: {
    fill: 'none',
    stroke: 'red',
    strokeWidth: 0.5
  },
  showPoints: true,
  pointStyle: {
    r: 2,
    fill: 'red'
  }
};

Line.projection = lineProjection;

export default Line;
