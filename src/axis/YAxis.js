import React from 'react';
import PropTypes from 'prop-types';
import Axis from './Axis';

const YAxis = props => {
  return <Axis {...props} />;
};

YAxis.propTypes = {
  ...Axis.propTypes,
  orient: PropTypes.oneOf(['left', 'right'])
};

YAxis.defaultProps = {
  orient: 'left'
};

export default YAxis;
