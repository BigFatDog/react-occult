import React, { Component } from 'react';
import { object, bool, string } from 'prop-types';

class SpanOrDiv extends Component {
  static propTypes = {
    style: object,
    className: string,
    span: bool
  };

  render() {
    const { style, className, children, span } = this.props;
    if (span)
      return (
        <span className={className} style={{ display: 'block', ...style }}>
          {children}
        </span>
      );

    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
}

export default SpanOrDiv;
