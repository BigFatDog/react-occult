import { contourDensity } from 'd3-contour';
import { scaleLinear } from 'd3-scale';
import shapeBounds from './shapeBounds';

const contouringProjection = ({
  summaryType,
  data,
  finalXExtent,
  finalYExtent
}) => {
  let projectedAreas = [];
  if (!summaryType.type) {
    summaryType = { type: summaryType };
  }

  const {
    resolution = 500,
    thresholds = 10,
    bandwidth = 20,
    neighborhood
  } = summaryType;

  const xScale = scaleLinear()
    .domain(finalXExtent)
    .rangeRound([0, resolution])
    .nice();
  const yScale = scaleLinear()
    .domain(finalYExtent)
    .rangeRound([resolution, 0])
    .nice();

  data.forEach(contourData => {
    let contourProjectedAreas = contourDensity()
      .size([resolution, resolution])
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]))
      .thresholds(thresholds)
      .bandwidth(bandwidth)(contourData._xyfCoordinates);

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

  return projectedAreas;
};

export default contouringProjection;
