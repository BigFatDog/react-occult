import clonedAppliedElement from './clonedAppliedElement';

import {
  projectedX,
  projectedY,
  projectedYMiddle,
  projectedXMiddle
} from '../../constants/coordinateNames';

const createPoints = ({
  xScale,
  yScale,
  canvasDrawing,
  data,
  customMark,
  canvasRender,
  styleFn,
  classFn,
  renderKeyFn,
  renderMode,
  baseMarkProps
}) => {
  const x = projectedX;
  const y = projectedY;
  const xMiddle = projectedXMiddle;
  const yMiddle = projectedYMiddle;

  const mappedPoints = [];
  data.forEach((d, i) => {
    const dX = xScale(d[xMiddle] || d[x]);
    const dY = yScale(d[yMiddle] || d[y]);
    const pointAriaLabel = `Point at x ${d.x} and y ${d.y}`;

    const renderedCustomMark = !customMark
      ? undefined
      : React.isValidElement(customMark)
      ? customMark
      : customMark({ d: d.data, xy: d, i, xScale, yScale });
    const markProps = customMark
      ? Object.assign(baseMarkProps, renderedCustomMark.props, {
          'aria-label': pointAriaLabel
        })
      : {
          ...baseMarkProps,
          key: `piece-${i}`,
          markType: 'circle',
          r: 2,
          'aria-label': pointAriaLabel
        };

    if (
      renderedCustomMark &&
      renderedCustomMark.props &&
      !renderedCustomMark.props.markType &&
      (!canvasRender || canvasRender(d.data, i) !== true)
    ) {
      mappedPoints.push(
        <g
          transform={`translate(${dX},${dY})`}
          key={renderKeyFn ? renderKeyFn(d.data, i) : `custom-point-mark-${i}`}
          style={styleFn ? styleFn(d.data, i) : {}}
          className={classFn ? classFn(d.data, i) : ''}
        >
          {renderedCustomMark}
        </g>
      );
    } else {
      if (canvasRender && canvasRender(d.data, i) === true) {
        const canvasPoint = {
          type: 'point',
          baseClass: 'frame-piece',
          tx: dX,
          ty: dY,
          d,
          i,
          markProps,
          styleFn,
          renderFn: renderMode,
          classFn
        };
        canvasDrawing.push(canvasPoint);
      } else {
        const yCoordinates = Array.isArray(d[y])
          ? d[y].map(p => yScale(p))
          : [dY];
        yCoordinates.forEach((yc, yi) => {
          const xCoordinates = Array.isArray(d[x])
            ? d[x].map(p => xScale(p))
            : [dX];
          xCoordinates.forEach((xc, xi) => {
            mappedPoints.push(
              clonedAppliedElement({
                baseClass: 'frame-piece',
                tx: xc,
                ty: yc,
                d: (d.data && { ...d, ...d.data }) || d,
                i: yi === 0 && xi === 0 ? i : `${i}-${yi}-${xi}`,
                markProps,
                styleFn,
                renderFn: renderMode,
                renderKeyFn,
                classFn,
                yi
              })
            );
          });
        });
      }
    }
  });
  return mappedPoints;
};

export default createPoints;
