import * as React from "react";
import {pointOnArcAtAngle} from "./util";

const  pointLayout = ({
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

export default pointLayout;