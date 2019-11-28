import React from 'react';
import { Helmet } from 'react-helmet';
import { AnnotationLabel, AnnotationCallout } from 'react-annotation';
import { OldFaithful } from './data';
import { hsv, interpolateHsvLong } from 'd3-hsv';
import {
  interpolateCool,
  interpolateWarm,
  interpolateCubehelixDefault
} from 'd3-scale-chromatic';
import { scaleSequential } from 'd3-scale';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { XYFrame, XAxis, YAxis, Contour, Annotation } from 'occult';

const i0 = interpolateHsvLong(hsv(120, 1, 0.65), hsv(60, 1, 0.9));
const i1 = interpolateHsvLong(hsv(60, 1, 0.9), hsv(0, 0, 0.95));
const interpolateTerrain = t => (t < 0.5 ? i0(t * 2) : i1((t - 0.5) * 2));
const color = scaleSequential(interpolateCool).domain([35, 90]);

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

const OldFaithfulPage = props => {
  const title = brand.name + ' - Sample Area Chart';
  const description = brand.desc;

  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 1200,
    height: 600,
    title: (
      <text textAnchor="middle">
        Old Faithful at{' '}
        <tspan fill={'#FF851B'}>Yellowstone National Park</tspan>
      </text>
    ),
    additionalDefs: [gradient, trianglePattern],
    // hoverAnnotation: [
    //   {
    //     type: 'highlight',
    //     style: d => {
    //       return { stroke: theme[d.key], strokeWidth: 5, fill: 'none' };
    //     }
    //   },
    //   {
    //     type: 'desaturation-layer',
    //     style: {
    //       fill: 'white',
    //       opacity: 0.6
    //     }
    //   }
    // ]
  };

  const contourProps = {
    yAccessor: d => d.eruptions,
    xAccessor: d => d.waiting,
    xExtent: [35, 100],
    yExtent: [1.1, 6],
    sAccessor: null,
    data: OldFaithful,
    threshold: 30,
    bandWidth: 30,
    areaStyle: (e, i) => ({
      opacity: 0.7,
      fill: 'url(#paleWoodGradient)',
      // fill: color(e._data.waiting),
      stroke: 'steelblue',
      strokeWidth: i % 5 ? 0.5 : 3
    }),
    pointStyle: d => ({
      r: 2,
      fill: 'black',
      stroke: 'white'
    }),
    areaRenderMode: {
      renderMode: 'sketchy',
      fillWeight: 3,
      hachureGap: 4
    },
    areaUseCanvas: false
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
      <PapperBlock
        title="Old Faithful Contour"
        desc="This chart shows the relationship between idle and eruption times for Old Faithful."
      >
        <XYFrame {...frameProps}>
          <XAxis label={'Idle (min.)'} />
          <YAxis left={50} label={'Erupting (min.)'} />
          <Annotation
            type={AnnotationLabel}
            x={340}
            y={280}
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
            x={680}
            y={290}
            dy={80}
            dx={50}
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

          <Contour {...contourProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};
export default OldFaithfulPage;
