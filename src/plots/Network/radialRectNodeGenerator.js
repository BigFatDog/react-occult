import { arc } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { Mark } from 'semiotic-mark';
import arcTweener from '../../utils/arcTweener';
import * as React from 'react';

const radialRectNodeGenerator = (size, center, type) => {
  const radialArc = arc();
  const { angleRange = [0, 360] } = type;
  const rangePct = angleRange.map(d => d / 360);
  const rangeMod = rangePct[1] - rangePct[0];

  const adjustedPct =
    rangeMod < 1
      ? scaleLinear()
          .domain([0, 1])
          .range(rangePct)
      : d => d;

  return ({ d, i, styleFn, renderMode, key, className, baseMarkProps }) => {
    radialArc.innerRadius(d.y0 / 2).outerRadius(d.y1 / 2);

    return (
      <Mark
        {...baseMarkProps}
        key={key}
        transform={`translate(${center})`}
        markType="path"
        d={radialArc({
          startAngle: adjustedPct(d.x0 / size[0]) * Math.PI * 2,
          endAngle: adjustedPct(d.x1 / size[0]) * Math.PI * 2
        })}
        customTween={{
          fn: arcTweener,
          props: {
            startAngle: adjustedPct(d.x0 / size[0]) * Math.PI * 2,
            endAngle: adjustedPct(d.x1 / size[0]) * Math.PI * 2,
            innerRadius: d.y0 / 2,
            outerRadius: d.y1 / 2
          }
        }}
        style={styleFn(d, i)}
        renderMode={renderMode ? renderMode(d, i) : undefined}
        className={className}
        aria-label={`Node ${d.id}`}
        tabIndex={-1}
      />
    );
  };
};

export default radialRectNodeGenerator;
