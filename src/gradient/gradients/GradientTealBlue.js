import React from 'react';
import LinearGradient from './LinearGradient';

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
export default (GradientTealBlue = ({
  from = '#17EAD9',
  to = '#6078EA',
  ...restProps
}) => <LinearGradient from={from} to={to} {...restProps} />);
