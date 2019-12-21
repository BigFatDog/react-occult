import React from 'react';
import { Mark } from 'semiotic-mark';
import { quantile } from 'd3-array';

import pointOnArcAtAngle from '../../utils/pointOnArcAtAngle';

const emptyObjectReturnFn = () => ({});

const boxplotRenderFn = ({
  data,
  type,
  renderMode,
  eventListenersGenerator,
  styleFn,
  classFn,
  positionFn = position => position,
  projection,
  adjustedSize,
  baseMarkProps
}) => {
  const summaryElementStylingFn = type.elementStyleFn || emptyObjectReturnFn;

  const keys = Object.keys(data);
  const renderedSummaryMarks = [];
  const summaryXYCoords = [];
  keys.forEach((key, summaryI) => {
    const summary = data[key];
    const eventListeners = eventListenersGenerator(summary, summaryI);

    const columnWidth = summary.width;

    const thisSummaryData = summary.pieceData;

    const calculatedSummaryStyle = styleFn(thisSummaryData[0].data, summaryI);
    const calculatedSummaryClass = classFn(thisSummaryData[0].data, summaryI);

    let summaryPositionNest,
      summaryValueNest,
      translate,
      extentlineX1,
      extentlineX2,
      extentlineY1,
      extentlineY2,
      topLineX1,
      topLineX2,
      midLineX1,
      midLineX2,
      bottomLineX1,
      bottomLineX2,
      rectTopWidth,
      rectTopHeight,
      rectTopY,
      rectTopX,
      rectBottomWidth,
      rectBottomHeight,
      rectBottomY,
      rectBottomX,
      rectWholeWidth,
      rectWholeHeight,
      rectWholeY,
      rectWholeX,
      topLineY1,
      topLineY2,
      bottomLineY1,
      bottomLineY2,
      midLineY1,
      midLineY2;

    const renderValue = renderMode ? renderMode(summary, summaryI) : undefined;

    summaryValueNest = thisSummaryData.map(p => p.value).sort((a, b) => a - b);

    summaryValueNest = [
      quantile(summaryValueNest, 0.0),
      quantile(summaryValueNest, 0.25),
      quantile(summaryValueNest, 0.5),
      quantile(summaryValueNest, 0.75),
      quantile(summaryValueNest, 1.0)
    ];

    if (projection === 'vertical') {
      summaryPositionNest = thisSummaryData
        .map(p => p.scaledVerticalValue)
        .sort((a, b) => b - a);

      summaryPositionNest = [
        quantile(summaryPositionNest, 0.0),
        quantile(summaryPositionNest, 0.25),
        quantile(summaryPositionNest, 0.5),
        quantile(summaryPositionNest, 0.75),
        quantile(summaryPositionNest, 1.0)
      ];

      const xPosition = positionFn(summary.middle, key, summaryI);

      translate = `translate(${xPosition},0)`;
      extentlineX1 = 0;
      extentlineX2 = 0;
      extentlineY1 = summaryPositionNest[0];
      extentlineY2 = summaryPositionNest[4];
      topLineX1 = -columnWidth / 2;
      topLineX2 = columnWidth / 2;
      midLineX1 = -columnWidth / 2;
      midLineX2 = columnWidth / 2;
      bottomLineX1 = -columnWidth / 2;
      bottomLineX2 = columnWidth / 2;
      rectBottomWidth = columnWidth;
      rectBottomHeight = summaryPositionNest[1] - summaryPositionNest[2];
      rectBottomY = summaryPositionNest[2];
      rectBottomX = -columnWidth / 2;
      rectTopWidth = columnWidth;
      rectTopHeight = summaryPositionNest[2] - summaryPositionNest[3];
      rectWholeWidth = columnWidth;
      rectWholeHeight = summaryPositionNest[1] - summaryPositionNest[3];
      rectWholeY = summaryPositionNest[3];
      rectWholeX = -columnWidth / 2;
      rectTopY = summaryPositionNest[3];
      rectTopX = -columnWidth / 2;
      topLineY1 = summaryPositionNest[0];
      topLineY2 = summaryPositionNest[0];
      bottomLineY1 = summaryPositionNest[4];
      bottomLineY2 = summaryPositionNest[4];
      midLineY1 = summaryPositionNest[2];
      midLineY2 = summaryPositionNest[2];

      summaryXYCoords.push(
        {
          label: 'Maximum',
          key,
          summaryPieceName: 'max',
          x: xPosition,
          y: summaryPositionNest[4],
          value: summaryValueNest[4]
        },
        {
          label: '3rd Quartile',
          key,
          summaryPieceName: 'q3area',
          x: xPosition,
          y: summaryPositionNest[3],
          value: summaryValueNest[3]
        },
        {
          label: 'Median',
          key,
          summaryPieceName: 'median',
          x: xPosition,
          y: summaryPositionNest[2],
          value: summaryValueNest[2]
        },
        {
          label: '1st Quartile',
          key,
          summaryPieceName: 'q1area',
          x: xPosition,
          y: summaryPositionNest[1],
          value: summaryValueNest[1]
        },
        {
          label: 'Minimum',
          key,
          summaryPieceName: 'min',
          x: xPosition,
          y: summaryPositionNest[0],
          value: summaryValueNest[0]
        }
      );
    } else if (projection === 'horizontal') {
      summaryPositionNest = thisSummaryData
        .map(p => p.scaledValue)
        .sort((a, b) => a - b);

      summaryPositionNest = [
        quantile(summaryPositionNest, 0.0),
        quantile(summaryPositionNest, 0.25),
        quantile(summaryPositionNest, 0.5),
        quantile(summaryPositionNest, 0.75),
        quantile(summaryPositionNest, 1.0)
      ];

      const yPosition = positionFn(summary.middle, key, summaryI);

      translate = `translate(0,${yPosition})`;
      extentlineY1 = 0;
      extentlineY2 = 0;
      extentlineX1 = summaryPositionNest[0];
      extentlineX2 = summaryPositionNest[4];
      topLineY1 = -columnWidth / 2;
      topLineY2 = columnWidth / 2;
      midLineY1 = -columnWidth / 2;
      midLineY2 = columnWidth / 2;
      bottomLineY1 = -columnWidth / 2;
      bottomLineY2 = columnWidth / 2;
      rectTopHeight = columnWidth;
      rectTopWidth = summaryPositionNest[3] - summaryPositionNest[2];
      rectTopX = summaryPositionNest[2];
      rectTopY = -columnWidth / 2;
      rectBottomHeight = columnWidth;
      rectBottomWidth = summaryPositionNest[2] - summaryPositionNest[1];
      rectBottomX = summaryPositionNest[1];
      rectBottomY = -columnWidth / 2;
      rectWholeHeight = columnWidth;
      rectWholeWidth = summaryPositionNest[3] - summaryPositionNest[1];
      rectWholeX = summaryPositionNest[1];
      rectWholeY = -columnWidth / 2;
      topLineX1 = summaryPositionNest[0];
      topLineX2 = summaryPositionNest[0];
      bottomLineX1 = summaryPositionNest[4];
      bottomLineX2 = summaryPositionNest[4];
      midLineX1 = summaryPositionNest[2];
      midLineX2 = summaryPositionNest[2];

      summaryXYCoords.push(
        {
          label: 'Maximum',
          key,
          summaryPieceName: 'max',
          x: summaryPositionNest[4],
          y: yPosition,
          value: summaryValueNest[4]
        },
        {
          label: '3rd Quartile',
          key,
          summaryPieceName: 'q3area',
          x: summaryPositionNest[3],
          y: yPosition,
          value: summaryValueNest[3]
        },
        {
          label: 'Median',
          key,
          summaryPieceName: 'median',
          x: summaryPositionNest[2],
          y: yPosition,
          value: summaryValueNest[2]
        },
        {
          label: '1st Quartile',
          key,
          summaryPieceName: 'q1area',
          x: summaryPositionNest[1],
          y: yPosition,
          value: summaryValueNest[1]
        },
        {
          label: 'Minimum',
          key,
          summaryPieceName: 'min',
          x: summaryPositionNest[0],
          y: yPosition,
          value: summaryValueNest[0]
        }
      );
    }

    if (projection === 'radial') {
      summaryPositionNest = thisSummaryData
        .map(p => p.scaledValue)
        .sort((a, b) => a - b);

      summaryPositionNest = [
        quantile(summaryPositionNest, 0.0),
        quantile(summaryPositionNest, 0.25),
        quantile(summaryPositionNest, 0.5),
        quantile(summaryPositionNest, 0.75),
        quantile(summaryPositionNest, 1.0)
      ];

      extentlineX1 = 0;
      extentlineX2 = 0;
      extentlineY1 = summaryPositionNest[0];
      extentlineY2 = summaryPositionNest[4];
      topLineX1 = -columnWidth / 2;
      topLineX2 = columnWidth / 2;
      midLineX1 = -columnWidth / 2;
      midLineX2 = columnWidth / 2;
      bottomLineX1 = -columnWidth / 2;
      bottomLineX2 = columnWidth / 2;
      rectTopWidth = columnWidth;
      rectTopHeight = summaryPositionNest[1] - summaryPositionNest[3];
      rectTopY = summaryPositionNest[3];
      rectTopX = -columnWidth / 2;
      rectBottomWidth = columnWidth;
      rectBottomHeight = summaryPositionNest[1] - summaryPositionNest[3];
      rectBottomY = summaryPositionNest[3];
      rectBottomX = -columnWidth / 2;
      topLineY1 = summaryPositionNest[0];
      topLineY2 = summaryPositionNest[0];
      bottomLineY1 = summaryPositionNest[4];
      bottomLineY2 = summaryPositionNest[4];
      midLineY1 = summaryPositionNest[2];
      midLineY2 = summaryPositionNest[2];

      const twoPI = Math.PI * 2;

      const bottomLineArcGenerator = arc()
        .innerRadius(bottomLineY1 / 2)
        .outerRadius(bottomLineY1 / 2);
      //        .padAngle(summary.pct_padding * twoPI);

      const topLineArcGenerator = arc()
        .innerRadius(topLineY1 / 2)
        .outerRadius(topLineY1 / 2);
      //        .padAngle(summary.pct_padding * twoPI);

      const midLineArcGenerator = arc()
        .innerRadius(midLineY1 / 2)
        .outerRadius(midLineY1 / 2);
      //        .padAngle(summary.pct_padding * twoPI);

      const bodyArcTopGenerator = arc()
        .innerRadius(summaryPositionNest[1] / 2)
        .outerRadius(midLineY1 / 2);
      //        .padAngle(summary.pct_padding * twoPI);

      const bodyArcBottomGenerator = arc()
        .innerRadius(midLineY1 / 2)
        .outerRadius(summaryPositionNest[3] / 2);
      //        .padAngle(summary.pct_padding * twoPI);

      const bodyArcWholeGenerator = arc()
        .innerRadius(summaryPositionNest[1] / 2)
        .outerRadius(summaryPositionNest[3] / 2);
      //        .padAngle(summary.pct_padding * twoPI);

      let startAngle = summary.pct_start + summary.pct_padding / 2;
      let endAngle = summary.pct + summary.pct_start - summary.pct_padding / 2;
      const midAngle = summary.pct / 2 + summary.pct_start;
      startAngle *= twoPI;
      endAngle *= twoPI;

      const radialAdjustX = adjustedSize[0] / 2;

      const radialAdjustY = adjustedSize[1] / 2;

      //        const bottomPoint = bottomLineArcGenerator.centroid({ startAngle, endAngle })
      //        const topPoint = topLineArcGenerator.centroid({ startAngle, endAngle })
      const bottomPoint = pointOnArcAtAngle(
        [0, 0],
        midAngle,
        summaryPositionNest[4] / 2
      );
      const topPoint = pointOnArcAtAngle(
        [0, 0],
        midAngle,
        summaryPositionNest[0] / 2
      );
      const thirdPoint = pointOnArcAtAngle(
        [0, 0],
        midAngle,
        summaryPositionNest[3] / 2
      );
      const midPoint = pointOnArcAtAngle(
        [0, 0],
        midAngle,
        summaryPositionNest[2] / 2
      );
      const firstPoint = pointOnArcAtAngle(
        [0, 0],
        midAngle,
        summaryPositionNest[1] / 2
      );

      summaryXYCoords.push(
        {
          label: 'Minimum',
          key,
          summaryPieceName: 'min',
          x: topPoint[0] + radialAdjustX,
          y: topPoint[1] + radialAdjustY,
          value: summaryValueNest[0]
        },
        {
          label: '1st Quartile',
          key,
          summaryPieceName: 'q3area',
          x: firstPoint[0] + radialAdjustX,
          y: firstPoint[1] + radialAdjustY,
          value: summaryValueNest[1]
        },
        {
          label: 'Median',
          key,
          summaryPieceName: 'median',
          x: midPoint[0] + radialAdjustX,
          y: midPoint[1] + radialAdjustY,
          value: summaryValueNest[2]
        },
        {
          label: '3rd Quartile',
          key,
          summaryPieceName: 'q1area',
          x: thirdPoint[0] + radialAdjustX,
          y: thirdPoint[1] + radialAdjustY,
          value: summaryValueNest[3]
        },
        {
          label: 'Maximum',
          key,
          summaryPieceName: 'max',
          x: bottomPoint[0] + radialAdjustX,
          y: bottomPoint[1] + radialAdjustY,
          value: summaryValueNest[4]
        }
      );
      translate = `translate(${radialAdjustX},${radialAdjustY})`;

      renderedSummaryMarks.push(
        <g
          {...eventListeners}
          className={calculatedSummaryClass}
          transform={translate}
          key={`summaryPiece-${summaryI}`}
          role="img"
          tabIndex={-1}
          data-o={key}
          aria-label={`${key} boxplot showing ${summaryXYCoords
            .filter(d => d.key === key)
            .map(d => `${d.label} ${d.value}`)}`}
        >
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="line"
            x1={bottomPoint[0]}
            x2={topPoint[0]}
            y1={bottomPoint[1]}
            y2={topPoint[1]}
            style={Object.assign(
              { strokeWidth: 2 },
              calculatedSummaryStyle,
              summaryElementStylingFn('whisker')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="path"
            d={topLineArcGenerator({ startAngle, endAngle })}
            style={Object.assign(
              { strokeWidth: 4 },
              calculatedSummaryStyle,
              { fill: 'none' },
              summaryElementStylingFn('max')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="path"
            d={midLineArcGenerator({ startAngle, endAngle })}
            style={Object.assign(
              { strokeWidth: 4 },
              calculatedSummaryStyle,
              { fill: 'none' },
              summaryElementStylingFn('median')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="path"
            d={bottomLineArcGenerator({ startAngle, endAngle })}
            style={Object.assign(
              { strokeWidth: 4 },
              calculatedSummaryStyle,
              { fill: 'none' },
              summaryElementStylingFn('min')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="path"
            d={bodyArcWholeGenerator({ startAngle, endAngle })}
            style={Object.assign(
              { strokeWidth: 4 },
              calculatedSummaryStyle,
              summaryElementStylingFn('iqrarea')
            )}
          />

          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="path"
            d={bodyArcTopGenerator({ startAngle, endAngle })}
            style={Object.assign(
              {},
              calculatedSummaryStyle,
              { fill: 'none', stroke: 'none' },
              summaryElementStylingFn('q3area')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="path"
            d={bodyArcBottomGenerator({ startAngle, endAngle })}
            style={Object.assign(
              {},
              calculatedSummaryStyle,
              { fill: 'none', stroke: 'none' },
              summaryElementStylingFn('q1area')
            )}
          />
        </g>
      );
    } else {
      renderedSummaryMarks.push(
        <g
          {...eventListeners}
          className={calculatedSummaryClass}
          transform={translate}
          key={`summaryPiece-${summaryI}`}
          role="img"
          tabIndex={-1}
          data-o={key}
          aria-label={`${key} boxplot showing ${summaryXYCoords
            .filter(d => d.key === key)
            .map(d => `${d.label} ${d.value}`)
            .join(', ')}`}
        >
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="line"
            x1={extentlineX1}
            x2={extentlineX2}
            y1={extentlineY1}
            y2={extentlineY2}
            style={Object.assign(
              { strokeWidth: '2px' },
              calculatedSummaryStyle,
              summaryElementStylingFn('whisker')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="line"
            x1={topLineX1}
            x2={topLineX2}
            y1={topLineY1}
            y2={topLineY2}
            style={Object.assign(
              { strokeWidth: '2px' },
              calculatedSummaryStyle,
              summaryElementStylingFn('min')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="line"
            x1={bottomLineX1}
            x2={bottomLineX2}
            y1={bottomLineY1}
            y2={bottomLineY2}
            style={Object.assign(
              { strokeWidth: '2px' },
              calculatedSummaryStyle,
              summaryElementStylingFn('max')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="rect"
            x={rectWholeX}
            width={rectWholeWidth}
            y={rectWholeY}
            height={rectWholeHeight}
            style={Object.assign(
              { strokeWidth: '1px' },
              calculatedSummaryStyle,
              summaryElementStylingFn('iqrarea')
            )}
          />

          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="rect"
            x={rectTopX}
            width={rectTopWidth}
            y={rectTopY}
            height={rectTopHeight}
            style={Object.assign(
              {},
              calculatedSummaryStyle,
              { fill: 'none', stroke: 'none' },
              summaryElementStylingFn('q3area')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="rect"
            x={rectBottomX}
            width={rectBottomWidth}
            y={rectBottomY}
            height={rectBottomHeight}
            style={Object.assign(
              {},
              calculatedSummaryStyle,
              { fill: 'none', stroke: 'none' },
              summaryElementStylingFn('q1area')
            )}
          />
          <Mark
            {...baseMarkProps}
            renderMode={renderValue}
            markType="line"
            x1={midLineX1}
            x2={midLineX2}
            y1={midLineY1}
            y2={midLineY2}
            style={Object.assign(
              { strokeWidth: '2px' },
              calculatedSummaryStyle,
              summaryElementStylingFn('median')
            )}
          />
        </g>
      );
    }
  });

  return { marks: renderedSummaryMarks, xyPoints: summaryXYCoords };
};

export default boxplotRenderFn;
