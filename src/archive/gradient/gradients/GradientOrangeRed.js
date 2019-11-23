import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
export default (GradientOrangeRed = ({
  from = '#FCE38A',
  to = '#F38181',
  ...restProps
}) => <LinearGradient from={from} to={to} {...restProps} />);
