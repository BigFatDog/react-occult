const differenceLine = ({ data }) => {
  data.forEach((l, i) => {
    l._xyCoordinates.forEach((point, q) => {
      const otherLine = i === 0 ? 1 : 0;
      if (point.y > data[otherLine]._xyCoordinates[q].y) {
        point.yBottom = data[otherLine]._xyCoordinates[q].y;
        point.yTop = point.y;
      } else {
        point.yTop = point.y;
        point.yBottom = point.y;
      }
    });
  });

  return data;
};

export default differenceLine;
