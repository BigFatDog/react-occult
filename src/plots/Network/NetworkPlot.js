import React from 'react';
import PropTypes from 'prop-types';

const NetworkPlot = props => {
  return null;
};

NetworkPlot.propTypes = {
  customMark: PropTypes.func,
  nodeUseCanvas: PropTypes.bool,
  edgeUseCanvas: PropTypes.bool,
  graph: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.object
  ]),
  nodes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  edges: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  nodeIDAccessor: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nodeLabels: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  nodeRenderMode: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nodeStyle: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  nodeClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nodeSizeAccessor: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  customNodeIcon: PropTypes.func,
  sourceAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  targetAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  //A string (One of 'none', 'curve', 'linearc','ribbon','arrowhead','halfarrow','nail','comet','taffy')
  edgeType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  edgeStyle: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  edgeClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  edgeRenderMode: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  customEdgeIcon: PropTypes.func,
  filterRenderedNodes: PropTypes.func,
  edgeRenderKey: PropTypes.func,
  nodeRenderKey: PropTypes.func,
  hierarchyChildren: PropTypes.func
};

NetworkPlot.defaultProps = {
  filterRenderedNodes: d => d.id !== 'root-generated'
};

NetworkPlot.layout = null;

export default NetworkPlot;
