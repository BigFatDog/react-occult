import React from 'react';
import { Helmet } from 'react-helmet';
import { TheaterSummaryData } from './ThreaterSummaryData';

import brand from 'dan-api/dummy/brand';
import { PapperBlock, SourceReader } from 'dan-components';
import { CartesianFrame } from 'occult';

const ContourPage = props => {
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
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    summaryType: { type: 'contour', threshold: 1, bandwidth: 15 },
    xAccessor: d => d.theaterCount,
    yAccessor: d => d.rank,
    yExtent: [0],
    xExtent: [0],
    summaryStyle: (e, i) => {
      return {
        fill: 'none',
        stroke: colors[e.parentSummary.title],
        strokeWidth: 0.5
      };
    },
    pointStyle: d => ({
      r: 2,
      fill: d && colors[d.title]
    }),
    title: (
      <text textAnchor="middle">
        Theaters showing <tspan fill={'#ac58e5'}>Ex Machina</tspan> vs{' '}
        <tspan fill={'#E0488B'}>Far from the Madding Crowd</tspan>
      </text>
    ),
    frameKey: 'test',
    axes: [
      { orient: 'left', label: 'Rank' },
      { orient: 'bottom', label: { name: 'Theaters', locationDistance: 55 } }
    ],
    showLinePoints: true,
    canvasPoints: true,
    showSummaryPoints: true,
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
      <PapperBlock title="Blank Page" desc="Some text description">
        <CartesianFrame {...frameProps} />
      </PapperBlock>
    </div>
  );
};

export default ContourPage;
