import {
  projectedX,
  projectedXBottom,
  projectedXMiddle,
  projectedXTop,
  projectedY,
  projectedYBottom,
  projectedYMiddle,
  projectedYTop
} from '../../constants/coordinateNames';

export const projectLineData = ({ data, xAccessor, yAccessor }) => {
  const projectedLine = [];

  data.forEach((actualLineAccessor, lineIndex) => {
    xAccessor.forEach((actualXAccessor, xIndex) => {
      yAccessor.forEach((actualYAccessor, yIndex) => {
        data.forEach(d => {
          const originalLineData = { ...d, xIndex, yIndex, lineIndex };

          originalLineData.data = actualLineAccessor(d).map((p, q) => {
            const originalCoords = {};

            originalCoords[projectedX] = actualXAccessor(p, q);
            originalCoords[projectedY] = actualYAccessor(p, q);
            originalCoords[projectedYTop] = originalCoords[projectedY];
            originalCoords[projectedYBottom] = originalCoords[projectedY];
            originalCoords.data = p;

            return originalCoords;
          });
          originalLineData.key = originalLineData.key || projectedLine.length;
          projectedLine.push(originalLineData);
        });
      });
    });
  });

  return projectedLine;
};
