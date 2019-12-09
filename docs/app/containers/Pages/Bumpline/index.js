import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, Line, XAxis, YAxis, Contour, Hexbin, Heatmap } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { TData } from '../LineChartPage/TData';
import * as d3 from 'd3';

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

const BumplinePage = props => {
  const title = brand.name + ' - K-Means Centroid Deviation';
  const description = brand.desc;

  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 800,
    height: 500,
    title: (
      <text textAnchor="middle">
        Theaters showing <tspan fill={'#ac58e5'}>Ex Machina</tspan> vs{' '}
        <tspan fill={'#E0488B'}>Far from the Madding Crowd</tspan>
      </text>
    )
  };

  const colorScale = d3.scaleOrdinal().range(TheMetLight);

  const lineProps = {
    data: TData.map(d =>
      d.coordinates.map(e => {
        e.title = d.title;
        return e;
      })
    ).reduce((acc, cur) => {
      acc = [...acc, ...cur];
      return acc;
    }, []),
    yExtent: [0.4, 3.6],
    xAccessor: d => d.week,
    yAccessor: d => d.theaterCount,
    sAccessor: d => d.title,
    lineStyle: (d, i) => ({
      stroke: colorScale(d.s),
      strokeWidth: 18,
      fill: 'none',
      opacity: 0.7
    }),
    lineType: 'bumpline',
    pointStyle: {
      stroke: 'grey',
      alpha: 0.4,
      strokeWidth: 1
    },
    showPoints: false,
    lineUseCanvas: true
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
          <XAxis label={'Year'} />
          <YAxis label={'Name'} />
          <Line {...lineProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default BumplinePage;
