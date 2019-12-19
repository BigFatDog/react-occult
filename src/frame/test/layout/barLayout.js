import * as React from "react";
import pathBounds from "svg-path-bounding-box";
import {Mark} from "semiotic-mark";
import radialBarFeatureGenerator from './radialBarFeatureGenerator';

const iconBarCustomMark = ({
                               type,
                               projection,
                               finalHeight,
                               finalWidth,
                               styleFn,
                               renderValue,
                               classFn
                           }) => (piece, i, xy) => {
    const iconD =
        typeof type.icon === 'string' ? type.icon : type.icon(piece.data, i);
    const { iconPadding = 1, resize = 'auto' } = type;

    const iconBounds = pathBounds(iconD);
    const iconTranslate = [
        0 - iconBounds.x1 + iconPadding,
        0 - iconBounds.y1 + iconPadding
    ];
    iconBounds.height += iconPadding * 2;
    iconBounds.width += iconPadding * 2;

    const icons = [];

    let stackedIconSize = iconBounds.height;
    let stackedIconNumber = 1;
    let iconScale = 1;
    const spaceToUse = projection === 'horizontal' ? finalHeight : finalWidth;
    const sizeToFit =
        projection === 'horizontal' ? iconBounds.height : iconBounds.width;
    const sizeToPad =
        projection === 'horizontal' ? iconBounds.width : iconBounds.height;
    const spaceToFill = projection === 'horizontal' ? xy.width : xy.height;
    const spaceToStackFill = projection === 'horizontal' ? xy.height : xy.width;
    if (resize === 'auto') {
        stackedIconSize = spaceToUse / sizeToFit;
        if (stackedIconSize < 1) {
            iconScale = stackedIconSize;
        } else {
            stackedIconNumber = Math.floor(stackedIconSize);
            iconScale = 1 + (stackedIconSize - stackedIconNumber) / stackedIconNumber;
        }
    } else if (resize === 'fixed') {
        iconScale = spaceToUse / sizeToFit;
    }

    //  const finalIconWidth = iconBounds.width * iconScale;
    const finalIconHeight = iconBounds.height * iconScale;

    const spaceToStep = sizeToPad * iconScale;
    const spaceToStackStep = sizeToFit * iconScale;

    iconTranslate[0] = iconTranslate[0] * iconScale;
    iconTranslate[1] = iconTranslate[1] * iconScale;

    const randoClipID = `iso-clip-${i}-${Math.random()}`;
    const clipPath = `url(#${randoClipID})`;
    if (xy.width > 0) {
        icons.push(
            <clipPath key={randoClipID} id={randoClipID}>
                <rect x={0} y={0} width={xy.width} height={xy.height} />
            </clipPath>
        );
        const iconPieces = [];
        const stepStart =
            projection === 'horizontal' ? 0 : xy.height - finalIconHeight;
        const stepper = projection === 'horizontal' ? spaceToStep : -spaceToStep;
        const stepTest =
            projection === 'horizontal'
                ? (step, spaceToFillValue) => step < spaceToFillValue
                : (step, spaceToFillValue, stepperValue) => step > 0 + stepperValue;

        for (
            let step = stepStart;
            stepTest(step, spaceToFill, stepper);
            step += stepper
        ) {
            for (let stack = 0; stack < spaceToStackFill; stack += spaceToStackStep) {
                const stepX = projection === 'horizontal' ? step : stack;
                const stepY = projection === 'horizontal' ? stack : step;
                const paddedX = stepX + iconTranslate[0];
                const paddedY = stepY + iconTranslate[1];
                iconPieces.push(
                    <Mark
                        forceUpdate={true}
                        markType="path"
                        key={`icon-${step}-${stack}`}
                        transform={`translate(${paddedX},${paddedY}) scale(${iconScale})`}
                        vectorEffect={'non-scaling-stroke'}
                        d={iconD}
                        style={styleFn({ ...piece, ...piece.data }, i)}
                        renderMode={renderValue}
                        className={classFn({ ...piece, ...piece.data }, i)}
                    />
                );
            }
        }
        icons.push(
            <g key={`clipped-region-${i}`} clipPath={clipPath}>
                {iconPieces}
            </g>
        );
    }
    return icons;
};


const  barLayout = ({
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
}

export default barLayout;