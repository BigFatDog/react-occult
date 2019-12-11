import React from 'react';
import { XYFrame, Line, XAxis, YAxis, Annotation } from 'occult';
import { PapperBlock } from 'dan-components';
import { data } from '../data/AppleStock';
import { timeFormat } from 'd3-time-format';
import { scaleTime } from 'd3-scale';
import * as d3 from 'd3';
import { withStyles } from '@material-ui/core';
import { AnnotationCallout } from 'react-annotation';

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

const formatter = timeFormat('%b');

const AreaPage = props => {
  const { classes } = props;
  const frameProps = {
    margin: { left: 50, bottom: 50, right: 30, top: 50 },
    width: 1000,
    height: 500,
    xScaleType: scaleTime,
    additionalDefs: [trianglePattern, gradient],
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
          {/*<XYFrame {...frameProps} backgroundGraphics={<image xlinkHref={RenderData}/>}>*/}
          <XAxis
            label={'Date'}
            rotate={60}
            fontSize={12}
            tickFormat={d => formatter(d)}
          />
          <YAxis margin={{ top: 100 }} label={'Close'} />
          <Line {...scatterProps} />
          <Annotation
            type={AnnotationCallout}
            xData={new Date('2/25/1998')}
            yData={22.31}
            dy={-120}
            dx={-20}
            color={'#D9E4F5'}
            connector={{ type: 'elbow', end: 'dot' }}
            className="show-bg-black"
            note={{
              title: 'iMac Release',
              label:
                "The release came the week before that year's Worldwide Developers Conference",
              lineType: 'horizontal',
              bgPadding: { top: 5, left: 10, right: 10, bottom: 10 },
              padding: 5,
              titleColor: '#D9E4F5'
            }}
          />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(AreaPage);
