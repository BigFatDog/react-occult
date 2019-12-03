import React from 'react';
import PropTypes from 'prop-types';

import SpanOrDiv from '../../widgets/SpanOrDiv';
import TooltipPositioner from '../InteractionLayer/TooltipPositioner';
import HTMLTooltipAnnotation from '../../plots/Annotation/widgets/HTMLTooltipAnnotation';

const AnnotationLayer = props => {
  const {
    size: [width, height],
    useSpans,
    margin: userMargin,
      htmlAnnotations,
      svgAnnotations,
  } = props;

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
          {/*{renderedLegend}*/}
          {svgAnnotations}
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
        {htmlAnnotations}
      </SpanOrDiv>
    </SpanOrDiv>
  );
};

AnnotationLayer.propTypes = {
  margin: PropTypes.object,
  voronoiHover: PropTypes.func,
  tooltipContent: PropTypes.func
};

AnnotationLayer.defaultProps = {
  margin: { top: 0, bottom: 0, left: 0, right: 0 }
};

export default AnnotationLayer;
