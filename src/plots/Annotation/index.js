import React from 'react';
import PropTypes from 'prop-types';

const Annotation = props => {
  return null;
};

Annotation.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  coordinates: PropTypes.array,
  note: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  subject: PropTypes.object
};

export default Annotation;
