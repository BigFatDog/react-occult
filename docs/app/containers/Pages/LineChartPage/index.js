import React from 'react';
import { XYFrame, Line, XAxis, YAxis } from 'occult';
import { PapperBlock } from 'dan-components';
import {
  CumulativeReverse,
  Cumulative,
  Area,
  Line as lineProps,
  Bumpline,
  Bumparea,
  BumpareaInvert,
  Linepercent,
  StackedpercentInvert,
  Stackedpercent,
  StackedareaInvert,
  Stackedarea
} from './types';

const LinePage = props => {
  const frameProps = name => ({
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    width: 700,
    height: 400,
    title: (
      <text textAnchor="middle">
        <tspan fill={'#03A9F4'}>{name}</tspan>
      </text>
    )
  });

  const types = [
    { name: 'Line', type: lineProps },
    { name: 'Area', type: Area },
    { name: 'CumulativeReverse', type: CumulativeReverse },
    { name: 'Cumulative', type: Cumulative },
    { name: 'Bumpline', type: Bumpline },
    { name: 'Bumparea', type: Bumparea },
    { name: 'BumpareaInvert', type: BumpareaInvert },
    // { name: 'Difference', type: Difference },
    { name: 'Linepercent', type: Linepercent },
    { name: 'StackedpercentInvert', type: StackedpercentInvert },
    { name: 'Stackedpercent', type: Stackedpercent },
    { name: 'StackedareaInvert', type: StackedareaInvert },
    { name: 'Stackedarea', type: Stackedarea }
  ];
  const rendered = types.map(d => {
    return (
      <XYFrame {...frameProps(d.name)}>
        <XAxis label={'Year'} />
        <YAxis
          label={'Count'}
          baseline={'under'}
          tickLineGenerator={({ xy }) => (
            <path
              style={{
                fill: '#efefef',
                stroke: '#ccc',
                strokeDasharray: '2 2'
              }}
              d={`M${xy.x1},${xy.y1 - 5}L${xy.x2},${xy.y1 - 5}L${
                xy.x2
              },${xy.y1 + 5}L${xy.x1},${xy.y1 + 5}Z`}
            />
          )}
        />
        <Line {...d.type} />
      </XYFrame>
    );
  });

  return (
    <div>
      <PapperBlock>{rendered}</PapperBlock>
    </div>
  );
};

export default LinePage;
