import React from 'react';
import { Helmet } from 'react-helmet';
import { AnnotationCalloutCircle } from 'react-annotation';
import { TheaterSummaryData } from './ThreaterFlattenData';

import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { XYFrame, Line, XAxis, YAxis, Contour, Hexbin, Heatmap } from 'occult';
import { scaleLinear } from 'd3-scale';
const h = scaleLinear()
  .domain([0, 1])
  .range(['white', '#1b6ae5']);

const colors = {
  'Ex Machina': '#ac58e5',
  'Far from the Madding Crowd': '#E0488B',
  'The Longest Ride': '#9fd0cb'
};

const AreaPage = props => {
  const title = brand.name + ' - Sample Area Chart';
  const description = brand.desc;

  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 700,
    height: 400,
    annotations: [
      { type: 'react-annotation', label: 'a note', y: 100 },
      {
        type: AnnotationCalloutCircle,
        note: { label: 'callout', title: 'important' },

        score: 10,
        subject: { radius: 30 }
      }
    ],
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
    }),
    // areaRenderMode: {
    //   renderMode: 'sketchy',
    //   fillWeight: 3,
    //   hachureGap: 4
    // },
    useCanvas: false
  };

  const hexbinProps = {
    xAccessor: d => d.theaterCount,
    yAccessor: d => d.rank,
    sAccessor: d => d.title,
    xExtent: [0],
    yExtent: [0],
    data: TheaterSummaryData,
    areaStyle: (e, i) => ({
      stroke: colors[e.parentSummary.s],
      fill: h(e.percent),
      strokeWidth: 0.5
    }),
    pointStyle: d => ({
      r: 2,
      fill: colors[d.parentSummary.s]
    }),
    // areaRenderMode: {
    //   renderMode: 'sketchy',
    //   fillWeight: 3,
    //   hachureGap: 4
    // },
    useCanvas: false
  };

  const heatmapProps = {
    xAccessor: d => d.theaterCount,
    yAccessor: d => d.rank,
    sAccessor: d => d.title,
    xExtent: [0],
    yExtent: [0],
    data: TheaterSummaryData,
    areaStyle: (e, i) => ({
      stroke: colors[e.parentSummary.s],
      fill: h(e.percent),
      strokeWidth: 0.5
    }),
    pointStyle: d => ({
      r: 2,
      fill: colors[d.parentSummary.s]
    }),
    areaRenderMode: {
      renderMode: 'sketchy',
      fillWeight: 3,
      hachureGap: 4
    },
    useCanvas: true
  }

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
          <XAxis label={'Rank'} />
          <YAxis left={50} label={'Theaters'} />
          {/*<Line {...lineProps} />*/}
          {/*<Hexbin {...hexbinProps} />*/}
          <Heatmap {...heatmapProps} />
          {/*<Contour {...contourProps} />*/}
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default AreaPage;
