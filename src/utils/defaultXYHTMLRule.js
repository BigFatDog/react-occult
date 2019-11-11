import React from 'react';

import { relativeY, findPointByID } from '../data/lineDrawing';
import {
  projectedX,
  projectedY,
  projectedYMiddle,
  projectedXMiddle
} from '../constants/coordinateNames';

import { findFirstAccessorValue } from '../data/multiAccessorUtils';
import SpanOrDiv from '../utils/SpanOrDiv';
import { htmlTooltipAnnotation } from '../annotationRules/xyframeRules';

const defaultXYHTMLRule = ({
  props,
  annotatedSettings,
  adjustedPosition,
  adjustedSize
}) => ({ d: baseD, i, lines, summaries, points, annotationLayer }) => {
  const { xAccessor, yAccessor } = annotatedSettings;
  const {
    showLinePoints,
    xScale,
    yScale,
    useSpans,
    htmlAnnotationRules,
    tooltipContent
  } = props;

  const { voronoiHover } = annotationLayer;

  let screenCoordinates = [];

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
      content = tooltipContent(d);
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

export default defaultXYHTMLRule;
