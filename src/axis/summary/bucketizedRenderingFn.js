import React from 'react';
import { Mark } from 'semiotic-mark';
import { histogram, max } from 'd3-array';
import { area, line, curveCatmullRom, arc } from 'd3-shape';
import { createSummaryAxis } from './createSummaryAxis';
import { curveHash } from '../../pipeline/toRenderedLines';
const emptyObjectReturnFn = () => ({});
const verticalXYSorting = (a, b) => a.xy.y - b.xy.y;
const horizontalXYSorting = (a, b) => b.xy.x - a.xy.x;

const groupBarMark = ({
  bins,
  binMax,
  relativeBuckets,
  columnWidth,
  projection,
  adjustedSize,
  summaryI,
  summary,
  renderValue,
  summaryStyle,
  type,
  baseMarkProps
}) => {
  const mappedBins = [];
  const mappedPoints = [];
  const actualMax =
    (relativeBuckets && relativeBuckets[summary.name]) || binMax;

  const summaryElementStylingFn = type.elementStyleFn || emptyObjectReturnFn;
  const barPadding = type.padding || 0;

  bins.forEach((d, i) => {
    const opacity = d.value / actualMax;
    const additionalStyle = summaryElementStylingFn(d.value, opacity, d.pieces);
    const finalStyle =
      type.type === 'heatmap'
        ? { opacity: opacity, fill: summaryStyle.fill, ...additionalStyle }
        : { ...summaryStyle, ...additionalStyle };

    const thickness = Math.max(1, d.y1 - barPadding * 2);

    const finalColumnWidth =
      type.type === 'heatmap' ? columnWidth : columnWidth * opacity;
    let yProp = d.y + barPadding;
    let xProp =
      type.type === 'heatmap' || type.flip
        ? -columnWidth / 2
        : columnWidth / 2 - finalColumnWidth;
    let height = thickness;
    let width = finalColumnWidth;
    let xOffset =
      type.type === 'heatmap' ? finalColumnWidth / 2 : finalColumnWidth;
    let yOffset = d.y1 / 2;

    if (projection === 'horizontal') {
      yProp =
        type.type === 'heatmap'
          ? -columnWidth / 2
          : type.flip
          ? -columnWidth / 2
          : columnWidth / 2 - finalColumnWidth;
      xProp = d.y - d.y1 + barPadding;
      height = finalColumnWidth;
      width = thickness;
      yOffset =
        type.type === 'heatmap' ? finalColumnWidth / 2 : finalColumnWidth;
      xOffset = d.y1 / 2;
    } else if (projection === 'radial') {
      const arcGenerator = arc()
        .innerRadius(d.y / 2)
        .outerRadius((d.y + d.y1) / 2);

      const angle = summary.pct - summary.pct_padding;
      let startAngle = summary.pct_middle - summary.pct_padding;

      let endAngle =
        type.type === 'heatmap'
          ? startAngle + angle
          : startAngle + angle * opacity;
      startAngle *= twoPI;
      endAngle *= twoPI;

      const arcAdjustX = adjustedSize[0] / 2;
      const arcAdjustY = adjustedSize[1] / 2;

      const arcTranslate = `translate(${arcAdjustX},${arcAdjustY})`;
      const arcCenter = arcGenerator.centroid({ startAngle, endAngle });
      mappedPoints.push({
        key: summary.name,
        value: d.value,
        pieces: d.pieces.map(p => p.piece),
        label: 'Heatmap',
        x: arcCenter[0] + arcAdjustX,
        y: arcCenter[1] + arcAdjustY
      });
      mappedBins.push(
        <Mark
          {...baseMarkProps}
          markType="path"
          transform={arcTranslate}
          renderMode={renderValue}
          key={`groupIcon-${summaryI}-${i}`}
          d={arcGenerator({ startAngle, endAngle })}
          style={finalStyle}
        />
      );
    }
    if (projection !== 'radial') {
      mappedPoints.push({
        key: summary.name,
        value: d.value,
        pieces: d.pieces.map(p => p.piece),
        label: 'Heatmap',
        x: xProp + xOffset,
        y: yProp + yOffset
      });

      mappedBins.push(
        <Mark
          {...baseMarkProps}
          markType="rect"
          renderMode={renderValue}
          key={`groupIcon-${summaryI}-${i}`}
          x={xProp}
          y={yProp}
          height={height}
          width={width}
          style={finalStyle}
        />
      );
    }
  });

  return { marks: mappedBins, points: mappedPoints };
};

const bucketizedRenderingFn = ({
  data,
  type,
  renderMode,
  eventListenersGenerator,
  styleFn,
  classFn,
  projection,
  adjustedSize,
  chartSize,
  baseMarkProps
}) => {
  const renderedSummaryMarks = [];
  const summaryXYCoords = [];

  const buckets = type.bins || 25;
  const relativeBuckets = type.relative ? {} : false;
  const summaryValueAccessor = type.binValue || (d => d.length);
  let axisCreator;
  if (type.axis) {
    type.axis.orient =
      projection === 'horizontal' &&
      ['left', 'right'].indexOf(type.axis.orient) === -1
        ? 'left'
        : type.axis.orient;
    type.axis.orient =
      projection === 'vertical' &&
      ['bottom', 'top'].indexOf(type.axis.orient) === -1
        ? 'bottom'
        : type.axis.orient;
    axisCreator = axisGenerator;
    if (projection === 'radial') {
      console.error('Summary axes cannot be drawn for radial histograms');
      axisCreator = () => null;
    }
  }

  let bucketSize = chartSize / buckets;

  const keys = Object.keys(data);
  let binMax = 0;
  const calculatedBins = keys.map((key, summaryI) => {
    const summary = data[key];

    const thisSummaryData = summary.xyData;

    const xySorting =
      projection === 'vertical' ? verticalXYSorting : horizontalXYSorting;

    const summaryPositionNest = thisSummaryData.sort(xySorting);

    const violinHist = histogram();
    const binDomain =
      projection === 'vertical' ? [0, chartSize] : [0, chartSize];

    const binOffset = 0;
    const binBuckets = [];

    for (let x = 0; x < buckets; x++) {
      binBuckets.push(binDomain[0] + (x / buckets) * (chartSize - binOffset));
    }
    //    binBuckets.push(binDomain[1]);

    const xyValue =
      projection === 'vertical'
        ? p => p.piece.scaledVerticalValue
        : p => p.piece.scaledValue;

    let keyBins;
    if (type.useBins === false) {
      const calculatedValues = summaryPositionNest.map(value => xyValue(value));
      keyBins = summaryPositionNest
        .map((value, i) => {
          const bucketArray = [];
          bucketArray.x0 = calculatedValues[i] - 1;
          bucketArray.x1 = calculatedValues[i] + 1;
          bucketArray.push(value);
          return bucketArray;
        })
        .sort((a, b) => a.x0 - b.x0);
      bucketSize = chartSize / keyBins.length;
    } else {
      keyBins = violinHist
        .domain(binDomain)
        .thresholds(binBuckets)
        .value(xyValue)(summaryPositionNest);
    }

    keyBins = keyBins.map(d => ({
      y: d.x0,
      y1: d.x1 - d.x0,
      pieces: d,
      value: summaryValueAccessor(d.map(p => p.piece.data))
    }));

    if (type.type === 'histogram' || type.type === 'heatmap') {
      keyBins = keyBins.filter(d => d.value !== 0);
    }

    const relativeMax =
      keyBins.length === 0 ? 0 : max(keyBins.map(d => d.value));
    if (relativeBuckets) {
      relativeBuckets[key] = relativeMax;
    }

    binMax = Math.max(binMax, relativeMax);

    return { bins: keyBins, summary, summaryI, thisSummaryData };
  });
  calculatedBins.forEach(({ bins, summary, summaryI, thisSummaryData }) => {
    const eventListeners = eventListenersGenerator(summary, summaryI);
    const columnWidth = summary.width;
    const renderValue = renderMode && renderMode(summary, summaryI);

    let calculatedSummaryStyle = thisSummaryData[0]
      ? styleFn(thisSummaryData[0].piece.data, summaryI)
      : {};
    let calculatedSummaryClass = thisSummaryData[0]
      ? classFn(thisSummaryData[0].piece.data, summaryI)
      : '';

    let translate = [summary.middle, 0];
    if (projection === 'horizontal') {
      translate = [bucketSize, summary.middle];
    } else if (projection === 'radial') {
      translate = [adjustedSize[0] / 2, adjustedSize[1] / 2];
    }

    const actualMax =
      (relativeBuckets && relativeBuckets[summary.name]) || binMax;

    if (type.type === 'heatmap' || type.type === 'histogram') {
      const mappedBars = groupBarMark({
        bins,
        binMax,
        relativeBuckets,
        columnWidth,
        projection,
        adjustedSize,
        summaryI,
        summary,
        renderValue,
        summaryStyle: calculatedSummaryStyle,
        type,
        baseMarkProps
      });
      const tiles = mappedBars.marks;
      if (projection === 'radial') {
        translate = [0, 0];
      }

      if (type.axis && type.type === 'histogram') {
        renderedSummaryMarks.push(
          createSummaryAxis({
            summary,
            summaryI,
            axisSettings: type.axis,
            axisCreator,
            projection,
            actualMax,
            adjustedSize,
            columnWidth
          })
        );
      }
      mappedBars.points.forEach(d => {
        d.x += translate[0];
        d.y += translate[1];
      });

      summaryXYCoords.push(...mappedBars.points);
      renderedSummaryMarks.push(
        <g
          {...eventListeners}
          transform={`translate(${translate})`}
          key={`summaryPiece-${summaryI}`}
          role="img"
          tabIndex={-1}
          data-o={summary.name}
          aria-label={`${summary.name} ${type.type}`}
        >
          {tiles}
        </g>
      );
    } else if (type.type === 'violin') {
      const subsets = type.subsets || [false];
      bins[0].y = bins[0].y - bucketSize / 2;
      bins[bins.length - 1].y = bins[bins.length - 1].y + bucketSize / 2;

      subsets.forEach((subsettingFn, subsettingIndex) => {
        let actualBins = bins;
        if (subsettingFn) {
          calculatedSummaryStyle = thisSummaryData[0]
            ? styleFn(thisSummaryData[0].piece.data, summaryI, subsettingIndex)
            : {};
          calculatedSummaryClass = thisSummaryData[0]
            ? classFn(thisSummaryData[0].piece.data, summaryI, subsettingIndex)
            : '';
          actualBins = bins.map(d => {
            const actualPieces = d.pieces
              .filter((p, pi) => subsettingFn(p.piece, pi))
              .map(d => d);
            const actualValue = summaryValueAccessor(actualPieces);
            return {
              ...d,
              pieces: actualPieces,
              value: actualValue
            };
          });
        }

        let violinArea = area().curve(type.curve || curveCatmullRom);

        let violinPoints = [];

        if (projection === 'horizontal') {
          actualBins.forEach(summaryPoint => {
            const xValue = summaryPoint.y - bucketSize / 2;
            const yValue = ((summaryPoint.value / actualMax) * columnWidth) / 2;

            violinPoints.push({
              x: xValue,
              y0: -yValue,
              y1: yValue
            });
            summaryXYCoords.push({
              key: summary.name,
              x: xValue + translate[0],
              y: yValue + translate[1],
              pieces: summaryPoint.pieces.map(d => d.piece),
              value: summaryPoint.value
            });
          });
          violinArea
            .x(d => d.x)
            .y0(d => d.y0)
            .y1(d => d.y1)
            .defined(
              (d, i) =>
                d.y0 !== 0 ||
                (violinPoints[i - 1] && violinPoints[i - 1].y0 !== 0) ||
                (violinPoints[i + 1] && violinPoints[i + 1].y0 !== 0)
            );
        } else if (projection === 'vertical') {
          actualBins.forEach(summaryPoint => {
            const yValue = summaryPoint.y + bucketSize / 2;
            const xValue = ((summaryPoint.value / actualMax) * columnWidth) / 2;

            violinPoints.push({
              y: yValue,
              x0: -xValue,
              x1: xValue
            });

            summaryXYCoords.push({
              key: summary.name,
              x: xValue + translate[0],
              y: yValue + translate[1],
              pieces: summaryPoint.pieces.map(d => d.piece),
              value: summaryPoint.value
            });
          });
          violinArea
            .y(d => d.y)
            .x0(d => d.x0)
            .x1(d => d.x1)
            .defined(
              (d, i) =>
                d.x0 !== 0 ||
                (violinPoints[i - 1] && violinPoints[i - 1].x0 !== 0) ||
                (violinPoints[i + 1] && violinPoints[i + 1].x0 !== 0)
            );
        } else if (projection === 'radial') {
          const angle = summary.pct - summary.pct_padding / 2;
          const midAngle = summary.pct_middle;
          violinPoints = actualBins;
          violinArea = inbins => {
            const forward = [];
            const backward = [];
            inbins.forEach(bin => {
              const outsidePoint = pointOnArcAtAngle(
                [0, 0],
                midAngle + (angle * bin.value) / actualMax / 2,
                (bin.y + bin.y1 - bucketSize / 2) / 2
              );
              const insidePoint = pointOnArcAtAngle(
                [0, 0],
                midAngle - (angle * bin.value) / actualMax / 2,
                (bin.y + bin.y1 - bucketSize / 2) / 2
              );

              //Ugh a terrible side effect has appeared
              summaryXYCoords.push({
                key: summary.name,
                x: insidePoint[0] + translate[0],
                y: insidePoint[1] + translate[1],
                pieces: bin.pieces.map(d => d.piece),
                value: bin.value
              });
              summaryXYCoords.push({
                key: summary.name,
                x: outsidePoint[0] + translate[0],
                y: outsidePoint[1] + translate[1],
                pieces: bin.pieces.map(d => d.piece),
                value: bin.value
              });

              forward.push(outsidePoint);
              backward.push(insidePoint);
            });
            return `M${forward.map(d => d.join(',')).join('L')}L${backward
              .reverse()
              .map(d => d.join(','))
              .join('L')}Z`;
          };
        }

        renderedSummaryMarks.push(
          <Mark
            {...baseMarkProps}
            transform={`translate(${translate})`}
            key={`summaryPiece-${summaryI}-${subsettingIndex}`}
            {...eventListeners}
            renderMode={renderValue}
            markType="path"
            className={calculatedSummaryClass}
            style={calculatedSummaryStyle}
            d={violinArea(violinPoints)}
            role="img"
            tabIndex={-1}
            data-o={summary.name}
            aria-label={`${summary.name} distribution`}
          />
        );
      });
    } else if (type.type === 'joy' || type.type === 'ridgeline') {
      const zeroedStart = Object.assign({}, bins[0], { value: 0 });
      const zeroedEnd = Object.assign({}, bins[bins.length - 1], { value: 0 });
      //Ridgeline plots need to visually signify the zero baseline with their start and end position

      zeroedStart.y = zeroedStart.y - bucketSize / 2;
      zeroedEnd.y = zeroedEnd.y + bucketSize / 2;

      const joyBins = [zeroedStart, ...bins, zeroedEnd];
      let joyPoints = [];

      const interpolatorSetting = type.curve || type.interpolator;

      const actualInterpolator =
        typeof interpolatorSetting === 'string'
          ? curveHash[interpolatorSetting]
          : interpolatorSetting;

      let joyArea = line()
        .curve(actualInterpolator || curveCatmullRom)
        .x(d => d.x)
        .y(d => d.y);

      const joyHeight = type.amplitude || 0;

      if (type.axis && type.type === 'histogram') {
        renderedSummaryMarks.push(
          createSummaryAxis({
            summary,
            summaryI,
            axisSettings: { baseline: false, ...type.axis },
            axisCreator,
            projection,
            actualMax,
            adjustedSize,
            columnWidth
          })
        );
      }

      if (projection === 'horizontal') {
        joyBins.forEach((summaryPoint, i) => {
          const xValue = summaryPoint.y - bucketSize / 2;

          const yValue = type.flip
            ? (summaryPoint.value / actualMax) * (columnWidth + joyHeight) -
              columnWidth / 2
            : (-summaryPoint.value / actualMax) * (columnWidth + joyHeight) +
              columnWidth / 2;

          joyPoints.push({
            y: yValue,
            x: xValue
          });

          //Don't make an interaction point for the first or last
          if (i !== 0 && i !== joyBins.length - 1) {
            summaryXYCoords.push({
              key: summary.name,
              x: xValue + translate[0],
              y: yValue + translate[1],
              pieces: summaryPoint.pieces.map(d => d.piece),
              value: summaryPoint.value
            });
          }
        });
      } else if (projection === 'vertical') {
        joyBins.forEach(summaryPoint => {
          const yValue = summaryPoint.y + bucketSize / 2;
          const xValue =
            type.flip === true
              ? (summaryPoint.value / actualMax) * (columnWidth + joyHeight) -
                columnWidth / 2
              : (-summaryPoint.value / actualMax) * (columnWidth + joyHeight) +
                columnWidth / 2;

          joyPoints.push({
            y: yValue,
            x: xValue
          });

          summaryXYCoords.push({
            key: summary.name,
            x: xValue + translate[0],
            y: yValue + translate[1],
            pieces: summaryPoint.pieces.map(d => d.piece),
            value: summaryPoint.value
          });
        });
      } else if (projection === 'radial') {
        const angle = summary.pct - summary.pct_padding / 2;
        const midAngle = summary.pct_start + summary.pct_padding / 2;

        translate = [0, 0];
        joyPoints = joyBins;
        joyArea = inbins => {
          const forward = [];
          inbins.forEach(bin => {
            const outsidePoint = pointOnArcAtAngle(
              [adjustedSize[0] / 2, adjustedSize[1] / 2],
              midAngle + (angle * bin.value) / actualMax,
              (bin.y + bin.y1 - bucketSize / 2) / 2
            );
            //Ugh a terrible side effect has appeared
            summaryXYCoords.push({
              key: summary.name,
              x: outsidePoint[0] + translate[0],
              y: outsidePoint[1] + translate[1],
              pieces: bin.pieces.map(d => d.piece),
              value: bin.value
            });

            forward.push(outsidePoint);
          });
          return `M${forward.map(d => d.join(',')).join('L')}Z`;
        };
      }

      if (type.axis) {
        renderedSummaryMarks.push(
          createSummaryAxis({
            summary,
            summaryI,
            axisSettings: type.axis,
            axisCreator,
            projection,
            actualMax,
            adjustedSize,
            columnWidth
          })
        );
      }

      renderedSummaryMarks.push(
        <Mark
          {...baseMarkProps}
          transform={`translate(${translate})`}
          key={`summaryPiece-${summaryI}`}
          {...eventListeners}
          renderMode={renderValue}
          markType="path"
          className={calculatedSummaryClass}
          style={calculatedSummaryStyle}
          d={joyArea(joyPoints)}
          role="img"
          tabIndex={-1}
          data-o={summary.name}
          aria-label={`${summary.name} distribution`}
        />
      );
    }
  });

  return { marks: renderedSummaryMarks, xyPoints: summaryXYCoords };
};

export default bucketizedRenderingFn;
