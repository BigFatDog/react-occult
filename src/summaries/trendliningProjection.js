const trendliningProjection = ({
  preprocess = true,
  processedData = false,
  summaryType,
  data: baseData,
  finalXExtent = [
    Math.min(...baseData.coordinates.map(d => d.x)),
    Math.max(...baseData.coordinates.map(d => d.x))
  ],
  finalYExtent = [
    Math.min(...baseData.coordinates.map(d => d.y)),
    Math.max(...baseData.coordinates.map(d => d.y))
  ],
  size,
  xScaleType = scaleLinear(),
  yScaleType = scaleLinear(),
  margin,
  baseMarkProps,
  styleFn,
  classFn,
  renderFn,
  chartSize
}) => {
  if (processedData) {
    return baseData[0].coordinates;
  }

  let projectedSummaries = [];
  if (!summaryType.type) {
    summaryType = { type: summaryType };
  }

  const {
    regressionType: baseRegressionType = 'linear',
    order = 2,
    precision = 4,
    controlPoints = 20,
    curve = curveCardinal
  } = summaryType;

  let regressionType = baseRegressionType;

  if (
    finalXExtent[0] < 0 &&
    (baseRegressionType === 'logarithmic' ||
      baseRegressionType === 'power' ||
      baseRegressionType === 'exponential')
  ) {
    console.error(
      `Cannot use this ${baseRegressionType} regressionType type with value range that goes below 0, defaulting to linear`
    );
    regressionType = 'linear';
  }

  if (baseData.coordinates && !baseData._xyfCoordinates) {
    baseData._xyfCoordinates = baseData.coordinates.map(d => [d.x, d.y]);
  }

  const data = Array.isArray(baseData) ? baseData : [baseData];

  const xScale = xScaleType.domain([0, 1]).range(finalXExtent);

  projectedSummaries = [];
  data.forEach(bdata => {
    const regressionLine = regression[regressionType](
      bdata._xyfCoordinates.map(d => [
        d[0].getTime ? d[0].getTime() : d[0],
        d[1].getTime ? d[1].getTime() : d[1]
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

    projectedSummaries.push({
      centroid: false,
      customMark: undefined,
      data: bdata,
      parentSummary: bdata,
      value: regressionLine.string,
      r2: regressionLine.r2,
      curve,
      _xyfCoordinates: controlPointArray
    });
  });

  return projectedSummaries;
};

export default trendliningProjection;
