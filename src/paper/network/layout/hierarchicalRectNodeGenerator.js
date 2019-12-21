import { Mark } from 'semiotic-mark';
import * as React from 'react';

const hierarchicalRectNodeGenerator = ({
  d,
  i,
  styleFn,
  renderMode,
  key,
  className,
  baseMarkProps
}) => {
  //this is repetitious
  return (
    <Mark
      {...baseMarkProps}
      key={key}
      transform={`translate(0,0)`}
      markType="rect"
      width={d.x1 - d.x0}
      height={d.y1 - d.y0}
      x={d.x0}
      y={d.y0}
      rx={0}
      ry={0}
      style={styleFn(d, i)}
      renderMode={renderMode ? renderMode(d, i) : undefined}
      className={className}
      aria-label={`Node ${d.id}`}
      tabIndex={-1}
    />
  );
};

export default hierarchicalRectNodeGenerator;
