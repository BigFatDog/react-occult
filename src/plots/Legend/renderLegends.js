import React from 'react';
import Legend from './index';

const renderLegends = props => {
  const { legendSettings } = props;

  let renderedLegend;
  if (legendSettings) {
    const positionHash = {
      left: [15, 15],
      right: [size[0] + 15, 15]
    };
    const { position = 'right', title = 'Legend' } = legendSettings;
    const legendPosition = positionHash[position];
    renderedLegend = (
      <g transform={`translate(${legendPosition.join(',')})`}>
        <Legend {...legendSettings} title={title} position={position} />
      </g>
    );
  }

  return renderedLegend;
};

export default renderLegends;
