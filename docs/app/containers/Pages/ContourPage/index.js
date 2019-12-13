import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, XAxis, YAxis, Contour } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { OldFaithful } from '../OldFaithfulPage/data';
import { scaleLinear } from 'd3-scale';
const h = scaleLinear().range(['white', '#6E45E1']);
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
  const title = brand.name + ' - Contour';
  const description = brand.desc;

  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 600,
    height: 600,
    title: (
      <text textAnchor="middle">
        Old Faithful at{' '}
        <tspan fill={'#FF851B'}>Yellowstone National Park</tspan>
      </text>
    ),
    additionalDefs: [trianglePattern, gradient]
  };

  const contourProps = {
    threshold: 10,
    bandWidth: 15,
    neighbourd: true,
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
          <Contour {...contourProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default ContourPage;
