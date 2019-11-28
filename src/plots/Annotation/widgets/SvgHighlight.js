import * as React from 'react';
import { area } from 'd3-shape';
import { curveHash } from '../../BasePlot/toRenderedLines';

const SvgHighlight = ({
  d,
  i,
  points = { data: [] },
  lines = { data: [], type: {} },
  summaries = { data: [] },
  idAccessor,
  xScale,
  yScale,
  xyFrameRender,
  defined
}) => {
    console.log('-----')
  let dID;
  const baseID = idAccessor({ ...d, ...d.data }, i);
  if (baseID !== undefined) {
    dID = baseID;
  } else if (d.parentLine && idAccessor(d.parentLine, i) !== undefined) {
    dID = idAccessor(d.parentLine, i);
  } else if (d.parentSummary && idAccessor(d.parentSummary, i) !== undefined) {
    dID = idAccessor(d.parentSummary, i);
  }

  const foundPoints = points.data
    .filter((p, q) => idAccessor({ ...p, ...p.data }, q) === dID)
    .map((p, q) => {
      const baseStyle = xyFrameRender.points.styleFn({ ...p, ...p.data });

      const highlightStyle =
        typeof d.style === 'function'
          ? d.style({ ...p, ...p.data }, q)
          : d.style || {};

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

  const lineGenerator = area()
    .x(p => xScale(p.x))
    .y0(p => yScale(p.yBottom))
    .y1(p => yScale(p.yTop));

  const interpolatorSetting = lines.type.interpolator || lines.type.curve;

  const actualInterpolator =
    typeof interpolatorSetting === 'string'
      ? curveHash[interpolatorSetting]
      : interpolatorSetting;

  if (actualInterpolator) {
    lineGenerator.curve(actualInterpolator);
  }

  if (defined) {
    lineGenerator.defined((p, q) => defined(p.data, q));
  }

  const foundLines = lines.data
    .filter((p, q) => idAccessor(p, q) === dID)
    .map((p, q) => {
      const baseStyle = xyFrameRender.lines.styleFn(p, q);

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

  const foundSummaries = summaries.data
    .filter((p, q) => idAccessor(p, q) === dID)
    .map((p, q) => {
      const baseStyle = xyFrameRender.summaries.styleFn(p, q);

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

  return [...foundSummaries, ...foundLines, ...foundPoints];
};

export default SvgHighlight;
