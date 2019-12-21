import * as React from 'react';
import { timelineRadialBarFeatureGenerator } from '../radialBarFeatureGenerator';
const timelineLayout = ({
  customMark,
  innerRadius,
  offsetAngle,
  angleRange,
  data,
  renderMode,
  eventListenersGenerator,
  styleFn,
  projection,
  classFn,
  adjustedSize,
  chartSize,
  margin,
  baseMarkProps,
  rScale
}) => {
  let allCalculatedPieces = [];
  const keys = Object.keys(data);
  keys.forEach((key, ordsetI) => {
    const ordset = data[key];
    const calculatedPieces = [];

    ordset.pieceData.forEach((piece, i) => {
      const renderValue = renderMode && renderMode(piece.data, i);
      let xPosition = ordset.x;
      let height = piece.scaledEndValue - piece.scaledValue;
      let yPosition = piece.scaledVerticalValue - height;
      let width = ordset.width;
      let markProps = {
        markType: 'rect',
        height: height < 0 ? -height : height,
        width,
        x: xPosition,
        y: height < 0 ? yPosition + height : yPosition
      };

      if (projection === 'horizontal') {
        yPosition = ordset.x;
        xPosition = piece.scaledValue;
        width = piece.scaledEndValue - piece.scaledValue;
        height = ordset.width;
        markProps = {
          markType: 'rect',
          height,
          width: width < 0 ? -width : width,
          x: width < 0 ? xPosition + width : xPosition,
          y: yPosition
        };
      } else if (projection === 'radial') {
        ({ markProps } = timelineRadialBarFeatureGenerator({
          innerRadius,
          offsetAngle,
          angleRange,
          piece,
          ordset,
          adjustedSize,
          i
        }));
      }

      //Only return the actual piece if you're rendering points, otherwise you just needed to iterate and calculate the points for the contour summary type

      const eventListeners = eventListenersGenerator(piece, i);
      const xy = {
        x: xPosition,
        y: yPosition,
        height
      };

      const renderElementObject = customMark ? (
        <g
          key={`piece-${piece.renderKey}`}
          transform={`translate(${xPosition},${yPosition + height})`}
        >
          {customMark(
            { ...piece.data, ...piece, x: xPosition, y: yPosition },
            i,
            {
              ...xy,
              baseMarkProps,
              renderMode,
              styleFn,
              classFn,
              adjustedSize,
              chartSize,
              margin,
              rScale
            }
          )}
        </g>
      ) : (
        {
          className: classFn({ ...piece, ...piece.data }, i),
          renderMode: renderValue,
          key: `piece-${piece.renderKey}`,
          style: styleFn({ ...piece, ...piece.data }, ordsetI),
          ...markProps,
          ...eventListeners
        }
      );

      const calculatedPiece = {
        o: key,
        xy,
        piece,
        renderElement: renderElementObject
      };

      calculatedPieces.push(calculatedPiece);
    });
    allCalculatedPieces = [...allCalculatedPieces, ...calculatedPieces];
  });

  return allCalculatedPieces;
};

export default timelineLayout;
