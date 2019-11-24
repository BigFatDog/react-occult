import React from 'react';
import { object, number } from 'prop-types';

import SpanOrDiv from '../../widgets/SpanOrDiv';
import getSVGAnnotations from './getSVGAnnotations';
import getHTMLAnnotations from './getHTMLAnnotations';

const AnnotationLayer = props => {
  const { size: [width, height], useSpans, margin: userMargin, renderedLegend } = props;

  const margin =
    typeof userMargin === 'number'
      ? { top: userMargin, left: margin, right: userMargin, bottom: userMargin }
      : userMargin;

  return (
    <SpanOrDiv
      span={useSpans}
      className="annotation-layer"
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        background: 'none'
      }}
    >
      <svg
        className="annotation-layer-svg"
        height={height}
        width={width}
        style={{
          background: 'none',
          pointerEvents: 'none',
          position: 'absolute',
          left: `${margin.left}px`,
          top: `${margin.top}px`,
          overflow: 'visible'
        }}
      >
        <g>
          {renderedLegend}
          {getSVGAnnotations(props)}
        </g>
      </svg>
      <SpanOrDiv
        span={useSpans}
        className="annotation-layer-html"
        style={{
          background: 'none',
          pointerEvents: 'none',
          position: 'absolute',
          height: `${height}px`,
          width: `${width}px`,
          left: `${margin.left}px`,
          top: `${margin.top}px`
        }}
      >
        {getHTMLAnnotations(props)}
      </SpanOrDiv>
    </SpanOrDiv>
  );
};

AnnotationLayer.propTypes = {
  renderedLegend: object
};

AnnotationLayer.defaultProps = {
  margin: { top: 0, bottom: 0, left: 0, right: 0 }
};

export default AnnotationLayer;
