import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { axisLabels, axisPieces, axisLines } from './axisMarks';
import drawSummaries from './drawSummaries';
const ORIENTATIONS = ['top', 'bottom', 'left', 'right'];

const marginalPointMapper = (orient, width, data) => {
  const xMod = orient === 'left' || orient === 'right' ? width / 2 : 0;
  const yMod = orient === 'bottom' || orient === 'top' ? width / 2 : 0;
  return data.map(p => [p.xy.x + xMod, p.xy.y + yMod]);
};

const formatValue = (value, props) => {
  if (props.tickFormat) {
    return props.tickFormat(value);
  }
  if (value.toString) {
    return value.toString();
  }
  return value;
};

const Axis = props => {
  const [hoverAnnotation, setHoverAnnotation] = useState(0);
  const [calculatedLabelPosition, setCalculatedLabelPosition] = useState(null);

  let axisRef = null;

  const boundingBoxMax = () => {
    // && this.props.dynamicLabel ???
    if (!axisRef) return 30;
    const { orient = 'left' } = props;

    const positionType =
      orient === 'left' || orient === 'right' ? 'width' : 'height';

    return (
      Math.max(
        ...[...axisRef.querySelectorAll('.axis-label')]
          .map(l => (l.getBBox && l.getBBox()) || { height: 30, width: 30 })
          .map(d => d[positionType])
      ) + 25
    );
  };

  useEffect(() => {
    const { label, dynamicLabelPosition } = props;
    if (!label.position && dynamicLabelPosition) {
      const newBBMax = boundingBoxMax();
      if (newBBMax !== calculatedLabelPosition) {
        setCalculatedLabelPosition(newBBMax);
      }
    }
  });

  const {
    rotate,
    label,
    orient,
    size,
    width,
    height,
    className,
    padding,
    tickValues,
    scale,
    ticks,
    footer,
    tickSize,
    tickLineGenerator,
    baseline,
    margin,
    center,
    annotationFunction,
    glyphFunction,
    marginalSummaryType,
    tickFormat = marginalSummaryType ? () => '' : d => d,
    jaggedBase,
    showLabels
  } = props;

  console.log(showLabels);

  let { axisParts, position = [0, 0] } = props;

  let axisTickLines;

  if (!axisParts) {
    axisParts = axisPieces({
      padding: padding,
      tickValues,
      scale,
      ticks,
      orient,
      size: [width, height],
      footer,
      tickSize
    });
    axisTickLines = (
      <g className={`axis ${className}`}>
        {axisLines({
          axisParts,
          orient,
          tickLineGenerator,
          className,
          jaggedBase
        })}
      </g>
    );
  }
  if (axisParts.length === 0) {
    return null;
  }

  let hoverWidth = 50;
  let hoverHeight = height;
  let hoverX = -50;
  let hoverY = 0;
  let baselineX = 0;
  let baselineY = 0;
  let baselineX2 = 0;
  let baselineY2 = height;

  let hoverFunction = e => setHoverAnnotation(e.nativeEvent.offsetY);
  let circleX = 25;
  let textX = -25;
  let textY = 18;
  let lineWidth = width + 25;
  let lineHeight = 0;
  let circleY = hoverAnnotation;
  let annotationOffset = 0;
  let annotationType = 'y';

  switch (orient) {
    case 'right':
      position = [position[0], position[1]];
      hoverX = width;
      baselineX2 = baselineX = width;
      annotationOffset = margin.top;
      lineWidth = -width - 25;
      textX = 5;
      hoverFunction = e =>
        setHoverAnnotation(e.nativeEvent.offsetY - annotationOffset);
      if (center === true) {
        baselineX2 = baselineX = width / 2;
      }
      break;
    case 'top':
      position = [position[0], 0];
      hoverWidth = width;
      hoverHeight = 50;
      hoverY = -50;
      hoverX = 0;
      annotationOffset = margin.left;
      annotationType = 'x';
      baselineX2 = width;
      baselineY2 = 0;
      if (center === true) {
        baselineY2 = baselineY = height / 2;
      }
      hoverFunction = e =>
        setHoverAnnotation(e.nativeEvent.offsetX - annotationOffset);
      circleX = hoverAnnotation;
      circleY = 25;
      textX = 0;
      textY = -10;
      lineWidth = 0;
      lineHeight = height + 25;
      break;
    case 'bottom':
      position = [position[0], 0];
      hoverWidth = width;
      hoverHeight = 50;
      baselineY = baselineY2 = hoverY = height;
      baselineX = hoverX = 0;
      baselineX2 = width;
      annotationOffset = margin.left;

      hoverFunction = e =>
        setHoverAnnotation(e.nativeEvent.offsetX - annotationOffset);
      circleX = hoverAnnotation;
      circleY = 25;
      textX = 0;
      textY = 15;
      lineWidth = 0;
      lineHeight = -height - 25;
      annotationType = 'x';
      if (center === true) {
        baselineY2 = baselineY = height / 2;
      }
      break;
    default:
      position = [position[0], position[1]];
      annotationOffset = margin.top;
      if (center === true) {
        baselineX2 = baselineX = width / 2;
      }
      hoverFunction = e =>
        setHoverAnnotation(e.nativeEvent.offsetY - annotationOffset);
  }

  let annotationBrush;

  if (annotationFunction) {
    const formattedValue = formatValue(scale.invert(hoverAnnotation), props);
    const hoverGlyph = glyphFunction ? (
      glyphFunction({
        lineHeight,
        lineWidth,
        value: scale.invert(hoverAnnotation)
      })
    ) : (
      <g>
        {React.isValidElement(formattedValue) ? (
          <g transform={`translate(${textX},${textY})`}>{formattedValue}</g>
        ) : (
          <text x={textX} y={textY}>
            {formattedValue}
          </text>
        )}
        <circle r={5} />
        <line x1={lineWidth} y1={lineHeight} style={{ stroke: 'black' }} />
      </g>
    );
    const annotationSymbol = hoverAnnotation ? (
      <g
        style={{ pointerEvents: 'none' }}
        transform={`translate(${circleX},${circleY})`}
      >
        {hoverGlyph}
      </g>
    ) : null;

    annotationBrush = (
      <g
        className="annotation-brush"
        transform={`translate(${hoverX},${hoverY})`}
      >
        <rect
          style={{ fillOpacity: 0 }}
          height={hoverHeight}
          width={hoverWidth}
          onMouseMove={hoverFunction}
          onClick={() =>
            annotationFunction({
              className: 'dynamic-axis-annotation',
              type: annotationType,
              value: scale.invert(hoverAnnotation)
            })
          }
          onMouseOut={() => setHoverAnnotation(undefined)}
        />
        {annotationSymbol}
      </g>
    );
  }

  // margin Summaries
  let summaryGraphic;

  const { xyPoints } = props;
  if (marginalSummaryType && xyPoints) {
    const summaryWidth = Math.max(margin[orient] - 6, 5);

    const decoratedSummaryType =
      typeof marginalSummaryType === 'string'
        ? { type: marginalSummaryType }
        : marginalSummaryType;

    if (
      decoratedSummaryType.flip === undefined &&
      (orient === 'bottom' || orient === 'right')
    ) {
      decoratedSummaryType.flip = true;
    }

    const summaryStyle = decoratedSummaryType.summaryStyle
      ? typeof decoratedSummaryType.summaryStyle === 'function'
        ? decoratedSummaryType.summaryStyle
        : () => decoratedSummaryType.summaryStyle
      : () => ({
          fill: 'black',
          fillOpacity: 0.5,
          stroke: 'black',
          strokeDasharray: '0'
        });

    const summaryRenderMode = decoratedSummaryType.renderMode
      ? () => decoratedSummaryType.renderMode
      : () => undefined;

    const summaryClass = decoratedSummaryType.summaryClass
      ? () => decoratedSummaryType.summaryClass
      : () => '';

    const dataFilter = decoratedSummaryType.filter || (() => true);

    const forSummaryData = xyPoints
      .filter(p => p.x !== undefined && p.y !== undefined && dataFilter(p.data))
      .map(d => ({
        ...d,
        xy: {
          x: orient === 'top' || orient === 'bottom' ? scale(d.x) : 0,
          y: orient === 'left' || orient === 'right' ? scale(d.y) : 0
        },
        piece: {
          scaledVerticalValue: scale(d.y),
          scaledValue: scale(d.x)
        },
        value:
          orient === 'top' || orient === 'bottom' ? scale(d.y) : scale(d.x),
        scaledValue: scale(d.x),
        scaledVerticalValue: scale(d.y)
      }));

    const renderedSummary = drawSummaries({
      data: {
        column: {
          middle: summaryWidth / 2,
          pieceData: forSummaryData,
          width: summaryWidth,
          xyData: forSummaryData
        }
      },
      type: decoratedSummaryType,
      renderMode: summaryRenderMode,
      eventListenersGenerator:
        decoratedSummaryType.eventListenersGenerator || (() => ({})),
      styleFn: summaryStyle,
      classFn: summaryClass,
      positionFn: () => [0, 0],
      projection:
        orient === 'top' || orient === 'bottom' ? 'horizontal' : 'vertical',
      adjustedSize: size,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      baseMarkProps: {}
    });

    let points;

    if (decoratedSummaryType.showPoints === true) {
      const mappedPoints = marginalPointMapper(
        orient,
        summaryWidth,
        forSummaryData
      );

      points = mappedPoints.map((d, i) => (
        <circle
          key={`axis-summary-point-${i}`}
          cx={d[0]}
          cy={d[1]}
          r={decoratedSummaryType.r || 3}
          style={
            decoratedSummaryType.pointStyle || {
              fill: 'black',
              fillOpacity: 0.1
            }
          }
        />
      ));
    }

    const translation = {
      left: [-margin.left + 2, 0],
      right: [size[0] + 2, 0],
      top: [0, -margin.top + 2],
      bottom: [0, size[1] + 2]
    };

    summaryGraphic = (
      <g transform={`translate(${translation[orient]})`}>
        <g
          transform={`translate(${
            (decoratedSummaryType.type === 'contour' ||
              decoratedSummaryType.type === 'boxplot') &&
            (orient === 'left' || orient === 'right')
              ? summaryWidth / 2
              : 0
          },${
            (decoratedSummaryType.type === 'contour' ||
              decoratedSummaryType.type === 'boxplot') &&
            (orient === 'top' || orient === 'bottom')
              ? summaryWidth / 2
              : 0
          })`}
        >
          {renderedSummary.marks}
        </g>
        {points}
      </g>
    );
  }

  let axisTitle;

  const axisTickLabels =
    showLabels === true
      ? axisLabels({
          tickFormat,
          axisParts,
          orient,
          rotate,
          center
        })
      : null;

  if (label) {
    const labelName =
      typeof label === 'string' || label instanceof String
        ? label
        : label.name || '';
    const labelPosition = label.position || {};
    const locationMod = labelPosition.location || 'outside';
    let anchorMod = labelPosition.anchor || 'middle';
    const distance = label.locationDistance || calculatedLabelPosition;

    const rotateHash = {
      left: -90,
      right: 90,
      top: 0,
      bottom: 0
    };

    const rotation = labelPosition.rotation || rotateHash[orient];

    const positionHash = {
      left: {
        start: [0, size[1]],
        middle: [0, size[1] / 2],
        end: [0, 0],
        inside: [distance || 15, 0],
        outside: [-(distance || 45), 0]
      },
      right: {
        start: [size[0] + 0, size[1]],
        middle: [size[0] + 0, size[1] / 2],
        end: [size[0] + 0, 0],
        inside: [-(distance || 15), 0],
        outside: [distance || 45, 0]
      },
      top: {
        start: [0, 0],
        middle: [0 + size[0] / 2, 0],
        end: [0 + size[0], 0],
        inside: [0, distance || 15],
        outside: [0, -(distance || 40)]
      },
      bottom: {
        start: [0, size[1]],
        middle: [0 + size[0] / 2, size[1]],
        end: [0 + size[0], size[1]],
        inside: [0, -(distance || 5)],
        outside: [0, distance || 50]
      }
    };

    const translation = positionHash[orient][anchorMod];
    const location = positionHash[orient][locationMod];

    translation[0] = translation[0] + location[0];
    translation[1] = translation[1] + location[1];

    if (anchorMod === 'start' && orient === 'right') {
      anchorMod = 'end';
    } else if (anchorMod === 'end' && orient === 'right') {
      anchorMod = 'start';
    }

    axisTitle = (
      <g
        className={`axis-title ${className}`}
        transform={`translate(${[
          translation[0] + position[0],
          translation[1] + position[1]
        ]}) rotate(${rotation})`}
      >
        {React.isValidElement(labelName) ? (
          labelName
        ) : (
          <text textAnchor={anchorMod}>{labelName}</text>
        )}
      </g>
    );
  }

  const axisAriaLabel = `${orient} axis ${(axisParts &&
    axisParts.length > 0 &&
    `from ${tickFormat(axisParts[0].value, 0)} to ${tickFormat(
      axisParts[axisParts.length - 1].value,
      axisParts.length - 1
    )}`) ||
    'without ticks'}`;

  return (
    <g
      className={className}
      aria-label={axisAriaLabel}
      ref={node => (axisRef = node)}
    >
      {annotationBrush}
      {axisTickLabels}
      {axisTickLines}
      {baseline ? (
        <line
          key="baseline"
          className={`axis-baseline ${className}`}
          stroke="black"
          strokeLinecap="square"
          x1={baselineX}
          x2={baselineX2}
          y1={baselineY}
          y2={baselineY2}
        />
      ) : null}
      {axisTitle}
      {summaryGraphic}
    </g>
  );
};

Axis.propTypes = {
  orient: PropTypes.oneOf(ORIENTATIONS),
  size: PropTypes.array,
  footer: PropTypes.bool,
  tickSize: PropTypes.number,
  baseline: PropTypes.bool,
  center: PropTypes.bool,
  glyphFunction: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  tickValues: PropTypes.array,
  ticks: PropTypes.number,
  tickFormat: PropTypes.func,
  tickLineGenerator: PropTypes.func,
  rotate: PropTypes.number,
  padding: PropTypes.number,
  scale: PropTypes.func,
  annotationFunction: PropTypes.func,
  className: PropTypes.string,
  margin: PropTypes.object,
  name: PropTypes.string,
  showLineTicks: PropTypes.bool,
  showLabels: PropTypes.bool,
  xyPoints: PropTypes.array,
  jaggedBase: PropTypes.bool,
  marginalSummaryType: PropTypes.object
};

Axis.defaultProps = {
  rotate: 0,
  label: { position: false },
  tickFormat: d => d,
  size: null,
  className: '',
  padding: 0,
  tickValues: null,
  ticks: null,
  footer: false,
  tickSize: -10,
  baseline: true,
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
  center: false,
  showLineTicks: true,
  showLabels: true,
  jaggedBase: false
};

export default Axis;
