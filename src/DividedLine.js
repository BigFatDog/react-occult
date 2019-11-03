import * as React from 'react';
import { line, curveLinear } from 'd3-shape';
import { Mark } from 'semiotic-mark';

import { dividedLine, projectLineData } from './data/lineDrawing';

const DividedLine = props => {
  const {
    parameters,
    className,
    interpolate = curveLinear,
    customAccessors,
    lineDataAccessor,
    data,
    searchIterations,
    ...rest
  } = props;

  const { x, y } = customAccessors;

  const lineData = projectLineData({
    data: data,
    lineDataAccessor: [lineDataAccessor],
    xProp: 'x',
    yProp: 'y',
    xAccessor: [x],
    yAccessor: [y]
  });

  //Compatibility before Semiotic 2
  lineData.forEach(projectedD => {
    projectedD.data = projectedD.data.map(d => ({ ...d.data, ...d }));
  });

  const _lines = dividedLine(parameters, lineData[0].data, searchIterations);

  const lineRender = line()
    .curve(interpolate)
    .x(d => d.x)
    .y(d => d.y);

  const lines = _lines.map((d, i) => (
    <Mark
      {...rest}
      className={className}
      markType="path"
      key={`DividedLine-${i}`}
      style={d.key}
      d={lineRender(d.points)}
    />
  ));

  return <g>{lines}</g>;
};

export default DividedLine;
