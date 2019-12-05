import groupData from '../data';

const scatterProjection = ({ data, xAccessor, yAccessor, sAccessor }) => {
  const { groupedData, projectedPoints } = groupData({
    data,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints: true
  });

  return {
    projectedLines: [],
    projectedAreas: [],
    projectedPoints
  };
};

export default scatterProjection;
