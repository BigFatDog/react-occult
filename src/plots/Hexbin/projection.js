import { hexbin } from 'd3-hexbin';
import { scaleLinear } from 'd3-scale';
import groupData from '../data';

const hexbinProjection = ({
  bins,
  cellPx,
  binValue,
  binMax,
  customMark,
  finalXExtent,
  finalYExtent,
  size,
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

  const hexBinXScale = scaleLinear()
    .domain(finalXExtent)
    .range([0, size[0]]);
  const hexBinYScale = scaleLinear()
    .domain(finalYExtent)
    .range([0, size[1]]);

  const actualResolution =
    (cellPx && cellPx / 2) || ((bins > 1 ? 1 / bins : bins) * size[0]) / 2;

  const hexbinner = hexbin()
    .x(d => hexBinXScale(d._xyPoint.x))
    .y(d => hexBinYScale(d._xyPoint.y))
    .radius(actualResolution)
    .size(size);

  let hexMax;
  const allHexes = hexbinner.centers();

  groupedData.forEach(hexbinData => {
    hexMax = 0;
    const hexes = hexbinner(
      hexbinData._xyCoordinates.map((d, i) => ({
        _xyPoint: d,
        ...hexbinData._baseData[i]
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

    const hexbinProjectedAreas = hexes.map(d => {
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
        _xyCoordinates: hexacoordinates.map(p => [p[0] + d.x, p[1] + d.y]),
        value: hexValue,
        percent,
        data: d,
        parentSummary: hexbinData,
        centroid: true
      };
    });
    projectedAreas = [...projectedAreas, ...hexbinProjectedAreas];
  });

  return {
    projectedAreas,
    projectedPoints,
    projectedLines: []
  };
};

export default hexbinProjection;
