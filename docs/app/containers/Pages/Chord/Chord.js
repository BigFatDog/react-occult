import { Paper, Chord } from 'occult';
import React from 'react';
import * as d3 from 'd3';
import { PapperBlock } from 'dan-components';


const TheMetLight = [
  '#ff2fab',
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

const nodeColorScale = d3.scaleOrdinal().range( ['url(#gradient_1)', 'url(#gradient_2)', 'url(#gradient_3)', 'url(#gradient_4)']);


const colorScale = d3.scaleOrdinal().range(TheMetLight)

const chordProps = {
  nodes: [
    { id: 'Coal reserves', input: 0, output: 127.93, category: 'Base Import' },
    {
      id: 'Coal imports',
      input: 0,
      output: 349.7879708,
      category: 'Base Import'
    },
    {
      id: 'Oil reserves',
      input: 0,
      output: 802.5479528,
      category: 'Base Import'
    },
    {
      id: 'Oil imports',
      input: 0,
      output: 65.64315528,
      category: 'Base Import'
    },
    {
      id: 'Gas reserves',
      input: 0,
      output: 645.7728959,
      category: 'Base Import'
    },
    {
      id: 'Gas imports',
      input: 0,
      output: 355.6589677,
      category: 'Base Import'
    },
    {
      id: 'UK land based bioenergy',
      input: 0,
      output: 3.027913952,
      category: 'Base Import'
    },
    {
      id: "Agricultural 'waste'",
      input: 0,
      output: 9.282517755,
      category: 'Base Import'
    },
    {
      id: 'Other waste',
      input: 0,
      output: 35.834982973,
      category: 'Base Import'
    },
    {
      id: 'Biomass imports',
      input: 0,
      output: 4.089432558,
      category: 'Base Import'
    },
    { id: 'Solar', input: 0, output: 0.028059966, category: 'Base Import' },
    { id: 'Nuclear', input: 0, output: 160.71, category: 'Base Import' },
    {
      id: 'Coal',
      input: 477.7179708,
      output: 477.7179708,
      category: 'Intermediary'
    },
    {
      id: 'Oil',
      input: 868.1911080799999,
      output: 868.1911081,
      category: 'Intermediary'
    },
    {
      id: 'Natural Gas',
      input: 1001.4318636,
      output: 1001.431864,
      category: 'Intermediary'
    },
    {
      id: 'Bio-conversion',
      input: 41.025159347,
      output: 41.025159349000006,
      category: 'Intermediary'
    },
    {
      id: 'Solid',
      input: 504.62288648099997,
      output: 504.622886431,
      category: 'Intermediary'
    },
    {
      id: 'Liquid',
      input: 869.260235105,
      output: 868.8924025279999,
      category: 'Intermediary'
    },
    {
      id: 'Gas',
      input: 1019.73061411,
      output: 1019.730613744,
      category: 'Intermediary'
    },
    {
      id: 'Solar PV',
      input: 0.028059966,
      output: 0.028059966,
      category: 'Intermediary'
    },
    {
      id: 'Electricity grid',
      input: 386.24405559099995,
      output: 386.24405554800006,
      category: 'Intermediary'
    },
    {
      id: 'Thermal generation',
      input: 946.6966335120001,
      output: 946.6966335309999,
      category: 'Intermediary'
    },
    {
      id: 'District heating',
      input: 9.042140031,
      output: 9.042140031,
      category: 'Intermediary'
    },
    { id: 'Wind', input: 0, output: 14.4406701, category: 'Intermediary' },
    { id: 'Tidal', input: 0, output: 0.005003425, category: 'Intermediary' },
    { id: 'Wave', input: 0, output: 0, category: 'Intermediary' },
    { id: 'Hydro', input: 0, output: 5.329728, category: 'Intermediary' },
    { id: 'Losses', input: 615.5268253639999, output: 0, category: 'Usage' },
    {
      id: 'Over generation / exports',
      input: 1.14e-13,
      output: 0,
      category: 'Usage'
    },
    { id: 'Industry', input: 539.6958806810001, output: 0, category: 'Usage' },
    {
      id: 'Heating and cooling - homes',
      input: 408.56077568,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Heating and cooling - commercial',
      input: 121.41835477199999,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Lighting & appliances - homes',
      input: 95.393170916,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Lighting & appliances - commercial',
      input: 82.034798449,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Agriculture',
      input: 10.647506258999998,
      output: 0,
      category: 'Usage'
    },
    { id: 'Road transport', input: 470.2870297, output: 0, category: 'Usage' },
    {
      id: 'Rail transport',
      input: 17.724487402999998,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Domestic aviation',
      input: 9.55109733,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'National navigation',
      input: 26.57289571,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'International aviation',
      input: 125.0236042,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'International shipping',
      input: 57.28499215,
      output: 0,
      category: 'Usage'
    }
  ],
  edges: [
    { source: 'Coal reserves', target: 'Coal', value: 127.93 },
    { source: 'Coal imports', target: 'Coal', value: 349.7879708 },
    { source: 'Oil reserves', target: 'Oil', value: 802.5479528 },
    { source: 'Oil imports', target: 'Oil', value: 65.64315528 },
    { source: 'Gas reserves', target: 'Natural Gas', value: 645.7728959 },
    { source: 'Gas imports', target: 'Natural Gas', value: 355.6589677 },
    {
      source: 'UK land based bioenergy',
      target: 'Bio-conversion',
      value: 3.027913952
    },
    {
      source: "Agricultural 'waste'",
      target: 'Bio-conversion',
      value: 9.282517755
    },
    { source: 'Other waste', target: 'Bio-conversion', value: 28.71472764 },
    { source: 'Other waste', target: 'Solid', value: 7.120255333 },
    { source: 'Biomass imports', target: 'Solid', value: 4.089432558 },
    { source: 'Coal', target: 'Solid', value: 477.7179708 },
    { source: 'Oil', target: 'Liquid', value: 868.1911081 },
    { source: 'Natural Gas', target: 'Gas', value: 1001.431864 },
    { source: 'Solar', target: 'Solar PV', value: 0.028059966 },
    { source: 'Solar PV', target: 'Electricity grid', value: 0.028059966 },
    { source: 'Bio-conversion', target: 'Solid', value: 15.69522779 },
    { source: 'Bio-conversion', target: 'Liquid', value: 1.069127005 },
    { source: 'Bio-conversion', target: 'Gas', value: 18.29875011 },
    { source: 'Bio-conversion', target: 'Losses', value: 5.962054444 },
    { source: 'Solid', target: 'Thermal generation', value: 434.145135 },
    { source: 'Liquid', target: 'Thermal generation', value: 8.534858112 },
    { source: 'Gas', target: 'Thermal generation', value: 343.3066404 },
    { source: 'Nuclear', target: 'Thermal generation', value: 160.71 },
    {
      source: 'Thermal generation',
      target: 'District heating',
      value: 9.042140031
    },
    {
      source: 'Thermal generation',
      target: 'Electricity grid',
      value: 366.4405941
    },
    { source: 'Thermal generation', target: 'Losses', value: 571.2138994 },
    { source: 'Wind', target: 'Electricity grid', value: 14.4406701 },
    { source: 'Tidal', target: 'Electricity grid', value: 0.005003425 },
    { source: 'Wave', target: 'Electricity grid', value: 0 },
    { source: 'Hydro', target: 'Electricity grid', value: 5.329728 },
    {
      source: 'Electricity grid',
      target: 'Over generation / exports',
      value: 1.14e-13
    },
    { source: 'Electricity grid', target: 'Losses', value: 26.94051694 },
    { source: 'District heating', target: 'Industry', value: 9.042140031 },
    {
      source: 'Electricity grid',
      target: 'Heating and cooling - homes',
      value: 28.7767749
    },
    {
      source: 'Solid',
      target: 'Heating and cooling - homes',
      value: 13.14794248
    },
    {
      source: 'Liquid',
      target: 'Heating and cooling - homes',
      value: 11.7924845
    },
    {
      source: 'Gas',
      target: 'Heating and cooling - homes',
      value: 354.8435738
    },
    {
      source: 'Electricity grid',
      target: 'Heating and cooling - commercial',
      value: 31.40903798
    },
    {
      source: 'Liquid',
      target: 'Heating and cooling - commercial',
      value: 9.357802772
    },
    {
      source: 'Gas',
      target: 'Heating and cooling - commercial',
      value: 80.65151402
    },
    {
      source: 'Electricity grid',
      target: 'Lighting & appliances - homes',
      value: 87.37770782
    },
    {
      source: 'Gas',
      target: 'Lighting & appliances - homes',
      value: 8.015463096
    },
    {
      source: 'Electricity grid',
      target: 'Lighting & appliances - commercial',
      value: 73.04774089
    },
    {
      source: 'Gas',
      target: 'Lighting & appliances - commercial',
      value: 8.987057559
    },
    { source: 'Electricity grid', target: 'Industry', value: 126.2492384 },
    { source: 'Solid', target: 'Industry', value: 56.47800845 },
    { source: 'Liquid', target: 'Industry', value: 137.4335097 },
    { source: 'Gas', target: 'Industry', value: 210.4929841 },
    { source: 'Electricity grid', target: 'Agriculture', value: 4.259002504 },
    { source: 'Solid', target: 'Agriculture', value: 0.851800501 },
    { source: 'Liquid', target: 'Agriculture', value: 3.513677065 },
    { source: 'Gas', target: 'Agriculture', value: 2.023026189 },
    { source: 'Electricity grid', target: 'Road transport', value: 0 },
    { source: 'Liquid', target: 'Road transport', value: 470.2870297 },
    {
      source: 'Electricity grid',
      target: 'Rail transport',
      value: 8.184036114
    },
    { source: 'Liquid', target: 'Rail transport', value: 9.540451289 },
    { source: 'Liquid', target: 'Domestic aviation', value: 9.55109733 },
    { source: 'Liquid', target: 'National navigation', value: 26.57289571 },
    { source: 'Liquid', target: 'International aviation', value: 125.0236042 },
    { source: 'Liquid', target: 'International shipping', value: 57.28499215 },
    { source: 'Gas', target: 'Losses', value: 11.41035458 }
  ],
  nodeIDAccessor: 'id',
  sourceAccessor: 'source',
  targetAccessor: 'target',
  nodeStyle: function(e) {
    return { stroke: nodeColorScale(e.category), fill: nodeColorScale(e.category), opacity: 0.8 };
  },
  edgeStyle: function(e) {
    return {
      // stroke: colors[e.target.category],
      fill: colorScale(e.source.id),
      fillOpacity: 0.75
    };
  },
  edgeWidthAccessor: 'value',
  hoverAnnotation: true,
  nodeLabels: d => {
    return d.output && <text textAnchor="middle">{d.id}</text>;
  },
  zoom: false, // Zoom the laid out nodes in or out so that they fit the specified size, can also be "stretch" if you want zoom not to maintain aspect ratio
  groupWidth: 20, //  Width in pixels of the outer rings
  padAngle: 0.01, // Space between groups in degrees,
};
const frameProps = {
  size: [700, 500],
  margin: { right: 130, bottom: 20 },
  additionalDefs:
      [
        <linearGradient key="gradient1" id="gradient_1">
          <stop stopColor={'#ff2fab'} offset="0%" />
          <stop stopColor={'#ffc62e'} offset="100%" />
          </linearGradient>,
        <linearGradient key="gradient2" id="gradient_2">
          <stop stopColor={'#dc04ff'} offset="0%" />
          <stop stopColor={'#d04376'} offset="100%" />
        </linearGradient>,
        <linearGradient key="gradient3" id="gradient_3">
          <stop stopColor={'#7324ff'} offset="0%" />
          <stop stopColor={'#52f091'} offset="100%" />
        </linearGradient>,
        <linearGradient key="gradient4" id="gradient_4">
          <stop stopColor={'#04a6ff'} offset="0%" />
          <stop stopColor={'#00ddc6'} offset="100%" />
        </linearGradient>
      ]
};

const ChordPage = props => {
  return (
    <PapperBlock>
      <Paper {...frameProps}>
        <Chord {...chordProps} />
      </Paper>
    </PapperBlock>
  );
};

export default ChordPage;
