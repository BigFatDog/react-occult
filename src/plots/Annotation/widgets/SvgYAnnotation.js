import AnnotationXYThreshold from 'react-annotation/lib/Types/AnnotationXYThreshold';
import Annotation from '../InternalAnnotation';
import * as React from 'react';

const SvgYAnnotation = ({
  screenCoordinates,
  d,
  i,
  adjustedSize,
  adjustedPosition
}) => {
  const xPosition = i * 25;

  const noteData = Object.assign(
    {
      dx: 50,
      dy: -20,
      x: xPosition,
      note: { label: d.label },
      connector: { end: 'arrow' }
    },
    d,
    {
      type: AnnotationXYThreshold,
      y: screenCoordinates[1],
      subject: {
        y: screenCoordinates[1],
        x1: 0,
        x2: adjustedSize[0] + adjustedPosition[0]
      },
      i
    }
  );
  return <Annotation key={d.key || `annotation-${i}`} noteData={noteData} />;
};

export default SvgYAnnotation;
