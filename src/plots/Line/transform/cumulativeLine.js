const cumulativeLine = ({ data, type = 'cumulative' }) => {
  data.forEach(d => {
    let cumulativeValue = 0;
    const dataArray =
      type === 'cumulative-reverse'
        ? d._xyCoordinates.reverse()
        : d._xyCoordinates;
    dataArray.forEach(p => {
      cumulativeValue += p.yTop;
      p.yBottom = p.yTop = p.yMiddle = cumulativeValue;
    });
  });

  return data;
};

export default cumulativeLine;
