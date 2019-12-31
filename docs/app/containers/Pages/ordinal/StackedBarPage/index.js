import React from 'react';
import { Paper, ClusterBar, Bar, XAxis, YAxis } from 'occult';
import { PapperBlock } from 'dan-components';
import * as d3 from 'd3';
import { withStyles } from '@material-ui/core';

const blue = '#aeeef8';
const green = '#e5fd3d';
const purple = '#9caff6';
const bg = '#612efb';

const styles = {
  frame: {
    background: '#612efb',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

const rAccessor = ['tweets', 'retweets', 'favorites'];
const ClusterBarPage = props => {
  const { classes } = props;

  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 800,
    height: 500,
    title: <text textAnchor="middle">Cluster Bar</text>
  };

  const colorScale = d3.scaleOrdinal().range([blue, green, purple]);

  const lineProps = {
    data: [
      { user: 'Jason', tweets: 10, retweets: 5, favorites: 15 },
      { user: 'Susie', tweets: 5, retweets: 100, favorites: 100 },
      { user: 'Matt', tweets: 20, retweets: 25, favorites: 50 },
      { user: 'Betty', tweets: 30, retweets: 20, favorites: 10 }
    ],
    oPadding: 20,
    oAccessor: 'user',
    projection: 'horizontal',
    rAccessor,
    style: d => {
      return { fill: colorScale(rAccessor[d.rIndex]), stroke: 'none' };
    },
    oLabel: true
  };

  return (
    <div>
      <PapperBlock>
        <Paper {...frameProps} className={classes.frame}>
          <ClusterBar {...lineProps} />
        </Paper>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(ClusterBarPage);
