import findFirstAccessorValue from './findFirstAccessorValue';

import {
  svgORRule,
  svgHighlightRule,
  svgOrdinalLine,
  basicReactAnnotationRule,
  svgEncloseRule,
  svgRectEncloseRule,
  svgRRule,
  svgCategoryRule,
  htmlFrameHoverRule,
  htmlColumnHoverRule,
  screenProject,
  findIDPiece,
  getColumnScreenCoordinates
} from './ordinalAnnotations';

import DesaturationLayer from './widgets/DesaturationLayer';

const generateOrdinalSVGAnnotations = ({ frameProps, frameData }) => ({
  d,
  i,
  voronoiHover
}) => {
  const { projection } = frameProps;

  const {
    adjustedPosition,
    adjustedSize,
    oAccessor,
    rAccessor,
    oScale,
    rScale,
    projectedColumns,
    orFrameRender,
    pieceIDAccessor,
    rScaleType
  } = frameData;

  let screenCoordinates = [0, 0];

  //TODO: Support radial??
  if (d.coordinates || (d.type === 'enclose' && d.neighbors)) {
    screenCoordinates = (d.coordinates || d.neighbors).map(p => {
      const pO = findFirstAccessorValue(oAccessor, p) || p.column;
      const oColumn = projectedColumns[pO];
      const idPiece = findIDPiece(pieceIDAccessor, oColumn, p);

      return screenProject({
        p,
        adjustedSize,
        rScale,
        rAccessor,
        idPiece,
        projection,
        oColumn,
        rScaleType
      });
    });
  } else {
    const pO = findFirstAccessorValue(oAccessor, d) || d.column;
    const oColumn = projectedColumns[pO];
    const idPiece = findIDPiece(pieceIDAccessor, oColumn, d);

    screenCoordinates = screenProject({
      p: d,
      adjustedSize,
      rScale,
      rAccessor,
      idPiece,
      projection,
      oColumn,
      rScaleType
    });
  }

  if (d.type === 'desaturation-layer') {
    return DesaturationLayer({
      style: d.style instanceof Function ? d.style(d, i) : d.style,
      size: adjustedSize,
      i,
      key: d.key
    });
  } else if (d.type === 'ordinal-line') {
    return svgOrdinalLine({ d, screenCoordinates, voronoiHover });
  } else if (d.type === 'or') {
    return svgORRule({ d, i, screenCoordinates, projection });
  } else if (d.type === 'highlight') {
    return svgHighlightRule({
      d,
      pieceIDAccessor,
      orFrameRender,
      oAccessor
    });
  } else if (d.type === 'react-annotation' || typeof d.type === 'function') {
    return basicReactAnnotationRule({ d, i, screenCoordinates });
  } else if (d.type === 'enclose') {
    return svgEncloseRule({ d, i, screenCoordinates });
  } else if (d.type === 'enclose-rect') {
    return svgRectEncloseRule({ d, screenCoordinates, i });
  } else if (d.type === 'r') {
    return svgRRule({
      d,
      i,
      screenCoordinates,
      rScale,
      rAccessor,
      projection,
      adjustedSize,
      adjustedPosition
    });
  } else if (d.type === 'category') {
    return svgCategoryRule({
      projection,
      d,
      i,
      categories: frameData.projectedColumns,
      adjustedSize
    });
  }
  return null;
};

const generateOrdinalHTMLAnnotations = ({ frameProps, frameData }) => ({
  d,
  i,
  voronoiHover
}) => {
  const {
    adjustedPosition,
    adjustedSize,
    oAccessor,
    rAccessor,
    oScale,
    rScale,
    projectedColumns,
    summaryType,
    type,
    pieceIDAccessor,
    rScaleType
  } = frameData;
  const {
    tooltipContent,
    optimizeCustomTooltipPosition,
    projection,
    size,
    useSpans
  } = frameProps;
  let screenCoordinates = [0, 0];

  if (d.coordinates || (d.type === 'enclose' && d.neighbors)) {
    screenCoordinates = (d.coordinates || d.neighbors).map(p => {
      const pO = findFirstAccessorValue(oAccessor, p) || p.column;
      const oColumn = projectedColumns[pO];
      const idPiece = findIDPiece(pieceIDAccessor, oColumn, p);

      return screenProject({
        p,
        adjustedSize,
        rScale,
        rAccessor,
        idPiece,
        projection,
        oColumn,
        rScaleType
      });
    });
  } else if (d.type === 'column-hover') {
    const {
      coordinates: [xPosition, yPosition]
    } = getColumnScreenCoordinates({
      d,
      projectedColumns,
      oAccessor,
      summaryType,
      type,
      projection,
      adjustedPosition,
      adjustedSize
    });
    screenCoordinates = [xPosition, yPosition];
  } else {
    const pO = findFirstAccessorValue(oAccessor, d) || d.column;
    const oColumn = projectedColumns[pO];
    const idPiece = findIDPiece(pieceIDAccessor, oColumn, d);

    screenCoordinates = screenProject({
      p: d,
      adjustedSize,
      rScale,
      rAccessor,
      idPiece,
      projection,
      oColumn,
      rScaleType
    });
  }

  if (d.type === 'frame-hover') {
    return htmlFrameHoverRule({
      d,
      i,
      rAccessor,
      oAccessor,
      projection,
      tooltipContent,
      optimizeCustomTooltipPosition,
      projectedColumns,
      useSpans,
      pieceIDAccessor,
      adjustedSize,
      rScale,
      type,
      rScaleType
    });
  } else if (d.type === 'column-hover') {
    return htmlColumnHoverRule({
      d,
      i,
      summaryType,
      oAccessor,
      projectedColumns,
      type,
      adjustedPosition,
      adjustedSize,
      projection,
      tooltipContent,
      optimizeCustomTooltipPosition,
      useSpans
    });
  }
  return null;
};

export { generateOrdinalSVGAnnotations, generateOrdinalHTMLAnnotations };
