import { polygonHull } from 'd3-polygon';
import Offset from 'polygon-offset';
import AnnotationCalloutCustom from 'react-annotation/lib/Types/AnnotationCalloutCustom';
import Annotation from '../InternalAnnotation';
import * as React from 'react';

const HullEnclosure = ({ points, d, i }) => {
  const {
    color = 'black',
    dx = -25,
    dy = -25,
    label,
    padding = 10,
    buffer = padding,
    strokeWidth = 10
  } = d;

  const hullPoints = polygonHull(points);

  const offset = new Offset();

  const bufferedHull = offset
    .data([...hullPoints, hullPoints[0]])
    .margin(buffer)[0];

  const hullD = `M${bufferedHull.map(d => d.join(',')).join('L')}Z`;

  const firstCoord = bufferedHull[0];

  const { nx = firstCoord[0] + dx, ny = firstCoord[1] + dy } = d;

  const closestCoordinates = bufferedHull.reduce((p, c) => {
    if (Math.hypot(nx - p[0], ny - p[1]) > Math.hypot(nx - c[0], ny - c[1])) {
      p = c;
    }
    return p;
  }, firstCoord);

  const noteData = Object.assign(
    {
      dx: dx,
      dy: dy,
      note: { label },
      connector: { end: 'arrow' }
    },
    d,
    {
      type: AnnotationCalloutCustom,
      x: closestCoordinates[0],
      y: closestCoordinates[1],
      subject: {
        custom: [
          <path
            key="hull-drawing"
            d={hullD}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="miter"
            strokeLinecap="butt"
            fill="none"
            stroke={color}
            transform={`translate(${-closestCoordinates[0]},${-closestCoordinates[1]})`}
          />
        ],
        customID: 'hull-annotation'
      }
    }
  );

  return <Annotation key={d.key || `annotation-${i}`} noteData={noteData} />;
};

export default HullEnclosure;
