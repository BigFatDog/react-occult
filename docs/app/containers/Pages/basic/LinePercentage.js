import React from 'react';
import { Paper, Line, XAxis, YAxis } from 'occult';
import { PapperBlock } from 'dan-components';
import * as d3 from 'd3';
import { withStyles } from '@material-ui/core';
import IpsosMORI from '../data/Ipsos_MORI.json';

const TheMetLight = [
  'url(#gradient_1)',
  'url(#gradient_2)',
  'url(#gradient_3)',
  'url(#gradient_4)'
];

const MetroDawn4 = ['#aeeef8', '#e5fd3d', '#dff84d', '#eb3ba6'];
const colorScale = d3.scaleOrdinal().range(MetroDawn4);

const styles = {
  frame: {
    background:
      'linear-gradient( rgba(26,44,129,1) 7.3%, rgba(38,206,205,1) 89.3% )',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

const frameProps = {
  margin: { left: 70, bottom: 90, right: 30, top: 50 },
  width: 1000,
  height: 600,
  xScaleType: d3.scaleTime,
  title: (
    <text textAnchor="middle">
      <tspan fill={'#aeeef8'}>Education</tspan>{' '}
      <tspan fill={'white'}> vs </tspan> <tspan fill={'#e5fd3d'}>Farming</tspan>{' '}
      <tspan fill={'white'}> vs </tspan> <tspan fill={'#dff84d'}>Defence</tspan>
    </text>
  )
};

const formatDate = d3.timeFormat('%Y-%b');
const parse = d3.timeParse('%Y%m%d');
const data = [];
IpsosMORI.forEach(d => {
  const date = parse(d.date);
  for (const k of Object.keys(d)) {
    if (k !== 'date') {
      data.push({
        date,
        rating: d[k],
        category: k
      });
    }
  }
});

const filteredData = data
  .filter(d => ['Education', 'Farming', 'Defence'].includes(d.category))
  .filter(d => new Date(d.date) < new Date('2010-01-01'));

const lineProps = {
  data: filteredData,
  xAccessor: d => d.date,
  yAccessor: d => d.rating,
  sAccessor: d => d.category,
  yExtent: [0, 1],
  lineStyle: (d, i) => ({
    stroke: colorScale(d.s),
    strokeWidth: 1.5,
    opacity: 0.8,
    fill: 'none'
  }),

  lineType: {
    type: 'linepercent',
    interpolator: d3.curveMonotoneX
  },
  showPoints: true,
  lineUseCanvas: false
};

const LinePage = props => {
  const { classes } = props;

  return (
    <PapperBlock>
      <Paper {...frameProps} className={classes.frame}>
        <XAxis
          label={'Time'}
          ticks={10}
          showTickLines={false}
          tickFormat={d => formatDate(d)}
        />
        <YAxis
          label={'Percentage'}
          tickLineGenerator={({ xy }) => (
            <path
              style={{
                fill: '#efefef',
                stroke: '#ccc',
                opacity: 0.3,
                strokeDasharray: '4 4'
              }}
              d={`M${xy.x1},${xy.y1 - 5}L${xy.x2},${xy.y1 - 5}`}
            />
          )}
        />
        <Line {...lineProps} />
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(LinePage);
