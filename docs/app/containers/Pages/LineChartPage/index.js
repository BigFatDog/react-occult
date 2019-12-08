import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, Line, XAxis, YAxis, Contour, Hexbin, Heatmap } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { LineData } from './lineData';
import { TData } from './TData';

const theme = [
  '#ac58e5',
  '#E0488B',
  '#9fd0cb',
  '#e0d33a',
  '#7566ff',
  '#533f82',
  '#7a255d',
  '#365350',
  '#a19a11',
  '#3f4482'
];

const LinePage = props => {
  const title = brand.name + ' - K-Means Centroid Deviation';
  const description = brand.desc;

  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 700,
    height: 400,
    title: (
      <text textAnchor="middle">
        Theaters showing <tspan fill={'#ac58e5'}>Ex Machina</tspan> vs{' '}
        <tspan fill={'#E0488B'}>Far from the Madding Crowd</tspan>
      </text>
    )
  };

  const lineProps2 = {
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
      stroke: theme[i],
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

  const lineProps = {
    data: LineData,
    xAccessor: d => d.year,
    yAccessor: d => d.n,
    sAccessor: d => d.name,
    xExtent: [1],
    yExtent: [0, 4],
    lineStyle: (d, i) => ({
      stroke: theme[i],
      strokeWidth: 2,
      fill: 'none'
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
          <XAxis label={'Rank'} />
          <YAxis left={50} label={'Theaters'} />
          <Line {...lineProps2} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default LinePage;
