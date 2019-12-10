import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, Line, XAxis, YAxis } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import {
  CumulativeReverse,
  Cumulative,
  Area,
  Line as lineProps,
  Bumpline,
  Bumparea,
  BumpareaInvert,
  Difference,
  Linepercent,
  StackedpercentInvert,
  Stackedpercent,
  StackedareaInvert,
  Stackedarea
} from './types';

const LinePage = props => {
  const title = brand.name + ' - Lines';
  const description = brand.desc;

  const frameProps = name => ({
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 700,
    height: 400,
    title: (
      <text textAnchor="middle">
        <tspan fill={'#03A9F4'}>{name}</tspan>
      </text>
    )
  });

  const types = [
    { name: 'Line', type: lineProps },
    { name: 'Area', type: Area },
    { name: 'CumulativeReverse', type: CumulativeReverse },
    { name: 'Cumulative', type: Cumulative },
    { name: 'Bumpline', type: Bumpline },
    { name: 'Bumparea', type: Bumparea },
    { name: 'BumpareaInvert', type: BumpareaInvert },
    { name: 'Difference', type: Difference },
    { name: 'Linepercent', type: Linepercent },
    { name: 'StackedpercentInvert', type: StackedpercentInvert },
    { name: 'Stackedpercent', type: Stackedpercent },
    { name: 'StackedareaInvert', type: StackedareaInvert },
    { name: 'Stackedarea', type: Stackedarea }
  ];
  const rendered = types.map(d => {
    return (
      <XYFrame {...frameProps(d.name)}>
        <XAxis label={'Rank'} tickValues={[]} />
        <YAxis
          label={'Theaters'}
          baseline={'under'}
          tickLineGenerator={({ xy }) => (
            <path
              style={{
                fill: '#efefef',
                stroke: '#ccc',
                strokeDasharray: '2 2'
              }}
              d={`M${xy.x1},${xy.y1 - 5}L${xy.x2},${xy.y1 - 5}L${
                xy.x2
              },${xy.y1 + 5}L${xy.x1},${xy.y1 + 5}Z`}
            />
          )}
        />
        <Line {...d.type} />
      </XYFrame>
    );
  });

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
        {rendered}
      </PapperBlock>
    </div>
  );
};

export default LinePage;
