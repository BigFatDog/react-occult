import React from 'react';
import { desaturationLayer } from './baseRules';
import {
  svgXYAnnotation,
  basicReactAnnotation,
  svgEncloseAnnotation,
  svgRectEncloseAnnotation,
  svgHullEncloseAnnotation,
  svgXAnnotation,
  svgYAnnotation,
  svgBoundsAnnotation,
  svgLineAnnotation,
  svgAreaAnnotation
} from './cartesianRules';

const defaultSVGRule = (d, i, props) => {
  const { xScale, yScale, adjustedSize, adjustedPosition, margin } = props;
  const screenCoordinates = [
    d.x ? d.x : 0,
    d.y ? adjustedSize[1] - d.y : adjustedSize[1]
  ];

  if (d.type === 'desaturation-layer') {
    return desaturationLayer({
      style: d.style instanceof Function ? d.style(d, i) : d.style,
      size: adjustedSize,
      i,
      key: d.key
    });
  } else if (d.type === 'xy' || d.type === 'frame-hover') {
    return svgXYAnnotation({ d, i, screenCoordinates });
  } else if (d.type === 'react-annotation' || typeof d.type === 'function') {
    return basicReactAnnotation({ d, screenCoordinates, i });
  } else if (d.type === 'enclose') {
    return svgEncloseAnnotation({ d, screenCoordinates, i });
  } else if (d.type === 'enclose-rect') {
    return svgRectEncloseAnnotation({ d, screenCoordinates, i });
  } else if (d.type === 'enclose-hull') {
    return svgHullEncloseAnnotation({ d, screenCoordinates, i });
  } else if (d.type === 'x') {
    return svgXAnnotation({
      d,
      screenCoordinates,
      i,
      adjustedSize
    });
  } else if (d.type === 'y') {
    return svgYAnnotation({
      d,
      screenCoordinates,
      i,
      adjustedSize,
      adjustedPosition
    });
  } else if (d.type === 'bounds') {
    return svgBoundsAnnotation({
      d,
      i,
      adjustedSize,
      xAccessor,
      yAccessor,
      xScale,
      yScale
    });
  } else if (d.type === 'line') {
    return svgLineAnnotation({ d, i, screenCoordinates });
  } else if (d.type === 'area') {
    return svgAreaAnnotation({
      d,
      i,
      xScale,
      xAccessor,
      yScale,
      yAccessor,
      annotationLayer
    });
  } else if (d.type === 'horizontal-points') {
    return svgHorizontalPointsAnnotation({
      d,
      lines: lines.data,
      points: points.data,
      xScale,
      yScale,
      pointStyle: points.styleFn
    });
  } else if (d.type === 'vertical-points') {
    return svgVerticalPointsAnnotation({
      d,
      lines: lines.data,
      points: points.data,
      xScale,
      yScale,
      pointStyle: points.styleFn
    });
  }
  return null;
};

const defaultHTMLRule = ({
  adjustedPosition,
  adjustedSize,
  xAccessor,
  yAccessor,
  showLinePoints,
  xScale,
  yScale,
  props,
  annotatedSettings
}) => ({ d: baseD, i, lines, summaries, points, annotationLayer }) => {
  const { voronoiHover } = annotationLayer;

  let screenCoordinates = [];

  const {
    useSpans,
    tooltipContent,
    optimizeCustomTooltipPosition,
    htmlAnnotationRules,
    size
  } = props;

  const idAccessor = annotatedSettings.lineIDAccessor;
  const d = findPointByID({
    point: baseD,
    idAccessor,
    lines,
    xScale,
    projectedX,
    xAccessor
  });

  if (!d) {
    return null;
  }

  const xCoord =
    d[projectedXMiddle] ||
    d[projectedX] ||
    findFirstAccessorValue(xAccessor, d);
  const yCoord =
    d[projectedYMiddle] ||
    d[projectedY] ||
    findFirstAccessorValue(yAccessor, d);

  const xString = xCoord && xCoord.toString ? xCoord.toString() : xCoord;
  const yString = yCoord && yCoord.toString ? yCoord.toString() : yCoord;
  if (!d.coordinates) {
    screenCoordinates = [
      xScale(xCoord) || 0,
      relativeY({
        point: d,
        projectedYMiddle,
        projectedY,
        showLinePoints,
        yAccessor,
        yScale
      }) || 0
    ];
  } else {
    screenCoordinates = d.coordinates.map(p => {
      const foundP = findPointByID({
        point: { x: 0, y: 0, ...p },
        idAccessor,
        lines,
        xScale,
        projectedX,
        xAccessor
      });
      return [
        (xScale(findFirstAccessorValue(xAccessor, d)) || 0) +
          adjustedPosition[0],
        (relativeY({
          point: foundP,
          projectedYMiddle,
          projectedY,
          yAccessor,
          yScale
        }) || 0) + adjustedPosition[1]
      ];
    });
  }

  const customAnnotation =
    htmlAnnotationRules &&
    htmlAnnotationRules({
      d,
      i,
      screenCoordinates,
      xScale,
      yScale,
      xAccessor,
      yAccessor,
      xyFrameProps: props,
      summaries,
      points,
      lines,
      voronoiHover,
      adjustedPosition,
      adjustedSize,
      annotationLayer
    });

  if (htmlAnnotationRules && customAnnotation !== null) {
    return customAnnotation;
  }
  if (d.type === 'frame-hover') {
    let content = (
      <SpanOrDiv span={useSpans} className="tooltip-content">
        <p key="html-annotation-content-1">{xString}</p>
        <p key="html-annotation-content-2">{yString}</p>
        {d.percent ? (
          <p key="html-annotation-content-3">
            {Math.floor(d.percent * 1000) / 10}%
          </p>
        ) : null}
      </SpanOrDiv>
    );

    if (d.type === 'frame-hover' && tooltipContent) {
      content = optimizeCustomTooltipPosition ? (
        <TooltipPositioner
          tooltipContent={tooltipContent}
          tooltipContentArgs={d}
        />
      ) : (
        tooltipContent(d)
      );
    }
    return htmlTooltipAnnotation({
      content,
      screenCoordinates,
      i,
      d,
      useSpans
    });
  }
  return null;
};

export { defaultSVGRule, defaultHTMLRule };
