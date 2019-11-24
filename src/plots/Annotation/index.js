import React from 'react';
import {
  object,
  func,
  array,
  oneOfType,
  bool,
  string,
  node,
  number
} from 'prop-types';

const Annotation = props => {
  return null;
};

Annotation.propTypes = {
  x: number,
  y: number,
  note: oneOfType([object, string]),
  subject: object
};

export default Annotation;
