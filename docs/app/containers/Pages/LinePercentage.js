import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, Line, XAxis, YAxis, Contour, Hexbin, Heatmap } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { LineData } from './LineChartPage/lineData';
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

const colorScale = d3.scaleOrdinal().range(TheMetLight);

const LinePage = props => {
  const title = brand.name + ' - K-Means Centroid Deviation';
  const description = brand.desc;

  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 1000,
    height: 600,
    title: (
      <text textAnchor="middle">
        <tspan fill={'#8BC34A'}>Line Percentage</tspan>
      </text>
    )
  };

  const lineProps = {
    data: LineData,
    xAccessor: d => d.year,
    yAccessor: d => d.n,
    sAccessor: d => d.name,
    yExtent: [0, 1],
    lineStyle: (d, i) => ({
      stroke: colorScale(d.s),
      strokeWidth: 4,
      opacity: 0.7,
      fill: 'none'
    }),

    lineType: {
      type: 'linepercent',
      interpolator: d3.curveBasisOpen
    },
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
      <PapperBlock>
        <XYFrame {...frameProps}>
          <XAxis label={'Rank'} rotate={30} />
          <YAxis label={'Theaters'} />
          <Line {...lineProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default LinePage;
