import React from 'react';
import { XYFrame, Line, XAxis, YAxis, Annotation } from 'occult';
import { PapperBlock } from 'dan-components';
import { data } from '../data/AppleStock';
import { timeFormat } from 'd3-time-format';
import { scaleTime } from 'd3-scale';
import * as d3 from 'd3';
import IMacPic from './iMac.png';
import IPodPic from './iPod.jpg';
import { withStyles } from '@material-ui/core';
import { AnnotationCallout, AnnotationXYThreshold } from 'react-annotation';

const styles = {
  frame: {
    background: 'linear-gradient(to top, #fc00ff 0%, #00dbde 100%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  }
};

const gradient = (
  <linearGradient x1="0" x2="0" y1="0" y2="1" id="pearlGradient">
    <stop stopColor="#D5D0E5" offset="0%" />
    <stop stopColor="#F3E6E8" offset="100%" />
  </linearGradient>
);

const trianglePattern = (
  <pattern id="Triangle" width="10" height="10" patternUnits="userSpaceOnUse">
    <rect fill="#b3331d" width="10" height="10" />
    <circle fill="rgb(211, 135, 121)" r="5" cx="3" cy="3" />
  </pattern>
);

const formatter = timeFormat('%Y');

const AreaPage = props => {
  const { classes } = props;
  const frameProps = {
    margin: { left: 50, bottom: 50, right: 30, top: 100 },
    width: 1000,
    height: 500,
    xScaleType: scaleTime,
    additionalDefs: [trianglePattern, gradient],
    foregroundGraphics: (
      <g>
        <defs>
          <pattern
            id={'image0'}
            x={'0%'}
            y={'0%'}
            height={'100%'}
            width={'100%'}
            viewBox={'0 0 512 512'}
          >
            <image
              xlinkHref={IMacPic}
              x={'0%'}
              y={'0%'}
              height={512}
              width={512}
            ></image>
          </pattern>
        </defs>
        <circle
          id={'top'}
          cx={190}
          cy={60}
          r={30}
          fill={'url(#image0)'}
          stroke={'rgba(255, 255, 255, 0.5)'}
          strokeWidth={3}
        />
        <defs>
          <pattern
            id={'image1'}
            x={'0%'}
            y={'0%'}
            height={'100%'}
            width={'100%'}
            viewBox={'0 0 512 512'}
          >
            <image
              xlinkHref={IPodPic}
              x={'0%'}
              y={'0%'}
              height={512}
              width={512}
            ></image>
          </pattern>
        </defs>
        <circle
          id={'top1'}
          cx={840}
          cy={200}
          r={30}
          fill={'url(#image1)'}
          stroke={'rgba(255, 255, 255, 0.5)'}
          strokeWidth={3}
        />
      </g>
    ),
    title: (
      <text textAnchor="middle" fontSize={16} fontWeight={700}>
        Apple Stock History
      </text>
    )
  };

  const scatterProps = {
    data: data.slice(),
    xAccessor: d => new Date(d.date),
    yAccessor: d => d.close,
    lineType: {
      type: 'line',
      interpolator: d3.curveCatmullRom
    },
    lineStyle: (d, i) => ({
      stroke: 'none',
      fill: 'url(#pearlGradient)',
      fillOpacity: 0.6,
      strokeDasharray: i === 0 ? '10 10' : '5 5'
    }),
    lineUseCanvas: false,
    showPoints: false
  };

  return (
    <div>
      <PapperBlock>
        <XYFrame {...frameProps} className={classes.frame}>
          <XAxis
            label={'Date'}
            tickFormat={d => formatter(d)}
            ticks={10}
            showLineTicks={false}
          />
          <YAxis margin={{ top: 100 }} label={'Close'} showLineTicks={false} />
          <Line {...scatterProps} />
          <Annotation
            type={AnnotationCallout}
            coordinates={{ date: '7/9/1997', close: 13.68 }}
            dy={-120}
            dx={10}
            color={'#D9E4F5'}
            connector={{ type: 'elbow', end: 'dot' }}
            className="show-bg-black"
            note={{
              title: 'Steve Jobs Returns',
              lineType: 'horizontal',
              bgPadding: { top: 5, left: 10, right: 10, bottom: 10 },
              padding: 5,
              titleColor: '#D9E4F5'
            }}
          />
          <Annotation
            className={'brushed-area'}
            type={'bounds'}
            bounds={[{ date: '11/2/1997' }, { date: '1/2/2001' }]}
            label={'Nov.1997 - Jan. 2001'}
            dx={180}
            color={'#001f3f'}
          />
          <Annotation
            type={'x'}
            dx={-40}
            dy={-10}
            connector={{ end: 'none' }}
            coordinates={{ date: '8/15/1998' }}
            note={{
              label: 'iMac Release',
              align: 'middle',
              lineType: null,
              wrap: 50
            }}
          />
          <Annotation
            type={'x'}
            connector={{ end: 'none' }}
            coordinates={{ date: '10/23/2001' }}
            note={{
              label: 'iPod Release',
              align: 'middle',
              lineType: null,
              wrap: 50
            }}
          />
          <Annotation
            type={AnnotationXYThreshold}
            coordinates={{ date: '7/1/2000', close: 100 }}
            note={{
              label: 'Above $100',
              lineType: null,
              orientation: 'topBottom',
              align: 'middle'
            }}
            subject={{
              x1: 400,
              x2: 550
            }}
            dx={0}
            dy={-20}
          />
          <Annotation
            type={'enclose'}
            note={{
              label: 'Stock Split 2:1',
              orientation: 'leftRight',
              align: 'middle',
              // lineType: 'dashed',
              wrap: 50
            }}
            dy={0}
            dx={80}
            color={'#FFDC00'}
            connector={{ end: 'none' }}
            coordinates={[
              {
                date: '6/21/2000',
                close: 55.62
              },
              {
                date: '6/20/2000',
                close: 101.25
              }
            ]}
          />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(AreaPage);
