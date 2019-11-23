import React from 'react';
import { axisLines, axisPieces } from './axisMarks';
import Axis from './Axis';

const toAxes = ({ margin, axesDefs, adjustedSize, yScale, xScale }) => {
  let axes = [];
  const axesTickLines = [];
  const existingBaselines = {};

  if (axesDefs) {
    axes = axesDefs.map((d, i) => {
      let axisClassname = d.className || '';
      axisClassname += ' axis';
      let axisScale = yScale;
      if (existingBaselines[d.orient]) {
        d.baseline = d.baseline || false;
      }
      existingBaselines[d.orient] = true;
      if (d.orient === 'top' || d.orient === 'bottom') {
        axisClassname += ' x';
        axisScale = xScale;
      } else {
        axisClassname += ' y';
      }
      axisClassname += ` ${d.orient}`;

      let tickValues;
      if (d.tickValues && Array.isArray(d.tickValues)) {
        tickValues = d.tickValues;
      }
      const axisSize = [adjustedSize[0], adjustedSize[1]];

      const axisParts = axisPieces({
        padding: d.padding,
        tickValues,
        scale: axisScale,
        ticks: d.ticks,
        orient: d.orient,
        size: axisSize,
        footer: d.footer,
        tickSize: d.tickSize
      });
      const tickLineGroup = (
        <g key={`axes-tick-lines-${i}`} className={`axis ${axisClassname}`}>
          {axisLines({
            axisParts,
            orient: d.orient,
            tickLineGenerator: d.tickLineGenerator,
            baseMarkProps: d.baseMarkProps,
            className: axisClassname
          })}
        </g>
      );
      axesTickLines.push(tickLineGroup);
      return (
        <Axis
          label={d.label}
          axisParts={axisParts}
          key={d.key || `axis-${i}`}
          orient={d.orient}
          size={axisSize}
          margin={margin}
          ticks={d.ticks}
          tickSize={d.tickSize}
          tickFormat={d.tickFormat}
          tickValues={tickValues}
          scale={axisScale}
          className={axisClassname}
          padding={d.padding}
          rotate={d.rotate}
          annotationFunction={d.axisAnnotationFunction}
          glyphFunction={d.glyphFunction}
          baseline={d.baseline}
          dynamicLabelPosition={d.dynamicLabelPosition}
          center={d.center}
          marginalSummaryType={d.marginalSummaryType}
        />
      );
    });
  }

  return {
    axes,
    axesTickLines
  };
};

export default toAxes;
