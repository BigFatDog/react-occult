import { max, min } from 'd3-array';
import {
  projectAreaData,
  projectLineData,
  differenceLine,
  stackedArea,
  bumpChart,
  lineChart,
  cumulativeLine
} from './lineDrawing';
import contouringProjection from '../summaries/contouringProjection';
import heatmapProjection from '../summaries/heatmapProjection';
import hexbinProjection from '../summaries/hexbinProjection';
import trendliningProjection from '../summaries/trendliningProjection';

import { extentValue } from './unflowedFunctions';

import {
  projectedX,
  projectedY,
  projectedYTop,
  projectedYMiddle,
  projectedYBottom,
  projectedXBottom,
  projectedXMiddle,
  projectedXTop
} from '../constants/coordinateNames';

const builtInTransformations = {
  stackedarea: stackedArea,
  'stackedarea-invert': stackedArea,
  stackedpercent: stackedArea,
  'stackedpercent-invert': stackedArea,
  linepercent: stackedArea,
  difference: differenceLine,
  bumparea: bumpChart,
  bumpline: bumpChart,
  'bumparea-invert': bumpChart,
  line: lineChart,
  area: lineChart,
  cumulative: cumulativeLine,
  'cumulative-reverse': cumulativeLine
};

const differenceCatch = (olineType, data) =>
  olineType === 'difference' && data.length !== 2 ? 'line' : olineType;

const lineTransformation = (lineType, options) => data =>
  builtInTransformations[differenceCatch(lineType.type, data)]({
    ...lineType,
    ...options,
    data
  });

export const projectCoordinates = ({
  lineDataAccessor,
  xAccessor,
  yAccessor,
  summaries,
  points,
  lines,
  lineType,
  showLinePoints,
  showSummaryPoints,
  xExtent,
  yExtent,
  invertX,
  invertY,
  areaDataAccessor,
  summaryType,
  summaryStyleFn,
  summaryClassFn,
  summaryRenderModeFn,
  adjustedSize: size,
  xScaleType,
  yScaleType,
  defined = () => true,
  margin,
  baseMarkProps,
  chartSize
}) => {
  let fullDataset = [];
  let initialProjectedLines = [];

  let projectedPoints = [],
    projectedLines = [],
    projectedSummaries = [];
  if (points) {
    xAccessor.forEach((actualXAccessor, xIndex) => {
      yAccessor.forEach((actualYAccessor, yIndex) => {
        points.forEach((d, i) => {
          const x = actualXAccessor(d, i);
          const y = actualYAccessor(d, i);
          const projectedPoint = { x, y, data: d, xIndex, yIndex };
          if (Array.isArray(y)) {
            projectedPoint[projectedYBottom] = Math.min(...y);
            projectedPoint[projectedYTop] = Math.max(...y);
            projectedPoint[projectedYMiddle] =
              (projectedPoint[projectedYBottom] +
                projectedPoint[projectedYTop]) /
              2;
          }
          if (Array.isArray(x)) {
            projectedPoint[projectedXBottom] = Math.min(...x);
            projectedPoint[projectedXTop] = Math.max(...x);
            projectedPoint[projectedXMiddle] =
              (projectedPoint[projectedXBottom] +
                projectedPoint[projectedXTop]) /
              2;
          }
          projectedPoints.push(projectedPoint);
        });
      });
    });

    fullDataset = [
      ...projectedPoints.map(d => ({
        ...d,
        [projectedY]: d[projectedYTop] || d[projectedYBottom] || d.y
      }))
    ];
  }
  if (lines) {
    initialProjectedLines = projectLineData({
      data: lines,
      lineDataAccessor,
      xProp: projectedX,
      yProp: projectedY,
      yPropTop: projectedYTop,
      yPropBottom: projectedYBottom,
      xAccessor,
      yAccessor
    });

    const optionsObject = {
      xProp: projectedX,
      yProp: projectedY,
      yPropMiddle: projectedYMiddle,
      yPropTop: projectedYTop,
      yPropBottom: projectedYBottom,
      xPropMiddle: projectedXMiddle,
      xPropTop: projectedXTop,
      xPropBottom: projectedXBottom
    };

    projectedLines = lineTransformation(lineType, optionsObject)(
      initialProjectedLines
    );

    projectedLines.forEach(d => {
      fullDataset = [
        ...fullDataset,
        ...d.data
          .filter((p, q) => defined(Object.assign({}, p.data, p), q))
          .map(p => {
            const mappedP = {
              parentLine: d,
              y: p.y,
              x: p.x,
              yTop: p.yTop,
              yMiddle: p.yMiddle,
              yBottom: p.yBottom,
              data: p.data
            };
            if (p.percent) {
              mappedP.percent = p.percent;
            }
            return mappedP;
          })
      ];
    });
    if (showLinePoints) {
      projectedPoints = fullDataset.map(d => ({
        ...d,
        [projectedY]: d[projectedYTop] || d[projectedYBottom] || d.y
      }));
    }
  }

  if (summaries) {
    projectedSummaries = projectAreaData({
      data: summaries,
      areaDataAccessor,
      xProp: projectedX,
      yProp: projectedY,
      yPropTop: projectedYTop,
      yPropBottom: projectedYBottom,
      xAccessor,
      yAccessor
    });

    projectedSummaries.forEach(d => {
      const baseData = d._baseData;
      if (d._xyfCoordinates[0][0][0]) {
        d._xyfCoordinates[0].forEach(multi => {
          multi
            .map((p, q) =>
              Object.assign({ parentSummary: d }, baseData[q], {
                [projectedX]: p[0],
                [projectedY]: p[1]
              })
            )
            .forEach(e => {
              if (showSummaryPoints) {
                projectedPoints.push({
                  ...e,
                  [projectedY]: e[projectedYTop] || e[projectedYBottom] || e.y
                });
              }
              fullDataset.push(e);
            });
        });
      } else {
        d._xyfCoordinates
          .map((p, q) =>
            Object.assign({ parentSummary: d }, baseData[q], {
              [projectedX]: p[0],
              [projectedY]: p[1]
            })
          )
          .forEach(e => {
            if (showSummaryPoints) {
              projectedPoints.push({
                ...e,
                [projectedY]: e[projectedYTop] || e[projectedYBottom] || e.y
              });
            }
            fullDataset.push(e);
          });
      }
    });
  }

  const calculatedXExtent = [
    min(
      fullDataset.map(d =>
        d[projectedXBottom] === undefined
          ? d[projectedX]
          : Math.min(d[projectedXTop], d[projectedXBottom])
      )
    ),

    max(
      fullDataset.map(d =>
        d[projectedXTop] === undefined
          ? d[projectedX]
          : Math.max(d[projectedXBottom], d[projectedXTop])
      )
    )
  ];

  const calculatedYExtent = [
    min(
      fullDataset.map(d =>
        d[projectedYBottom] === undefined
          ? d[projectedY]
          : Math.min(d[projectedYTop], d[projectedYBottom])
      )
    ),

    max(
      fullDataset.map(d =>
        d[projectedYTop] === undefined
          ? d[projectedY]
          : Math.max(d[projectedYBottom], d[projectedYTop])
      )
    )
  ];

  const actualXExtent = extentValue(xExtent);
  const actualYExtent = extentValue(yExtent);

  const xMin =
    actualXExtent && actualXExtent[0] !== undefined
      ? actualXExtent[0]
      : calculatedXExtent[0];
  const xMax =
    actualXExtent && actualXExtent[1] !== undefined
      ? actualXExtent[1]
      : calculatedXExtent[1];

  const yMin =
    actualYExtent && actualYExtent[0] !== undefined
      ? actualYExtent[0]
      : calculatedYExtent[0];
  const yMax =
    actualYExtent && actualYExtent[1] !== undefined
      ? actualYExtent[1]
      : calculatedYExtent[1];

  let finalYExtent = [yMin, yMax];
  let finalXExtent = [xMin, xMax];

  if (invertX && !(actualXExtent && actualXExtent.length === 2)) {
    finalXExtent = [finalXExtent[1], finalXExtent[0]];
  }

  if (
    (lineType.type === 'bumpline' || invertY) &&
    !(actualYExtent && actualYExtent.length === 2)
  ) {
    finalYExtent = [finalYExtent[1], finalYExtent[0]];
  }

  if (
    (lineType.type === 'bumpline' || invertY) &&
    !(actualYExtent && actualYExtent.length === 2)
  ) {
    finalYExtent = [finalYExtent[1], finalYExtent[0]];
  }

  if (summaryType.type && summaryType.type === 'contour') {
    projectedSummaries = contouringProjection({
      summaryType,
      data: projectedSummaries,
      finalXExtent,
      finalYExtent
    });
  } else if (summaryType.type && summaryType.type === 'hexbin') {
    projectedSummaries = hexbinProjection({
      summaryType,
      data: projectedSummaries,
      processedData: summaries && !!summaries[0].processedData,
      preprocess: false,
      finalXExtent,
      finalYExtent,
      size,
      margin,
      baseMarkProps,
      styleFn: summaryStyleFn,
      classFn: summaryClassFn,
      renderFn: summaryRenderModeFn,
      chartSize
    });
    fullDataset = [
      ...projectedSummaries.map(d => ({ ...d })),
      ...fullDataset.filter(d => !d.parentSummary)
    ];
  } else if (summaryType.type && summaryType.type === 'heatmap') {
    projectedSummaries = heatmapProjection({
      summaryType,
      data: projectedSummaries,
      processedData: summaries && !!summaries[0].processedData,
      preprocess: false,
      finalXExtent,
      finalYExtent,
      size,
      margin,
      baseMarkProps,
      styleFn: summaryStyleFn,
      classFn: summaryClassFn,
      renderFn: summaryRenderModeFn,
      chartSize
    });

    fullDataset = [
      ...projectedSummaries.map(d => ({ ...d })),
      ...fullDataset.filter(d => !d.parentSummary)
    ];
  } else if (summaryType.type && summaryType.type === 'trendline') {
    projectedSummaries = trendliningProjection({
      summaryType,
      data: projectedSummaries,
      processedData: summaries && !!summaries[0].processedData,
      preprocess: false,
      finalXExtent,
      finalYExtent,
      size,
      margin,
      baseMarkProps,
      styleFn: summaryStyleFn,
      classFn: summaryClassFn,
      renderFn: summaryRenderModeFn,
      chartSize
    });

    fullDataset = [
      ...projectedSummaries.map(d => ({ ...d })),
      ...fullDataset.filter(d => !d.parentSummary)
    ];
  }

  return {
    xExtent: finalXExtent,
    yExtent: finalYExtent,
    projectedLines,
    projectedPoints,
    projectedSummaries,
    fullDataset,
    calculatedXExtent,
    calculatedYExtent
  };
};
