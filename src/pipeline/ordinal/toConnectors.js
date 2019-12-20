import React from 'react';
import { select } from 'd3-selection';

const eventListenersGenerator = () => ({});

const drawAreaConnector = ({
  x1,
  x2,
  y1,
  y2,
  sizeX1,
  sizeY1,
  sizeX2,
  sizeY2
}) => {
  return `M${x1},${y1}L${x2},${y2}L${x2 + sizeX2},${y2 + sizeY2}L${x1 +
    sizeX1},${y1 + sizeY1}Z`;
};

const toConnectors = ({
  type,
  data,
  renderMode,
  styleFn,
  classFn,
  projection,
  useCanvas,
  baseMarkProps,
  pieceType
}) => {
  const svgPipeline = [];
  const canvasPipeline = [];

  if (!type.type) {
    return {
      svgPipeline,
      canvasPipeline
    };
  }

  const radarHash = new Map();

  if (typeof type.type === 'function') {
    const connectionRule = type.type;
    const keys = Object.keys(data);

    keys.forEach((key, pieceArrayI) => {
      const pieceArray = data[key];
      const nextColumn = data[keys[pieceArrayI + 1]];
      if (nextColumn) {
        const matchArray = nextColumn.map((d, i) =>
          connectionRule({ ...d.piece, ...d.piece.data }, i)
        );
        pieceArray.forEach((piece, pieceI) => {
          const thisConnectionPiece = connectionRule(
            { ...piece.piece, ...piece.piece.data },
            pieceI
          );
          const targetMatch = connectionRule(
            { ...piece.piece, ...piece.piece.data },
            pieceI
          );

          const matchingPieceIndex =
            targetMatch !== undefined &&
            targetMatch !== false &&
            matchArray.indexOf(targetMatch);
          if (
            thisConnectionPiece !== undefined &&
            thisConnectionPiece !== null &&
            matchingPieceIndex !== false &&
            matchingPieceIndex !== -1
          ) {
            const matchingPiece = nextColumn[matchingPieceIndex];
            let markD;
            if (projection === 'radial' && pieceType.type === 'point') {
              if (!radarHash.get(piece)) {
                radarHash.set(piece, [piece]);
              }
              const thisRadar = radarHash.get(piece);
              if (thisRadar) {
                thisRadar.push(matchingPiece);
                radarHash.set(matchingPiece, thisRadar);
                radarHash.delete(piece);
              }
            } else {
              const { xy } = piece;
              const { xy: mxy } = matchingPiece;
              const { x, y, height = 1, width = 1 } = xy;
              const {
                x: mx,
                y: my,
                height: mheight = 1,
                width: mwidth = 1
              } = mxy;
              if (projection === 'vertical') {
                markD = drawAreaConnector({
                  x1: x + width,
                  x2: mx,
                  y1: y,
                  y2: my,
                  sizeX1: 0,
                  sizeX2: 0,
                  sizeY1: height,
                  sizeY2: mheight
                });
              } else if (projection === 'horizontal') {
                markD = drawAreaConnector({
                  x1: x,
                  x2: mx,
                  y1: y + height,
                  y2: my,
                  sizeX1: width,
                  sizeX2: mwidth,
                  sizeY1: 0,
                  sizeY2: 0
                });
              } else if (projection === 'radial') {
                markD = drawAreaConnector({
                  x1: x,
                  x2: mx,
                  y1: y + height,
                  y2: my,
                  sizeX1: width,
                  sizeX2: mwidth,
                  sizeY1: 0,
                  sizeY2: 0
                });
              }
              const renderValue = renderMode && renderMode(piece.piece, pieceI);
              const source = { ...piece.piece.data, ...piece.piece.data };
              const target = {
                ...matchingPiece.piece,
                ...matchingPiece.piece.data
              };
              const calculatedStyle = styleFn({
                source,
                target
              });

              const eventListeners = eventListenersGenerator(
                { source, target },
                pieceI
              );
              if (useCanvas === true) {
                const canvasConnector = {
                  baseClass: 'xyframe-line',
                  tx: 0,
                  ty: 0,
                  d: {
                    source,
                    target
                  },
                  markProps: { d: markD, markType: 'path' },
                  styleFn: styleFn,
                  renderFn: renderMode,
                  classFn
                };
                canvasPipeline.push(canvasConnector);
              } else {
                svgPipeline.push(
                  <Mark
                    {...baseMarkProps}
                    {...eventListeners}
                    renderMode={renderValue}
                    markType="path"
                    d={markD}
                    className={classFn ? classFn(piece.piece.data, pieceI) : ''}
                    key={`connector${piece.piece.renderKey}`}
                    style={calculatedStyle}
                  />
                );
              }
            }
          }
        });
      }
    });

    if (radarHash.size > 0) {
      for (const ring of radarHash.values()) {
        const ringPiece = { ...ring[0].piece, ...ring[0].piece.data };
        const markD = `M${ring.map(d => `${d.xy.x},${d.xy.y}`).join('L')}Z`;
        if (useCanvas === true) {
          const canvasRadar = {
            baseClass: 'ordinal-radar',
            tx: 0,
            ty: 0,
            d: {
              source: ringPiece
            },
            markProps: { d: markD, markType: 'path' },
            styleFn: styleFn,
            renderFn: renderMode,
            classFn
          };
          canvasPipeline.push(canvasRadar);
        } else {
          svgPipeline.push(
            <Mark
              {...baseMarkProps}
              renderMode={renderMode && renderMode(ringPiece)}
              markType="path"
              d={markD}
              className={classFn ? classFn(ringPiece) : ''}
              key={`ordinal-ring-${ringPiece.renderKey}`}
              style={styleFn({
                source: ringPiece
              })}
            />
          );
        }
      }
    }
  } else if (type.type) {
    console.error(
      `Invalid connectorType - Must be a function that takes a data point and determines if it is connected to a data point in the next column`
    );
  }
  return {
    svgPipeline,
    canvasPipeline
  };
};

export default toConnectors;
