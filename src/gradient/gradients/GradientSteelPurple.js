import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
export default (GradientSteelPurple = ({
  from = '#65799B',
  to = '#5E2563',
  ...restProps
}) => <LinearGradient from={from} to={to} {...restProps} />);
