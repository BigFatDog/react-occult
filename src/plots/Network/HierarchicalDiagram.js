import React from 'react';
import PropTypes from 'prop-types';
import NetworkPlot from './NetworkPlot';

//The built-in hierarchical types are tree, cluster, circlepack, treemap, and partition
const HierarchicalDiagram = props => {};

HierarchicalDiagram.propTypes = {
  ...NetworkPlot.propTypes,
  zoom: PropTypes.bool,
  padding: PropTypes.number,
  projection: PropTypes.oneOf(['vertical', 'horizontal']),
  hierarhcySum: PropTypes.func,
  hierarchyChildren: PropTypes.func
};

HierarchicalDiagram.defaultProps = {
  ...NetworkPlot.defaultProps,
  zoom: true, // Zoom the laid out nodes in or out so that they fit the specified size, can also be "stretch" if you want zoom not to maintain aspect ratio
  padding: 0, // Pixel value to separate individual nodes from each other
  projection: 'vertical', // Accepts (vertical|horizontal|radial) whether to display the chart with steps laid out on the y axis (vertical) or the x axis (horizontal)
  hierarhcySum: d => d.value, // Function for summing up children values into parent totals
  hierarchyChildren: d => d.children
};

export default HierarchicalDiagram;
