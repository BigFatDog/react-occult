import React from 'react';
import { PapperBlock } from 'dan-components';
import NeighbourData from './data/neighbourhood.json';
import { XYFrame, Contour, XAxis, YAxis, Annotation, Hexbin } from 'occult';
import * as d3 from 'd3';
import {withStyles} from "@material-ui/core";

const styles = {
  frame: {
    // background: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px white',
  }
};


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

const NeighbourPage = props => {
  const { classes } = props;
  const frameProps = {
    margin: { left: 60, bottom: 60, right: 30, top: 50 },
    width: 1000,
    height: 1000,
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
        <stop stopColor="#6f86d6" offset="0%" />
        <stop stopColor="#74ebd5" offset="100%" />
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

  const contourProps = {
    data: NeighbourData.slice(),
    xAccessor: d => d.posX,
    yAccessor: d => d.posY,
    sAccessor: d => d.hood,
    areaStyle: (e, i) => {
      return {
        opacity: 0.25,
        fill: TheMetLight[+e.parentSummary.s % 16],
        stroke: 'none'
      };
    },
    areaUseCanvas: false,
    showPoints: false,
    threshold: 4,
    bandWidth: 5,
    neighborhood: true
  };

  return (
    <div>
      <PapperBlock title="Area Chart" desc="Basic Area Chart">
        <XYFrame {...frameProps} className={classes.frame}>
          {/*<XAxis label={'Rank'} />*/}
          {/*<YAxis label={'Theaters'} />*/}
          {/*<Annotation type={'y'} label={'a note'} y={100} />*/}
          {/*<Annotation*/}
          {/*  type={AnnotationCalloutCircle}*/}
          {/*  note={{ label: 'callout', title: 'important' }}*/}
          {/*  score={10}*/}
          {/*  subject={{ radius: 10 }}*/}
          {/*  x={100}*/}
          {/*  y={100}*/}
          {/*/>*/}
          <XAxis {...xAxisProps} />
          <YAxis {...yAxisProps} />
          <XAxis {...x0Props} />
          <YAxis {...y0Props} />
          <Contour {...contourProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(NeighbourPage);