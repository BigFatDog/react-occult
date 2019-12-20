import linearRibbon from './linearRibbon';

const circularAreaLink = link => {
  const linkGenerator = linearRibbon();

  linkGenerator.x(d => d.x);
  linkGenerator.y(d => d.y);
  linkGenerator.r(() => link.sankeyWidth / 2);

  const xyForLink =
    link.direction === 'down'
      ? [
          {
            x: link.circularPathData.sourceY,
            y: link.circularPathData.sourceX
          },
          {
            x: link.circularPathData.sourceY,
            y: link.circularPathData.leftFullExtent
          },
          {
            x: link.circularPathData.verticalFullExtent,
            y: link.circularPathData.leftFullExtent
          },
          {
            x: link.circularPathData.verticalFullExtent,
            y: link.circularPathData.rightFullExtent
          },
          {
            x: link.circularPathData.targetY,
            y: link.circularPathData.rightFullExtent
          },
          {
            x: link.circularPathData.targetY,
            y: link.circularPathData.targetX
          }
        ]
      : [
          {
            x: link.circularPathData.sourceX,
            y: link.circularPathData.sourceY
          },
          {
            x: link.circularPathData.leftFullExtent,
            y: link.circularPathData.sourceY
          },
          {
            x: link.circularPathData.leftFullExtent,
            y: link.circularPathData.verticalFullExtent
          },
          {
            x: link.circularPathData.rightFullExtent,
            y: link.circularPathData.verticalFullExtent
          },
          {
            x: link.circularPathData.rightFullExtent,
            y: link.circularPathData.targetY
          },
          {
            x: link.circularPathData.targetX,
            y: link.circularPathData.targetY
          }
        ];

  return linkGenerator(xyForLink);
};

export default circularAreaLink;
