import { Mark } from 'semiotic-mark';
import React from 'react';

const circleNodeGenerator = () => ({
  d,
  i,
  styleFn,
  renderMode,
  key,
  className,
  transform,
  baseMarkProps
}) => {
  return (
    <Mark
      {...baseMarkProps}
      key={key}
      transform={transform}
      markType="rect"
      width={d.nodeSize * 2}
      height={d.nodeSize * 2}
      ry={d.nodeSize * 2}
      rx={d.nodeSize * 2}
      x={-d.nodeSize}
      y={-d.nodeSize}
      style={styleFn(d, i)}
      renderMode={renderMode ? renderMode(d, i) : undefined}
      className={className}
      aria-label={`Node ${d.id}`}
      tabIndex={-1}
    />
  );
};

export default circleNodeGenerator;
