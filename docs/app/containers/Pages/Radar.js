import * as d3 from 'd3';
import React from 'react';
import { Axis, Paper, OrdinalPoint } from 'occult';
import { PapperBlock } from 'dan-components';
import { withStyles } from '@material-ui/core/styles';

const pointProps = {
  data: [
    {
      name: 'Pikachu',
      color: '#e0d33a',
      attribute: 'attack',
      value: 55,
      defense: 40,
      speed: 90,
      hp: 35
    },
    { name: 'Pikachu', color: '#e0d33a', attribute: 'defense', value: 40 },
    { name: 'Pikachu', color: '#e0d33a', attribute: 'speed', value: 90 },
    { name: 'Pikachu', color: '#e0d33a', attribute: 'hp', value: 35 },
    {
      name: 'Pikachu',
      color: '#e0d33a',
      attribute: 'special attack',
      value: 50
    },
    { name: 'Pikachu', color: '#e0d33a', attribute: 'attack', value: 55 },
    { name: 'Bulbasaur', color: '#9fd0cb', attribute: 'attack', value: 49 },
    { name: 'Bulbasaur', color: '#9fd0cb', attribute: 'defense', value: 49 },
    {
      name: 'Bulbasaur',
      color: '#9fd0cb',
      attribute: 'special attack',
      value: 65
    },
    { name: 'Bulbasaur', color: '#9fd0cb', attribute: 'speed', value: 45 },
    { name: 'Bulbasaur', color: '#9fd0cb', attribute: 'hp', value: 45 },
    { name: 'Squirtle', color: '#7566ff', attribute: 'attack', value: 48 },
    { name: 'Squirtle', color: '#7566ff', attribute: 'defense', value: 65 },
    {
      name: 'Squirtle',
      color: '#7566ff',
      attribute: 'special attack',
      value: 50
    },
    { name: 'Squirtle', color: '#7566ff', attribute: 'speed', value: 43 },
    { name: 'Squirtle', color: '#7566ff', attribute: 'hp', value: 44 },
    { name: 'Charmander', color: '#E0488B', attribute: 'attack', value: 52 },
    { name: 'Charmander', color: '#E0488B', attribute: 'defense', value: 43 },
    {
      name: 'Charmander',
      color: '#E0488B',
      attribute: 'special attack',
      value: 60
    },
    { name: 'Charmander', color: '#E0488B', attribute: 'speed', value: 65 },
    { name: 'Charmander', color: '#E0488B', attribute: 'hp', value: 39 }
  ],
  connectorType: function(e) {
    return e.name;
  },
  projection: 'radial',
  oAccessor: 'attribute',
  rAccessor: 'value',
  rExtent: [0],
  style: function(e) {
    return { fill: e.color, stroke: 'white', strokeOpacity: 0.5 };
  },
  connectorStyle: function(e) {
    return {
      fill: e.source.color,
      stroke: e.source.color,
      strokeOpacity: 0.5,
      fillOpacity: 0.5
    };
  },
  title: 'Pokemon Base Stats',
  foregroundGraphics: [
    <g transform="translate(240, 73)" key="legend">
      <text key={1} fill={'#ac58e5'}>
        New York
      </text>
      <text key={1} y={20} fill={'#E0488B'}>
        Las Vegas
      </text>
      <text key={1} y={40} fill={'#9fd0cb'}>
        San Diego
      </text>
      <text key={1} y={60} fill={'#e0d33a'}>
        Denver
      </text>
      <text key={1} y={80} fill={'#7566ff'}>
        Oakland
      </text>
    </g>
  ],
  pieceHoverAnnotation: true,
  oLabel: true
};
const FrameProps = {
  width: 700,
  height: 700,
  margin: { left: 40, top: 50, bottom: 40, right: 40 },
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
      'linear-gradient( 111.3deg,  rgba(74,105,187,1) 9.6%, rgba(205,77,204,1) 93.6% );',
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
        <Axis />
        <OrdinalPoint {...pointProps} />
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(BarPage);
