import { Paper, Dagre } from 'occult';
import React from 'react';
import { PapperBlock } from 'dan-components';

import { scaleLinear } from 'd3-scale';
import dagre from 'dagre';
import { withStyles } from '@material-ui/core';

const colors = {
  'Base Import': '#ff2fab',
  Usage: '#0373d9',
  Intermediary: '#9caff6',
  Other: '#00ff70'
};

const size = scaleLinear()
  .domain([0, 1020])
  .range([1, 100]);

const edgeSize = scaleLinear()
  .domain([0, 1020])
  .range([1, 20]);

const g = new dagre.graphlib.Graph();
g.setGraph({
  rankdir: 'LR',
  ranker: 'tight-tree',
  nodesep: 1,
  ranksep: 15
});
g.setDefaultEdgeLabel(() => ({}));

[
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
  { id: 'Oil imports', input: 0, output: 65.64315528, category: 'Base Import' },
  {
    id: 'Gas reserves',
    input: 0,
    output: 645.7728959,
    category: 'Base Import'
  },
  { id: 'Gas imports', input: 0, output: 355.6589677, category: 'Base Import' },
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
  { id: 'Domestic aviation', input: 9.55109733, output: 0, category: 'Usage' },
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
].forEach(n => {
  g.setNode(n.id, {
    ...n,
    height: size(Math.max(n.input, n.output)),
    width: 10
  });
});

[
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
  { source: 'Gas', target: 'Heating and cooling - homes', value: 354.8435738 },
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
  { source: 'Electricity grid', target: 'Rail transport', value: 8.184036114 },
  { source: 'Liquid', target: 'Rail transport', value: 9.540451289 },
  { source: 'Liquid', target: 'Domestic aviation', value: 9.55109733 },
  { source: 'Liquid', target: 'National navigation', value: 26.57289571 },
  { source: 'Liquid', target: 'International aviation', value: 125.0236042 },
  { source: 'Liquid', target: 'International shipping', value: 57.28499215 },
  { source: 'Gas', target: 'Losses', value: 11.41035458 }
].forEach(e => {
  g.setEdge(e.source, e.target, {
    weight: edgeSize(e.value)
  });
});

const styles = {
  frame: {
    background: '#f9f7e8',
    border: 0,
    borderRadius: 6
  }
};

dagre.layout(g);
const frameProps = {
  width: 1000,
  height: 700,
  margin: { top: 20, bottom: 20, left: 10, right: 120 }
};

const dagreProps = {
  graph: g,
  nodeStyle: function(e) {
    return {
      stroke: colors[e.category],
      fill: colors[e.category],
      opacity: 0.7
    };
  },
  edgeStyle: function(e) {
    return {
      fill: 'none',
      stroke: colors[e.source.category],
      strokeWidth: e.weight,
      opacity: 0.7
    };
  },
  nodeLabels: d => <text>{d.id}</text>
};

const DagrePage = props => {
  const { classes } = props;
  return (
    <PapperBlock>
      <Paper {...frameProps} className={classes.frame}>
        <Dagre {...dagreProps} />
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(DagrePage);
