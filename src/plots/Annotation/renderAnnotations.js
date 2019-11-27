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
import {
  SvgHorizontalPointsAnnotation,
  SvgVerticalPointsAnnotation
} from './widgets/PointsAlong';

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
  'vertical-points': SvgVerticalPointsAnnotation
};

const toAnnotations = (d, i, props) => {
  const { adjustedSize } = props;
  const screenCoordinates = [
    d.x ? d.x : 0,
    d.y ? adjustedSize[1] - d.y : adjustedSize[1]
  ];

  const widgetProps = {
    ...props,
    ...d,
    d,
    i,
    screenCoordinates
  };

  const AnnotationType = TypeHash[d.type] || d.type;
  return AnnotationType ? <AnnotationType {...widgetProps} /> : null;
};

const renderAnnotations = (annotations, props) => {
  const { annotationHandling = false } = props;

  let adjustedAnnotations = [];

  const annotationProcessor =
    typeof annotationHandling === 'object'
      ? annotationHandling
      : { layout: { type: annotationHandling } };

  const initialSVGAnnotations = annotations
    .map((d, i) => toAnnotations(d, i, props))
    .filter(d => d !== null && d !== undefined);

  const adjustableAnnotations = initialSVGAnnotations.filter(
    d => d.props && d.props.noteData && !d.props.noteData.fixedPosition
  );
  const fixedAnnotations = initialSVGAnnotations.filter(
    d => !d.props || !d.props.noteData || d.props.noteData.fixedPosition
  );

  if (annotationHandling === false) {
    adjustedAnnotations = adjustableAnnotations;
  }

  if (adjustedAnnotations.length !== adjustableAnnotations.length) {
    adjustedAnnotations = resolveConflicts(
      adjustableAnnotations,
      annotationProcessor,
      props
    );
  } else {
    //Handle when style or other attributes change
    adjustedAnnotations = adjustedAnnotations.map((d, i) => {
      const newNoteData = Object.assign(
        adjustableAnnotations[i].props.noteData,
        {
          nx: d.props.noteData.nx,
          ny: d.props.noteData.ny,
          note: d.props.noteData.note
        }
      );
      return <Annotation key={d.key} noteData={newNoteData} />;
    });
  }

  return [...adjustedAnnotations, ...fixedAnnotations];
};

export default renderAnnotations;
