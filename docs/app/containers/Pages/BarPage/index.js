import React from 'react';
import { XAxis, YAxis, OFrame } from 'occult';
import { PapperBlock } from 'dan-components';
import * as d3 from 'd3';

const TheMetLight = [
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

const colorScale = d3.scaleOrdinal().range(TheMetLight);

const LinePage = props => {
  const frameProps = {
    data: [
      { user: 'Jason', tweets: 10, retweets: 5, favorites: 15 },
      { user: 'Susie', tweets: 5, retweets: 100, favorites: 100 },
      { user: 'Matt', tweets: 20, retweets: 25, favorites: 50 },
      { user: 'Betty', tweets: 30, retweets: 20, favorites: 10 }
    ],
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    axis: { orient: "left", baseline: "under" },
    width: 1000,
    height: 600,
    title: (
      <text textAnchor="middle">
        <tspan fill={'#8BC34A'}>Bar</tspan>
      </text>
    ),
    type: 'bar',
    oAccessor: 'user',
    rAccessor: 'tweets',
    style: { fill: '#ac58e5', stroke: 'white' },
    oLabel: true
  };

  return (
    <div>
      <PapperBlock>
        <OFrame {...frameProps}>
          <XAxis label={'X'} rotate={30} />
          <YAxis label={'Y'} />
        </OFrame>
      </PapperBlock>
    </div>
  );
};

export default LinePage;
