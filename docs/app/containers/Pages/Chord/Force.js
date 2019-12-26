import React from 'react';
import { XAxis, YAxis, Paper, Force } from 'occult';
import { PapperBlock } from 'dan-components';
import { shakespeare } from '../data/shakespeare';
import * as d3 from 'd3';
import {withStyles} from "@material-ui/core";

const frameProps = {
  title: (
      <g>
        <text textAnchor="middle">
          <tspan fill={'white'}>Shakespeare Characters Network</tspan>
        </text>
      </g>
  ),
  width: 1000,
  height: 670,
  margin: { top: 70, bottom: 10, left: 10, right: 10}
};

const colorMap = {
  'Shakespeare': '#d04376',
  'Comedies': '#2196F3',
  'Tragedies': '#00ddc6',
  'Histories': '#ffc62e'
}

const scaleMap = {
  'Comedies': d3.scaleLinear().domain([0, 500]).range(['#7FDBFF', '#04a6ff']),
  'Tragedies': d3.scaleLinear().domain([0, 200]).range(['#72ffa2', '#2ECC40']),
  'Histories': d3.scaleLinear().domain([0, 200]).range(['#fff686', '#ffc62e']),
}

const sizeScale = d3.scaleLinear().domain([0, 300]).range([5, 10]);

const findParent = node => {
  let parent = node.parent;

  while(parent !== 'Shakespeare' && parent !== 'Comedies' && parent !== 'Tragedies' && parent !== 'Histories') {
    const parNode = shakespeare().find(d => d.id === parent);
    if (!parNode) {
      break;
    }
    parent = parNode.parent;
  }

  return parent;
}

const forceProps = {
  edgeUseCanvas: false,
  nodeUseCanvas: false,
  nodes: shakespeare().slice(),
  edges: shakespeare().slice(),
  nodeIDAccessor: 'id',
  sourceAccessor: 'parent',
  targetAccessor: 'id',
  forceManyBody: -450,
  distanceMax: 1000,
  edgeStrength: .6,
  hoverAnnotation: true,
  nodeStyle: d => {

    let style = {};
    if (d.id === 'Shakespeare' || d.parent === 'Shakespeare') {
      style = {
        fill: '#001f3f',
        stroke: colorMap[d.id],
        strokeWidth: 3,
        opacity: 1
      }
    } else if (d.parent === 'Comedies' || d.parent === 'Tragedies' || d.parent === 'Histories' ){
      style = {
        fill: '#001f3f',
        opacity: 0.8,
        stroke: colorMap[d.parent],
        strokeWidth: 2,
      }
     } else {
      const par = findParent(d);
      const scale = scaleMap[par];
      style = {
        stroke: 'black',
        strokeWidth: 1,
        fill: scale(d.size),
        opacity: .7,
      }
    }
    return style
  },
  edgeStyle: d => {
    let style = {
      fill: 'none'
    };
    if (d.source.id === 'Shakespeare') {
      style = {
        stroke: colorMap[d.source.id],
        fill: 'none'
      }
    } else if (['Comedies', 'Tragedies', 'Histories'].includes(d.source.id)) {
      style = {
        stroke: colorMap[d.source.id],
        fill: 'none'
      }
    } else if (['Comedies', 'Tragedies', 'Histories'].includes(d.target.id)) {
      style = {
        stroke: colorMap[d.target.id],
        fill: 'none'
      }
    } else {
      const par = findParent(d);
      style = {
        stroke: colorMap[par],
        fill: 'none'
      }
    }

    return style;
  },
  edgeType: 'linearc',
  nodeSizeAccessor: d => {
    if (d.id === 'Shakespeare') {
      return 20;
    } else if (d.parent === 'Shakespeare') {
      return 10
    } else if (d.degree === 0) {
      return 10;
    } else {
      return sizeScale(d.size);
    }
  }
,  filterRenderedNodes: d => d.id !== 'undefined'
};
const styles = {
  frame: {
    background: '#001f3f',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
}


const ForcePage = props => {
  const { classes } = props;
  return (
    <PapperBlock>
      <Paper {...frameProps} className={classes.frame}>
        <Force {...forceProps}></Force>
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(ForcePage);
