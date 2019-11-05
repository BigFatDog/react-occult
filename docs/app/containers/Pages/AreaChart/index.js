import React from 'react';
import { Helmet } from 'react-helmet';
import { TheaterSummaryData } from '../ContourPage/ThreaterSummaryData';

import brand from 'dan-api/dummy/brand';
import { PapperBlock, SourceReader } from 'dan-components';
import { CartesianFrame } from 'occult';

import { scaleLinear } from 'd3-scale';

const h = scaleLinear()
  .domain([0, 1])
  .range(['white', '#ac58e5']);

const steps = ['white', '#e0d33a'];

const thresholds = scaleLinear().range(steps);

const AreaPage = props => {
  const title = brand.name + ' - K-Means Centroid Deviation';
  const description = brand.desc;

  const colors = {
    'Ex Machina': '#ac58e5',
    'Far from the Madding Crowd': '#E0488B',
    'The Longest Ride': '#9fd0cb'
  };

  const frameProps = {
    summaries: TheaterSummaryData,
    width: 700,
    height: 400,
    xAccessor: d => d.theaterCount,
    yAccessor: d => d.rank,
    yExtent: [0],
    xExtent: [0],
    margin: { left: 60, bottom: 90, right: 10, top: 40 },

    /* --- Layout --- */
    summaryType: 'heatmap',

    /* --- Process --- */
    // summaryRenderMode: {
    //   renderMode: 'sketchy',
    //   fillWeight: 3,
    //   hachureGap: 4
    // },

    /* --- Customize --- */
    summaryStyle: e => {
      return {
        fill: thresholds(e.percent),
        stroke: '#ccc',
        strokeWidth: 0.5
      };
    },
    pointStyle: d => {
      return {
        r: 2,
        fill: d && colors[d.title]
      };
    },
    title: (
      <text textAnchor="middle">
        Theaters showing <tspan fill={'#ac58e5'}>Ex Machina</tspan> vs{' '}
        <tspan fill={'#E0488B'}>Far from the Madding Crowd</tspan>
      </text>
    ),
    axes: [
      { orient: 'left', label: 'Rank' },
      { orient: 'bottom', label: { name: 'Theaters', locationDistance: 55 } }
    ],

    /* --- Draw --- */
    showLinePoints: true,
    showSummaryPoints: true,
    canvasPoints: false,
    canvasSummary: true
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
      <PapperBlock title="Area Chart" desc="Basic Area Chart">
        <CartesianFrame {...frameProps} />
      </PapperBlock>
    </div>
  );
};

export default AreaPage;
