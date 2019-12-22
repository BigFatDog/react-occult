import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Annotation from '../../plots/Annotation';
import SpanOrDiv from '../../widgets/SpanOrDiv';
import processAnnotations from './processAnnotations';
import adjustedAnnotationKeyMapper from './adjustedAnnotationKeyMapper';

const AnnotationLayer = props => {
  const [svgAnnotations, setSvgAnnotations] = useState([]);
  const [htmlAnnotations, setHtmlAnnotations] = useState([]);
  const [adjustedAnnotations, setAdjustedAnnotations] = useState([]);
  const [adjustedAnnotationsKey, setAdjustedAnnotationsKey] = useState('');

  const createAnnotations = props => {
    let newAdjustedAnnotations = adjustedAnnotations.slice();
    let newAdjustableAnnotationsKey = adjustedAnnotationsKey;

    const newAdjustedAnnotationsKey = adjustedAnnotationsKey;

    const { annotations, annotationHandling = false, size, generateSVGAnnotations, generateHTMLAnnotations  } = props;

    const annotationProcessor =
      typeof annotationHandling === 'object'
        ? annotationHandling
        : { layout: { type: annotationHandling }, };

    // todo: create svg anno
    const initialSVGAnnotations = annotations.map((d, i) => generateSVGAnnotations({d, i}));
    const adjustableAnnotations = initialSVGAnnotations.filter(
      d => d.props && d.props.noteData && !d.props.noteData.fixedPosition
    );
    const fixedAnnotations = initialSVGAnnotations.filter(
      d => !d.props || !d.props.noteData || d.props.noteData.fixedPosition
    );
    newAdjustableAnnotationsKey = `${adjustableAnnotations
      .map(adjustedAnnotationKeyMapper)
      .join(',')}${JSON.stringify(annotationProcessor)}${size.join(',')}`;

    if (annotationHandling === false) {
      newAdjustedAnnotations = adjustableAnnotations;
    }

    if (
      newAdjustedAnnotations.length !== adjustableAnnotations.length ||
      newAdjustedAnnotationsKey !== newAdjustableAnnotationsKey
    ) {
      newAdjustedAnnotations = processAnnotations(
        adjustableAnnotations,
        annotationProcessor,
        props
      );
    } else {
      //Handle when style or other attributes change
      newAdjustedAnnotations = newAdjustedAnnotations.map((d, i) => {
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

    const renderedSVGAnnotations = [
      ...newAdjustedAnnotations,
      ...fixedAnnotations
    ];

    const renderedHTMLAnnotations = annotations.map((d, i) => generateHTMLAnnotations({d, i}));

    setAdjustedAnnotations(newAdjustedAnnotations);
    setSvgAnnotations(renderedSVGAnnotations);
    setHtmlAnnotations(renderedHTMLAnnotations);
    setAdjustedAnnotationsKey(newAdjustableAnnotationsKey);
  };

  useEffect(() => {
    createAnnotations(props);
  }, []);

  const { useSpans, size, margin } = props;
  return (
    <SpanOrDiv
      span={useSpans}
      className="annotation-layer"
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        background: 'none'
      }}
    >
      <svg
        className="annotation-layer-svg"
        height={size[1]}
        width={size[0]}
        style={{
          background: 'none',
          pointerEvents: 'none',
          position: 'absolute',
          left: `${margin.left}px`,
          top: `${margin.top}px`,
          overflow: 'visible'
        }}
      >
        <g>{svgAnnotations}</g>
      </svg>
      <SpanOrDiv
        span={useSpans}
        className="annotation-layer-html"
        style={{
          background: 'none',
          pointerEvents: 'none',
          position: 'absolute',
          height: `${size[1]}px`,
          width: `${size[0]}px`,
          left: `${margin.left}px`,
          top: `${margin.top}px`
        }}
      >
        {htmlAnnotations}
      </SpanOrDiv>
    </SpanOrDiv>
  );
};

AnnotationLayer.propTypes = {
  margin: PropTypes.object,
  voronoiHover: PropTypes.func,
  htmlAnnotations: PropTypes.array,
  svgAnnotations: PropTypes.array,
  useSpans: PropTypes.bool,
  size: PropTypes.array,
  axes: PropTypes.array,
  annotationHandling: PropTypes.func,
  annotations: PropTypes.array,
  pointSizeFunction: PropTypes.func,
  labelSizeFunction: PropTypes.func,
  position: PropTypes.array,
  generateSVGAnnotations: PropTypes.func,
  generateHTMLAnnotations: PropTypes.func,
  frameData: PropTypes.object,
  frameProps: PropTypes.object
};

AnnotationLayer.defaultProps = {
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
  generateSVGAnnotations: () => [],
  generateHTMLAnnotations: () => []
};

export default AnnotationLayer;
