import React from 'react';
import { OldFaithful } from '../OldFaithfulPage/data';
import { XYFrame, XAxis, YAxis, Heatmap } from 'occult';
import { PapperBlock } from 'dan-components';

import { scaleLinear } from 'd3-scale';

const h = scaleLinear().range(['white', '#6E45E1']);

const HeatmapPage = props => {
  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 1000,
    height: 600,
    title: (
      <text textAnchor="middle">
        Old Faithful at{' '}
        <tspan fill={'#FF851B'}>Yellowstone National Park</tspan>
      </text>
    )
  };

  const heatmapProps = {
    yAccessor: d => d.eruptions,
    xAccessor: d => d.waiting,
    xExtent: [35, 100],
    yExtent: [1.1, 6],
    data: OldFaithful.slice(),
    areaStyle: (e, i) => ({
      stroke: '#ccc',
      fill: h(e.percent),
      strokeWidth: 0.5
    }),
    pointStyle: d => ({
      r: 2,
      fill: '#2884B8',
      fillOpacity: 0.5
    }),
    areaUseCanvas: true,
    pointUseCanvas: true
  };

  return (
    <div>
      <PapperBlock>
        <XYFrame {...frameProps}>
          <XAxis label={'Waiting'} />
          <YAxis label={'Eruptions'} />
          <Heatmap {...heatmapProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default HeatmapPage;
