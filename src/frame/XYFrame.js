import React from 'react';
import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';

import { BaseProps, BaseDefaultProps } from './BaseProps';
import {
  getFrameScopeExtent,
  getAdjustedPositionSize,
  toPipeline
} from './utils';

const isPlot = type =>
  ['Hexbin', 'Contour', 'Heatmap', 'Line', 'Scatter', 'Trendline'].includes(
    type
  );

import Frame from './Frame';

const XYFrame = props => {
  const {
    width,
    height,
    name,
    className,
    matte,
    frameKey,
    useSpans,
    title,
    foregroundGraphics,
    backgroundGraphics,
    additionalDefs,
    beforeElements,
    afterElements,
    canvasPostProcess,
    overlay,
    tooltipContent,
    interactionOverflow,
    disableCanvasInteraction,
    hoverAnnotation,
    interaction,
    customClickBehavior,
    customHoverBehavior,
    customDoubleClickBehavior,
    children,
    margin: baseMargin,
    // interactions
    xScaleType,
    yScaleType
  } = props;

  const size = [width, height];
  const margin =
    typeof baseMargin !== 'object'
      ? {
          top: baseMargin,
          bottom: baseMargin,
          left: baseMargin,
          right: baseMargin
        }
      : Object.assign({ top: 0, bottom: 0, left: 0, right: 0 }, baseMargin);

  const { adjustedPosition, adjustedSize } = getAdjustedPositionSize({
    size: [width, height],
    margin
  });

  const plotChildren = React.Children.toArray(children).filter(d =>
    isPlot(d.type.name)
  );

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

  const frameProps = {
    name,
    className,
    frameKey,
    useSpans,
    matte,
    width,
    height,
    margin,
    title,
    // render as it is
    foregroundGraphics,
    backgroundGraphics,
    additionalDefs,
    beforeElements,
    afterElements,
    canvasPostProcess,
    // generated
    frameXScale,
    frameYScale,
    canvasPipeline,
    svgPipeline,
    screenCoordinates,
    xyPoints,
    adjustedPosition,
    adjustedSize,
    plotChildren,
    // interaction
    overlay,
    tooltipContent,
    interactionOverflow,
    disableCanvasInteraction,
    hoverAnnotation,
    interaction,
    customClickBehavior,
    customHoverBehavior,
    customDoubleClickBehavior
  };

  return <Frame {...frameProps}>{children}</Frame>;
};

XYFrame.propTypes = {
  ...BaseProps,
  yScaleType: PropTypes.func
};

XYFrame.defaultProps = {
  ...BaseDefaultProps,
  xScaleType: scaleLinear,
  yScaleType: scaleLinear
};

export default XYFrame;
