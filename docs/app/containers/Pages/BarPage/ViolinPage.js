import * as d3 from 'd3';
import React from 'react';
import { XAxis, YAxis, Paper, Bar, Annotation, OrdinalPoint } from 'occult';
import { PapperBlock } from 'dan-components';
import { withStyles } from '@material-ui/core/styles';
import { HospitalFacilities } from '../data/HospitalFacilitiesData';

const TheMetLight = [
  // '#F44336',
  '#E91E63',
  // '#9C27B0',
  // '#673AB7',
  '#3F51B5',
  // '#2196F3',
  // '#03A9F4',
  // '#00BCD4',
  // '#009688',
  // '#4CAF50',
  // '#8BC34A',
  '#CDDC39',
  // '#FFEB3B',
  '#FFC107',
  // '#FF9800',
  '#FF5722'
];

const colorScale = d3.scaleOrdinal().range(TheMetLight);

const yAxisProps = {
  orient: 'bottom',
  baseline: false,
  marginalSummaryType: {
    type: 'heatmap',
    summaryStyle: { fill: '#85144b', fillOpacity: 0.5, stroke: '#8ca6db' },
    flip: true
  }
};

const BarProps = {
  data: HospitalFacilities.slice(),
  projection: 'horizontal',
  oAccessor: 'Borough',
  rAccessor: 'Community Board',
  r: 3,
  style: d => ({
    fill: colorScale(d.Borough),
    opacity: 0.4
  }),
  summaryType: {
    type: 'violin',
    bins: 18,
    binValue: d => d.length,
    useBins: true,
    relative: false
  },
  summaryStyle: d => ({
    fill: d && colorScale(d.Borough),
    fillOpacity: 0.3,
    stroke: d && colorScale(d.Borough),
    strokeWidth: 0.5
  }),
  renderOrder: ['pieces', 'summaries'],
  oLabel: d => (
    <text fontSize={14} dx={-5} dy={3} textAnchor={'end'}>
      {d}
    </text>
  )
};
const FrameProps = {
  width: 1000,
  height: 500,
  margin: { top: 40, right: 30, left: 110, bottom: 50 },
  title: (
    <text textAnchor="middle">
      NYC Hospital Facilities <tspan fill={'#E5BDF6'}>Community Board </tspan>{' '}
      By Borough
    </text>
  ),
  additionalDefs: [
    <pattern
      key="triangle"
      id="triangle"
      width="10"
      height="10"
      patternUnits="userSpaceOnUse"
    >
      <rect fill={'#9fd0cb'} width="10" height="10" />
      <circle fill={'#7566ff'} r="5" cx="3" cy="3" />
    </pattern>,
    <linearGradient key="gradient" x1="0" x2="0" y1="0" y2="1" id="gradient">
      <stop stopColor={'#D7E1EC'} offset="0%" />
      <stop stopColor={'#FFFFFF'} offset="100%" />
    </linearGradient>
  ]
};

const styles = {
  frame: {
    background:
      'linear-gradient( 109.6deg,  rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1% )',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  }
};

const BarPage = props => {
  const { classes } = props;
  return (
    <PapperBlock>
      <Paper {...FrameProps} className={classes.frame}>
        <YAxis {...yAxisProps} showTickLines={false} />
        {/*<YAxis {...axisRightProps}/>*/}
        <XAxis showTickLines={true} />
        <OrdinalPoint {...BarProps} />
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(BarPage);
