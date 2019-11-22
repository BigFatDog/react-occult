import { group } from 'd3-array';
import { projectLineData } from './projectLineData';

const lineProjection = ({
  data,
  finalXExtent,
  finalYExtent,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  console.log('---------');
  let projectedLines = [];
  let projectedAreas = [];
  let projectedPoints = [];

  let fullDataset = [];

  // data
  const groupedMap = group(data, sAccessor);
  const groupedData = Array.from(groupedMap.keys()).map(d => ({
    s: d,
    _xyCoordinates: groupedMap.get(d).map(e => ({
      x: xAccessor(e),
      y: yAccessor(e)
    })),
    _baseData: groupedMap.get(d)
  }));

  if (showPoints === true) {
    projectedPoints = data.map(d => ({
      parentSummary: groupedData.find(e => e.s === sAccessor(d)),
      _data: d,
      x: xAccessor(d),
      y: yAccessor(d)
    }));
  }

  groupedData.forEach(lineData => {
    const initialProjectedLines = projectLineData({
      data: lineData,
      xAccessor,
      yAccessor
    });

    const optionsObject = {
      xProp: projectedX,
      yProp: projectedY,
      yPropMiddle: projectedYMiddle,
      yPropTop: projectedYTop,
      yPropBottom: projectedYBottom,
      xPropMiddle: projectedXMiddle,
      xPropTop: projectedXTop,
      xPropBottom: projectedXBottom
    };

    projectedLines = lineTransformation(lineType, optionsObject)(
      initialProjectedLines
    );

    projectedLines.forEach(d => {
      fullDataset = [
        ...fullDataset,
        ...d.data
          .filter((p, q) => defined(Object.assign({}, p.data, p), q))
          .map(p => {
            const mappedP = {
              parentLine: d,
              y: p.y,
              x: p.x,
              yTop: p.yTop,
              yMiddle: p.yMiddle,
              yBottom: p.yBottom,
              data: p.data
            };
            if (p.percent) {
              mappedP.percent = p.percent;
            }
            return mappedP;
          })
      ];
    });
    if (showLinePoints) {
      projectedPoints = fullDataset.map(d => ({
        ...d,
        [projectedY]: d[projectedYTop] || d[projectedYBottom] || d.y
      }));
    }
  });

  return {
    projectedLines,
    projectedAreas,
    projectedPoints
  };
};

export default lineProjection;
