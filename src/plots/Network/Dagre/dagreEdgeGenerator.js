import { Mark } from 'semiotic-mark';
import * as React from 'react';
import { curveMonotoneX, curveMonotoneY, line } from 'd3-shape';
import linearRibbon from '../../../paper/network/layout/linearRibbon';

const horizontalDagreLineGenerator = line()
  .curve(curveMonotoneX)
  .x(d => d.x)
  .y(d => d.y);

const verticalDagreLineGenerator = line()
  .curve(curveMonotoneY)
  .x(d => d.x)
  .y(d => d.y);

const dagreEdgeGenerator = direction => {
  const dagreLineGenerator =
    direction === 'LR' || direction === 'RL'
      ? horizontalDagreLineGenerator
      : verticalDagreLineGenerator;
  return ({ d, i, styleFn, renderMode, key, className, baseMarkProps }) => {
    if (d.ribbon || d.parallelEdges) {
      const ribbonGenerator = linearRibbon();

      ribbonGenerator.x(p => p.x);
      ribbonGenerator.y(p => p.y);
      ribbonGenerator.r(() => d.weight || 1);

      if (d.parallelEdges) {
        const sortedParallelEdges = d.parallelEdges.sort(
          (a, b) => b.weight - a.weight
        );
        return (
          <g key={`${key}`}>
            {ribbonGenerator({
              points: d.points,
              multiple: d.parallelEdges
            }).map((ribbonD, ribbonI) => (
              <Mark
                {...baseMarkProps}
                renderMode={renderMode ? renderMode(d, i) : undefined}
                key={`${key}-${ribbonI}`}
                className={className}
                simpleInterpolate={true}
                markType="path"
                d={ribbonD}
                style={styleFn(sortedParallelEdges[ribbonI], i)}
                aria-label={`Connection from ${d.source.id} to ${d.target.id}`}
                tabIndex={-1}
              />
            ))}
          </g>
        );
      }

      return (
        <Mark
          {...baseMarkProps}
          renderMode={renderMode ? renderMode(d, i) : undefined}
          key={key}
          className={className}
          simpleInterpolate={true}
          markType="path"
          d={ribbonGenerator(d.points)}
          style={styleFn(d, i)}
          aria-label={`Connection from ${d.source.id} to ${d.target.id}`}
          tabIndex={-1}
        />
      );
    }

    return (
      <Mark
        {...baseMarkProps}
        renderMode={renderMode ? renderMode(d, i) : undefined}
        key={key}
        className={className}
        simpleInterpolate={true}
        markType="path"
        d={dagreLineGenerator(d.points)}
        style={styleFn(d, i)}
        aria-label={`Connection from ${d.source.id} to ${d.target.id}`}
        tabIndex={-1}
      />
    );
  };
};

export default dagreEdgeGenerator;
