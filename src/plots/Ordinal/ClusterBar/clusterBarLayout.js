import * as React from 'react';
import { clusterRadialBarFeatureGenerator } from '../radialBarFeatureGenerator';

const clusterBarLayout = ({
  icon,
  iconPadding,
  resize,
  data,
  customMark: userMark,
  innerRadius,
  offsetAngle,
  angleRange,
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
  let customMark = userMark;
  let allCalculatedPieces = [];
  const keys = Object.keys(data);
  keys.forEach((key, ordsetI) => {
    const ordset = data[key];

    const barColumnWidth = Math.max(ordset.width, 1);
    const clusterWidth = barColumnWidth / ordset.pieceData.length;

    let currentX = 0;
    let currentY = 0;

    const calculatedPieces = ordset.pieceData.map((piece, i) => {
      const renderValue = renderMode && renderMode(piece.data, i);

      let xPosition = piece.x;
      let yPosition = piece.base;
      let finalWidth = clusterWidth;
      let finalHeight = piece.scaledValue;
      let xy = { x: 0, y: 0 };
      if (!piece.negative) {
        yPosition -= piece.scaledValue;
      }

      if (projection === 'horizontal') {
        //TODO: NEGATIVE FOR HORIZONTAL
        yPosition = piece.x;
        xPosition = piece.base;
        finalHeight = clusterWidth;
        finalWidth = piece.scaledValue;
        xy.x = piece.scaledValue;
        if (piece.negative) {
          xPosition -= piece.scaledValue;
          xy.x = xPosition;
        }
      }

      let translate,
        markProps = {};

      if (projection === 'radial') {
        ({
          xPosition,
          yPosition,
          markProps,
          xy
        } = clusterRadialBarFeatureGenerator({
          innerRadius,
          offsetAngle,
          angleRange,
          ordset,
          adjustedSize,
          piece,
          i
        }));
        xy.x = xPosition;
      } else {
        xPosition += currentX;
        yPosition += currentY;
        markProps = {
          markType: 'rect',
          x: xPosition,
          y: yPosition,
          width: Math.max(0, finalWidth),
          height: Math.max(0, finalHeight),
          rx: 0,
          ry: 0
        };
        if (projection === 'vertical') {
          xy.x = xPosition;
        }
      }

      const eventListeners = eventListenersGenerator(piece, i);

      xy.y = yPosition;
      xy.middle = clusterWidth / 2;
      xy.height = finalHeight;
      xy.width = finalWidth;

      if (icon && projection !== 'radial') {
        customMark = iconBarCustomMark({
          icon,
          iconPadding,
          resize,
          projection,
          finalHeight,
          finalWidth,
          styleFn,
          renderValue,
          classFn
        });
      } else if (icon && projection === 'radial') {
        console.error('Icons are currently unsupported on radial charts');
      }
      const renderElementObject = customMark ? (
        <g
          key={`piece-${piece.renderKey}`}
          transform={
            translate ? translate : `translate(${xPosition},${yPosition})`
          }
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
          transform: translate,
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
      if (projection === 'horizontal') {
        currentY += finalHeight;
      } else {
        currentX += finalWidth;
      }

      //        currentOffset += pieceSize
      return calculatedPiece;
    });
    allCalculatedPieces = [...allCalculatedPieces, ...calculatedPieces];
  });
  return allCalculatedPieces;
};

export default clusterBarLayout;
