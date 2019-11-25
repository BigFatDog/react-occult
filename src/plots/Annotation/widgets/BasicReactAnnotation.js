import Annotation from '../GenericAnnotation';
import * as React from 'react';

const BasicReactAnnotation = ({ screenCoordinates, d, i }) => {
  const noteData = Object.assign(
    {
      dx: 0,
      dy: 0,
      note: { label: d.label, orientation: d.orientation, align: d.align },
      connector: { end: 'arrow' }
    },
    d,
    {
      type: d.type,
      screenCoordinates,
      i
    }
  );

  noteData.x = noteData.fixedX ? noteData.fixedX : screenCoordinates[0];
  noteData.y = noteData.fixedY ? noteData.fixedY : screenCoordinates[1];

  return <Annotation key={d.key || `annotation-${i}`} noteData={noteData} />;
};

export default BasicReactAnnotation;
