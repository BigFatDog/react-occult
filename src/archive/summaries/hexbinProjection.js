import { scaleLinear } from 'd3-scale';
import { hexbin } from 'd3-hexbin';

const hexbinProjection = ({
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
  console.log('--------');
  if (processedData) {
    return baseData[0].coordinates;
  }

  let projectedSummaries = [];
  if (!summaryType.type) {
    summaryType = { type: summaryType };
  }

  const {
    //    binGraphic = "hex",
    bins = 0.05,
    cellPx,
    binValue = d => d.length,
    binMax,
    customMark
  } = summaryType;

  if (baseData.coordinates && !baseData._xyfCoordinates) {
    baseData._xyfCoordinates = baseData.coordinates.map(d => [d.x, d.y]);
  }

  const data = Array.isArray(baseData) ? baseData : [baseData];

  const hexBinXScale = xScaleType.domain(finalXExtent).range([0, size[0]]);
  const hexBinYScale = yScaleType.domain(finalYExtent).range([0, size[1]]);

  const actualResolution =
    (cellPx && cellPx / 2) || ((bins > 1 ? 1 / bins : bins) * size[0]) / 2;

  const hexbinner = hexbin()
    .x(d => hexBinXScale(d._xyfPoint[0]))
    .y(d => hexBinYScale(d._xyfPoint[1]))
    .radius(actualResolution)
    .size(size);

  let hexMax;
  const allHexes = hexbinner.centers();

  data.forEach(hexbinData => {
    hexMax = 0;
    const hexes = hexbinner(
      hexbinData._xyfCoordinates.map((d, i) => ({
        _xyfPoint: d,
        ...hexbinData.coordinates[i]
      }))
    );

    const centerHash = {};

    hexes.forEach(d => {
      centerHash[`${parseInt(d.x)}-${parseInt(d.y)}`] = true;
    });

    allHexes.forEach(hexCenter => {
      if (!centerHash[`${parseInt(hexCenter[0])}-${parseInt(hexCenter[1])}`]) {
        const newHex = [];
        newHex.x = hexCenter[0];
        newHex.y = hexCenter[1];
        hexes.push(newHex);
      }
    });

    hexMax = Math.max(...hexes.map(d => binValue(d)));

    if (binMax) {
      binMax(hexMax);
    }

    //Option for blank hexe
    const hexBase = [
      [0, -1],
      [0.866, -0.5],
      [0.866, 0.5],
      [0, 1],
      [-0.866, 0.5],
      [-0.866, -0.5]
    ];

    const hexWidth = hexBinXScale.invert(actualResolution) - finalXExtent[0];
    const hexHeight = hexBinYScale.invert(actualResolution) - finalYExtent[0];

    const hexacoordinates = hexBase.map(d => [
      d[0] * hexWidth,
      d[1] * hexHeight
    ]);

    const hexbinProjectedSummaries = hexes.map(d => {
      const hexValue = binValue(d);
      const gx = d.x;
      const gy = d.y;
      d.x = hexBinXScale.invert(d.x);
      d.y = hexBinYScale.invert(d.y);
      const percent = hexValue / hexMax;
      return {
        customMark: customMark && (
          <g transform={`translate(${gx},${size[1] - gy})`}>
            {customMark({
              d: {
                ...d,
                binItems: d,
                percent,
                value: hexValue,
                radius: actualResolution,
                hexCoordinates: hexBase.map(d => [
                  d[0] * actualResolution,
                  d[1] * actualResolution
                ])
              },
              baseMarkProps,
              margin,
              styleFn,
              classFn,
              renderFn,
              chartSize,
              adjustedSize: size
            })}
          </g>
        ),
        _xyfCoordinates: hexacoordinates.map(p => [p[0] + d.x, p[1] + d.y]),
        value: hexValue,
        percent,
        data: d,
        parentSummary: hexbinData,
        centroid: true
      };
    });
    projectedSummaries = [...projectedSummaries, ...hexbinProjectedSummaries];
  });

  if (preprocess) {
    projectedSummaries.forEach(d => {
      d.x = d.data.x;
      d.y = d.data.y;
    });
    return {
      type: 'hexbin',
      processedData: true,
      coordinates: projectedSummaries,
      binMax: hexMax
    };
  }

  return projectedSummaries;
};

export default hexbinProjection;
