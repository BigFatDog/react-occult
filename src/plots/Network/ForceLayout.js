import React from 'react';
import PropTypes from 'prop-types';
import NetworkPlot from './NetworkPlot';

//The built-in force types are force, and motifs.
const ForceLayout = props => {};

ForceLayout.propTypes = {
  ...NetworkPlot.propTypes,
  zoom: PropTypes.bool,
  iterations: PropTypes.number,
  edgeStrength: PropTypes.number,
  distanceMax: PropTypes.number,
  edgeDistance: PropTypes.number,
  forceManyBody: PropTypes.oneOfType([PropTypes.number, PropTypes.func])
};

ForceLayout.defaultProps = {
  ...NetworkPlot.defaultProps,
  zoom: true, // Zoom the laid out nodes in or out so that they fit the specified size, can also be "stretch" if you want zoom not to maintain aspect ratio
  iterations: 500, // How many times to run forceSimulation
  edgeStrength: 0.1, // What modifier to use for the strength of connection between nodes with edges
  forceManyBody: d => -25 * nodeSizeAccessor(d) // Strength of the built in charge
};

export default ForceLayout;
