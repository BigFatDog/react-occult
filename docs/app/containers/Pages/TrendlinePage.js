import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, XAxis, YAxis, Trendline, Line } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { OldFaithful } from './OldFaithfulPage/data';
import * as d3 from 'd3';
import { withStyles } from '@material-ui/core';

const styles = {
  frame: {
    // background: 'linear-gradient(to top, #1fa2ff, #12d8fa, #a6ffcb)',
    // border: 0,
    // borderRadius: 6,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white'
  }
};

const TrendinglinePage = props => {
  const { classes } = props;
  const title = brand.name + ' - Trendingline';
  const description = brand.desc;

  const frameProps = {
    margin: { top: 50, left: 100, right: 50, bottom: 70 },
    width: 1000,
    height: 500,
    additionalDefs: [
      <linearGradient
        id="line-gradient"
        x1="40"
        y1="210"
        x2="460"
        y2="210"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(90)"
      >
        <stop stopColor="rgb(255,0,0)" offset="0" />
        <stop stopColor="rgb(255,255,0)" offset="1" />
      </linearGradient>,
      <linearGradient x1="0" x2="0" y1="0" y2="1" id="paleWoodGradient">
        <stop stopColor="#FF4E50" offset="0%" />
        <stop stopColor="#F9D423" offset="100%" />
      </linearGradient>,
      <linearGradient x1="0" x2="1" y1="0" y2="0" id="paleWoodGradient3">
        <stop stopColor="#F9D423" offset="0%" />
        <stop stopColor="#FF4E50" offset="100%" />
      </linearGradient>,
      <linearGradient x1="0" x2="1" y1="0" y2="0" id="paleWoodGradient2">
        <stop stopColor="#f79d00" offset="0%" />
        <stop stopColor="#64f38c" offset="100%" />
      </linearGradient>,
      <pattern
        id="Triangle"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <rect fill="#b3331d" width="10" height="10" />
        <circle fill="rgb(211, 135, 121)" r="5" cx="3" cy="3" />
      </pattern>
    ]
  };

  const lineProps = {
    yAccessor: d => d.eruptions,
    xAccessor: d => d.waiting,
    data: OldFaithful.slice(),
    areaStyle: (e, i) => ({
      fill: 'none',
      stroke: 'url(#line-gradient)',
      strokeWidth: 3,
      opacity: 0.7
    }),
    pointStyle: d => ({
      r: 5,
      fill: '#4776E6',
      opacity: 0.7
    }),
    areaUseCanvas: false,
    pointUseCanvas: false
  };

  const xAxisProps = {
    orient: 'top',
    baseline: false,
    marginalSummaryType: {
      type: 'boxplot',
      summaryStyle: (d, i, f) => {
        return {
          fill: 'url(#paleWoodGradient3)',
          fillOpacity: 0.7,
          stroke: '#FF4E50'
        };
      },
      showPoints: false,
      pointStyle: { stroke: '#e0d33a', strokeOpacity: 0.75, fill: 'none' }
    }
  };

  const yAxisProps = {
    orient: 'right',
    baseline: false,
    marginalSummaryType: {
      type: 'heatmap',
      summaryStyle: { fill: '#2ECC40', fillOpacity: 0.5, stroke: '#8ca6db' },
      flip: true
    }
  };

  const x0Props = {
    orient: 'bottom',
    marginalSummaryType: {
      type: 'violin',
      curve: d3.curveCatmullRom,
      summaryStyle: {
        fill: 'url(#paleWoodGradient2)',
        fillOpacity: 0.5,
        stroke: 'none'
      }
    }
  };
  const y0Props = {
    orient: 'left',
    marginalSummaryType: {
      type: 'contour',
      summaryStyle: {
        fill: 'url(#paleWoodGradient)',
        fillOpacity: 0.5,
        stroke: 'none'
      },
      showPoints: true
    }
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock>
        <XYFrame {...frameProps} className={classes.frame}>
          <XAxis {...xAxisProps} />
          <YAxis {...yAxisProps} />
          <XAxis {...x0Props} />
          <YAxis {...y0Props} />
          <Trendline {...lineProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(TrendinglinePage);
