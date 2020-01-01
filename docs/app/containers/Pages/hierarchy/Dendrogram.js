import React from 'react';
import { PapperBlock } from 'dan-components';
import flareRoot from '../data/flare-tree.json';
import { Paper, Tree, Cluster } from 'occult';
import { withStyles } from '@material-ui/core';

const theme = [
  '#F44336',
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

const frameProps = {
  width: 800,
  height: 500,
  margin: 50,
  hoverAnnotation: [
    { type: 'desaturation-layer', style: { fill: 'white', fillOpacity: 0.25 } },
    {
      type: 'highlight',
      style: d => ({
        fill: theme[d.depth],
        stroke: theme[d.depth],
        fillOpacity: 0.6
      })
    },
    { type: 'frame-hover' }
  ],
  tooltipContent: d => (
    <div className="tooltip-content">
      {d.parent ? <p>{d.parent.data.name}</p> : undefined}
      <p>{d.data.name}</p>
    </div>
  )
};

const plotProps = {
  nodes: [flareRoot],
  nodeIDAccessor: 'name',
  nodeStyle: d => {
    console.log(d);
    return {
      fill: theme[d.depth],
      stroke: theme[d.depth],
      fillOpacity: 0.8
    };
  },
  edgeStyle: d => ({
    fill: theme[d.source.depth],
    stroke: theme[d.source.depth],
    opacity: 0.7
  }),
  edgeType: 'nail'
  // nodeLabels: d => {
  //   return d.depth < 4 ? (
  //     <g transform="translate(0,-15)">
  //       <text
  //         fontSize="12"
  //         textAnchor="middle"
  //         strokeWidth={2}
  //         stroke="white"
  //         fill="white"
  //       >
  //         {d.id}
  //       </text>
  //       <text fontSize="12" textAnchor="middle" fill={theme[d.depth]}>
  //         {d.id}
  //       </text>
  //     </g>
  //   ) : null;
  // }
};

const styles = {
  frame: {
    background: '#272b4d',
    border: 0,
    borderRadius: 6
  }
};

const TreePage = props => {
  const { classes } = props;
  return (
    <PapperBlock>
      <Paper {...frameProps} className={classes.frame}>
        <Cluster {...plotProps} />
      </Paper>
    </PapperBlock>
  );
};

export default withStyles(styles)(TreePage);
