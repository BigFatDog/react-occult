import { Paper, Arc } from 'occult';
import React from 'react';
import { PapperBlock } from 'dan-components';

import { withStyles } from '@material-ui/core';
import energy from '../data/energy.json';
import * as d3 from 'd3';

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
const gradients = [
  'url(#gradient_1)',
  'url(#gradient_2)',
  'url(#gradient_3)',
  'url(#gradient_4)'
];
const colorScale1 = d3.scaleOrdinal().range(TheMetLight);
const colorScale = d3.scaleOrdinal().range(gradients);

const styles = {
  frame: {
    background:
      'radial-gradient( circle 621px at 25.3% 13.8%,  rgba(255,255,255,1) 0%, rgba(234,236,255,1) 90% )',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

const arcProps = {
  nodes: energy.nodes.slice(),
  edges: energy.links.map(d => ({
    source: energy.nodes[d.source].name,
    target: energy.nodes[d.target].name,
    value: d.value
  })),

  nodeIDAccessor: 'name',
  sourceAccessor: 'source',
  targetAccessor: 'target',
  nodeStyle: d => ({
    fill: colorScale1(d.name),
    opacity: 0.8,
    stroke: 'white'
  }),
  edgeStyle: d => ({
    stroke: colorScale(d.target.name),
    fill: colorScale(d.source.name),
    fillOpacity: 0.2
  }),
  edgeWidthAccessor: 'value',
  hoverAnnotation: true,
  nodeLabels: d => {
    return d.output && <text textAnchor="middle">{d.id}</text>;
  },
  zoom: false, // Zoom the laid out nodes in or out so that they fit the specified size, can also be "stretch" if you want zoom not to maintain aspect ratio
  padAngle: 0.01 // Space between groups in degrees,
};
const frameProps = {
  width: 1000,
  height: 500,
  margin: { top: 50, bottom: 100, left: 20, right: 20 },
  additionalDefs: [
    <linearGradient key="gradient1" id="gradient_1">
      <stop stopColor={'#00ff70'} offset="0%" />
      <stop stopColor={'#0373d9'} offset="100%" />
    </linearGradient>,
    <linearGradient key="gradient2" id="gradient_2" x1={0} x2={0} y1={0} y2={1}>
      <stop stopColor={'#ffc62e'} offset="0%" />
      <stop stopColor={'#ff2fab'} offset="100%" />
    </linearGradient>,
    <linearGradient key="gradient3" id="gradient_3">
      <stop stopColor={'#7324ff'} offset="0%" />
      <stop stopColor={'#ff2fab'} offset="100%" />
    </linearGradient>,
    <linearGradient key="gradient4" id="gradient_4">
      <stop stopColor={'#04a6ff'} offset="0%" />
      <stop stopColor={'#00ddc6'} offset="100%" />
    </linearGradient>
  ]
};

const ArcPage = props => {
  const { classes } = props;

  return (
    <PapperBlock>
      <Paper {...frameProps} className={classes.frame}>
        <Arc {...arcProps} />
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(ArcPage);
