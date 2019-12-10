import { group } from 'd3-array';

const DEFAULT_SERIES = 'default';

const groupData = ({ data, xAccessor, yAccessor, sAccessor, showPoints }) => {
  let projectedPoints = [];

  let groupedMap = new Map();
  if (sAccessor) {
    groupedMap = group(data, sAccessor);
  } else {
    groupedMap.set(DEFAULT_SERIES, data);
  }

  const groupedData = Array.from(groupedMap.keys()).map(d => ({
    s: d,
    _xyCoordinates: groupedMap.get(d).map(e => ({
      x: xAccessor(e),
      y: yAccessor(e),
      yTop: yAccessor(e),
      yBottom: 0,
      data: e
    })),
    _baseData: groupedMap.get(d)
  }));

  if (showPoints === true) {
    projectedPoints = data.map(d => ({
      parentSummary: groupedData.find(e =>
        sAccessor ? e.s === sAccessor(d) : e.s === DEFAULT_SERIES
      ),
      _data: d,
      x: xAccessor(d),
      y: yAccessor(d),
      yTop: yAccessor(d),
      yBottom: 0
    }));
  }

  return {
    groupedData,
    projectedPoints
  };
};

export default groupData;
