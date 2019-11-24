import React from 'react';
import Annotation from './Annotation';

const basicReactAnnotation = ({ screenCoordinates, d, i }) => {
  const noteData = Object.assign(
      {
        dx: 0,
        dy: 0,
        note: { label: d.label, orientation: d.orientation, align: d.align },
        connector: { end: "arrow" }
      },
      d,
      {
        type: d.type,
        screenCoordinates,
        i
      }
  )

  noteData.x = noteData.fixedX ? noteData.fixedX : screenCoordinates[0]
  noteData.y = noteData.fixedY ? noteData.fixedY : screenCoordinates[1]

  return <Annotation key={d.key || `annotation-${i}`} noteData={noteData} />
};

const defaultSVGRule = (
  d,
  i,
  props
) => {
  console.log('---' + d)
  const { showLinePoints, defined, svgAnnotationRules } = props;
  console.log(props)
  const screenCoordinates = [];
  return basicReactAnnotation({ d, screenCoordinates, i });
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
