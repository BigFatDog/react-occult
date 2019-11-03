import { contourRenderFn } from '../../summaries/contourRenderFn';
import { boxplotRenderFn } from '../../summaries/boxplotRenderFn';
import { bucketizedRenderingFn } from '../../summaries/bucketizedRenderingFn';

const summaryRenderHash = {
  contour: contourRenderFn,
  boxplot: boxplotRenderFn,
  violin: bucketizedRenderingFn,
  heatmap: bucketizedRenderingFn,
  joy: bucketizedRenderingFn,
  ridgeline: bucketizedRenderingFn,
  histogram: bucketizedRenderingFn
};

export function orFrameSummaryRenderer({
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
}) {
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
}
