import React from 'react';

import contourRenderFn from './summary/contourRenderFn';
import boxplotRenderFn from './summary/boxplotRenderFn';
import bucketizedRenderingFn from './summary/bucketizedRenderingFn';

const summaryRenderHash = {
  contour: contourRenderFn,
  boxplot: boxplotRenderFn,
  violin: bucketizedRenderingFn,
  heatmap: bucketizedRenderingFn,
  joy: bucketizedRenderingFn,
  ridgeline: bucketizedRenderingFn,
  histogram: bucketizedRenderingFn
};

const orFrameSummaryRenderer = ({
  data,
  type,
  renderMode,
  eventListenersGenerator,
  styleFn,
  classFn,
  positionFn,
  projection,
  adjustedSize,
  chartSize,
  baseMarkProps,
  margin
}) => {
  let summaryRenderFn;
  if (typeof type.type === 'function') {
    summaryRenderFn = type.type;
  } else if (summaryRenderHash[type.type]) {
    summaryRenderFn = summaryRenderHash[type.type];
  } else {
    console.error(
      `Invalid summary type: ${
        type.type
      } - Must be a function or one of the following strings: ${Object.keys(
        summaryRenderHash
      ).join(', ')}`
    );
    return;
  }
  return summaryRenderFn({
    data,
    type,
    renderMode,
    eventListenersGenerator,
    styleFn,
    classFn,
    positionFn,
    projection,
    adjustedSize,
    chartSize,
    baseMarkProps,
    margin
  });
};

const drawSummaries = ({
  data,
  type,
  renderMode,
  eventListenersGenerator,
  styleFn,
  classFn,
  positionFn,
  projection,
  adjustedSize,
  margin,
  baseMarkProps
}) => {
  if (!type || !type.type) return;
  type = typeof type === 'string' ? { type } : type;
  const chartSize =
    projection === 'vertical' ? adjustedSize[1] : adjustedSize[0];

  return orFrameSummaryRenderer({
    data,
    type,
    renderMode,
    eventListenersGenerator,
    styleFn,
    classFn,
    positionFn,
    projection,
    adjustedSize,
    chartSize,
    margin,
    baseMarkProps
  });
};

export default drawSummaries;
