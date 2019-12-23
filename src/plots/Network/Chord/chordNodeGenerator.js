import { Mark } from 'semiotic-mark';
import * as React from 'react';

const chordNodeGenerator = ({ size }) => ({
  d,
  i,
  styleFn,
  renderMode,
  key,
  className,
  baseMarkProps
}) => (
  <Mark
    {...baseMarkProps}
    renderMode={renderMode ? renderMode(d, i) : undefined}
    key={key}
    className={className}
    transform={`translate(${size[0] / 2},${size[1] / 2})`}
    markType="path"
    d={d.d}
    style={styleFn(d, i)}
    aria-label={`Node ${d.id}`}
    tabIndex={-1}
  />
);

export default chordNodeGenerator;
