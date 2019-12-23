import React from 'react';
import DesaturationLayer from './widgets/DesaturationLayer';
import SvgXYAnnotation from './widgets/SvgXYAnnotation';
import BasicReactAnnotation from './widgets/BasicReactAnnotation';
import SvgEncloseAnnotation from './widgets/SvgEncloseAnnotation';
import SvgRectEncloseAnnotation from './widgets/SvgRectEncloseAnnotation';
import SvgHullEnclosure from './widgets/SvgHullEncloseAnnotation';
import SvgXAnnotation from './widgets/SvgXAnnotation';
import SvgYAnnotation from './widgets/SvgYAnnotation';
import SvgLineAnnotation from './widgets/SvgLineAnnotation';
import SvgBoundsAnnotation from './widgets/SvgBoundsAnnotation';
import SvgAreaAnnotation from './widgets/SvgAreaAnnotation';
import SvgHighlight from './widgets/SvgHighlight';
import {
  SvgHorizontalPointsAnnotation,
  SvgVerticalPointsAnnotation
} from './widgets/PointsAlong';

import findFirstAccessorValue from './findFirstAccessorValue';

const TypeHash = {
  'desaturation-layer': DesaturationLayer,
  xy: SvgXYAnnotation,
  'frame-hover': SvgXYAnnotation,
  'react-annotation': BasicReactAnnotation,
  function: BasicReactAnnotation,
  enclose: SvgEncloseAnnotation,
  'enclose-rect': SvgRectEncloseAnnotation,
  'enclose-hull': SvgHullEnclosure,
  x: SvgXAnnotation,
  y: SvgYAnnotation,
  bounds: SvgBoundsAnnotation,
  line: SvgLineAnnotation,
  area: SvgAreaAnnotation,
  'horizontal-points': SvgHorizontalPointsAnnotation,
  'vertical-points': SvgVerticalPointsAnnotation,
  highlight: SvgHighlight
};

const generateXYSVGAnnotations = ({ frameProps, frameData }) => ({ d, i }) => {
  let screenCoordinates = [];
  const { plotChildren } = frameProps;
  const { frameXScale: xScale, frameYScale: yScale, adjustedSize } = frameData;
  const xAccessors = plotChildren.map(d => d.props.xAccessor);
  const yAccessors = plotChildren.map(d => d.props.yAccessor);

  if (d.coordinates) {
    if (!Array.isArray(d.coordinates)) {
      const xData = findFirstAccessorValue(xAccessors, d.coordinates);
      const yData = findFirstAccessorValue(yAccessors, d.coordinates);
      if (xData) {
        screenCoordinates[0] = xScale(xData);
      }
      screenCoordinates[1] = yData ? yScale(yData) : adjustedSize[1];
    } else {
      screenCoordinates = d.coordinates.map(e => {
        const xData = findFirstAccessorValue(xAccessors, e);
        const yData = findFirstAccessorValue(yAccessors, e);
        return {
          x: xData ? xScale(xData) : null,
          y: yData ? yScale(yData) : null
        };
      });
    }
  } else {
    screenCoordinates = d.screenCoordinates || [
      d.x ? d.x : 0,
      d.y ? adjustedSize[1] - d.y : adjustedSize[1]
    ];
  }

  const widgetProps = {
    ...d,
    d,
    i,
    x: screenCoordinates[0],
    y: screenCoordinates[1],
    screenCoordinates,
    xAccessors,
    yAccessors,
    xScale,
    yScale,
    adjustedSize,
    adjustedPosition: frameData.adjustedPosition
  };

  const AnnotationType = TypeHash[d.type] || d.type;
  return AnnotationType ? <AnnotationType {...widgetProps} /> : null;
};

const generateXYHtmlAnnotations = ({ frameProps, frameData }) => ({ d, i }) => {
  const { tooltipContent, voronoiHover } = frameProps;
  const { screenCoordinates } = frameData;

  return tooltipContent
    ? screenCoordinates
        .filter(e => {
          if (voronoiHover) {
            const hoverObj =
              Array.isArray(voronoiHover) && voronoiHover.length > 0
                ? voronoiHover[0]
                : Object.assign({}, voronoiHover);

            if (hoverObj.hasOwnProperty('x') && hoverObj.hasOwnProperty('y')) {
              if (typeof hoverObj.x.getMonth === 'function') {
                // is date
                return (
                  hoverObj.x.toISOString() === e.x.toISOString() &&
                  hoverObj.y === e.y
                );
              } else {
                return hoverObj.x === e.x && hoverObj.y === e.y;
              }
            } else {
              return false;
            }
          }

          return false;
        })
        .map((d, i) => {
          const _data = {
            ...d,
            x: frameXScale(d.x),
            y: frameYScale(d.y)
          };

          return (
            <HTMLTooltipAnnotation
              tooltipContent={tooltipContent}
              tooltipContentArgs={_data}
              i={i}
              d={_data}
              useSpans={useSpans}
            />
          );
        })
    : [];
};

export { generateXYSVGAnnotations, generateXYHtmlAnnotations };
