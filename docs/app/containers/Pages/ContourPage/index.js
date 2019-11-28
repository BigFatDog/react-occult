import React from 'react';
import { Helmet } from 'react-helmet';
import { TheaterSummaryData } from '../AreaChart/ThreaterFlattenData';
import { XYFrame, XAxis, YAxis, Contour} from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';

const gradient = (
  <linearGradient x1="0" x2="0" y1="0" y2="1" id="paleWoodGradient">
    <stop stopColor="#FF4E50" offset="0%" />
    <stop stopColor="#F9D423" offset="100%" />
  </linearGradient>
);

const trianglePattern = (
  <pattern id="Triangle" width="10" height="10" patternUnits="userSpaceOnUse">
    <rect fill="#b3331d" width="10" height="10" />
    <circle fill="rgb(211, 135, 121)" r="5" cx="3" cy="3" />
  </pattern>
);

const ContourPage = props => {
  const title = brand.name + ' - K-Means Centroid Deviation';
  const description = brand.desc;

  const colors = {
    'Ex Machina': '#ac58e5',
    'Far from the Madding Crowd': '#E0488B',
    'The Longest Ride': '#9fd0cb'
  };

  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 700,
    height: 400,
    title: (
      <text textAnchor="middle">
        Theaters showing <tspan fill={'#ac58e5'}>Ex Machina</tspan> vs{' '}
        <tspan fill={'#E0488B'}>Far from the Madding Crowd</tspan>
      </text>
    ),
    additionalDefs: [trianglePattern, gradient]
  };

  const contourProps = {
    xAccessor: d => d.theaterCount,
    yAccessor: d => d.rank,
    sAccessor: d => d.title,
    xExtent: [0],
    yExtent: [0],
    data: TheaterSummaryData,
    threshold: 10,
    bandWidth: 15,
    areaStyle: (e, i) => ({
      fill: 'none',
      stroke: colors[e.parentSummary.s],
      strokeWidth: 0.5
    }),
    pointStyle: d => ({
      r: 2,
      fill: colors[d.parentSummary.s]
    })
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
        <XYFrame {...frameProps}>
          <XAxis label={'Rank'} />
          <YAxis left={50} label={'Theaters'} />
          <Contour {...contourProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default ContourPage;
