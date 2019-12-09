import { scaleLinear } from 'd3-scale';
import groupData from '../data';

const heatmapProjection = ({
  xBins,
  yBins,
  xCellPx,
  yCellPx,
  binMax,
  binValue,
  customMark,
  frameXScale,
  frameYScale,
  adjustedSize,
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  let projectedAreas = [];
  const { groupedData, projectedPoints } = groupData({
    data,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints
  });

  const size = adjustedSize;

  const xBinPercent = xBins < 1 ? xBins : 1 / xBins;
  const yBinPercent = yBins < 1 ? yBins : 1 / yBins;

  const heatmapBinXScale = scaleLinear()
    .domain(frameXScale.domain())
    .range([0, size[0]]);
  const heatmapBinYScale = scaleLinear()
    .domain(frameYScale.domain())
    .range([size[1], 0]);

  const actualResolution = [
    Math.ceil(((xCellPx && xCellPx / size[0]) || xBinPercent) * size[0] * 10) /
      10,
    Math.ceil(((yCellPx && yCellPx / size[1]) || yBinPercent) * size[1] * 10) /
      10
  ];
  let maxValue = -Infinity;

  groupedData.forEach(heatmapData => {
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
          _xyCoordinates: [
            [x, y],
            [x1, y],
            [x1, y1],
            [x, y1]
          ],
          parentSummary: heatmapData
        };
        gridColumn.push(cell);
        flatGrid.push(cell);
      }
      gridColumn.push(cell);
    }
    grid.push(gridColumn);

    heatmapData._xyCoordinates.forEach((d, di) => {
      const xCoordinate = Math.floor(
        heatmapBinXScale(d.x) / actualResolution[0]
      );
      const yCoordinate = Math.floor(
        heatmapBinYScale(d.y) / actualResolution[1]
      );
      grid[xCoordinate][yCoordinate].binItems.push(heatmapData._baseData[di]);
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

    projectedAreas = [...projectedAreas, ...flatGrid];
  });
  if (binMax) {
    binMax(maxValue);
  }

  return {
    projectedAreas,
    projectedPoints,
    projectedLines: []
  };
};

export default heatmapProjection;
