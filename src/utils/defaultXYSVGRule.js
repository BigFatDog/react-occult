import { desaturationLayer } from '../annotationRules/baseRules';
import {
  svgHighlight,
  svgXYAnnotation,
  basicReactAnnotation,
  svgEncloseAnnotation,
  svgRectEncloseAnnotation,
  svgHullEncloseAnnotation,
  svgXAnnotation,
  svgYAnnotation,
  svgBoundsAnnotation,
  svgLineAnnotation,
  svgAreaAnnotation,
  svgHorizontalPointsAnnotation,
  svgVerticalPointsAnnotation
} from '../annotationRules/xyframeRules';
import { relativeY, relativeX, findPointByID } from '../data/lineDrawing';
import {
  projectedX,
  projectedY,
  projectedYMiddle,
  projectedXMiddle
} from '../constants/coordinateNames';

const defaultXYSVGRule = ({
  props,
  annotatedSettings,
  renderPipeline,
  adjustedPosition,
  adjustedSize
}) => ({ d: baseD, i, annotationLayer, lines, summaries, points }) => {
  const { xScale, yScale, showLinePoints } = props;
  const { xAccessor, yAccessor } = annotatedSettings;
  const xyFrameRender = renderPipeline;

  let screenCoordinates = [];
  const idAccessor = annotatedSettings.lineIDAccessor;

  if (baseD.type === 'highlight') {
    return svgHighlight({
      d: baseD,
      i,
      idAccessor,
      lines,
      summaries,
      points,
      xScale,
      yScale,
      xyFrameRender
    });
  }

  const d = baseD.coordinates
    ? baseD
    : findPointByID({
        point: baseD,
        idAccessor,
        lines,
        xScale,
        xAccessor
      });

  if (!d) return null;

  if (!d.coordinates && !d.bounds) {
    screenCoordinates = [
      relativeX({
        point: d,
        xAccessor,
        xScale
      }) || 0,
      relativeY({
        point: d,
        yAccessor,
        yScale,
        showLinePoints
      }) || 0
    ];
  } else if (!d.bounds) {
    screenCoordinates = d.coordinates.reduce((coords, p) => {
      const xCoordinate = relativeX({
        point: p,
        projectedXMiddle,
        projectedX,
        xAccessor,
        xScale
      });

      const yCoordinate = relativeY({
        point: p,
        projectedYMiddle,
        projectedY,
        yAccessor,
        yScale
      });
      if (Array.isArray(yCoordinate)) {
        return [
          ...coords,
          [xCoordinate, Math.min(...yCoordinate)],
          [xCoordinate, Math.max(...yCoordinate)]
        ];
      } else if (Array.isArray(xCoordinate)) {
        return [
          ...coords,
          [Math.min(...xCoordinate), yCoordinate],
          [Math.max(...xCoordinate), yCoordinate]
        ];
      } else {
        return [...coords, [xCoordinate, yCoordinate]];
      }
    }, []);
  }

  const { voronoiHover } = annotationLayer;

  const customSVG =
    props.svgAnnotationRules &&
    props.svgAnnotationRules({
      d,
      i,
      screenCoordinates,
      xScale,
      yScale,
      xAccessor,
      yAccessor,
      summaries,
      points,
      lines,
      voronoiHover,
      adjustedPosition,
      adjustedSize,
      annotationLayer
    });
  if (props.svgAnnotationRules !== undefined && customSVG !== null) {
    return customSVG;
  } else if (d.type === 'desaturation-layer') {
    return desaturationLayer({
      style: d.style instanceof Function ? d.style(d, i) : d.style,
      size: adjustedSize,
      i,
      key: d.key
    });
  } else if (d.type === 'xy' || d.type === 'frame-hover') {
    return svgXYAnnotation({ d, i, screenCoordinates });
  } else if (d.type === 'react-annotation' || typeof d.type === 'function') {
    return basicReactAnnotation({ d, screenCoordinates, i });
  } else if (d.type === 'enclose') {
    return svgEncloseAnnotation({ d, screenCoordinates, i });
  } else if (d.type === 'enclose-rect') {
    return svgRectEncloseAnnotation({ d, screenCoordinates, i });
  } else if (d.type === 'enclose-hull') {
    return svgHullEncloseAnnotation({ d, screenCoordinates, i });
  } else if (d.type === 'x') {
    return svgXAnnotation({
      d,
      screenCoordinates,
      i,
      adjustedSize
    });
  } else if (d.type === 'y') {
    return svgYAnnotation({
      d,
      screenCoordinates,
      i,
      adjustedSize,
      adjustedPosition
    });
  } else if (d.type === 'bounds') {
    return svgBoundsAnnotation({
      d,
      i,
      adjustedSize,
      xAccessor,
      yAccessor,
      xScale,
      yScale
    });
  } else if (d.type === 'line') {
    return svgLineAnnotation({ d, i, screenCoordinates });
  } else if (d.type === 'area') {
    return svgAreaAnnotation({
      d,
      i,
      xScale,
      xAccessor,
      yScale,
      yAccessor,
      annotationLayer
    });
  } else if (d.type === 'horizontal-points') {
    return svgHorizontalPointsAnnotation({
      d,
      lines: lines.data,
      points: points.data,
      xScale,
      yScale,
      pointStyle: points.styleFn
    });
  } else if (d.type === 'vertical-points') {
    return svgVerticalPointsAnnotation({
      d,
      lines: lines.data,
      points: points.data,
      xScale,
      yScale,
      pointStyle: points.styleFn
    });
  }
  return null;
};

export default defaultXYSVGRule;
