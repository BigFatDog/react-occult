import {extent} from "d3-array";
import {Mark} from "semiotic-mark";
import * as React from "react";

const SvgAreaAnnotation = ({
                                      d,
                                      i,
                                      xScale,
                                      xAccessor,
                                      yScale,
                                      yAccessor,
                                      annotationLayer
                                  }) => {
    const mappedCoordinates = `M${d.coordinates
        .map(p => [
            xScale(findFirstAccessorValue(xAccessor, p)),
            yScale(findFirstAccessorValue(yAccessor, p))
        ])
        .join('L')}Z`;
    const xBounds = extent(
        d.coordinates.map(p => xScale(findFirstAccessorValue(xAccessor, p)))
    );
    const yBounds = extent(
        d.coordinates.map(p => yScale(findFirstAccessorValue(yAccessor, p)))
    );
    const xCenter = (xBounds[0] + xBounds[1]) / 2;
    const yCenter = (yBounds[0] + yBounds[1]) / 2;

    const laLine = (
        <Mark
            key={`${d.label}-annotation-area-${i}`}
            markType="path"
            d={mappedCoordinates}
            className={`annotation annotation-area ${d.className || ''} `}
        />
    );

    const laLabel = (
        <Mark
            markType="text"
            key={`${d.label}-annotationtext-${i}`}
            forceUpdate={true}
            x={xCenter}
            y={yCenter}
            transform={`translate(${annotationLayer.position})`}
            className={`annotation annotation-area-label ${d.className || ''} `}
            style={{ textAnchor: 'middle' }}
        >
            {d.label}
        </Mark>
    );

    return [laLine, laLabel];
};

export default SvgAreaAnnotation;