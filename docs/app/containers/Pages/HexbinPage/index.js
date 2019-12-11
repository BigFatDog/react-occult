import React from 'react';
import { Helmet } from 'react-helmet';
import { scaleLinear } from 'd3-scale';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { XYFrame, XAxis, YAxis, Hexbin } from 'occult';
import { OldFaithful } from '../OldFaithfulPage/data';
const h = scaleLinear()
  .domain([0, 1])
  .range(['white', '#ac58e5']);

const HexbinPage = props => {
  const title = brand.name + ' - Hexbin';
  const description = brand.desc;

  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 800,
    height: 700,
    title: (
      <text textAnchor="middle">
        Old Faithful at{' '}
        <tspan fill={'#FF851B'}>Yellowstone National Park</tspan>
      </text>
    )
  };

  const hexbinProps = {
    yAccessor: d => d.eruptions,
    xAccessor: d => d.waiting,
    xExtent: [35, 100],
    yExtent: [1.1, 6],
    data: OldFaithful.slice(),
    areaStyle: (e, i) => ({
      stroke: '#ccc',
      fill: h(e.percent),
      strokeWidth: 0.5
    }),
    pointStyle: d => ({
      r: 2,
      fill: '#2884B8',
      fillOpacity: 0.5
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
      <PapperBlock>
        <XYFrame {...frameProps}>
          <XAxis label={'Rank'} />
          <YAxis left={50} label={'Theaters'} />
          <Hexbin {...hexbinProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default HexbinPage;
