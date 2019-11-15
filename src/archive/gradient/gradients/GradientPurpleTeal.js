import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
export default (GradientPurpleTeal = ({
  from = '#5B247A',
  to = '#1BCEDF',
  ...restProps
}) => <LinearGradient from={from} to={to} {...restProps} />);
