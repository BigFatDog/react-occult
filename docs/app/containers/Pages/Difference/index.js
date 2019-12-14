import React from 'react';
import { XYFrame, Line, XAxis, YAxis, Annotation } from 'occult';
import { PapperBlock } from 'dan-components';
import WeatherData from './weather.json';
import * as d3 from 'd3';
import { scaleTime, scaleLinear } from 'd3-scale';
import { withStyles } from '@material-ui/core';
import NYCPic from './nyc.jpeg';
import SFPic from './sf.jpeg';

const styles = {
  frame: {
    background: 'linear-gradient(to top, #ffffff 0%, #dfe9f3 100%)',
    border: 0,
    borderRadius: 6,
    color: 'black'
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
    margin: { left: 70, bottom: 70, right: 50, top: 110 },
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
    foregroundGraphics: [
        <g>
          <defs>
            <pattern
                id={'nyc-pattern'}
                x={'0%'}
                y={'0%'}
                height={'100%'}
                width={'100%'}
                viewBox={'0 0 512 512'}
            >
              <image
                  xlinkHref={NYCPic}
                  x={'0%'}
                  y={'0%'}
                  height={512}
                  width={512}
              ></image>
            </pattern>
            <pattern
                id={'sf-pattern'}
                x={'0%'}
                y={'0%'}
                height={'100%'}
                width={'100%'}
                viewBox={'0 0 512 512'}
            >
              <image
                  xlinkHref={SFPic}
                  x={'0%'}
                  y={'0%'}
                  height={512}
                  width={512}
              ></image>
            </pattern>
          </defs>
          <circle
              id={'nyc'}
              cx={460}
              cy={70}
              r={30}
              fill={'url(#nyc-pattern)'}
              stroke={'#009efd'}
              strokeWidth={3}
          />
          <circle
              id={'sf'}
              cx={540}
              cy={70}
              r={30}
              fill={'url(#sf-pattern)'}
              stroke={'#fa71cd'}
              strokeWidth={3}
          />
          <text x={460 - 15} y={70 + 50} fill={'#009efd'} >
            NYC
          </text>
          <text x={540 - 10 } y={70 + 50} fill={'#fa71cd'} >
            SF
          </text>
        </g>
    ],
    title: (
      <text textAnchor="middle">
        <tspan fill={'black'}>Weather Difference</tspan>
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
      strokeWidth: 1,
      strokeDashArray: 4,
      stroke: d.s === 'New York' ? '#fa71cd' : '#0074D9',
      fill: d.s === 'New York' ? '#f9d423' : '#2ECC40',
      // fill: d.s === 'New York' ? 'url(#paleWoodGradient3)' : 'url(#paleWoodGradient2)',
      fillOpacity: .4
    }),

    lineType: {
      type: 'difference',
      interpolator: d3.curveStepAfter
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

  const yAxisProps = {
    orient: 'right',
    showLabels: false,
    marginalSummaryType: {
      type: 'heatmap',
      bins: 40,
      // useBins: false,
      summaryStyle: (d, i, f) => {
        return { fill: '#FF4136', fillOpacity: 0.9, stroke: '#FF4136' };
      },
      showPoints: false,
      pointStyle: { stroke: '#e0d33a', strokeOpacity: 0.75, fill: 'none' }
    }
  };

  return (
    <div>
      <PapperBlock>
        <XYFrame {...frameProps} className={classes.frame}>
          <XAxis
            label={'Year'}
            tickFormat={d => formatDate(d)}
            showLineTicks={false}
          />
          <YAxis label={'Weather'} showLineTicks={true}/>
          <YAxis {...yAxisProps} />
          <Line {...lineProps} />
          <Annotation
              type={'y'}
              dx={110}
              dy={40}
              // connector={{ end: 'none' }}
              coordinates={{ weather: 30 }}
              color={'#0074D9'}
              note={{
                label: 'NYC snows',
                align: 'right',
                lineType: null,
                wrap: 50
              }}
          />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(LinePage);
