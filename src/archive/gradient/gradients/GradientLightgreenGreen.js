import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
export default (GradientLightgreenGreen = ({
  from = '#42E695',
  to = '#3BB2B8',
  ...restProps
}) => <LinearGradient from={from} to={to} {...restProps} />);
