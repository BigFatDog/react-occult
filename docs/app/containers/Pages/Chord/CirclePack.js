import React from 'react';
import { PapperBlock } from 'dan-components';
import { Paper, CirclePack } from 'occult';
import { root } from '../data/shakespeare';
import * as d3 from 'd3';
import { withStyles } from '@material-ui/core';

const blue = '#0373d9';
const green = '#00ff70';
const bg = '#3436b8';

const colorScale = d3
  .scaleLinear()
  .domain([0, 500])
  .range([green, blue]);

const styles = {
  frame: {
    background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  }
};

const frameProps = {
  width: 1000,
  height: 940,
  hoverAnnotation: [
    { type: 'desaturation-layer', style: { fill: 'white', fillOpacity: 0.25 } },
    {
      type: 'highlight',
      style: d => ({
        fill: colorScale(d.depth),
        stroke: colorScale(d.depth),
        fillOpacity: 0.6
      })
    },
    { type: 'frame-hover' }
  ],
  // tooltipContent: d => (
  //   <div className="tooltip-content">
  //     {d.parent ? <p>{d.parent.data.name}</p> : undefined}
  //     <p>{d.data.name}</p>
  //   </div>
  // )
};

const plotProps = {
  nodes: [root()],
  nodeIDAccessor: 'id',
  nodeStyle: d => ({
    fill: colorScale(d.value),
    stroke: bg,
    opacity: 0.7
  }),
  zoom: true,
  oPadding: 10,
  hierarhcySum: d => d.size,
  hierarchyChildren: d => d.children,
  filterRenderedNodes: d => d.depth !== 0,
  nodeLabels: d => {
    return d.depth > 1 ? null : (
      <g transform="translate(0,-15)">
        <text
          fontSize="12"
          textAnchor="middle"
          strokeWidth={2}
          stroke="white"
          fill="white"
        >
          {d.id}
        </text>
        <text fontSize="12" textAnchor="middle" fill={colorScale(d.value)}>
          {d.id}
        </text>
      </g>
    );
  }
};

const CirclePackPage = props => {
  const { classes } = props;
  return (
    <PapperBlock>
      <Paper {...frameProps} className={classes.frame}>
        <CirclePack {...plotProps} />
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(CirclePackPage);
