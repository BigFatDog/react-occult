import React from 'react';
import { scaleLinear } from 'd3-scale';
import { PapperBlock } from 'dan-components';
import { Paper, XAxis, YAxis, Hexbin } from 'occult';
import { OldFaithful } from '../OldFaithfulPage/data';
const h = scaleLinear()
  .domain([0, 1])
  .range(['white', '#ac58e5']);

const HexbinPage = props => {
  const frameProps = {
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 800,
    height: 700,
    title: (
      <text textAnchor="middle">
        Old Faithful at{' '}
        <tspan fill={'#FF851B'}>Yellowstone National Park</tspan>
      </text>
    )
  };

  const hexbinProps = {
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
    areaUseCanvas: false,
    pointUseCanvas: false
  };

  return (
    <div>
      <PapperBlock>
        <Paper {...frameProps}>
          <XAxis label={'Eruptions'} />
          <YAxis label={'Waiting'} />
          <Hexbin {...hexbinProps} />
        </Paper>
      </PapperBlock>
    </div>
  );
};

export default HexbinPage;
