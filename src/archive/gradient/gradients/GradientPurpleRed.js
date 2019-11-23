import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
export default (GradientPurpleRed = ({
  from = '#622774',
  to = '#C53364',
  ...restProps
}) => <LinearGradient from={from} to={to} {...restProps} />);
