import React from 'react';
import SpanOrDiv from '../../../widgets/SpanOrDiv';
const HTMLTooltipAnnotation = ({
  content,
  screenCoordinates,
  i,
  d,
  useSpans
}) => {
  //To string because React gives a DOM error if it gets a date
  return (
    <SpanOrDiv
      span={useSpans}
      key={`xylabel-${i}`}
      className={`annotation annotation-xy-label ${d.className || ''} `}
      style={{
        position: 'absolute',
        top: `${d.y}px`,
        left: `${d.x}px`
      }}
    >
      {content}
    </SpanOrDiv>
  );
};

export default HTMLTooltipAnnotation;
