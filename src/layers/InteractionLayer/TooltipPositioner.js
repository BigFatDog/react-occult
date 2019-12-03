import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TooltipPositioner = props => {
  const containerRef = useRef();
  const { tooltipContent, tooltipContentArgs } = props;

  let offset = null;
  let tooltipContainerInitialDimensions = {};

  // simple heuristics to check if the tooltip container exceeds the viewport
  // if so, capture the suggested offset
  if (containerRef && containerRef.current) {
    offset = { x: 0, y: 0 };
    tooltipContainerInitialDimensions = containerRef.current.getBoundingClientRect();
    const { right, left, top, bottom } = tooltipContainerInitialDimensions;
    const containerWidth = right - left;
    const containerHeight = bottom - top;

    if (right > window.innerWidth) {
      offset.x = -containerWidth;
    } else if (left < 0) {
      offset.x = containerWidth;
    }
    if (bottom > window.innerHeight) {
      offset.y = -containerHeight;
    } else if (top < 0) {
      offset.y = containerHeight;
    }
  }

  const containerStyle = offset
    ? {
        transform: `translate(${offset.x}px,${offset.y}px)`
      }
    : {
        opacity: 0
      };

  const tooltipContainerAttributes = {
    offset: offset || { x: 0, y: 0 },
    tooltipContainerInitialDimensions
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      {tooltipContent({ ...tooltipContentArgs, tooltipContainerAttributes })}
    </div>
  );
};

TooltipPositioner.propTypes = {
  tooltipContent: PropTypes.func,
  tooltipContentArgs: PropTypes.object
};

export default TooltipPositioner;
