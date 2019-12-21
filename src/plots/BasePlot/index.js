import React from 'react';
import PropTypes from 'prop-types';

const Plot = props => {
  return null;
};

Plot.propTypes = {
  projection: PropTypes.func,
  data: PropTypes.array,
  lineStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  lineClass: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  lineRenderMode: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  lineCustomMarks: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  lineUseCanvas: PropTypes.bool,
  areaStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  areaClass: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  areaRenderMode: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  areaCustomMarks: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  areaUseCanvas: PropTypes.bool,
  pointStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pointClass: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pointRenderMode: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pointCustomMarks: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  pointUseCanvas: PropTypes.bool,
  showPoints: PropTypes.bool,
  xExtent: PropTypes.array,
  yExtent: PropTypes.array,
  xAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  yAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  sAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Plot.defaultProps = {
  showPoints: true,
  pointUseCanvas: true,
  lineUseCanvas: true,
  areaUseCanvas: true
};

export default Plot;
