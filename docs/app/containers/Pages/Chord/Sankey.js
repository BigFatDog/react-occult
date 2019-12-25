import React from 'react';
import { XAxis, YAxis, Paper, Force, Sankey } from 'occult';
import { PapperBlock } from 'dan-components';
import energy from '../data/energy.json';
import * as d3 from 'd3';

const frameProps = {
  width: 1200,
  height: 700,
  margin: 70
};

const colors = {
  'Base Import': '#ac58e5',
  Usage: '#E0488B',
  Intermediary: '#9fd0cb',
  Other: '#e0d33a'
};

const MetroRain8 = [
  '#abe70f',
  '#79e70f',
  '#0fe71f',
  '#0fe7d4',
  '#10d9ec',
  '#10c5ec',
  '#1fb2e7',
  '#1f97e7'
];
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

const sankeyProps = {
  /* --- Data --- */
  nodes: energy.nodes.slice(),
  edges: energy.links.map(d => ({
    source: energy.nodes[d.source].name,
    target: energy.nodes[d.target].name,
    value: d.value
  })),

  /* --- Size --- */
  /* --- Layout --- */
  // nodePaddingRatio: 0.7,
  /* --- Process --- */
  nodeIDAccessor: 'name',
  sourceAccessor: 'source',
  targetAccessor: 'target',

  /* --- Customize --- */
  nodeStyle: d => ({
    stroke: colorScale(d.name),
    fill: colorScale(d.name)
  }),
  edgeStyle: d => ({
    stroke: colorScale(d.target.name),
    fill: colorScale(d.source.name),
    fillOpacity: 0.2
  }),

  /* --- Draw --- */
  edgeWidthAccessor: 'value',

  /* --- Interact --- */
  hoverAnnotation: true,

  /* --- Annotate --- */
  nodeLabels: d => <text>{d.id}</text>
};

const Network = props => {
  return (
    <PapperBlock>
      <Paper {...frameProps}>
        <Sankey {...sankeyProps}></Sankey>
      </Paper>
    </PapperBlock>
  );
};

export default Network;
