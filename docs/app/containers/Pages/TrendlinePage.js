import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, XAxis, YAxis, Trendline } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { OldFaithful } from './OldFaithfulPage/data';

const ContourPage = props => {
  const title = brand.name + ' - K-Means Centroid Deviation';
  const description = brand.desc;

  const frameProps = {
    margin: 50,
    width: 1000,
    height: 500,
    title: (
      <text textAnchor="middle">
        Old Faithful at{' '}
        <tspan fill={'#FF851B'}>Yellowstone National Park</tspan>
      </text>
    )
  };

  const contourProps = {
    yAccessor: d => d.eruptions,
    xAccessor: d => d.waiting,
    data: OldFaithful.slice(),
    areaStyle: (e, i) => ({
      fill: 'none',
      stroke: '#E61D8C',
      strokeWidth: 2,
      opacity: 0.7
    }),
    pointStyle: d => ({
      r: 4,
      fill: '#6E45E1',
      opacity: 0.5
    }),
    areaUseCanvas: false,
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
        <XYFrame {...frameProps}>
          <XAxis label={'Rank'} />
          <YAxis label={'Theaters'} />
          <Trendline {...contourProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default ContourPage;
