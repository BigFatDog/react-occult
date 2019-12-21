import linearRibbon from './linearRibbon';

const ribbonLink = d => {
  const diff =
    d.direction === 'down'
      ? Math.abs(d.target.y - d.source.y)
      : Math.abs(d.source.x - d.target.x);
  // const halfWidth = d.width / 2
  const testCoordinates =
    d.direction === 'down'
      ? [
          {
            x: d.y0,
            y: d.source.y
          },
          {
            x: d.y0,
            y: d.source.y + diff / 3
          },
          {
            x: d.y1,
            y: d.target.y - diff / 3
          },
          {
            x: d.y1,
            y: d.target.y
          }
        ]
      : [
          {
            x: d.source.x0,
            y: d.y0
          },
          {
            x: d.source.x0 + diff / 3,
            y: d.y0
          },
          {
            x: d.target.x0 - diff / 3,
            y: d.y1
          },
          {
            x: d.target.x0,
            y: d.y1
          }
        ];

  const linkGenerator = linearRibbon();

  linkGenerator.x(d => d.x);
  linkGenerator.y(d => d.y);
  linkGenerator.r(() => d.sankeyWidth / 2);

  return linkGenerator(testCoordinates);
};

export default ribbonLink;
