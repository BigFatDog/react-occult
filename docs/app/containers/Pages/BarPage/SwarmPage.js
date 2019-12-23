import React from 'react';
import { PapperBlock } from 'dan-components';
import { Paper, Swarm, XAxis } from 'occult';
import * as d3 from 'd3';

import Squirrel from '../data/2018_Central_Park_Squirrel_Census_-_Squirrel_Data.json';

const ext = d3.extent(Squirrel, d => d['Community Districts']);
const radiusScale = d3
  .scaleLinear()
  .domain(ext)
  .range([4, 20]);
const TheMetLight = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722'
];

const colorScale = d3.scaleOrdinal().range(TheMetLight);

const swarmProps = {
  data: Squirrel.slice(0, 400),
  r: d => radiusScale(d['Community Districts']),
  customMark: d => {
    const c = colorScale(d['Primary Fur Color']);
    return (
      <g>
        <circle r={11} stroke={c} fill={c} />
        <text fill={'black'} fontWeight="bold" textAnchor="middle" y=".4em">
          {d['Primary Fur Color']}
        </text>
      </g>
    );
  },
  projection: 'horizontal',
  oAccessor: 'Primary Fur Color',
  rAccessor: 'City Council Districts',
  rExtent: [0],
  pieceHoverAnnotation: true
};

const frameProps = {
  size: [700, 450],
  margin: { left: 20, top: 50, bottom: 75, right: 20 },
  title: (
    <text textAnchor="middle">
      Weekly(1-52) Box Office Totals from <tspan fill={'#ac58e5'}>2016</tspan> -
      mid <tspan fill={'#9fd0cb'}>2017</tspan>
    </text>
  ),
  tooltipContent: d => (
    <div className="tooltip-content">
      {d.date} - {Math.round(d.total / 1000000)}m
    </div>
  )
};

const axisProps = {
  orient: 'bottom',
  label: 'Box office total',
  ticks: 8,
  tickFormat: function(e) {
    return e / 1e6 + 'm';
  }
};

const SwarmPage = props => {
  return (
    <PapperBlock>
      <Paper {...frameProps}>
        <Swarm {...swarmProps} />
        <XAxis {...axisProps} />
      </Paper>
    </PapperBlock>
  );
};

export default SwarmPage;
