import * as React from 'react';

const DesaturationLayer = ({
  style = { fill: 'white', fillOpacity: 0.5 },
  size,
  i,
  key
}) => (
  <rect
    key={key || `desaturation-${i}`}
    x={-5}
    y={-5}
    width={size[0] + 10}
    height={size[1] + 10}
    style={style}
  />
);

export default DesaturationLayer;
