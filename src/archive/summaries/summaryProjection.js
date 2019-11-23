import contouringProjection from './contouringProjection';
import heatmapProjection from './heatmapProjection';
import hexbinProjection from './hexbinProjection';
// import shapeBounds from './shapeBounds';

const projectArea = (
  summaries,
  summaryType,
  xAccessor,
  yAccessor,
  finalXExtent,
  finalYExtent
) => {
  if (!summaries || summaries.length === 0) {
    return [];
  }
  const { type } = summaryType;
  let projections = [];

  switch (type) {
    case 'contour':
      projections = contouringProjection({
        areaType: summaryType,
        data: summaries,
        finalXExtent,
        finalYExtent
      });
      break;
    case 'heatmap':
      projections = heatmapProjection({
        areaType: summaryType,
        data: summaries,
        finalXExtent,
        finalYExtent
      });
      break;
    case 'hexbin':
      projections = hexbinProjection({
        areaType: summaryType,
        data: summaries,
        finalXExtent,
        finalYExtent
      });
  }

  return projections;
};

export default projectArea;
