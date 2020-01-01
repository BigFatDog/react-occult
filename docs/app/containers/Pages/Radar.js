import * as d3 from 'd3';
import React from 'react';
import { Axis, Paper, OrdinalPoint } from 'occult';
import { PapperBlock } from 'dan-components';
import { withStyles } from '@material-ui/core/styles';

import AppDownloads from './data/app-download.json';

const data = [
  [
    //iPhone
    { axis: 'Battery Life', value: 0.22 },
    { axis: 'Brand', value: 0.28 },
    { axis: 'Contract Cost', value: 0.29 },
    { axis: 'Design And Quality', value: 0.17 },
    { axis: 'Have Internet Connectivity', value: 0.22 },
    { axis: 'Large Screen', value: 0.02 },
    { axis: 'Price Of Device', value: 0.21 },
    { axis: 'To Be A Smartphone', value: 0.5 }
  ],
  [
    //Samsung
    { axis: 'Battery Life', value: 0.27 },
    { axis: 'Brand', value: 0.16 },
    { axis: 'Contract Cost', value: 0.35 },
    { axis: 'Design And Quality', value: 0.13 },
    { axis: 'Have Internet Connectivity', value: 0.2 },
    { axis: 'Large Screen', value: 0.13 },
    { axis: 'Price Of Device', value: 0.35 },
    { axis: 'To Be A Smartphone', value: 0.38 }
  ],
  [
    //Nokia Smartphone
    { axis: 'Battery Life', value: 0.26 },
    { axis: 'Brand', value: 0.1 },
    { axis: 'Contract Cost', value: 0.3 },
    { axis: 'Design And Quality', value: 0.14 },
    { axis: 'Have Internet Connectivity', value: 0.22 },
    { axis: 'Large Screen', value: 0.04 },
    { axis: 'Price Of Device', value: 0.41 },
    { axis: 'To Be A Smartphone', value: 0.3 }
  ]
];

const flatData = [];
data[0].forEach(d => {
  d.brand = 'iPhone';
  flatData.push(d);
});
data[1].forEach(d => {
  d.brand = 'Samsung';
  flatData.push(d);
});
data[2].forEach(d => {
  d.brand = 'Nokia';
  flatData.push(d);
});

const colors = ['#e0d33a', '#7324ff', '#04a6ff'];

const colorScale = d3.scaleOrdinal().range(colors);

const pointProps = {
  data: flatData,
  connectorType: function(e) {
    return e.brand;
  },
  projection: 'radial',
  oAccessor: 'axis',
  rAccessor: 'value',
  style: function(e) {
    return { fill: colorScale(e.brand), stroke: 'white', strokeOpacity: 0.5 };
  },
  connectorStyle: function(e) {
    return {
      fill: colorScale(e.source.brand),
      stroke: colorScale(e.source.brand),
      strokeWidth: 2,
      strokeOpacity: 1,
      fillOpacity: 0.3
    };
  },
  pieceHoverAnnotation: true,
  oLabel: true,
  useAxes: true
};
const FrameProps = {
  width: 900,
  height: 900,
  margin: { left: 40, top: 50, bottom: 40, right: 40 },
  title: (
    <text textAnchor="middle">
      NYC Hospital Facilities <tspan fill={'#E5BDF6'}>Community Board </tspan>{' '}
      By Borough
    </text>
  )
};

const styles = {
  frame: {
    background:
      'radial-gradient(rgba(205,77,204,1) 9.6%, rgba(74,105,187,1) 93.6%);',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  }
};

const BarPage = props => {
  const { classes } = props;
  return (
    <PapperBlock>
      <Paper {...FrameProps} className={classes.frame}>
        <OrdinalPoint {...pointProps} />
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(BarPage);
