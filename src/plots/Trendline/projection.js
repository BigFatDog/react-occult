import regression from 'regression';
import { scaleLinear } from 'd3-scale';
import groupData from '../data';

const trendliningProjection = ({
  regressionType: baseRegressionType,
  order,
  precision,
  controlPoints,
  curve,
  frameXScale,
  xScaleType = scaleLinear(),
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  let regressionType = baseRegressionType;
  if (
    frameXScale.domain()[0] < 0 &&
    (baseRegressionType === 'logarithmic' ||
      baseRegressionType === 'power' ||
      baseRegressionType === 'exponential')
  ) {
    console.error(
      `Cannot use this ${baseRegressionType} regressionType type with value range that goes below 0, defaulting to linear`
    );
    regressionType = 'linear';
  }

  let projectedAreas = [];
  const { groupedData, projectedPoints } = groupData({
    data,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints
  });

  const xScale = xScaleType.domain([0, 1]).range(frameXScale.domain());

  groupedData.forEach(bdata => {
    const regressionLine = regression[regressionType](
      bdata._xyCoordinates.map(d => [
        d.x.getTime ? d.x.getTime() : d.x,
        d.y.getTime ? d.y.getTime() : d.y
      ]),
      {
        order,
        precision
      }
    );
    const controlStep = 1 / controlPoints;

    let steps = [0, 1];

    if (regressionType !== 'linear') {
      steps = [];
      for (let step = 0; step < 1 + controlStep; step += controlStep) {
        steps.push(step);
      }
    }

    const controlPointArray = [];

    steps.forEach(controlPoint => {
      controlPointArray.push(regressionLine.predict(xScale(controlPoint)));
    });

    projectedAreas.push({
      centroid: false,
      customMark: undefined,
      data: bdata,
      parentSummary: bdata,
      value: regressionLine.string,
      r2: regressionLine.r2,
      curve,
      _xyCoordinates: controlPointArray
    });
  });

  return {
    projectedAreas,
    projectedPoints,
    projectedLines: []
  };
};

export default trendliningProjection;
