import AnnotationCalloutRect from 'react-annotation/lib/Types/AnnotationCalloutRect';
import Annotation from '../InternalAnnotation';
import * as React from 'react';

const SvgBoundsAnnotation = ({
  d,
  i,
  adjustedSize,
  xAccessor,
  yAccessor,
  xScale,
  yScale
}) => {
  const startXValue = findFirstAccessorValue(xAccessor, d.bounds[0]);
  const startYValue = findFirstAccessorValue(yAccessor, d.bounds[0]);
  const endXValue = findFirstAccessorValue(xAccessor, d.bounds[1]);
  const endYValue = findFirstAccessorValue(yAccessor, d.bounds[1]);

  const x0Position = startXValue ? xScale(startXValue) : 0;
  const y0Position = startYValue ? yScale(startYValue) : adjustedSize[1];
  const x1Position = endXValue ? xScale(endXValue) : adjustedSize[0];
  const y1Position = endYValue ? yScale(endYValue) : 0;

  const noteData = Object.assign(
    {
      dx: 250,
      dy: -20,
      note: { label: d.label },
      connector: { end: 'arrow' }
    },
    d,
    {
      type: AnnotationCalloutRect,
      x: Math.min(x0Position, x1Position),
      y: Math.min(y0Position, y1Position),
      subject: {
        width: Math.abs(x1Position - x0Position),
        height: Math.abs(y0Position - y1Position)
      },
      i
    }
  );
  return <Annotation key={d.key || `annotation-${i}`} noteData={noteData} />;
};

export default SvgBoundsAnnotation;
