import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
export default (GradientPinkBlue = ({
  from = '#F02FC2',
  to = '#6094EA',
  ...restProps
}) => <LinearGradient from={from} to={to} {...restProps} />);
