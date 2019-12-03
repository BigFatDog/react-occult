import React from 'react';
import PropTypes from 'prop-types';
import SpanOrDiv from '../../../widgets/SpanOrDiv';
import TooltipPositioner from "../../../layers/InteractionLayer/TooltipPositioner";
const HTMLTooltipAnnotation = ({
  tooltipContent,
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
        <TooltipPositioner
            tooltipContent={tooltipContent}
            tooltipContentArgs={d}
        />
    </SpanOrDiv>
  );
};

HTMLTooltipAnnotation.propTypes = {
    tooltipContent: PropTypes.func,
    i: PropTypes.number,
    d: PropTypes.object,
    useSpans: PropTypes.bool
};

export default HTMLTooltipAnnotation;
