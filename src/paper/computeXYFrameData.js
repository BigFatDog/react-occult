import { scaleLinear } from 'd3-scale';

import calculateMargin from './utils/calculateMargin';
import {
  getAdjustedPositionSize,
  getFrameScopeExtent,
  toPipeline
} from './utils';
import toAxes from '../axis/toAxes';

const computeXYFrameData = props => {
  const {
    width,
    height,
    title,
    margin: baseMargin,
    // interactions
    xScaleType = scaleLinear,
    yScaleType = scaleLinear,
    plotChildren,
    axesDefs
  } = props;

  const size = [width, height];

  const margin = calculateMargin({
    margin: baseMargin,
    axes: axesDefs,
    title: title
  });

  const { adjustedPosition, adjustedSize } = getAdjustedPositionSize({
    size: [width, height],
    margin
  });

  const frameScopeExtent = getFrameScopeExtent(plotChildren);
  const xRange = [0, adjustedSize[0]];
  const yRange = [adjustedSize[1], 0];

  const frameXScale = xScaleType()
    .domain(frameScopeExtent.xExtent)
    .range(xRange);
  const frameYScale = yScaleType()
    .domain(frameScopeExtent.yExtent)
    .range(yRange);

  // canvasPipeline
  const { canvasPipeline, svgPipeline, xyPoints } = plotChildren
    .map((d, i) =>
      toPipeline({
        ...d.props,
        frameXScale,
        frameYScale,
        margin,
        adjustedSize,
        size
      })
    )
    .reduce(
      (acc, cur) => {
        acc.canvasPipeline = acc.canvasPipeline.concat(cur.canvasPipe);
        acc.svgPipeline = acc.svgPipeline.concat(cur.svgPipe);
        acc.xyPoints = acc.xyPoints.concat(cur.xyPoints);

        return acc;
      },
      { canvasPipeline: [], svgPipeline: [], xyPoints: [] }
    );

  const { axes, axesTickLines } = toAxes({
    axesDefs,
    margin,
    adjustedSize,
    xScale: frameXScale,
    yScale: frameYScale,
    xyPoints
  });

  const screenCoordinates = plotChildren
    .map(d =>
      d.props.data.map(e => ({
        ...e,
        x: d.props.xAccessor(e),
        y: d.props.yAccessor(e),
        screenCoordinates: [
          frameXScale(d.props.xAccessor(e)),
          frameYScale(d.props.yAccessor(e))
        ],
        key: d.key
      }))
    )
    .reduce((acc, cur) => {
      acc = [...acc, ...cur];
      return acc;
    }, []);

  return {
    margin,
    adjustedPosition,
    adjustedSize,
    screenCoordinates,
    axes,
    axesTickLines,
    plotChildren,
    canvasPipeline,
    svgPipeline,
    xyPoints,
    frameXScale,
    frameYScale
  };
};

export default computeXYFrameData;
