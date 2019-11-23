import { scaleLinear } from 'd3-scale';

const heatmapProjection = ({
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

  if (baseData.coordinates && !baseData._xyfCoordinates) {
    baseData._xyfCoordinates = baseData.coordinates.map(d => [d.x, d.y]);
  }

  const data = Array.isArray(baseData) ? baseData : [baseData];

  let projectedSummaries = [];
  if (!summaryType.type) {
    summaryType = { type: summaryType };
  }

  const {
    //    binGraphic = "square",
    binValue = d => d.length,
    xBins = summaryType.yBins || 0.05,
    yBins = xBins,
    xCellPx = !summaryType.xBins && summaryType.yCellPx,
    yCellPx = !summaryType.yBins && xCellPx,
    customMark,
    binMax
  } = summaryType;
  const xBinPercent = xBins < 1 ? xBins : 1 / xBins;
  const yBinPercent = yBins < 1 ? yBins : 1 / yBins;

  const heatmapBinXScale = xScaleType.domain(finalXExtent).range([0, size[0]]);
  const heatmapBinYScale = yScaleType.domain(finalYExtent).range([size[1], 0]);

  const actualResolution = [
    Math.ceil(((xCellPx && xCellPx / size[0]) || xBinPercent) * size[0] * 10) /
      10,
    Math.ceil(((yCellPx && yCellPx / size[1]) || yBinPercent) * size[1] * 10) /
      10
  ];
  let maxValue = -Infinity;

  data.forEach(heatmapData => {
    const grid = [];
    const flatGrid = [];

    let cell;
    let gridColumn;

    for (let i = 0; i < size[0]; i += actualResolution[0]) {
      const x = heatmapBinXScale.invert(i);
      const x1 = heatmapBinXScale.invert(i + actualResolution[0]);

      gridColumn = [];
      grid.push(gridColumn);
      for (let j = 0; j < size[1]; j += actualResolution[1]) {
        const y = heatmapBinYScale.invert(j);
        const y1 = heatmapBinYScale.invert(j + actualResolution[1]);
        cell = {
          gx: i,
          gy: j,
          gw: actualResolution[0],
          gh: actualResolution[1],
          x: (x + x1) / 2,
          y: (y + y1) / 2,
          binItems: [],
          value: 0,
          _xyfCoordinates: [[x, y], [x1, y], [x1, y1], [x, y1]],
          parentSummary: heatmapData
        };
        gridColumn.push(cell);
        flatGrid.push(cell);
      }
      gridColumn.push(cell);
    }
    grid.push(gridColumn);

    heatmapData._xyfCoordinates.forEach((d, di) => {
      const xCoordinate = Math.floor(
        heatmapBinXScale(d[0]) / actualResolution[0]
      );
      const yCoordinate = Math.floor(
        heatmapBinYScale(d[1]) / actualResolution[1]
      );
      grid[xCoordinate][yCoordinate].binItems.push(heatmapData.coordinates[di]);
    });

    flatGrid.forEach(d => {
      d.value = binValue(d.binItems);
      maxValue = Math.max(maxValue, d.value);
    });

    flatGrid.forEach(d => {
      d.percent = d.value / maxValue;
      d.customMark = customMark && (
        <g transform={`translate(${d.gx},${d.gy})`}>
          {customMark({
            d,
            baseMarkProps,
            margin,
            styleFn,
            classFn,
            renderFn,
            chartSize,
            adjustedSize: size
          })}
        </g>
      );
    });

    projectedSummaries = [...projectedSummaries, ...flatGrid];
  });
  if (binMax) {
    binMax(maxValue);
  }
  if (preprocess) {
    return {
      type: 'heatmap',
      processedData: true,
      coordinates: projectedSummaries,
      binMax: maxValue
    };
  }

  return projectedSummaries;
};

export default heatmapProjection;
