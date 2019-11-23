import {
  objectifyType,
  stringToArrayFn,
  stringToFn
} from '../../data/dataFunctions';
import createLines from '../../svg/behaviors/createLines';
import createAreas from '../../svg/behaviors/createArea';
import createPoints from '../../svg/behaviors/createPoints';
import React from 'react';

const toRenderPipeline = props => {
  const annotatedSettings = {
    xAccessor: stringToArrayFn(xAccessor, d => d[0]),
    yAccessor: stringToArrayFn(yAccessor, d => d[1]),
    areaDataAccessor: stringToArrayFn(areaDataAccessor, d =>
      Array.isArray(d) ? d : d.coordinates
    ),
    lineDataAccessor: stringToArrayFn(lineDataAccessor, d =>
      Array.isArray(d) ? d : d.coordinates
    ),
    lineType: objectifyType(lineType),
    areaType: objectifyType(areaType),
    lineIDAccessor: stringToFn(lineIDAccessor, l => l.occultLineID),
    areas:
      !areas || (Array.isArray(areas) && areas.length === 0)
        ? undefined
        : !Array.isArray(areas)
        ? [areas]
        : !areaDataAccessor && !areas[0].coordinates
        ? [{ coordinates: areas }]
        : areas,
    lines:
      !lines || (Array.isArray(lines) && lines.length === 0)
        ? undefined
        : !Array.isArray(lines)
        ? [lines]
        : !lineDataAccessor && !lines[0].coordinates
        ? [{ coordinates: lines }]
        : lines,
    title:
      typeof title === 'object' &&
      !React.isValidElement(title) &&
      title !== null
        ? title
        : { title, orient: 'top' },
    xExtent: (baseXExtent && baseXExtent.extent) || baseXExtent,
    yExtent: (baseYExtent && baseYExtent.extent) || baseYExtent
  };

  annotatedSettings.lineType.simpleLine =
    annotatedSettings.lineType.type === 'Plot.js.js' &&
    !annotatedSettings.lineType.y1 &&
    annotatedSettings.lineType.simpleLine !== false;

  if (annotatedSettings.lineType.type === 'area') {
    // $FlowFixMe
    annotatedSettings.lineType.y1 = () => 0;
  }

  const lineAriaLabel =
    annotatedSettings.lineType.type !== undefined &&
    typeof annotatedSettings.lineType.type !== 'function' &&
    naturalLanguageLineType[annotatedSettings.lineType.type];

  const _renderPipeline = {
    lines: {
      accessibleTransform: (data, i) => ({
        ...data[i].data[data[i].data.length - 1],
        type: 'frame-hover'
      }),
      data: projectedLines,
      styleFn: stringToFn(lineStyle, emptyObjectReturnFunction, true),
      classFn: stringToFn(lineClass, emptyStringReturnFunction, true),
      renderMode: stringToFn(lineRenderMode, undefined, true),
      canvasRender: stringToFn(canvasLines, undefined, true),
      customMark: customLineMark,
      lineCurve,
      type: annotatedSettings.lineType,
      defined: defined,
      renderKeyFn: annotatedSettings.renderKeyFn,
      ariaLabel: lineAriaLabel,
      axesData: userAxes,
      behavior: createLines
    },
    areas: {
      accessibleTransform: (data, i) => ({ ...data[i], type: 'frame-hover' }),
      data: projectedSummaries,
      styleFn: stringToFn(summaryStyle, emptyObjectReturnFunction, true),
      classFn: stringToFn(summaryClass, emptyStringReturnFunction, true),
      renderMode: stringToFn(summaryRenderMode, undefined, true),
      canvasRender: stringToFn(canvasSummary, undefined, true),
      customMark: customSummaryMarks,
      type: null,
      renderKeyFn: stringToFn(renderKey, (d, i) => `area-${i}`, true),
      behavior: createAreas
    },
    points: {
      accessibleTransform: (data, i) => ({
        type: 'frame-hover',
        ...(data[i].data || data[i])
      }),
      data: projectedPoints,
      styleFn: stringToFn(pointStyle, emptyObjectReturnFunction, true),
      classFn: stringToFn(pointClass, emptyStringReturnFunction, true),
      renderMode: stringToFn(pointRenderMode, undefined, true),
      canvasRender: stringToFn(canvasPoints, undefined, true),
      customMark: customPointMark,
      renderKeyFn: stringToFn(renderKey, (d, i) => `point-${i}`, true),
      behavior: createPoints
    }
  };
};

export default toRenderPipeline;
