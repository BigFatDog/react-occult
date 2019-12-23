import React from 'react';
import PropTypes from 'prop-types';
import OrdinalPlot from '../OrdinalPlot';
import swarmLayout from './swarmLayout';

const Swarm = props => {};

Swarm.layout = swarmLayout;

Swarm.propTypes = {
  ...OrdinalPlot.propTypes,
  r: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  iterations: PropTypes.number,
  strength: PropTypes.number
};

Swarm.defaultProps = {
  ...OrdinalPlot.defaultProps,
  r: 10,
  iterations: 120,
  strength: 2
};

export default Swarm;
