import React, { useState, useEffect } from 'react';
import * as labella from 'labella';
import { bumpAnnotations } from './annotationHandling';

import Legend from './Legend';
import Annotation from './Annotation';
import SpanOrDiv from '../../utils/SpanOrDiv';

function marginOffsetFn(orient, axisSettings, marginOffset) {
  if (typeof marginOffset === 'number') {
    return marginOffset;
  }
  if (axisSettings && axisSettings.find(d => d.props.orient === orient)) {
    return 50;
  }
  return 10;
}

function adjustedAnnotationKeyMapper(d) {
  return d.props.noteData.id || `${d.props.noteData.x}-${d.props.noteData.y}`;
}

function noteDataWidth(noteData, charWidth = 8) {
  const wrap = (noteData.note && noteData.note.wrap) || 120;
  const noteText = noteData.note.label || noteData.note.label || '';
  return Math.min(wrap, noteText.length * charWidth);
}

function noteDataHeight(noteData, charWidth = 8, lineHeight = 20) {
  const wrap = (noteData.note && noteData.note.wrap) || 120;
  const text = noteData.note.label || noteData.note.title || '';
  return (
    Math.ceil((text.length * charWidth) / wrap) * lineHeight +
    (noteData.note.label && noteData.note.title ? lineHeight : 0)
  );
}

const AnnotationLayer = props => {
  const { width, height, axes = [], useSpans, legendSettings } = props;
  const size = [width, height];
  let { margin = { top: 0, bottom: 0, left: 0, right: 0 } } = props;

  const generateSVGAnnotations = (props, annotations) =>
    annotations
      .map((d, i) => props.svgAnnotationRule(d, i, props))
      .filter(d => d !== null && d !== undefined);

  const generateHTMLAnnotations = (props, annotations) =>
    annotations
      .map((d, i) => props.htmlAnnotationRule(d, i, props))
      .filter(d => d !== null && d !== undefined);

  const processAnnotations = (
    adjustableAnnotations,
    annotationProcessor,
    props
  ) => {
    const { layout = { type: false } } = annotationProcessor;

    if (layout.type === false) {
      return adjustableAnnotations;
    }

    margin =
      typeof margin === 'number'
        ? { top: margin, left: margin, right: margin, bottom: margin }
        : margin;

    if (layout.type === 'bump') {
      return bumpAnnotations(
        adjustableAnnotations,
        layout,
        size,
        props.pointSizeFunction,
        props.labelSizeFunction
      );
    } else if (layout.type === 'marginalia') {
      const {
        marginOffset,
        orient = 'nearest',
        characterWidth = 8,
        lineHeight = 20,
        padding = 2,
        axisMarginOverride = null
      } = layout;
      const finalOrientation =
        orient === 'nearest'
          ? ['left', 'right', 'top', 'bottom']
          : Array.isArray(orient)
          ? orient
          : [orient];
      const finalAxisMarginOverride = {
        top: null,
        right: null,
        bottom: null,
        left: null,
        ...axisMarginOverride
      };

      const leftOn = finalOrientation.find(d => d === 'left');
      const rightOn = finalOrientation.find(d => d === 'right');
      const topOn = finalOrientation.find(d => d === 'top');
      const bottomOn = finalOrientation.find(d => d === 'bottom');

      const leftNodes = [];
      const rightNodes = [];
      const topNodes = [];
      const bottomNodes = [];

      adjustableAnnotations.forEach(aNote => {
        const noteData = aNote.props.noteData;
        const noteX = noteData.x[0] || noteData.x;
        const noteY = noteData.y[0] || noteData.y;

        const leftDist = leftOn ? noteX : Infinity;
        const rightDist = rightOn ? size[0] - noteX : Infinity;
        const topDist = topOn ? noteY : Infinity;
        const bottomDist = bottomOn ? size[1] - noteY : Infinity;

        const minDist = Math.min(leftDist, rightDist, topDist, bottomDist);

        if (leftDist === minDist) {
          leftNodes.push(aNote);
        } else if (rightDist === minDist) {
          rightNodes.push(aNote);
        } else if (topDist === minDist) {
          topNodes.push(aNote);
        } else {
          bottomNodes.push(aNote);
        }
      });

      //Adjust the margins based on which regions are active

      const leftForce = new labella.Force({
        minPos: finalAxisMarginOverride.top
          ? 0 + finalAxisMarginOverride.top
          : 0 - margin.top,
        maxPos: finalAxisMarginOverride.bottom
          ? size[1] - finalAxisMarginOverride.bottom
          : bottomOn
          ? size[1]
          : size[1] + margin.bottom
      })
        .nodes(
          leftNodes.map(d => {
            const noteY = d.props.noteData.y[0] || d.props.noteData.y;
            return new labella.Node(
              noteY,
              noteDataHeight(d.props.noteData, characterWidth, lineHeight) +
                padding
            );
          })
        )
        .compute();

      const rightForce = new labella.Force({
        minPos: finalAxisMarginOverride.top
          ? 0 + finalAxisMarginOverride.top
          : topOn
          ? 0
          : 0 - margin.top,
        maxPos: finalAxisMarginOverride.bottom
          ? size[1] - finalAxisMarginOverride.bottom
          : size[1] + margin.bottom
      })
        .nodes(
          rightNodes.map(d => {
            const noteY = d.props.noteData.y[0] || d.props.noteData.y;
            return new labella.Node(
              noteY,
              noteDataHeight(d.props.noteData, characterWidth, lineHeight) +
                padding
            );
          })
        )
        .compute();

      const topForce = new labella.Force({
        minPos: finalAxisMarginOverride.left
          ? 0 + finalAxisMarginOverride.left
          : leftOn
          ? 0
          : 0 - margin.left,
        maxPos: finalAxisMarginOverride.right
          ? size[0] - finalAxisMarginOverride.right
          : size[0] + margin.right
      })
        .nodes(
          topNodes.map(d => {
            const noteX = d.props.noteData.x[0] || d.props.noteData.x;
            return new labella.Node(
              noteX,
              noteDataWidth(d.props.noteData, characterWidth) + padding
            );
          })
        )
        .compute();

      const bottomForce = new labella.Force({
        minPos: finalAxisMarginOverride.left
          ? 0 + finalAxisMarginOverride.left
          : 0 - margin.left,
        maxPos: finalAxisMarginOverride.right
          ? size[0] - finalAxisMarginOverride.right
          : rightOn
          ? size[0]
          : size[0] + margin.right
      })
        .nodes(
          bottomNodes.map(d => {
            const noteX = d.props.noteData.x[0] || d.props.noteData.x;
            return new labella.Node(
              noteX,
              noteDataWidth(d.props.noteData, characterWidth) + padding
            );
          })
        )
        .compute();

      const bottomOffset = Math.max(
        ...bottomNodes.map(
          d =>
            noteDataHeight(d.props.noteData, characterWidth, lineHeight) +
            padding
        )
      );
      const topOffset = Math.max(
        ...topNodes.map(
          d =>
            noteDataHeight(d.props.noteData, characterWidth, lineHeight) +
            padding
        )
      );
      const leftOffset = Math.max(
        ...leftNodes.map(
          d => noteDataWidth(d.props.noteData, characterWidth) + padding
        )
      );
      const rightOffset = Math.max(
        ...rightNodes.map(
          d => noteDataWidth(d.props.noteData, characterWidth) + padding
        )
      );

      //      const nodeOffsetHeight = Math.max()

      const leftSortedNodes = leftForce.nodes();
      const rightSortedNodes = rightForce.nodes();
      const topSortedNodes = topForce.nodes();
      const bottomSortedNodes = bottomForce.nodes();

      leftNodes.forEach((note, i) => {
        note.props.noteData.ny = leftSortedNodes[i].currentPos;
        note.props.noteData.nx =
          0 -
          leftSortedNodes[i].layerIndex * leftOffset -
          marginOffsetFn('left', axes, marginOffset);
        if (note.props.noteData.note) {
          note.props.noteData.note.orientation =
            note.props.noteData.note.orientation || 'leftRight';
          note.props.noteData.note.align =
            note.props.noteData.note.align || 'right';
        }
      });

      rightNodes.forEach((note, i) => {
        note.props.noteData.ny = rightSortedNodes[i].currentPos;
        note.props.noteData.nx =
          size[0] +
          rightSortedNodes[i].layerIndex * rightOffset +
          marginOffsetFn('right', axes, marginOffset);
        if (note.props.noteData.note) {
          note.props.noteData.note.orientation =
            note.props.noteData.note.orientation || 'leftRight';
          note.props.noteData.note.align =
            note.props.noteData.note.align || 'left';
        }
      });

      topNodes.forEach((note, i) => {
        note.props.noteData.nx = topSortedNodes[i].currentPos;
        note.props.noteData.ny =
          0 -
          topSortedNodes[i].layerIndex * topOffset -
          marginOffsetFn('top', axes, marginOffset);
      });

      bottomNodes.forEach((note, i) => {
        note.props.noteData.nx = bottomSortedNodes[i].currentPos;
        note.props.noteData.ny =
          size[1] +
          bottomSortedNodes[i].layerIndex * bottomOffset +
          marginOffsetFn('bottom', axes, marginOffset);
      });
      return adjustableAnnotations;
    }
    return adjustableAnnotations;
  };

  let svgAnnotations = [];
  let adjustedAnnotations = [];
  let adjustableAnnotationsKey = null;

  const {
    annotations,
    annotationHandling = false,
    svgAnnotationRule,
    htmlAnnotationRule
  } = props;

  const annotationProcessor =
    typeof annotationHandling === 'object'
      ? annotationHandling
      : { layout: { type: annotationHandling }, dataVersion: '' };

  const { dataVersion = '' } = annotationProcessor;

  if (svgAnnotationRule) {
    const initialSVGAnnotations = generateSVGAnnotations(props, annotations);
    const adjustableAnnotations = initialSVGAnnotations.filter(
      d => d.props && d.props.noteData && !d.props.noteData.fixedPosition
    );
    const fixedAnnotations = initialSVGAnnotations.filter(
      d => !d.props || !d.props.noteData || d.props.noteData.fixedPosition
    );
    adjustableAnnotationsKey = `${adjustableAnnotations
      .map(adjustedAnnotationKeyMapper)
      .join(',')}${JSON.stringify(annotationProcessor)}${size.join(',')}`;

    if (annotationHandling === false) {
      adjustedAnnotations = adjustableAnnotations;
    }

    if (adjustedAnnotations.length !== adjustableAnnotations.length) {
      adjustedAnnotations = processAnnotations(
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

    svgAnnotations = [...adjustedAnnotations, ...fixedAnnotations];
  }

  const htmlAnnotations = htmlAnnotationRule
    ? generateHTMLAnnotations(props, annotations)
    : [];

  let renderedLegend;
  if (legendSettings) {
    const positionHash = {
      left: [15, 15],
      right: [size[0] + 15, 15]
    };
    const { position = 'right', title = 'Legend' } = legendSettings;
    const legendPosition = positionHash[position];
    renderedLegend = (
      <g transform={`translate(${legendPosition.join(',')})`}>
        <Legend {...legendSettings} title={title} position={position} />
      </g>
    );
  }

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
        <g>
          {renderedLegend}
          {svgAnnotations}
        </g>
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

export default AnnotationLayer;