import React from 'react';
import { Helmet } from 'react-helmet';
import { Paper, Scatter, XAxis, YAxis, Contour } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { OldFaithful } from '../OldFaithfulPage/data';
import { hsv, interpolateHsvLong } from 'd3-hsv';
import { scaleSequential } from 'd3-scale';
import { interpolateCool } from 'd3-scale-chromatic';

const i0 = interpolateHsvLong(hsv(120, 1, 0.65), hsv(60, 1, 0.9));
const i1 = interpolateHsvLong(hsv(60, 1, 0.9), hsv(0, 0, 0.95));
const interpolateTerrain = t => (t < 0.5 ? i0(t * 2) : i1((t - 0.5) * 2));
const color = scaleSequential(interpolateCool).domain([35, 90]);

const MarginSummaryPage = props => {
  const title = brand.name + ' - MarginStyle';
  const description = brand.desc;

  const scatterProps = {
    data: OldFaithful,
    yAccessor: d => d.eruptions,
    xAccessor: d => d.waiting,
    threshold: 30,
    bandWidth: 30,
    areaStyle: (e, i) => ({
      opacity: 0.3,
      fill: color(e._data.waiting),
      stroke: 'steelblue',
      strokeWidth: i % 5 ? 0.5 : 3
    }),
    pointStyle: { fill: 'none', r: 4 },
    areaUseCanvas: false,
    pointUseCanvas: true
  };

  const frameProps = {
    margin: 150,
    width: 1000,
    height: 1000
  };

  const xAxisProps = {
    orient: 'top',
    baseline: false,
    marginalSummaryType: {
      type: 'ridgeline',
      bins: 8,
      summaryStyle: (d, i, f) => {
        return { fill: '#fbd3e9', fillOpacity: 0.5, stroke: '#bb377d' };
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
      summaryStyle: { fill: '#b993d6', fillOpacity: 0.5, stroke: '#8ca6db' },
      flip: true
    }
  };

  const x0Props = {
    orient: 'bottom',
    marginalSummaryType: {
      type: 'violin',
      summaryStyle: { fill: '#606c88', fillOpacity: 0.5, stroke: '#3f4c6b' }
    }
  };
  const y0Props = {
    orient: 'left',
    marginalSummaryType: {
      type: 'ridgeline',
      summaryStyle: { fill: '#add100', fillOpacity: 0.5, stroke: '#7b920a' }
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
      <PapperBlock title="Lines" desc="Explore Line Types">
        <Paper {...frameProps}>
          <XAxis {...xAxisProps} />
          <YAxis {...yAxisProps} />
          <XAxis {...x0Props} />
          <YAxis {...y0Props} />
          <Contour {...scatterProps} />
        </Paper>
      </PapperBlock>
    </div>
  );
};

export default MarginSummaryPage;
