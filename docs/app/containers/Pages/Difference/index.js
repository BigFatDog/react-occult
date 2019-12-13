import React from 'react';
import { XYFrame, Line, XAxis, YAxis } from 'occult';
import { PapperBlock } from 'dan-components';
import WeatherData from './weather.json';
import * as d3 from 'd3';
import { scaleTime, scaleLinear } from 'd3-scale';
import { withStyles } from '@material-ui/core';

const styles = {
  frame: {
    background: 'linear-gradient(to top, #209cff 0%, #68e0cf 100%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  }
};

const parseDate = d3.timeParse('%Y%m%d');
const formatDate = d3.timeFormat('%b');
const data = [];
WeatherData.forEach(d => {
  data.push({
    date: parseDate(d.date),
    weather: +d['New York'],
    city: 'New York'
  });
  data.push({
    date: parseDate(d.date),
    weather: +d['San Francisco'],
    city: 'San Francisco'
  });
});

const LinePage = props => {
  const { classes } = props;
  const frameProps = {
    margin: { left: 50, bottom: 50, right: 50, top: 40 },
    width: 1000,
    height: 600,
    xScaleType: scaleTime,
    yScaleType: scaleLinear,
    additionalDefs: [
      <linearGradient x1="0" x2="1" y1="0" y2="0" id="paleWoodGradient3">
        <stop stopColor="#F9D423" offset="0%" />
        <stop stopColor="#FF4E50" offset="100%" />
      </linearGradient>,
      <linearGradient x1="0" x2="1" y1="0" y2="0" id="paleWoodGradient2">
        <stop stopColor="#517fa4" offset="0%" />
        <stop stopColor="#243949" offset="100%" />
      </linearGradient>
    ],
    title: (
      <text textAnchor="middle">
        <tspan fill={'white'}>Difference</tspan>
      </text>
    )
  };

  const lineProps = {
    data,
    xAccessor: d => d.date,
    yAccessor: d => d.weather,
    sAccessor: d => d.city,
    yExtent: [15],
    lineStyle: (d, i) => ({
      // stroke: d.s === 'New York' ? '#fa71cd' : '#48c6ef',
      fill: d.s === 'New York' ? '#fa71cd' : '#6713d2',
      // fill: d.s === 'New York' ? 'url(#paleWoodGradient3)' : 'url(#paleWoodGradient2)',
      fillOpacity: 0.7
    }),

    lineType: {
      type: 'difference',
      interpolator: d3.curveStep
    },
    pointStyle: {
      stroke: 'grey',
      alpha: 0.4,
      strokeWidth: 1
    },
    lineRenderMode: {
      renderMode: 'sketchy',
      fillWeight: 3,
      hachureGap: 4
    },
    showPoints: false,
    lineUseCanvas: true
  };

  return (
    <div>
      <PapperBlock>
        <XYFrame {...frameProps} className={classes.frame}>
          <XAxis
            label={'Expire Date'}
            tickFormat={d => formatDate(d)}
            showLineTicks={false}
          />
          <YAxis />
          <Line {...lineProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(LinePage);
