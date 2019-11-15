import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
export default (GradientPinkRed = ({
  from = '#F54EA2',
  to = '#FF7676',
  ...restProps
}) => <LinearGradient from={from} to={to} {...restProps} />);
