import {
  line,
  area,
  curveStep,
  curveStepBefore,
  curveStepAfter,
  curveCardinal,
  curveBasis,
  curveLinear,
  curveCatmullRom,
  curveMonotoneX,
  curveMonotoneY,
  curveNatural
} from 'd3-shape';

import clonedAppliedElement from './clonedAppliedElement';

export const curveHash = {
  step: curveStep,
  stepbefore: curveStepBefore,
  stepafter: curveStepAfter,
  cardinal: curveCardinal,
  basis: curveBasis,
  linear: curveLinear,
  catmullrom: curveCatmullRom,
  monotone: curveMonotoneY,
  monotonex: curveMonotoneX,
  monotoney: curveMonotoneY,
  natural: curveNatural
};

export function lineGeneratorDecorator({
  generator,
  projectedCoordinateNames,
  defined,
  xScale,
  yScale,
  interpolator,
  simpleLine
}) {
  const { x, y, yTop, yBottom } = projectedCoordinateNames;

  generator.x(d => xScale(d[x])).curve(interpolator);

  if (simpleLine) {
    generator.y(d => yScale(d[y]));
  } else {
    generator.y0(d => yScale(d[yBottom])).y1(d => yScale(d[yTop]));
  }

  if (defined) {
    generator.defined((p, q) => defined(p, q));
  } else {
    generator.defined(p => !p._xyFrameUndefined);
  }
}

const createLines = ({
  xScale,
  yScale,
  canvasDrawing,
  data,
  projectedCoordinateNames,
  customMark,
  canvasRender,
  styleFn,
  classFn,
  renderMode,
  renderKeyFn,
  type,
  defined,
  baseMarkProps,
  ariaLabel,
  axesData = []
}) => {
  const xAxis = axesData.find(d => d.orient === 'bottom' || d.orient === 'top');
  const yAxis = axesData.find(d => d.orient === 'left' || d.orient === 'right');

  const xAxisFormatter = (xAxis && xAxis.tickFormat) || (d => d);
  const yAxisFormatter = (yAxis && yAxis.tickFormat) || (d => d);

  const customLine = typeof type === 'object' ? type : { type };

  const interpolator =
    typeof customLine.interpolator === 'string'
      ? curveHash[customLine.interpolator]
      : customLine.interpolator || curveLinear;

  const lineGenerator = customLine.simpleLine ? line() : area();

  lineGeneratorDecorator({
    projectedCoordinateNames,
    defined,
    interpolator,
    generator: lineGenerator,
    xScale,
    yScale,
    simpleLine: customLine.simpleLine
  });

  const dynamicLineGenerator =
    (interpolator.dynamicInterpolator &&
      ((d, i) => {
        const dynLineGenerator = area();

        lineGeneratorDecorator({
          projectedCoordinateNames,
          defined,
          interpolator: interpolator.dynamicInterpolator(d, i),
          generator: dynLineGenerator,
          xScale,
          yScale,
          simpleLine: customLine.simpleLine
        });
        return dynLineGenerator;
      })) ||
    (() => lineGenerator);

  const mappedLines = [];
  data.forEach((d, i) => {
    if (customMark && typeof customMark === 'function') {
      //shim to make customLineMark work until Semiotic 2
      const compatibleData = {
        ...d,
        data: d.data.map(p => ({ ...p.data, ...p }))
      };
      mappedLines.push(
        customMark({ d: compatibleData, i, xScale, yScale, canvasDrawing })
      );
    } else {
      const builtInDisplayProps = {};
      if (customLine.simpleLine) {
        builtInDisplayProps.fill = 'none';
        builtInDisplayProps.stroke = 'black';
      }

      let pathString = dynamicLineGenerator(d, i)(
        d.data.map(p => Object.assign({}, p.data, p))
      );

      if (
        pathString &&
        (!customLine.interpolator || interpolator === curveLinear)
      ) {
        //FIX FOR CHROME STRAIGHT LINE BUG
        const splitPath = pathString.split('L').map(d => d.split(','));
        if (splitPath.length > 1) {
          splitPath[0][1] = parseFloat(splitPath[0][1]).toFixed(2);
        }
        pathString = splitPath.map(d => d.join(',')).join('L');
      }

      const markProps = {
        ...builtInDisplayProps,
        ...baseMarkProps,
        markType: 'path',
        d: pathString,
        'aria-label':
          d.data &&
          d.data.length > 0 &&
          `${d.data.length} point ${
            ariaLabel.items
          } starting value ${yAxisFormatter(d.data[0].y)} at ${xAxisFormatter(
            d.data[0].x
          )} ending value ${yAxisFormatter(
            d.data[d.data.length - 1].y
          )} at ${xAxisFormatter(d.data[d.data.length - 1].x)}`
      };

      if (canvasRender && canvasRender(d.data, i) === true) {
        const canvasLine = {
          type: 'line',
          baseClass: 'xyframe-line',
          tx: 0,
          ty: 0,
          d,
          i,
          markProps,
          styleFn,
          renderFn: renderMode,
          classFn
        };
        canvasDrawing.push(canvasLine);
      } else {
        mappedLines.push(
          clonedAppliedElement({
            baseClass: 'xyframe-line',
            d,
            i,
            markProps,
            styleFn,
            renderFn: renderMode,
            renderKeyFn,
            classFn
          })
        );
      }
    }
  });

  if (customLine.type === 'difference' && data.length === 2) {
    //Create the overlay line for the difference chart

    const diffdataA = data[0].data.map((basedata, baseI) => {
      const linePoint =
        basedata.yTop > data[1].data[baseI].yTop
          ? basedata.yTop
          : basedata.yBottom;
      return {
        x: basedata.x,
        y: linePoint,
        yBottom: linePoint,
        yTop: linePoint
      };
    });

    const diffdataB = data[0].data.map((basedata, baseI) => {
      const linePoint =
        data[1].data[baseI].yTop > basedata.yTop
          ? data[1].data[baseI].yTop
          : data[1].data[baseI].yBottom;
      return {
        x: basedata.x,
        y: linePoint,
        yBottom: linePoint,
        yTop: linePoint
      };
    });

    const doClassname = classFn
      ? `xyframe-line ${classFn(diffdataA)}`
      : 'xyframe-line';

    const overLine = line();

    lineGeneratorDecorator({
      projectedCoordinateNames,
      defined,
      interpolator,
      generator: overLine,
      xScale,
      yScale,
      simpleLine: true
    });

    //      let baseStyle = props.lineStyle ? props.lineStyle(diffdata, 0) : {}
    const diffOverlayA = (
      <Mark
        key={'xyline-diff-a'}
        className={`${doClassname} difference-overlay-a`}
        markType="path"
        d={overLine(diffdataA)}
        style={{ fill: 'none', pointerEvents: 'none' }}
      />
    );
    mappedLines.push(diffOverlayA);

    const diffOverlayB = (
      <Mark
        key={'xyline-diff-b'}
        className={`${doClassname} difference-overlay-b`}
        markType="path"
        d={overLine(diffdataB)}
        style={{ fill: 'none', pointerEvents: 'none' }}
      />
    );
    mappedLines.push(diffOverlayB);
  }

  return mappedLines;
};
export default createLines;