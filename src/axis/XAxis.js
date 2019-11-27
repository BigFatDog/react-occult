import React from 'react';
import PropTypes from 'prop-types';
import Axis from './Axis';

const XAxis = props => {
  return <Axis {...props} />;
};

XAxis.propTypes = {
  ...Axis.propTypes,
  orient: PropTypes.oneOf(['top', 'bottom'])
};

XAxis.defaultProps = {
  orient: 'bottom'
};

export default XAxis;
