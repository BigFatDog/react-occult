import { contourDensity } from 'd3-contour';
import { scaleLinear } from 'd3-scale';
import shapeBounds from './shapeBounds';
import { group } from 'd3-array';

const contouringProjection = ({
  threshold,
  resolution,
  bandWidth,
  neighborhood,
  data,
  finalXExtent,
  finalYExtent,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  let projectedAreas = [];
  let projectedPoints = [];

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

  const xScale = scaleLinear()
    .domain(finalXExtent)
    .rangeRound([0, resolution])
    .nice();
  const yScale = scaleLinear()
    .domain(finalYExtent)
    .rangeRound([resolution, 0])
    .nice();

  groupedData.forEach(contourData => {
    let contourProjectedAreas = contourDensity()
      .size([resolution, resolution])
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .thresholds(threshold)
      .bandwidth(bandWidth)(contourData._xyCoordinates);

    if (neighborhood) {
      contourProjectedAreas = [contourProjectedAreas[0]];
    }

    const max = Math.max(...contourProjectedAreas.map(d => d.value));

    contourProjectedAreas.forEach(area => {
      area.parentSummary = contourData;
      area.bounds = [];
      area.percent = area.value / max;
      area.coordinates.forEach(poly => {
        poly.forEach((subpoly, i) => {
          poly[i] = subpoly.map(coordpair => {
            coordpair = [
              xScale.invert(coordpair[0]),
              yScale.invert(coordpair[1])
            ];
            return coordpair;
          });
          //Only push bounds for the main poly, not its interior rings, otherwise you end up labeling interior cutouts
          if (i === 0) {
            area.bounds.push(shapeBounds(poly[i]));
          }
        });
      });
    });
    projectedAreas = [...projectedAreas, ...contourProjectedAreas];
  });

  return {
    projectedAreas,
    projectedPoints
  };
};

export default contouringProjection;