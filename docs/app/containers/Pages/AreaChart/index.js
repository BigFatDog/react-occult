import React from 'react';
import { Helmet } from 'react-helmet';
import { TheaterSummaryData } from '../ContourPage/ThreaterSummaryData';

import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';

import { XYFrame, Line, XAxis, YAxis, Contour } from 'occult';

const AreaPage = props => {
  const title = brand.name + ' - Sample Area Chart';
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

  const lineProps = {
    data: [],
    xAccessor: d => d.x,
    yAccessor: d => d.y,
    style: (d, i) => ({
      stroke: 'red',
      strokeWidth: 2
    }),
    canvas: true
  };

  const contourProps = {
    data: [],
    threshold: 1,
    bandwidth: 15,
    areaStyle: (e, i) => ({
      fill: 'none',
      stroke: colors[e.parentSummary.title],
      strokeWidth: 0.5
    }),
    pointStyle: d => ({
      r: 2,
      fill: d && colors[d.title]
    }),
    canvas: true
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
        <XYFrame {...frameProps}>
          <XAxis top={0} hideLine tickValues={[0, 1, 3, 4, 5]} title="X" />
          <XAxis tickFormat={v => `Value is ${v}`} tickLabelAngle={-90} />
          <YAxis hideTicks />
          <YAxis left={50} tickFormat={v => v * v} />
          <YAxis hideLine left={150} tickFormat={v => `this is ${v}`} />

          <Line {...lineProps} />
          <Contour {...contourProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default AreaPage;
