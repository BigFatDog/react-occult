import React from 'react';
import { Helmet } from 'react-helmet';
import { TheaterSummaryData } from '../AreaChart/ThreaterFlattenData';
import { XYFrame, Line, XAxis, YAxis, Contour, Hexbin, Heatmap } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { AnnotationCalloutCircle } from 'react-annotation';

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
    // style: { fill: 'url(#gradient' },
    // additionalDefs: { GradientDefs }
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
