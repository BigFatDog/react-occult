import AnnotationXYThreshold from 'react-annotation/lib/Types/AnnotationXYThreshold';
import Annotation from '../InternalAnnotation';
import * as React from 'react';

const SvgXAnnotation = ({ screenCoordinates, d, i, adjustedSize }) => {
  const noteData = Object.assign(
    {
      dx: 50,
      dy: 20,
      y: 0,
      note: { label: d.label },
      connector: { end: 'arrow' }
    },
    d,
    {
      type: AnnotationXYThreshold,
      x: screenCoordinates[0],
      subject: {
        x: screenCoordinates[0],
        y1: 0,
        y2: adjustedSize[1]
      },
      i
    }
  );
  return <Annotation key={d.key || `annotation-${i}`} noteData={noteData} />;
};

export default SvgXAnnotation;
