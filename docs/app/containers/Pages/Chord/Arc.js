import { Paper, Arc } from 'occult';
import React from 'react';
import { PapperBlock } from 'dan-components';

import { shakespeare } from '../data/shakespeare';
import { withStyles } from '@material-ui/core';

const trackParent = (node, i, arr) => {
  if (!node) {
    return;
  }

  if (
    node.id === 'Shakespeare' ||
    node.id === 'Comedies' ||
    node.id === 'Tragedies' ||
    node.id === 'Histories'
  ) {
    return null;
  }

  while (
    node.parent !== null ||
    node.parent !== 'Comedies' ||
    node.parent !== 'Tragedies' ||
    node.parent !== 'Histories' ||
    node.parent !== 'Shakespeare'
  ) {
    const _p = arr.find(d => d.id === node.parent);
    const parent = trackParent(_p, i, arr);
    if (!parent) {
      break;
    } else {
      node.parent = parent.parent || parent.id;
    }
  }

  return node;
};

const isPlay = id => ['Comedies', 'Tragedies', 'Histories'].includes(id);

const roots = [
  {
    id: 'Comedies',
    parent: 'Shakespeare',
    size: null
  },
  {
    id: 'Tragedies',
    parent: 'Shakespeare',
    size: null
  },
  {
    id: 'Histories',
    parent: 'Shakespeare',
    size: null
  }
];
const flat = shakespeare()
  .slice()
  .map((d, i, arr) => trackParent(d, i, arr))
  .filter(d => d);
const nodes = [...roots, ...flat];

const blue = '#0373d9';
const green = '#00ff70';
const bg = '#3436b8';

const nodeColorScale = {
  Comedies: 'url(#gradient_1)',
  Tragedies: 'url(#gradient_2)',
  Histories: 'url(#gradient_3)'
};

const colorMap = {
  Comedies: '#2196F3',
  Tragedies: '#ffc62e',
  Histories: '#7324ff'
};

const styles = {
  frame: {
    background:
      'radial-gradient( circle 621px at 25.3% 13.8%,  rgba(255,255,255,1) 0%, rgba(234,236,255,1) 90% )',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

const arcProps = {
  nodes: nodes.slice(),
  edges: flat.slice(),
  nodeIDAccessor: 'id',
  sourceAccessor: 'parent',
  targetAccessor: 'id',
  nodeStyle: function(e) {
    const c =
      e.parent === 'Shakespeare'
        ? nodeColorScale[e.id]
        : nodeColorScale[e.parent];

    return {
      stroke: c,
      fill: c,
      opacity: 0.8
    };
  },
  edgeStyle: function(e) {
    const c = nodeColorScale[e.source.id];

    return {
      stroke: c,
      fill: c,
      fillOpacity: 0.15
    };
  },
  edgeWidthAccessor: 'size',
  hoverAnnotation: true,
  nodeLabels: d => {
    return d.output && <text textAnchor="middle">{d.id}</text>;
  },
  zoom: true, // Zoom the laid out nodes in or out so that they fit the specified size, can also be "stretch" if you want zoom not to maintain aspect ratio
  groupWidth: 20, //  Width in pixels of the outer rings
  padAngle: 0.01 // Space between groups in degrees,
};
const frameProps = {
  width: 700,
  height: 700,
  margin: 40,
  additionalDefs: [
    <linearGradient key="gradient1" id="gradient_1">
      <stop stopColor={'#00ff70'} offset="0%" />
      <stop stopColor={'#0373d9'} offset="100%" />
    </linearGradient>,
    <linearGradient key="gradient2" id="gradient_2" x1={0} x2={0} y1={0} y2={1}>
      <stop stopColor={'#ffc62e'} offset="0%" />
      <stop stopColor={'#ff2fab'} offset="100%" />
    </linearGradient>,
    <linearGradient key="gradient3" id="gradient_3">
      <stop stopColor={'#7324ff'} offset="0%" />
      <stop stopColor={'#ff2fab'} offset="100%" />
    </linearGradient>,
    <linearGradient key="gradient4" id="gradient_4">
      <stop stopColor={'#04a6ff'} offset="0%" />
      <stop stopColor={'#00ddc6'} offset="100%" />
    </linearGradient>
  ]
};

const ArcPage = props => {
  const { classes } = props;

  return (
    <PapperBlock>
      <Paper {...frameProps} className={classes.frame}>
        <Arc {...arcProps} />
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(ArcPage);
