import React from 'react';

const layout = ({
  type,
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
  const keys = Object.keys(data);
  let allCalculatedPieces = [];
  keys.forEach((key, ordsetI) => {
    const ordset = data[key];
    const barColumnWidth = Math.max(ordset.width, 1);

    const calculatedPieces = ordset.pieceData.map((piece, i) => {
      const pieceSize = piece.scaledValue;
      const renderValue = renderMode && renderMode(piece.data, i);

      let xPosition = piece.x;
      let yPosition = piece.bottom;
      let finalWidth = barColumnWidth;
      let finalHeight = pieceSize;

      if (!piece.negative) {
        yPosition -= piece.scaledValue;
      }

      if (projection === 'horizontal') {
        yPosition = piece.x;
        xPosition = piece.bottom;
        finalHeight = barColumnWidth;
        finalWidth = pieceSize;
        if (piece.negative) {
          xPosition = piece.bottom - piece.scaledValue;
        }
      }

      let markProps;

      if (projection === 'radial') {
        ({ markProps, xPosition, yPosition } = radialBarFeatureGenerator({
          type,
          ordset,
          adjustedSize,
          piece,
          i
        }));
        finalHeight = undefined;
        finalWidth = undefined;
      } else {
        markProps = {
          markType: 'rect',
          x: xPosition,
          y: yPosition,
          width: Math.max(0, finalWidth),
          height: Math.max(0, finalHeight),
          rx: 0,
          ry: 0
        };
      }

      const eventListeners = eventListenersGenerator(piece, i);

      const xy = {
        x: xPosition,
        y: yPosition,
        middle: barColumnWidth / 2,
        height: finalHeight,
        width: finalWidth
      };

      if (type.icon && projection !== 'radial') {
        type.customMark = iconBarCustomMark({
          type,
          projection,
          finalHeight,
          finalWidth,
          styleFn,
          renderValue,
          classFn
        });
      } else if (type.icon && projection !== 'horizontal') {
        console.error('Icons are currently unsupported in radial charts');
      }

      const renderElementObject = type.customMark ? (
        <g
          key={`piece-${piece.renderKey}`}
          transform={`translate(${xPosition},${yPosition})`}
          role="img"
          tabIndex={-1}
        >
          {type.customMark(
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
          ...eventListeners,
          ...markProps
        }
      );

      const calculatedPiece = {
        o: key,
        xy,
        piece,
        renderElement: renderElementObject
      };
      return calculatedPiece;
    });
    allCalculatedPieces = [...allCalculatedPieces, ...calculatedPieces];
  });

  return allCalculatedPieces;
};

export default layout;
