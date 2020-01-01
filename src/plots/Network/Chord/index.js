import React from 'react';
import PathDiagram from '../PathDiagram';
import chordNodeGenerator from './chordNodeGenerator';
import chordEdgeGenerator from './chordEdgeGenerator';

const Chord = props => {
  return null;
};

Chord.nodeGenerator = chordNodeGenerator;
Chord.edgeGenerator = chordEdgeGenerator;

Chord.propTypes = {
  ...PathDiagram.propTypes
};

Chord.defaultProps = {
  ...PathDiagram.defaultProps
};

export default Chord;
