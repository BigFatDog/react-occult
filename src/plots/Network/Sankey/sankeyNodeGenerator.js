import { Mark } from 'semiotic-mark';
import * as React from 'react';

const sankeyNodeGenerator = () => ({
  d,
  i,
  styleFn,
  renderMode,
  key,
  className,
  transform,
  baseMarkProps
}) => {
  const height = d.direction !== 'down' ? d.height : d.width;
  const width = d.direction !== 'down' ? d.width : d.height;
  return (
    <Mark
      {...baseMarkProps}
      renderMode={renderMode ? renderMode(d, i) : undefined}
      key={key}
      className={className}
      transform={transform}
      markType="rect"
      height={height}
      width={width}
      x={-width / 2}
      y={-height / 2}
      rx={0}
      ry={0}
      style={styleFn(d)}
      aria-label={`Node ${d.id}`}
      tabIndex={-1}
    />
  );
};

export default sankeyNodeGenerator;
