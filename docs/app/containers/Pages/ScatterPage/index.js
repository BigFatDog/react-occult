import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, Scatter, XAxis, YAxis } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { withStyles } from '@material-ui/core/styles';
import { Data } from './data';
import { timeParse, timeFormat } from 'd3-time-format';
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

const parser = timeParse('%d/%m/%y');
const formatter = timeFormat('%B');
const ScatterPage = props => {
  const { classes } = props;
  const title = brand.name + ' - K-Means Centroid Deviation';
  const description = brand.desc;
  const ext = extent(Data, d => d.exp_amo);
  const colorScale = scaleSequential(['#79e70f', '#10d9ec', '#1f97e7']).domain(
    ext
  );
  const rScale = scaleLinear()
    .domain(ext)
    .range([4, 20]);

  const frameProps = {
    margin: { left: 100, bottom: 90, right: 10, top: 40 },
    width: 1000,
    height: 500,
    xScaleType: scaleTime,
    yScaleType: scaleLog,
    title: (
      <text textAnchor="middle">
        Theaters showing <tspan fill={'#ac58e5'}>Ex Machina</tspan> vs{' '}
        <tspan fill={'#E0488B'}>Far from the Madding Crowd</tspan>
      </text>
    )
    // hoverAnnotation: true,
    // tooltipContent: d => {
    //   return (
    //     <div className="tooltip-content">
    //       <p>Expire Date: {d.exp_dat}</p>
    //       <p>Expire Amount: {d.exp_amo}</p>
    //       <p>Spec id: {d.spe_id}</p>
    //       <p>Person Name: {d.can_nam}</p>
    //       <p>Purchase: {d.pur}</p>
    //       <p>Payment: {d.pay}</p>
    //     </div>
    //   );
    // }
  };

  const scatterProps = {
    data: Data,
    xAccessor: d => parser(d.exp_dat),
    yAccessor: d => d.exp_amo,
    pointStyle: (d, i) => ({
      r: rScale(d._data.exp_amo),
      fill: colorScale(d._data.exp_amo),
      opacity: 0.5
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
      <PapperBlock title="Blank Page" desc="Some text description">
        <XYFrame {...frameProps} className={classes.frame}>
          <XAxis
            label={'Expire Date'}
            baseline={false}
            paddingOuter={50}
            tickFormat={d => formatter(d)}
            showLineTicks={false}
          />
          <YAxis
            margin={{ top: 100 }}
            label={'Expire Amount'}
            tickValues={[225, 1000000, 2000000, 4000000, 6000000]}
            tickFormat={val => {
              const formatted = +val === 225 ? 0 : val / 1000000;
              return '$' + formatted + 'M';
            }}
          />
          <Scatter {...scatterProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(ScatterPage);
