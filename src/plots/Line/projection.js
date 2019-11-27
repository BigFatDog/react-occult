import groupData from '../data';

const lineProjection = ({
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  const { groupedData, projectedPoints } = groupData({
    data,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints
  });

  return {
    projectedLines: groupedData.slice(),
    projectedAreas: [],
    projectedPoints
  };
};

export default lineProjection;
