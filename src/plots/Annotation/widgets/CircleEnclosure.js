import AnnotationCalloutCircle from 'react-annotation/lib/Types/AnnotationCalloutCircle';
import Annotation from '../InternalAnnotation';
import * as React from 'react';

const CircleEnclosure = ({ d, i, circle }) => {
  const { padding = 2, radiusPadding = padding, label } = d;

  const noteData = Object.assign(
    {
      dx: 0,
      dy: 0,
      note: { label },
      connector: { end: 'arrow' }
    },
    d,
    {
      coordinates: undefined,
      x: circle.x,
      y: circle.y,
      type: AnnotationCalloutCircle,
      subject: {
        radius: circle.r,
        radiusPadding
      },
      i
    }
  );

  if (noteData.rp) {
    switch (noteData.rp) {
      case 'top':
        noteData.dx = 0;
        noteData.dy = -circle.r - noteData.rd;
        break;
      case 'bottom':
        noteData.dx = 0;
        noteData.dy = circle.r + noteData.rd;
        break;
      case 'left':
        noteData.dx = -circle.r - noteData.rd;
        noteData.dy = 0;
        break;
      default:
        noteData.dx = circle.r + noteData.rd;
        noteData.dy = 0;
    }
  }
  //TODO: Support .ra (setting angle)

  return <Annotation key={d.key || `annotation-${i}`} noteData={noteData} />;
};

export default CircleEnclosure;
