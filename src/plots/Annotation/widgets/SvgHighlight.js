import React from 'react';

const findPoints = (d, xScale, yScale) => {
  const { points, style } = d;
  return points
    .filter(e => e.x === d.x && e.y === d.y)
    .map((p, q) => {
      const baseStyle = style({ ...p });

      const highlightStyle =
        typeof style === 'function'
          ? style({ ...p, ...p.data }, q)
          : style || {};

      return (
        <circle
          key={`highlight-point-${q}`}
          cx={xScale(p.x)}
          cy={yScale(p.y)}
          r={5}
          fill="none"
          stroke="black"
          strokeWidth={2}
          style={{ ...baseStyle, ...highlightStyle }}
          className={`highlight-annotation ${(d.class &&
            typeof d.class === 'function' &&
            d.class({ ...p, ...p.data }, q)) ||
            (d.class && d.class) ||
            ''}`}
        />
      );
    });
};

const SvgHighlight = ({
  d,
  i,
  xScale,
  yScale,
  projectedAreas,
  idAccessor,
  projectedLines,
  lineStyle
}) => {
  const foundPoints = findPoints(d, xScale, yScale);

  let dID;
  const baseID = idAccessor({ ...d, ...d.data }, i);
  if (baseID !== undefined) {
    dID = baseID;
  } else if (d.parentLine && idAccessor(d.parentLine, i) !== undefined) {
    dID = idAccessor(d.parentLine, i);
  } else if (d.parentSummary && idAccessor(d.parentSummary, i) !== undefined) {
    dID = idAccessor(d.parentSummary, i);
  }

  const foundLines = projectedLines
    .filter((p, q) => idAccessor(p, q) === dID)
    .map((p, q) => {
      const baseStyle = lineStyle(p, q);

      const highlightStyle =
        typeof d.style === 'function' ? d.style(p, q) : d.style || {};

      return (
        <path
          className={`highlight-annotation ${(d.class &&
            typeof d.class === 'function' &&
            d.class(p, q)) ||
            (d.class && d.class) ||
            ''}`}
          key={`highlight-summary-${q}`}
          d={lineGenerator(p.data)}
          fill="none"
          stroke="black"
          strokeWidth={1}
          style={{ ...baseStyle, ...highlightStyle }}
        />
      );
    });

  const foundAreas = projectedAreas
    .filter((p, q) => idAccessor(p, q) === dID)
    .map((p, q) => {
      const baseStyle = areaStyle(p, q);

      const highlightStyle =
        typeof d.style === 'function' ? d.style(p, q) : d.style || {};

      return (
        <path
          className={`highlight-annotation ${(d.class &&
            typeof d.class === 'function' &&
            d.class(p, q)) ||
            (d.class && d.class) ||
            ''}`}
          key={`highlight-summary-${q}`}
          d={`M${p.coordinates.join('L')}`}
          fill="none"
          stroke="black"
          strokeWidth={1}
          style={{ ...baseStyle, ...highlightStyle }}
        />
      );
    });

  return [...foundAreas, ...foundLines, ...foundPoints];
};

export default SvgHighlight;
