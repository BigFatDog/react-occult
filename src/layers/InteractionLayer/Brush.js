import React, { useEffect, useRef } from 'react';
import { select } from 'd3-selection';

import usePrevious from '../../hooks/usePrevious';

const flatten = list =>
  list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b.sort((a, b) => a - b)) : b),
    []
  );

const flatShortArray = array => {
  if (!Array.isArray(array)) return 'not-array';
  if (!Array.isArray(array[0])) {
    array = array.sort((a, b) => a - b);
  }
  const flat = flatten(array);

  return flat
    .map(
      d =>
        (d instanceof Date && d.toString()) ||
        (d && d.toFixed && d.toFixed(2)) ||
        'empty'
    )
    .toString();
};

const createBrush = (svgBrush, node, selectedExtent) => {
  const brush = svgBrush;
  select(node).call(brush);

  let _selectedExtent = selectedExtent;
  if (_selectedExtent) {
    if (Array.isArray(_selectedExtent[0])) {
      const sortedY = [_selectedExtent[0][1], _selectedExtent[1][1]].sort(
        (a, b) => a - b
      );
      _selectedExtent = [
        [_selectedExtent[0][0], sortedY[0]],
        [_selectedExtent[1][0], sortedY[1]]
      ];
    }

    select(node).call(brush.move, _selectedExtent);
  }
};

const Brush = props => {
  const { position = [0, 0], svgBrush, selectedExtent, extent } = props;
  const node = useRef(null);
  const {
    extent: prevExtent,
    selectedExtent: prevSelectedExtent
  } = usePrevious({ extent, selectedExtent });

  useEffect(() => {
    if (
      (prevExtent &&
        extent &&
        flatShortArray(prevExtent) !== flatShortArray(extent)) ||
      (prevSelectedExtent &&
        electedExtent &&
        flatShortArray(prevSelectedExtent) !==
          flatShortArray(selectedExtent)) ||
      (!prevSelectedExtent && selectedExtent) ||
      (prevSelectedExtent && !selectedExtent)
    ) {
      createBrush(svgBrush, node, selectedExtent);
    }
  });

  return (
    <g transform={`translate(${position})`} ref={node} className="xybrush" />
  );
};

export default Brush;
