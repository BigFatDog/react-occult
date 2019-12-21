import { interpolateNumber } from 'd3-interpolate';
const curvature = 0.5;
const areaLink = d => {
  let x0, x1, x2, x3, y0, y1, xi, y2, y3;

  if (d.direction === 'down') {
    x0 = d.y0 - d.sankeyWidth / 2;
    x1 = d.y1 - d.sankeyWidth / 2;
    x2 = d.y1 + d.sankeyWidth / 2;
    x3 = d.y0 + d.sankeyWidth / 2;
    y0 = d.source.y1;
    y1 = d.target.y0;
    xi = interpolateNumber(y0, y1);
    y2 = xi(curvature);
    y3 = xi(1 - curvature);

    return `M${x0},${y0}C${x0},${y2} ${x1},${y3} ${x1},${y1}L${x2},${y1}C${x2},${y3} ${x3},${y2} ${x3},${y0}Z`;
  }
  (x0 = d.source.x1), // eslint-disable-line no-sequences
    (x1 = d.target.x0),
    (xi = interpolateNumber(x0, x1)),
    (x2 = xi(curvature)),
    (x3 = xi(1 - curvature)),
    (y0 = d.y0 - d.sankeyWidth / 2),
    (y1 = d.y1 - d.sankeyWidth / 2),
    (y2 = d.y1 + d.sankeyWidth / 2),
    (y3 = d.y0 + d.sankeyWidth / 2);

  return `M${x0},${y0}C${x2},${y0} ${x3},${y1} ${x1},${y1}L${x1},${y2}C${x3},${y2} ${x2},${y3} ${x0},${y3}Z`;
};

export default areaLink;
