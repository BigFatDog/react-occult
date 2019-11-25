import { line } from 'd3-shape';
import { Mark } from 'semiotic-mark';
import * as React from 'react';

const SvgLineAnnotation = ({ d, i, screenCoordinates }) => {
  const lineGenerator = line()
    .x(p => p[0])
    .y(p => p[1]);
  const lineD = lineGenerator(screenCoordinates);
  const laLine = (
    <Mark
      key={`${d.label}annotationline${i}`}
      markType="path"
      d={lineD}
      className={`annotation annotation-line ${d.className || ''} `}
    />
  );

  const laLabel = (
    <Mark
      markType="text"
      key={`${d.label}annotationlinetext${i}`}
      x={(screenCoordinates[0][0] + screenCoordinates[1][0]) / 2}
      y={(screenCoordinates[0][1] + screenCoordinates[1][1]) / 2}
      className={`annotation annotation-line-label ${d.className || ''} `}
    >
      {d.label}
    </Mark>
  );

  return [laLine, laLabel];
};

export default SvgLineAnnotation;
