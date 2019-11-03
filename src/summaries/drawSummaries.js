import { orFrameSummaryRenderer } from '../svg/frameFunctions/orFrameSummaryRenderer';

export const drawSummaries = ({
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
  //  canvasRender,
  //  canvasDrawing,
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
    //    canvasRender,
    //    canvasDrawing,
    baseMarkProps
  });
};
