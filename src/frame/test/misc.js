export function objectifyType(type) {
  if (type instanceof Function || typeof type === 'string') {
    return { type: type };
  } else if (type === undefined) {
    return {};
  }
  return type;
}

export function stringToArrayFn(accessor, defaultAccessor, raw) {
  if (accessor === undefined) {
    return [stringToFn(undefined, defaultAccessor, raw)];
  }
  let arrayOfAccessors = [];
  if (Array.isArray(accessor)) {
    arrayOfAccessors = accessor;
  } else {
    arrayOfAccessors = [accessor];
  }

  return arrayOfAccessors.map(a => stringToFn(a, defaultAccessor, raw));
}

export const stringToFn = (accessor, defaultAccessor, raw) => {
  if (!accessor && defaultAccessor) {
    return defaultAccessor;
  } else if (typeof accessor === 'object') {
    return () => accessor;
  } else if (accessor instanceof Function) {
    return accessor;
  } else if (raw === true) {
    const castAccessor = accessor;
    return () => castAccessor;
  } else if (typeof accessor === 'string') {
    return d => d[accessor];
  }

  return () => undefined;
};

import { axisLines, axisPieces } from '../../axis/axisMarks';
import Axis from '../../axis/Axis';
import React from 'react';
export const baselineGenerator = (orient, size, className) => {
  const offsets = {
    left: { x: 0, y: 0, width: 0, height: size[1] },
    right: { x: size[0], y: 0, width: 0, height: size[1] },
    top: { x: 0, y: 0, width: size[0], height: 0 },
    bottom: { x: 0, y: size[1], width: size[0], height: 0 }
  }

  const orientOffset = offsets[orient]

  return (
      <line
          key="baseline"
          className={`axis-baseline ${className}`}
          stroke="black"
          strokeLinecap="square"
          x1={orientOffset.x}
          x2={orientOffset.x + orientOffset.width}
          y1={orientOffset.y}
          y2={orientOffset.y + orientOffset.height}
      />
  )
}


export const orFrameAxisGenerator = ({
  projection,
  axis,
  adjustedSize,
  size,
  rScale,
  rScaleType,
  pieceType,
  rExtent,
  data,
  maxColumnValues = 1,
  xyData,
  margin
}) => {
  if (!axis) return { axis: undefined, axesTickLines: undefined };
  let generatedAxis, axesTickLines;
  if (projection !== 'radial' && axis) {
    axesTickLines = [];
    const axisPosition = [0, 0];

    generatedAxis = axis.map((d, i) => {
      let axisClassname = d.className || '';
      let tickValues;
      const axisDomain = d.extentOverride ? d.extentOverride : rScale.domain();

      const leftRight = ['left', 'right'];

      const axisScale =
        (leftRight.indexOf(d.orient) === -1 && projection !== 'vertical') ||
        (leftRight.indexOf(d.orient) !== -1 && projection !== 'horizontal')
          ? rScaleType.domain(axisDomain)
          : rScaleType.domain([0, maxColumnValues]);

      const orient = d.orient;
      const axisRange =
        (leftRight.indexOf(d.orient) === -1 && projection !== 'vertical') ||
        (leftRight.indexOf(d.orient) !== -1 && projection !== 'horizontal')
          ? rScale.range()
          : [0, projection === 'vertical' ? adjustedSize[0] : adjustedSize[1]];

      if (orient === 'right') {
        axisScale.range(axisRange.reverse());
        axisClassname += ' right y';
      } else if (orient === 'left') {
        axisClassname += ' left y';
        axisScale.range(axisRange.reverse());
      } else if (orient === 'top') {
        axisClassname += ' top x';
        axisScale.range(axisRange);
      } else if (orient === 'bottom') {
        axisClassname += ' bottom x';
        axisScale.range(axisRange);
      }

      if (d.tickValues && Array.isArray(d.tickValues)) {
        tickValues = d.tickValues;
      } else if (d.tickValues instanceof Function) {
        //otherwise assume a function
        tickValues = d.tickValues(data, size, rScale);
      }

      const axisParts = axisPieces({
        padding: d.padding,
        tickValues,
        scale: axisScale,
        ticks: d.ticks,
        orient,
        size: adjustedSize,
        footer: d.footer,
        tickSize: d.tickSize,
        jaggedBase: d.jaggedBase
      });
      const axisTickLines = axisLines({
        className: d.className,
        axisParts,
        orient,
        baseMarkProps: {},
        tickLineGenerator: d.tickLineGenerator,
        jaggedBase: d.jaggedBase,
        scale: axisScale
      });

      axesTickLines.push(axisTickLines);
      if (d.baseline === 'under') {
        axesTickLines.push(
          baselineGenerator(d.orient, adjustedSize, d.className)
        );
      }

      const marginalSummaryType =
        typeof d.marginalSummaryType === 'string'
          ? { type: d.marginalSummaryType }
          : d.marginalSummaryType;

      return (
        <Axis
          {...d}
          key={d.key || `orframe-axis-${i}`}
          axisParts={axisParts}
          orient={orient}
          size={adjustedSize}
          position={axisPosition}
          baseline={true}
          tickValues={tickValues}
          scale={axisScale}
          className={axisClassname}
          marginalSummaryType={marginalSummaryType}
          margin={margin}
          xyPoints={xyData.map(d => ({
            x: projection === 'vertical' ? 0 : d.value,
            y: projection === 'vertical' ? d.value : 0,
            data: d.data
          }))}
        />
      );
    });
  } else if (projection === 'radial' && axis) {
    const { innerRadius = 0 } = pieceType;

    const ticks = [];
    axis.forEach(axisObj => {
      const {
        tickValues: baseTickValues = rScale.ticks(
          Math.max(2, (adjustedSize[0] / 2 - innerRadius) / 50)
        ),
        label,
        tickFormat = d => d
      } = axisObj;

      const tickScale = rScaleType
        .domain(rExtent)
        .range([innerRadius, adjustedSize[0] / 2]);

      const tickValues =
        baseTickValues instanceof Function
          ? baseTickValues({
              orient: axisObj.orient
            })
          : baseTickValues;
      tickValues.forEach((t, i) => {
        const tickSize = tickScale(t);
        if (!(innerRadius === 0 && t === 0)) {
          let axisLabel;
          let ref = '';
          if (label && i === tickValues.length - 1) {
            const labelSettings =
              typeof label === 'string'
                ? { name: label, locationDistance: 15 }
                : label;
            const { locationDistance = 15 } = labelSettings;
            ref = `${Math.random().toString()} `;
            axisLabel = (
              <g
                className="axis-label radial"
                transform={`translate(0,${locationDistance})`}
              >
                <text textAnchor="middle">
                  <textPath
                    startOffset={tickSize * Math.PI * 0.5}
                    xlinkHref={`#${ref}`}
                  >
                    {label.name}
                  </textPath>
                </text>
              </g>
            );
          }
          ticks.push(
            <g
              key={`orframe-radial-axis-element-${t}`}
              className="axis axis-label axis-tick radial"
              transform={`translate(0,0)`}
            >
              <path
                id={ref}
                d={circlePath(0, 0, tickSize)}
                r={tickSize}
                stroke="gray"
                fill="none"
              />
              <text y={-tickSize + 5} textAnchor="middle">
                {tickFormat(t)}
              </text>
              {axisLabel}
            </g>
          );
        }
        return undefined;
      });
    });

    generatedAxis = [
      <g
        key={axis[0].key || `orframe-radial-axis-container`}
        className="axis-labels"
        transform={`translate(${adjustedSize[0] / 2},${adjustedSize[1] / 2})`}
      >
        {ticks}
      </g>
    ];
  }

  return { axis: generatedAxis, axesTickLines };
};

export function orFrameConnectionRenderer({
  type,
  data,
  renderMode,
  eventListenersGenerator,
  styleFn,
  classFn,
  projection,
  canvasRender,
  canvasDrawing,
  baseMarkProps,
  pieceType
}) {
  if (!type.type) {
    return null;
  }
  const renderedConnectorMarks = [];
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
              if (canvasRender && canvasRender(piece.piece) === true) {
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
                canvasDrawing.push(canvasConnector);
              } else {
                renderedConnectorMarks.push(
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
        if (canvasRender && canvasRender(ringPiece)) {
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
          canvasDrawing.push(canvasRadar);
        } else {
          renderedConnectorMarks.push(
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
  return renderedConnectorMarks;
}
