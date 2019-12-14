export function clusterBarLayout({
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
}) {
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
        ({ xPosition, yPosition, markProps, xy } = radialBarFeatureGenerator({
          type,
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
      } else if (type.icon && projection === 'radial') {
        console.error('Icons are currently unsupported on radial charts');
      }
      const renderElementObject = type.customMark ? (
        <g
          key={`piece-${piece.renderKey}`}
          transform={
            translate ? translate : `translate(${xPosition},${yPosition})`
          }
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
}

export function barLayout({
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
}) {
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
}

export function timelineLayout({
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
}) {
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
        ({ markProps } = radialBarFeatureGenerator({
          piece,
          type,
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

      const renderElementObject = type.customMark ? (
        <g
          key={`piece-${piece.renderKey}`}
          transform={`translate(${xPosition},${yPosition + height})`}
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
}

export function pointLayout({
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
}) {
  const circleRadius = type.r || 3;
  let allCalculatedPieces = [];
  const keys = Object.keys(data);
  keys.forEach((key, ordsetI) => {
    const ordset = data[key];

    const calculatedPieces = [];

    ordset.pieceData.forEach((piece, i) => {
      const renderValue = renderMode && renderMode(piece.data, i);

      let xPosition = ordset.middle;
      let yPosition = piece.scaledVerticalValue;

      if (projection === 'horizontal') {
        yPosition = ordset.middle;
        xPosition = piece.scaledValue;
      } else if (projection === 'radial') {
        const angle = ordset.pct_middle;

        const rPosition = piece.scaledValue / 2;
        const baseCentroid = pointOnArcAtAngle(
          [adjustedSize[0] / 2, adjustedSize[1] / 2],
          angle,
          rPosition
        );
        xPosition = baseCentroid[0];
        yPosition = baseCentroid[1];
      }

      //Only return the actual piece if you're rendering points, otherwise you just needed to iterate and calculate the points for the contour summary type
      const actualCircleRadius =
        typeof circleRadius === 'function'
          ? circleRadius(piece, i)
          : circleRadius;
      const eventListeners = eventListenersGenerator(piece, i);

      const renderElementObject = type.customMark ? (
        <g
          key={`piece-${piece.renderKey}`}
          transform={`translate(${xPosition},${yPosition})`}
        >
          {type.customMark(
            { ...piece.data, ...piece, x: xPosition, y: yPosition },
            i,
            {
              r: circleRadius,
              x: xPosition,
              y: yPosition,
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
          markType: 'rect',
          renderMode: renderValue,
          key: `piece-${piece.renderKey}`,
          height: actualCircleRadius * 2,
          width: actualCircleRadius * 2,
          x: xPosition - actualCircleRadius,
          y: yPosition - actualCircleRadius,
          rx: actualCircleRadius,
          ry: actualCircleRadius,
          style: styleFn({ ...piece, ...piece.data }, ordsetI),
          ...eventListeners
        }
      );

      const calculatedPiece = {
        o: key,
        xy: {
          x: xPosition,
          y: yPosition
        },
        piece,
        renderElement: renderElementObject
      };

      calculatedPieces.push(calculatedPiece);
    });
    allCalculatedPieces = [...allCalculatedPieces, ...calculatedPieces];
  });

  return allCalculatedPieces;
}

export function swarmLayout({
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
}) {
  let allCalculatedPieces = [];
  const iterations = type.iterations || 120;

  const columnKeys = Object.keys(data);

  columnKeys.forEach((key, ordsetI) => {
    const oColumn = data[key];
    const anglePiece = 1 / columnKeys.length;
    const oData = oColumn.pieceData;
    const adjustedColumnWidth = oColumn.width;

    const circleRadius =
      type.r ||
      Math.max(2, Math.min(5, (4 * adjustedColumnWidth) / oData.length));

    const simulation = forceSimulation(oData)
      .force('y', forceY(d => d.scaledValue).strength(type.strength || 2))
      .force('x', forceX(oColumn.middle))
      .force('collide', forceCollide(circleRadius))
      .stop();

    if (projection === 'vertical') {
      simulation.force(
        'y',
        forceY(d => d.scaledVerticalValue).strength(type.strength || 2)
      );
    }

    for (let i = 0; i < iterations; ++i) simulation.tick();

    const calculatedPieces = oData.map((piece, i) => {
      const renderValue = renderMode && renderMode(piece.data, i);

      let xPosition = piece.x;
      let yPosition = piece.y;

      if (projection === 'horizontal') {
        yPosition = piece.x;
        xPosition = piece.y;
      } else if (projection === 'radial') {
        const angle = oColumn.pct_middle;
        xPosition =
          ((piece.x - oColumn.middle) / adjustedColumnWidth) * anglePiece;
        const rPosition = piece.scaledValue / 2;
        const xAngle = angle + xPosition;
        const baseCentroid = pointOnArcAtAngle(
          [adjustedSize[0] / 2, adjustedSize[1] / 2],
          xAngle,
          rPosition
        );
        xPosition = baseCentroid[0];
        yPosition = baseCentroid[1];
      }

      const actualCircleRadius =
        typeof circleRadius === 'function'
          ? circleRadius(piece, i)
          : circleRadius;

      const eventListeners = eventListenersGenerator(piece, i);

      const renderElementObject = type.customMark ? (
        <g
          key={`piece-${piece.renderKey}`}
          transform={`translate(${xPosition},${yPosition})`}
        >
          {type.customMark(
            { ...piece.data, ...piece, x: xPosition, y: yPosition },
            i,
            {
              x: xPosition,
              y: yPosition,
              r: circleRadius,
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
          markType: 'rect',
          renderMode: renderValue,
          key: `piece-${piece.renderKey}`,
          height: actualCircleRadius * 2,
          width: actualCircleRadius * 2,
          x: xPosition - actualCircleRadius,
          y: yPosition - actualCircleRadius,
          rx: actualCircleRadius,
          ry: actualCircleRadius,
          style: styleFn({ ...piece, ...piece.data }, ordsetI),
          ...eventListeners
        }
      );

      const calculatedPiece = {
        o: key,
        xy: {
          x: xPosition,
          y: yPosition
        },
        piece,
        renderElement: renderElementObject
      };

      return calculatedPiece;
    });
    allCalculatedPieces = [...allCalculatedPieces, ...calculatedPieces];
  });

  return allCalculatedPieces;
}
