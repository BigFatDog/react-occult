import * as labella from 'labella';
import { bumpAnnotations } from './annotationHandling';

const noteDataWidth = (noteData, charWidth = 8) => {
  const wrap = (noteData.note && noteData.note.wrap) || 120;
  const noteText = noteData.note.label || noteData.note.label || '';
  return Math.min(wrap, noteText.length * charWidth);
};

const noteDataHeight = (noteData, charWidth = 8, lineHeight = 20) => {
  const wrap = (noteData.note && noteData.note.wrap) || 120;
  const text = noteData.note.label || noteData.note.title || '';
  return (
    Math.ceil((text.length * charWidth) / wrap) * lineHeight +
    (noteData.note.label && noteData.note.title ? lineHeight : 0)
  );
};

function marginOffsetFn(orient, axisSettings, marginOffset) {
  if (typeof marginOffset === 'number') {
    return marginOffset;
  }
  if (axisSettings && axisSettings.find(d => d.props.orient === orient)) {
    return 50;
  }
  return 10;
}

const index = (
  adjustableAnnotations,
  annotationProcessor,
  props
) => {
  const { layout = { type: false } } = annotationProcessor;
  const { axes = [], margin } = props;

  if (layout.type === false) {
    return adjustableAnnotations;
  }

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
          noteDataHeight(d.props.noteData, characterWidth, lineHeight) + padding
      )
    );
    const topOffset = Math.max(
      ...topNodes.map(
        d =>
          noteDataHeight(d.props.noteData, characterWidth, lineHeight) + padding
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

export default index;
