import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, Scatter, XAxis, YAxis } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { withStyles } from '@material-ui/core/styles';
import { Data } from './data';
import { timeFormat } from 'd3-time-format';
import { scaleSequential, scaleLog, scaleTime, scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

const styles = {
  frame: {
    background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  }
};

const formatter = timeFormat('%b');
const ScatterPage = props => {
  const { classes } = props;
  const title = brand.name + ' - K-Means Centroid Deviation';
  const description = brand.desc;
  const ext = extent(Data, d => d.exp_amo);
  const colorScale = scaleSequential(['#89D4CF', '#6E45E1']).domain(ext);
  const rScale = scaleLog()
    .domain(ext)
    .range([2, 10]);

  const frameProps = {
    margin: { left: 70, bottom: 30, right: 30, top: 40 },
    width: 1000,
    height: 500,
    xScaleType: scaleTime,
    yScaleType: scaleLog,
    title: <text textAnchor="middle">Vehicle Expire Amount and Price</text>
  };

  const scatterProps = {
    data: Data.slice(),
    xAccessor: d => new Date(d.exp_dat),
    yAccessor: d => d.exp_amo,
    pointStyle: (d, i) => ({
      r: rScale(d._data.exp_amo),
      fill: colorScale(d._data.exp_amo),
      opacity: 0.7
    }),

    pointUseCanvas: false
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
          <XAxis
            label={'Expire Date'}
            baseline={'under'}
            tickFormat={d => formatter(d)}
            showLineTicks={false}
            // rotate={30}
          />
          <YAxis
            label={'Expire Amount'}
            tickValues={[500, 1000000, 2000000, 4000000, 6000000]}
            tickFormat={val => {
              const formatted = +val === 500 ? 0 : val / 1000000;
              return '$' + formatted + 'M';
            }}
            jaggedBase={true}
          />
          <Scatter {...scatterProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(ScatterPage);
