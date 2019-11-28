import React from 'react';
import PropTypes from 'prop-types';
import getExtent from './getExtent';
import stringToFn from '../../utils/stringToFn';
import toRenderedAreas from './toRenderedAreas';
import toRenderedPoints from './toRenderedPoints';
import toRenderedLines from './toRenderedLines';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const Plot = props => {
  const {
    xAccessor,
    yAccessor,
    sAccessor,
    xExtent,
    yExtent,
    showPoints,
    size,
    data,
    projection
  } = props;

  // extents
  const { finalXExtent, finalYExtent } = getExtent({
    data,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent
  });

  // data projection
  const { projectedAreas, projectedPoints, projectedLines } = projection({
    finalXExtent,
    finalYExtent,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints,
    size,
    data,
    ...props
  });

  const {
    frameXScale: xScale,
    frameYScale: yScale,
    // line
    lineStyle,
    lineClass,
    lineRenderMode,
    lineCustomMarks,
    lineUseCanvas,
    //area
    areaStyle,
    areaClass,
    areaRenderMode,
    areaCustomMarks,
    areaUseCanvas,
    // points
    pointStyle,
    pointClass,
    pointRenderMode,
    pointCustomMarks,
    pointUseCanvas
  } = props;

  const { svgPipeline: lineSvg, canvasPipeline: lineCanvas } = toRenderedLines({
    useCanvas: lineUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(lineStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(lineClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(lineRenderMode, undefined, true),
    customMarks: lineCustomMarks,
    data: projectedLines
  });

  const { svgPipeline: areaSvg, canvasPipeline: areaCanvas } = toRenderedAreas({
    useCanvas: areaUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(areaStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(areaClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(areaRenderMode, undefined, true),
    customMarks: areaCustomMarks,
    data: projectedAreas
  });

  const {
    svgPipeline: pointsSvg,
    canvasPipeline: pointsCanvas
  } = toRenderedPoints({
    useCanvas: pointUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(pointStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(pointClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(pointRenderMode, undefined, true),
    customMarks: pointCustomMarks,
    data: projectedPoints
  });

  const svgPipeline = [...lineSvg, ...areaSvg, ...pointsSvg];
  const canvasPipeline = [...lineCanvas, ...areaCanvas, ...pointsCanvas];
  return svgPipeline;
};

Plot.propTypes = {
  projection: PropTypes.func,
  data: PropTypes.array,
  lineStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  lineClass: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  lineRenderMode: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  lineCustomMarks: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  lineUseCanvas: PropTypes.bool,
  areaStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  areaClass: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  areaRenderMode: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  areaCustomMarks: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  areaUseCanvas: PropTypes.bool,
  pointStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pointClass: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pointRenderMode: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pointCustomMarks: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  pointUseCanvas: PropTypes.bool,
  showPoints: PropTypes.bool,
  xExtent: PropTypes.array,
  yExtent: PropTypes.array,
  xAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  yAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  sAccessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Plot.defaultProps = {
  showPoints: true,
  pointUseCanvas: true,
  lineUseCanvas: true,
  areaUseCanvas: true,
};

export default Plot;
