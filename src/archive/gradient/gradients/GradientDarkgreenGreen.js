import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
const GradientDarkGreen = ({
  from = '#184E86',
  to = '#57CA85',
  ...restProps
}) => <LinearGradient from={from} to={to} {...restProps} />;

export default GradientDarkGreen;
