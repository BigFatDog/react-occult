import React from 'react';
import { scaleLinear } from 'd3-scale';

export const createSummaryAxis = ({
  summary,
  summaryI,
  axisSettings,
  axisCreator,
  projection,
  actualMax,
  adjustedSize,
  columnWidth
}) => {
  let axisTranslate = `translate(${summary.x},0)`;
  let axisDomain = [0, actualMax];
  if (projection === 'horizontal') {
    axisTranslate = `translate(${0},${summary.x})`;
    axisDomain = [actualMax, 0];
  } else if (projection === 'radial') {
    axisTranslate = 'translate(0, 0)';
  }

  const axisWidth = projection === 'horizontal' ? adjustedSize[0] : columnWidth;
  const axisHeight = projection === 'vertical' ? adjustedSize[1] : columnWidth;
  axisSettings.size = [axisWidth, axisHeight];
  const axisScale = scaleLinear()
    .domain(axisDomain)
    .range([0, columnWidth]);

  const renderedSummaryAxis = axisCreator(axisSettings, summaryI, axisScale);

  return (
    <g
      className="summary-axis"
      key={`summaryPiece-axis-${summaryI}`}
      transform={axisTranslate}
    >
      {renderedSummaryAxis}
    </g>
  );
};
