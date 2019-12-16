import React from 'react';
import PropTypes from 'prop-types';

const Bar = props => {
  return null;
};

Bar.propTypes = {
  xScaleType: PropTypes.func,
  yScaleType: PropTypes.func,
  xExtent: PropTypes.array,
  yExtent: PropTypes.array,
  xAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  yAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  sAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

export default Bar;
