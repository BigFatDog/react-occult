import React from 'react';

import { packEnclose } from 'd3-hierarchy';
import CircleEnclosure from './CircleEnclosure';

const SvgEncloseAnnotation = ({ screenCoordinates, d, i }) => {
  const circle = packEnclose(
    screenCoordinates.map(p => ({ x: p.x, y: p.y, r: 2 }))
  );

  const baseProps = { d, circle, i };

  return <CircleEnclosure {...baseProps} />;
};

export default SvgEncloseAnnotation;
