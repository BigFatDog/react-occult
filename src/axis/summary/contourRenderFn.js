import React from 'react';

const contourMap = d => [d.xy.x, d.xy.y];

export const contourRenderFn = ({
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
