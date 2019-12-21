import React from 'react';
import PropTypes from 'prop-types';
import { scaleBand, scaleLinear } from 'd3-scale';

const OrdinalPlot = props => {
  return null;
};

OrdinalPlot.propTypes = {
  customMark: PropTypes.func,
  data: PropTypes.array,
  // common
  columns: PropTypes.object,
  rScaleType: PropTypes.func,
  oScaleType: PropTypes.func,
  rAccessor: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  oAccessor: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  invertR: PropTypes.bool,
  oPadding: PropTypes.number,
  oSort: PropTypes.func,
  dynamicColumnWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  pixelColumnWidth: PropTypes.number,
  projection: PropTypes.oneOf(['vertical', 'horizontal', 'radial']),
  baseOExtent: PropTypes.array,
  baseMarkProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  // pieces
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  renderOrder: PropTypes.array,
  renderKey: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func
  ]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pieceClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  pieceRenderMode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  pieceUseCanvas: PropTypes.bool,
  pieceHoverAnnotation: PropTypes.bool,
  // connectors
  connectorType: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  connectorStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  connectorRenderMode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  connectorUseCanvas: PropTypes.bool,
  // summaries
  summaryType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  summaryStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  summaryClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  summaryPosition: PropTypes.func,
  summaryRenderMode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  summaryUseCanvas: PropTypes.bool
};

OrdinalPlot.defaultProps = {
  data: [],
  oScaleType: scaleBand,
  rScaleType: scaleLinear,
  projection: 'vertical',
  type: 'none',
  connectorUseCanvas: true,
  pieceUseCanvas: false,
  summaryUseCanvas: false,
  optimizeCustomTooltipPosition: false,
  invertR: false
};

OrdinalPlot.layout = null;

export default OrdinalPlot;
