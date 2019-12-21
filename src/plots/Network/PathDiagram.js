import React from 'react';
import PropTypes from 'prop-types';
import NetworkPlot from './NetworkPlot';

//The built in path types are sankey, arc, chord, and dagre.
const PathDiagram = props => {};

PathDiagram.propTypes = {
  ...NetworkPlot.propTypes,
  zoom: PropTypes.bool,
  projection: PropTypes.oneOf(['vertical', 'horizontal']),
  orient: PropTypes.oneOf(['left', 'right', 'justify', 'center']),
  iterations: PropTypes.number,
  nodeWidth: PropTypes.number,
  nodePaddingRatio: PropTypes.number,
  nodePadding: PropTypes.number
};

PathDiagram.defaultProps = {
  ...NetworkPlot.defaultProps,
  zoom: true, // Zoom the laid out nodes in or out so that they fit the specified size, can also be "stretch" if you want zoom not to maintain aspect ratio
  projection: 'horizontal', // Accepts (horizontal|vertical) direction of flow in the diagram
  orient: 'center', // Accepts (left|right|justify|center) sankey node alignment strategy
  iterations: 100, // How many times to run the layout algorithm
  nodeWidth: 24, // Thickness of node along the axis of flow
  nodePaddingRatio: 0.5 // The ratio of nodes to available space, only if nodePadding is not set
  // nodePadding: Number of pixels between nodes
};

export default PathDiagram;
