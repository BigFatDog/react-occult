import { curveBasis, line } from 'd3-shape';
import { Mark } from 'semiotic-mark';
import * as React from 'react';

const arcEdgeGenerator = ({ size }) => {
  const yAdjust = size[1] / size[0];
  function arcDiagramArc(d) {
    const draw = line().curve(curveBasis);
    const midX = (d.source.x + d.target.x) / 2;
    const midY = d.source.x - d.target.x;
    return draw([
      [d.source.x, 0],
      [midX, midY * yAdjust],
      [d.target.x, 0]
    ]);
  }

  return ({ d, i, styleFn, renderMode, key, className, baseMarkProps }) => {
    return (
      <Mark
        {...baseMarkProps}
        renderMode={renderMode ? renderMode(d, i) : undefined}
        key={key}
        className={className}
        simpleInterpolate={true}
        markType="path"
        transform={`translate(0,${size[1] / 2})`}
        d={arcDiagramArc(d)}
        style={styleFn(d, i)}
        aria-label={`Connection from ${d.source.id} to ${d.target.id}`}
        tabIndex={-1}
      />
    );
  };
};

export default arcEdgeGenerator;
