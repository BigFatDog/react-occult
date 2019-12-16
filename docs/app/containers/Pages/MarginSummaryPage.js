import React from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, XAxis, YAxis, Contour, Annotation } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { OldFaithful } from './OldFaithfulPage/data';
import { scaleSequential } from 'd3-scale';
import { interpolateCool } from 'd3-scale-chromatic';
import { AnnotationCallout, AnnotationLabel } from 'react-annotation';
import * as d3 from 'd3';

const color = scaleSequential(interpolateCool).domain([35, 90]);

const MarginSummaryPage = props => {
  const title = brand.name + ' - MarginStyle';
  const description = brand.desc;

  const contourProps = {
    data: OldFaithful,
    yAccessor: d => d.eruptions,
    xAccessor: d => d.waiting,
    threshold: 30,
    bandWidth: 30,
    areaStyle: (e, i) => ({
      opacity: 0.3,
      fill: color(e._data.waiting),
      stroke: 'steelblue',
      strokeWidth: i % 5 ? 0.5 : 3
    }),
    pointStyle: { fill: 'none', r: 4, stroke: 'steelblue' },
    showPoints: true,
    areaUseCanvas: true,
    pointUseCanvas: true
  };

  const frameProps = {
    margin: 150,
    width: 1000,
    height: 1000,
    title: (
      <text textAnchor="middle">
        Old Faithful at{' '}
        <tspan fill={'#FF851B'}>Yellowstone National Park</tspan>
      </text>
    )
  };

  const xAxisProps = {
    orient: 'top',
    baseline: false,
    marginalSummaryType: {
      type: 'histogram',
      bins: 40,
      // useBins: false,
      summaryStyle: (d, i, f) => {
        return { fill: '#fbd3e9', fillOpacity: 0.5, stroke: '#bb377d' };
      },
      showPoints: false,
      pointStyle: { stroke: '#e0d33a', strokeOpacity: 0.75, fill: 'none' }
    }
  };

  const yAxisProps = {
    orient: 'right',
    baseline: false,
    marginalSummaryType: {
      type: 'heatmap',
      summaryStyle: { fill: '#b993d6', fillOpacity: 0.5, stroke: '#8ca6db' },
      flip: true
    }
  };

  const x0Props = {
    orient: 'bottom',
    marginalSummaryType: {
      type: 'violin',
      curve: d3.curveCatmullRom,
      summaryStyle: { fill: '#606c88', fillOpacity: 0.5, stroke: '#3f4c6b' }
    }
  };
  const y0Props = {
    orient: 'left',
    marginalSummaryType: {
      type: 'ridgeline',
      summaryStyle: { fill: '#add100', fillOpacity: 0.5, stroke: '#7b920a' },
      showPoints: true
    }
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
      <PapperBlock title="Lines" desc="Explore Line Types">
        <XYFrame {...frameProps}>
          <XAxis {...xAxisProps} />
          <YAxis {...yAxisProps} />
          <XAxis {...x0Props} />
          <YAxis {...y0Props} />
          <Contour {...contourProps} />
          <Annotation
            type={AnnotationLabel}
            x={340}
            y={350}
            dy={-170}
            dx={-120}
            color={'#9610ff'}
            className="show-bg"
            connector={{ type: 'elbow', end: 'dot' }}
            editMode={true}
            note={{
              title: 'Famous Eruptions in 1983',
              label:
                'Eruption Height: 185 feet (56 m)\n' + 'Duration: 5.1 minutes',
              align: 'middle',
              orientation: 'leftTop',
              lineType: 'vertical',
              bgPadding: 20,
              padding: 15,
              titleColor: '#59039c'
            }}
          />

          <Annotation
            type={AnnotationCallout}
            x={450}
            y={410}
            dy={110}
            dx={120}
            color={'#9610ff'}
            connector={{ type: 'elbow', end: 'dot' }}
            className="show-bg"
            editMode={true}
            note={{
              title: 'Long Sleeping Period',
              label: 'Frequency: 0.000185 Hz',
              lineType: 'horizontal',
              bgPadding: { top: 15, left: 10, right: 10, bottom: 10 },
              padding: 15,
              titleColor: '#59039c'
            }}
          />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default MarginSummaryPage;
