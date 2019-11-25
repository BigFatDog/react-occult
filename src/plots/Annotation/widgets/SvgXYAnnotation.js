import { Mark } from 'semiotic-mark';
import * as React from 'react';

const SvgXYAnnotation = ({ screenCoordinates, i, d }) => {
  let inlineStyle;
  if (d.color) inlineStyle = { fill: d.color };

  const laLine = (
    <Mark
      className={`annotation ${d.type} ${d.className || ''} `}
      key={`annotationpoint${i}`}
      markType="circle"
      cx={screenCoordinates[0]}
      cy={screenCoordinates[1]}
      forceUpdate={true}
      style={inlineStyle}
      fill="none"
      stroke="black"
      r={5}
    />
  );
  let laLabel;
  if (d.type === 'xy') {
    laLabel = (
      <Mark
        markType="text"
        key={`${d.label}annotationtext${i}`}
        forceUpdate={true}
        x={screenCoordinates[0]}
        y={10 + screenCoordinates[1]}
        className={`annotation annotation-xy-label ${d.className || ''} `}
      >
        {d.label}
      </Mark>
    );
  }

  return [laLine, laLabel];
};

export default SvgXYAnnotation;
