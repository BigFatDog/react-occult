import React from 'react';
import { XAxis, YAxis, OFrame } from 'occult';
import { PapperBlock } from 'dan-components';
import * as d3 from 'd3';
import { withStyles } from '@material-ui/core/styles';
import { HospitalFacilities } from './Data';

const barProps = {
  width: 1000,
  height: 600,
  margin: { top: 50, right: 105, left: 80, bottom: 40 },
  data: HospitalFacilities.slice(),
  style: {
    // fill: 'url(#gradient)',
    fill: '#E5BDF6',
    stroke: 'none',
    opacity: 0.7
  },
  type: {
    type: 'point',
    customMark: d => {
      if (d.rIndex === 1) {
        return (
          <circle
            r={3}
            stroke={'#DCE35B'}
            opacity={1}
            fill={'#45B649'}
            strokeWidth={1}
          />
        );
      }
      return (
        <rect
          height={d.scaledValue}
          width={10}
          x={-5}
          fill={'#E5BDF6'}
          opacity={0.7}
        />
      );
    }
  },
  hoverAnnotation: true,
  pieceHoverAnnotation: true,
  // type: 'bar',
  oPadding: 2,
  connectorType: function(e) {
    return 0 !== e.rIndex && e.rIndex;
  },
  connectorStyle: { stroke: '#DCE35B', strokeWidth: 2, opacity: 0.3 },
  multiAxis: true,
  renderOrder: ['pieces', 'connectors'],
  oAccessor: 'Facility Name',
  rAccessor: ['Community Board', 'Census Tract'],
  baseMarkProps: { transitionDuration: { default: 500, fill: 2500 } },
  axes: [
    {
      orient: 'left',
      baseline: false,
      tickLineGenerator: ({ xy }) => (
        <path
          style={{
            fill: '#efefef',
            stroke: '#ccc',
            opacity: 0.3,
            strokeDasharray: '4 4'
          }}
          d={`M${xy.x1},${xy.y1 - 5}L${xy.x2},${xy.y1 - 5}`}
        />
      ),
      label: (
        <text textAnchor={'middle'} fontWeight="bold" fill={'#E5BDF6'}>
          Community Board
        </text>
      ),
      jaggedBase: true
    },
    {
      key: 'Council-District-axis',
      orient: 'right',
      showTickLines: false,

      ticks: 6,
      label: (
        <text textAnchor={'middle'} fontWeight="bold" fill={'#45B649'} dy={-30}>
          Council District
        </text>
      )
    }
  ],

  title: (
    <text textAnchor="middle">
      NYC Hospital Facilities <tspan fill={'#E5BDF6'}>Community Board</tspan>
      vs <tspan fill={'#45B649'}>Council District</tspan>
    </text>
  ),
  projection: 'vertical',
  oLabel: false,
  // oLabel: d => (<text fontSize={12} transform={'rotate(60)'}>{d}</text>),

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
  ],
  // renderMode: "sketchy"
  annotations: [
    {
      type: 'highlight',
      Borough: 'Queens',
      style: { fill: 'red', stroke: 'none' }
    },
    {
      type: 'highlight',
      'Facility Type': 'Child Health Center',
      style: { fill: 'none', stroke: 'red', strokeWidth: 5 }
    }
  ]
};

const styles = {
  frame: {
    background: 'linear-gradient(to top, #4568DC 0%, #B06AB3 100%)',
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
      <OFrame {...barProps} className={classes.frame} />
    </PapperBlock>
  );
};

export default withStyles(styles)(BarPage);
