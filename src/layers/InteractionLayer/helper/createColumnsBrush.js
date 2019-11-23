import { brushX, brushY } from 'd3-brush';
import { event } from 'd3-selection';
import Brush from '../Brush';
import React from 'react';

import { brushStart, brush, brushEnd } from './brushEvents';

const createColumnsBrush = (interaction, props) => {
  const { projection, rScale, size, oColumns, renderPipeline } = props;

  if (!projection || !rScale || !oColumns) return;

  const brushData = {};
  Object.entries(renderPipeline).forEach(([key, value]) => {
    if (value.data && value.data.length > 0) {
      brushData[key] = value.data;
    }
  });

  let semioticBrush, mappingFn;

  const max = rScale.domain()[1];

  if (projection && projection === 'horizontal') {
    mappingFn = d => (!d ? null : [rScale.invert(d[0]), rScale.invert(d[1])]);
  } else
    mappingFn = d =>
      !d
        ? null
        : [
            Math.abs(rScale.invert(d[1]) - max),
            Math.abs(rScale.invert(d[0]) - max)
          ];

  const rRange = rScale.range();

  const columnHash = oColumns;
  let brushPosition, selectedExtent;

  const brushes = Object.keys(columnHash).map(c => {
    if (projection && projection === 'horizontal') {
      selectedExtent = interaction.extent[c]
        ? interaction.extent[c].map(d => rScale(d))
        : rRange;
      brushPosition = [0, columnHash[c].x];
      semioticBrush = brushX();
      semioticBrush
        .extent([[rRange[0], 0], [rRange[1], columnHash[c].width]])
        .on('start', () =>
          brushStart(mappingFn(event.selection), c, brushData, props)
        )
        .on('brush', () =>
          brush(mappingFn(event.selection), c, brushData, props)
        )
        .on('end', () =>
          brushEnd(mappingFn(event.selection), c, brushData, props)
        );
    } else {
      selectedExtent = interaction.extent[c]
        ? interaction.extent[c].map(d => rRange[1] - rScale(d)).reverse()
        : rRange;
      brushPosition = [columnHash[c].x, 0];
      semioticBrush = brushY();
      semioticBrush
        .extent([[0, rRange[0]], [columnHash[c].width, rRange[1]]])
        .on('start', () =>
          brushStart(mappingFn(event.selection), c, brushData, props)
        )
        .on('brush', () =>
          brush(mappingFn(event.selection), c, brushData, props)
        )
        .on('end', () =>
          brushEnd(mappingFn(event.selection), c, brushData, props)
        );
    }

    return (
      <g key={`column-brush-${c}`} className="brush">
        <Brush
          key={`orbrush${c}`}
          selectedExtent={selectedExtent}
          svgBrush={semioticBrush}
          position={brushPosition}
        />
      </g>
    );
  });
  return brushes;
};

export default createColumnsBrush;
