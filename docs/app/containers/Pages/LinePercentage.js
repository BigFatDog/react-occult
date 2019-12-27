import React from 'react';
import { Paper, Line, XAxis, YAxis } from 'occult';
import { PapperBlock } from 'dan-components';
import { LineData } from './LineChartPage/lineData';
import * as d3 from 'd3';
import {withStyles} from "@material-ui/core";

const TheMetLight = [
  'url(#gradient_1)',
  'url(#gradient_2)',
  'url(#gradient_3)',
  'url(#gradient_4)',

];

const colorScale = d3.scaleOrdinal().range(TheMetLight);

const styles = {
  frame: {
    background:
        '#242424',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

const frameProps = {
  margin: { left: 60, bottom: 90, right: 10, top: 40 },
  width: 1000,
  height: 600,
  title: (
      <text textAnchor="middle">
        <tspan fill={'#FFFFFF'}>Line Percentage</tspan>
      </text>
  ),
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

const lineProps = {
  data: LineData,
  xAccessor: d => d.year,
  yAccessor: d => d.n,
  sAccessor: d => d.name,
  yExtent: [0, 1],
  lineStyle: (d, i) => ({
    stroke: '#ffffff',
    strokeWidth: 4,
    opacity: 0.7,
    fill: colorScale(d.s),
  }),

  lineType: {
    type: 'linepercent',
    interpolator: d3.curveCatmullRom
  },
  pointStyle: {
    stroke: 'grey',
    alpha: 0.4,
    strokeWidth: 1
  },
  showPoints: false,
  lineUseCanvas: false
};

const LinePage = props => {
  const { classes } = props;

  return (
      <PapperBlock>
        <Paper {...frameProps} className={classes.frame}>
          <XAxis label={'Rank'} rotate={30} showTickLines={false}/>
          <YAxis label={'Theaters'}  showTickLines={false}/>
          <Line {...lineProps} />
        </Paper>
      </PapperBlock>
  );
};

export default withStyles(styles)(LinePage);
