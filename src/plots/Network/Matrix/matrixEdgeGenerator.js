import { Mark } from 'semiotic-mark';
import React from 'react';

const matrixEdgeGenerator = ({ size, nodes }) => ({
  d,
  i,
  styleFn,
  renderMode,
  key,
  className,
  baseMarkProps
}) => {
  const gridSize = Math.min(...size) / nodes.length;

  return (
    <g key={key}>
      <Mark
        {...baseMarkProps}
        renderMode={renderMode ? renderMode(d, i) : undefined}
        key={key}
        className={className}
        simpleInterpolate={true}
        transform={`translate(${d.source.y},${d.target.y})`}
        markType="rect"
        x={-gridSize / 2}
        y={-gridSize / 2}
        width={gridSize}
        height={gridSize}
        style={styleFn(d, i)}
        aria-label={`Connection from ${d.source.id} to ${d.target.id}`}
        tabIndex={-1}
      />
      <Mark
        {...baseMarkProps}
        renderMode={renderMode ? renderMode(d, i) : undefined}
        key={`${key}-mirror`}
        className={className}
        simpleInterpolate={true}
        transform={`translate(${d.target.y},${d.source.y})`}
        markType="rect"
        x={-gridSize / 2}
        y={-gridSize / 2}
        width={gridSize}
        height={gridSize}
        style={styleFn(d, i)}
        aria-label={`Connection from ${d.source.id} to ${d.target.id}`}
        tabIndex={-1}
      />
    </g>
  );
};

export default matrixEdgeGenerator;
