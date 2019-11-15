import React from 'react';
import {object, bool, string} from 'prop-types';

const SpanOrDiv = props => {
    const {style, className, children, span} = props;

    return span === true ? (
        <span className={className} style={{display: 'block', ...style}}>
          {children}
        </span>
    ) : <div className={className} style={style}>
        {children}
    </div>
};

SpanOrDiv.propTypes = {
    style: object,
    className: string,
    span: bool
};

export default SpanOrDiv;
