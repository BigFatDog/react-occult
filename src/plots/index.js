import React from 'react';
import {
    object,
    func,
    array,
    oneOfType,
    bool,
    number,
    string,
    node
} from 'prop-types';
import getExtent from '../frameUtils/getExtent';
import { stringToFn } from '../archive/data/dataFunctions';
import toRenderedAreas from './toRenderedAreas';
import toRenderedPoints from './toRenderedPoints';
import toRenderedLines from './toRenderedLines';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const Plot = props => {
    const {
        projection,
        baseProps
    } = props;


    // extents
    const { finalXExtent, finalYExtent } = getExtent(baseProps);

    // data projection
    const { projectedAreas, projectedPoints, projectedLines } = projection({...baseProps, finalXExtent, finalYExtent});

    const { svgPipeline: lineSvg, canvasPipeline: lineCanvas } = toRenderedLines({
        useCanvas,
        xScale,
        yScale,
        styleFn: stringToFn(lineStyle, emptyObjectReturnFunction, true),
        classFn: stringToFn(lineClass, emptyStringReturnFunction, true),
        renderFn: stringToFn(lineRenderMode, undefined, true),
        customMarks: lineCustomMarks,
        data: projectedLines
    });

    const { svgPipeline: areaSvg, canvasPipeline: areaCanvas } = toRenderedAreas({
        useCanvas,
        xScale,
        yScale,
        styleFn: stringToFn(areaStyle, emptyObjectReturnFunction, true),
        classFn: stringToFn(areaClass, emptyStringReturnFunction, true),
        renderFn: stringToFn(areaRenderMode, undefined, true),
        customMarks: areaCustomMarks,
        data: projectedAreas
    });

    const {
        svgPipeline: pointsSvg,
        canvasPipeline: pointsCanvas
    } = toRenderedPoints({
        useCanvas,
        xScale,
        yScale,
        styleFn: stringToFn(pointStyle, emptyObjectReturnFunction, true),
        classFn: stringToFn(pointClass, emptyStringReturnFunction, true),
        renderFn: stringToFn(pointRenderMode, undefined, true),
        customMarks: pointCustomMarks,
        data: projectedPoints
    });

    const svgPipeline = [...lineSvg, areaSvg, ...pointsSvg];
    const canvasPipeline = [...lineCanvas, areaCanvas, ...pointsCanvas];
    return svgPipeline;
};

Plot.propTypes = {
    data: array,
    simpleLine: bool,
    lineType: string,
    lineStyle: oneOfType([object, func]),
    lineClass: oneOfType([object, func]),
    lineRenderMode: oneOfType([object, func]),
    lineCustomMarks: oneOfType([node, func]),
    pointStyle: oneOfType([object, func]),
    pointClass: oneOfType([object, func]),
    pointCustomMarks: oneOfType([node, func]),
    pointRenderMode: oneOfType([object, func]),
    useCanvas: bool,
    showPoints: bool,
    xExtent: array,
    yExtent: array,
    xAccessor: oneOfType([string, func]),
    yAccessor: oneOfType([string, func]),
    sAccessor: oneOfType([string, func])
};

Plot.defaultProps = {
    data: [],
    simpleLine: false,
    lineType: 'line',
    lineStyle: {
        fill: 'none',
        stroke: 'red',
        strokeWidth: 0.5
    },
    showPoints: true,
    pointStyle: {
        r: 2,
        fill: 'red'
    }
};

export default Line;
