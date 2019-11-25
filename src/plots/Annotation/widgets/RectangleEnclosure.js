import AnnotationCalloutRect from 'react-annotation/lib/Types/AnnotationCalloutRect';
import Annotation from '../InternalAnnotation';
import * as React from 'react';

const RectangleEnclosure = ({ bboxNodes, d, i }) => {
  const { padding = 0, dx = -25, dy = -25, label } = d;
  const bbox = [
    [
      Math.min(...bboxNodes.map(p => p.x0)) - padding,
      Math.min(...bboxNodes.map(p => p.y0)) - padding
    ],
    [
      Math.max(...bboxNodes.map(p => p.x1)) + padding,
      Math.max(...bboxNodes.map(p => p.y1)) + padding
    ]
  ];

  const noteData = Object.assign(
    {
      dx: dx,
      dy: dy,
      note: { label },
      connector: { end: 'arrow' }
    },
    d,
    {
      type: AnnotationCalloutRect,
      x: bbox[0][0],
      y: bbox[0][1],
      subject: {
        width: bbox[1][0] - bbox[0][0],
        height: bbox[1][1] - bbox[0][1]
      }
    }
  );

  return <Annotation key={d.key || `annotation-${i}`} noteData={noteData} />;
};

export default RectangleEnclosure;
