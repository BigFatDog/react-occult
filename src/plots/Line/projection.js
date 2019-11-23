import { group } from 'd3-array';

const lineProjection = ({
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  let projectedPoints = [];

  // data
  const groupedMap = group(data, sAccessor);
  const groupedData = Array.from(groupedMap.keys()).map(d => ({
    s: d,
    _xyCoordinates: groupedMap.get(d).map(e => ({
      x: xAccessor(e),
      y: yAccessor(e),
      yTop: yAccessor(e),
      yBottom: yAccessor(e),
      _data: e
    })),
    _baseData: groupedMap.get(d)
  }));

  if (showPoints === true) {
    projectedPoints = data.map(d => ({
      parentSummary: groupedData.find(e => e.s === sAccessor(d)),
      _data: d,
      x: xAccessor(d),
      y: yAccessor(d),
      yTop: yAccessor(d),
      yBottom: yAccessor(d)
    }));
  }

  return {
    projectedLines: groupedData.slice(),
    projectedAreas: [],
    projectedPoints
  };
};

export default lineProjection;
