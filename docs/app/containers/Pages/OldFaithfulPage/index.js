import React from 'react';
import { AnnotationLabel, AnnotationCallout } from 'react-annotation';
import { OldFaithful } from './data';
import { PapperBlock } from 'dan-components';
import { Paper, XAxis, YAxis, Contour, Annotation } from 'occult';

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

const tooltipStyles = {
  header: {
    fontWeight: 'bold',
    borderBottom: 'thin solid black',
    marginBottom: '10px',
    textAlign: 'center'
  },
  lineItem: { position: 'relative', display: 'block', textAlign: 'left' },
  title: { display: 'inline-block', margin: '0 5px 0 15px' },
  value: { display: 'inline-block', fontWeight: 'bold', margin: '0' },
  wrapper: {
    background: 'rgba(255,255,255,0.8)',
    minWidth: 'max-content',
    whiteSpace: 'nowrap'
  }
};

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

const OldFaithfulPage = props => {
  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 1000,
    height: 600,
    title: (
      <text textAnchor="middle">
        Old Faithful at{' '}
        <tspan fill={'#FF851B'}>Yellowstone National Park</tspan>
      </text>
    ),
    foregroundGraphics: (
      <g>
        <g transform="translate(20,165)">
          <rect fill={'#E0488B'} x={1000} y={300} width={120} height={55} />
          <text fontWeight="700" fill="white" x={1025} y={325}>
            OCCULT
          </text>
          <text fontWeight="200" fill="white" x={1013} y={340}>
            Sample Label
          </text>
        </g>
      </g>
    ),
    additionalDefs: [gradient, trianglePattern],
    tooltipContent: d => {
      return (
        <div className="tooltip-content">
          <p>Eruptions: {d.eruptions}</p>
          <p>Waiting: {d.waiting}</p>
        </div>
      );
    },
    hoverAnnotation: [
      {
        type: 'highlight',
        style: d => {
          return { stroke: theme[d.key], strokeWidth: 5, fill: 'none' };
        }
      }
    ]
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
    areaUseCanvas: false,
    pointUseCanvas: false
  };

  return (
    <div>
      <PapperBlock
        title="Old Faithful Contour"
        desc="This chart shows the relationship between idle and eruption times for Old Faithful."
      >
        <Paper {...frameProps}>
          <XAxis label={'Idle (min.)'} />
          <YAxis left={50} label={'Erupting (min.)'} />
          <Annotation
            type={AnnotationLabel}
            x={340}
            y={180}
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
            y={210}
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
        </Paper>
      </PapperBlock>
    </div>
  );
};
export default OldFaithfulPage;
