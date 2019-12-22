import React from 'react';
import resolveConflicts from './resolveConflicts';
import Annotation from './InternalAnnotation';
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

const generateXYAnnotations = (d, i, props) => {
  let screenCoordinates = [];
  const { xScale, yScale, accessors } = props;
  const xAccessors = accessors.map(d => d.xAccessor);
  const yAccessors = accessors.map(d => d.yAccessor);
  if (d.coordinates) {
    if (!Array.isArray(d.coordinates)) {
      const xData = findFirstAccessorValue(xAccessors, d.coordinates);
      const yData = findFirstAccessorValue(yAccessors, d.coordinates);
      if (xData) {
        screenCoordinates[0] = xScale(xData);
      }
      screenCoordinates[1] = yData ? yScale(yData) : props.adjustedSize[1];
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
      d.y ? props.adjustedSize[1] - d.y : props.adjustedSize[1]
    ];
  }

  const widgetProps = {
    ...props,
    ...d,
    d,
    i,
    x: screenCoordinates[0],
    y: screenCoordinates[1],
    screenCoordinates,
    xAccessors,
    yAccessors
  };

  const AnnotationType = TypeHash[d.type] || d.type;
  return AnnotationType ? <AnnotationType {...widgetProps} /> : null;
};

export default generateXYAnnotations;

