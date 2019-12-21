import { Mark } from 'semiotic-mark';
import * as React from 'react';

const chordEdgeGenerator = size => ({
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
    simpleInterpolate={true}
    transform={`translate(${size[0] / 2},${size[1] / 2})`}
    markType="path"
    d={d.d}
    style={styleFn(d, i)}
    aria-label={`Connection from ${d.source.id} to ${d.target.id}`}
    tabIndex={-1}
  />
);

export default chordEdgeGenerator;
