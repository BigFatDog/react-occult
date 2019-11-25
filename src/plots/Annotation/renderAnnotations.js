import React from 'react';
import { defaultSVGRule } from './rules';
import resolveConflicts from './resolveConflicts';
import Annotation from './GenericAnnotation';

const renderAnnotations = (annotations, props) => {
  const { annotationHandling = false } = props;

  let adjustedAnnotations = [];

  const annotationProcessor =
    typeof annotationHandling === 'object'
      ? annotationHandling
      : { layout: { type: annotationHandling } };

  const initialSVGAnnotations = annotations
    .map((d, i) => defaultSVGRule(d, i, props))
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
