import React from 'react';
import { scaleLinear } from 'd3-scale';
import { contourDensity } from 'd3-contour';
import { Mark } from 'semiotic-mark';
import shapeBounds from '../../plots/Contour/shapeBounds';
const contourMap = d => [d.xy.x, d.xy.y];

const contouring = ({ summaryType, data, finalXExtent, finalYExtent }) => {
  let projectedSummaries = [];
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
    let contourProjectedSummaries = contourDensity()
      .size([resolution, resolution])
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]))
      .thresholds(thresholds)
      .bandwidth(bandwidth)(contourData._xyfCoordinates);

    if (neighborhood) {
      contourProjectedSummaries = [contourProjectedSummaries[0]];
    }

    const max = Math.max(...contourProjectedSummaries.map(d => d.value));

    contourProjectedSummaries.forEach(summary => {
      summary.parentSummary = contourData;
      summary.bounds = [];
      summary.percent = summary.value / max;
      summary.coordinates.forEach(poly => {
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
            summary.bounds.push(shapeBounds(poly[i]));
          }
        });
      });
    });
    projectedSummaries = [...projectedSummaries, ...contourProjectedSummaries];
  });

  return projectedSummaries;
};

const contourRenderFn = ({
  data,
  type,
  renderMode,
  eventListenersGenerator,
  styleFn,
  classFn,
  adjustedSize,
  baseMarkProps
}) => {
  const keys = Object.keys(data);
  const renderedSummaryMarks = [];
  const summaryXYCoords = [];

  keys.forEach((key, ordsetI) => {
    const ordset = data[key];
    const renderValue = renderMode && renderMode(ordset, ordsetI);
    type.thresholds = type.thresholds || 8;
    type.bandwidth = type.bandwidth || 12;
    type.resolution = type.resolution || 1000;

    const projectedOrd = [
      { id: ordset, _xyfCoordinates: ordset.xyData.map(contourMap) }
    ];

    const oContours = contouring({
      summaryType: type,
      data: projectedOrd,
      finalXExtent: [0, adjustedSize[0]],
      finalYExtent: [0, adjustedSize[1]]
    });
    const contourMarks = [];
    oContours.forEach((d, i) => {
      d.coordinates.forEach((coords, ii) => {
        const eventListeners = eventListenersGenerator(d, i);
        contourMarks.push(
          <Mark
            {...baseMarkProps}
            {...eventListeners}
            renderMode={renderValue}
            simpleInterpolate={true}
            key={`${i}-${ii}`}
            style={styleFn(ordset.pieceData[0].data, ordsetI)}
            className={classFn(ordset.pieceData[0].data, ordsetI)}
            markType={'path'}
            d={`M${d.coordinates[0].map(p => p.join(',')).join('L')}Z`}
          />
        );
      });
    });

    renderedSummaryMarks.push(
      <g
        key={`contour-container-${ordsetI}`}
        role="img"
        tabIndex={-1}
        data-o={key}
        aria-label={`${key} Contour plot`}
      >
        {contourMarks}
      </g>
    );
  });
  return { marks: renderedSummaryMarks, xyPoints: summaryXYCoords };
};

export default contourRenderFn;
