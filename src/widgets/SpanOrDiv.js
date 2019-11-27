import React from 'react';
import PropTypes from 'prop-types';

const SpanOrDiv = props => {
  const { style, className, children, span } = props;

  return span === true ? (
    <span className={className} style={{ display: 'block', ...style }}>
      {children}
    </span>
  ) : (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

SpanOrDiv.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  span: PropTypes.bool
};

export default SpanOrDiv;
