import React from 'react';
import { AnnotationLayer } from './layers';

const Annotation = props => {
  const {} = props;
  const areaAnnotations = [];

  const totalAnnotations = annotations
    ? [...annotations, ...areaAnnotations]
    : areaAnnotations;

  if (voronoiHover) {
    if (Array.isArray(voronoiHover)) {
      totalAnnotations.push(...voronoiHover);
    } else {
      totalAnnotations.push(voronoiHover);
    }
  }

  const annotationLayer = ((totalAnnotations && totalAnnotations.length > 0) ||
    legendSettings) && (
    <AnnotationLayer
      legendSettings={legendSettings}
      margin={margin}
      axes={axes}
      voronoiHover={setVoronoiHover}
      annotationHandling={annotationSettings}
      pointSizeFunction={
        annotationSettings.layout && annotationSettings.layout.pointSizeFunction
      }
      labelSizeFunction={
        annotationSettings.layout && annotationSettings.layout.labelSizeFunction
      }
      annotations={totalAnnotations}
      svgAnnotationRule={(d, i, thisALayer) =>
        defaultSVGRule({
          d,
          i,
          annotationLayer: thisALayer,
          ...renderPipeline
        })
      }
      htmlAnnotationRule={(d, i, thisALayer) =>
        defaultHTMLRule({
          d,
          i,
          annotationLayer: thisALayer,
          ...renderPipeline
        })
      }
      useSpans={useSpans}
      size={adjustedSize}
      position={[
        adjustedPosition[0] + margin.left,
        adjustedPosition[1] + margin.top
      ]}
    />
  );

  return { annotationLayer };
};

export default Annotation;
