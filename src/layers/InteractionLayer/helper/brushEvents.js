import { brushX, brushY } from 'd3-brush';
import { event, select } from 'd3-selection';
import Brush from '../Brush';
import React from 'react';

const generateOMappingFn = projectedColumns => d =>
  d
    ? Object.values(projectedColumns).filter(
        c => d[1] >= c.x && d[0] <= c.x + c.width
      )
    : null;

const generateOEndMappingFn = projectedColumns => d => {
  if (
    d &&
    event.sourceEvent &&
    event.sourceEvent.path &&
    event.sourceEvent.path[1] &&
    event.sourceEvent.path[1].classList.contains('xybrush') &&
    event.target.move
  ) {
    const columnValues = Object.values(projectedColumns);
    const foundColumns = columnValues.filter(
      c => d[1] >= c.x && d[0] <= c.x + c.width
    );

    const firstColumn = foundColumns[0] || {
      x: 0,
      width: 0
    };

    const lastColumn = foundColumns[foundColumns.length - 1] || {
      x: 0,
      width: 0
    };

    const columnPosition = [
      firstColumn.x + Math.min(5, firstColumn.width / 10),
      lastColumn.x + lastColumn.width - Math.min(5, lastColumn.width / 10)
    ];

    select(event.sourceEvent.path[1])
      .transition(750)
      .call(event.target.move, columnPosition);

    return foundColumns;
  }
  return null;
};

const brushStart = (e, column, data, props) => {
  if (props.interaction && props.interaction.start)
    props.interaction.start(e, column, data);
};

const brush = (e, column, data, props) => {
  if (props.interaction && props.interaction.during)
    props.interaction.during(e, column, data);
};

const brushEnd = (e, column, data, props) => {
  if (props.interaction && props.interaction.end)
    props.interaction.end(e, column, data);
};

const createBrush = (interaction, props) => {
  let semioticBrush, mappingFn, selectedExtent, endMappingFn;

  const { xScale, yScale, size, renderPipeline } = props;

  const brushData = {};

  Object.entries(renderPipeline).forEach(([key, value]) => {
    if (value.data && value.data.length > 0) {
      brushData[key] = value.data;
    }
  });

  const { projection, projectedColumns } = interaction;

  const actualBrush =
    interaction.brush === 'oBrush'
      ? projection === 'horizontal'
        ? 'yBrush'
        : 'xBrush'
      : interaction.brush;

  const {
    extent = actualBrush === 'xyBrush'
      ? [
          [xScale.invert(0), yScale.invert(0)],
          [xScale.invert(size[0]), yScale.invert(size[1])]
        ]
      : actualBrush === 'xBrush'
      ? [xScale.invert(0), xScale.invert(size[0])]
      : [yScale.invert(0), yScale.invert(size[1])]
  } = interaction;

  if (extent.indexOf && extent.indexOf(undefined) !== -1) {
    return <g />;
  }

  if (actualBrush === 'xBrush') {
    const castExtent = extent;
    mappingFn = d => (!d ? null : [xScale.invert(d[0]), xScale.invert(d[1])]);
    semioticBrush = brushX();
    selectedExtent = castExtent.map(d => xScale(d));
    endMappingFn = mappingFn;
  } else if (actualBrush === 'yBrush') {
    const castExtent = extent;

    mappingFn = d =>
      !d
        ? null
        : [yScale.invert(d[0]), yScale.invert(d[1])].sort((a, b) => a - b);
    semioticBrush = brushY();
    selectedExtent = castExtent.map(d => yScale(d)).sort((a, b) => a - b);
    endMappingFn = mappingFn;
  } else {
    const castExtent = extent;
    if (
      castExtent.indexOf(undefined) !== -1 ||
      castExtent[0].indexOf(undefined) !== -1 ||
      castExtent[1].indexOf(undefined) !== -1
    ) {
      return <g />;
    }

    semioticBrush = brush();
    mappingFn = d => {
      if (!d) return null;
      const yValues = [yScale.invert(d[0][1]), yScale.invert(d[1][1])].sort(
        (a, b) => a - b
      );

      return [
        [xScale.invert(d[0][0]), yValues[0]],
        [xScale.invert(d[1][0]), yValues[1]]
      ];
    };

    const yValues = [yScale(extent[0][1]), yScale(extent[1][1])].sort(
      (a, b) => a - b
    );

    selectedExtent = castExtent.map((d, i) => [xScale(d[0]), yValues[i]]);

    endMappingFn = mappingFn;
  }

  if (interaction.brush === 'oBrush') {
    selectedExtent = null;
    if (interaction.extent) {
      const [leftExtent, rightExtent] = interaction.extent;
      if (
        (typeof leftExtent === 'string' || typeof leftExtent === 'number') &&
        (typeof rightExtent === 'string' || typeof rightExtent === 'number')
      ) {
        selectedExtent = [
          projectedColumns[leftExtent].x,
          projectedColumns[rightExtent].x + projectedColumns[rightExtent].width
        ];
      }
    }

    mappingFn = generateOMappingFn(projectedColumns);
    endMappingFn = generateOEndMappingFn(projectedColumns);
  }

  semioticBrush
    .extent([
      [0, 0],
      [props.size[0], props.size[1]]
    ])
    .on('start', () =>
      brushStart(mappingFn(event.selection), undefined, brushData, props)
    )
    .on('brush', () =>
      brush(mappingFn(event.selection), undefined, brushData, props)
    )
    .on('end', () =>
      brushEnd(endMappingFn(event.selection), undefined, brushData, props)
    );

  return (
    <g className="brush">
      <Brush
        selectedExtent={selectedExtent}
        extent={extent}
        svgBrush={semioticBrush}
      />
    </g>
  );
};

export { brushStart, brush, brushEnd, createBrush };
