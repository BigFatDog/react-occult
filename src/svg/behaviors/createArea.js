import React from 'react';
import { Mark } from 'semiotic-mark';

const createAreas = ({
  xScale,
  yScale,
  canvasDrawing,
  data,
  canvasRender,
  styleFn,
  classFn,
  renderKeyFn,
  renderMode,
  customMark
}) => {
  const areaClass = classFn || (() => '');
  const areaStyle = styleFn || (() => ({}));

  const renderFn = renderMode;

  if (!Array.isArray(data)) {
    data = [data];
  }

  const renderedAreas = [];

  data.forEach((d, i) => {
    let className = 'xyframe-area';
    if (areaClass) {
      className = `xyframe-area ${areaClass(d)}`;
    }
    let drawD = '';
    let shouldBeValid = false;
    if (d.customMark) {
      drawD = d.customMark;
      shouldBeValid = true;
    } else if (d.type === 'MultiPolygon') {
      d.coordinates.forEach(coord => {
        coord.forEach(c => {
          drawD += `M${c
            .map(p => `${xScale(p[0])},${yScale(p[1])}`)
            .join('L')}Z `;
        });
      });
    } else if (customMark) {
      const projectedCoordinates = d._xyfCoordinates.map(p => [
        xScale(p[0]),
        yScale(p[1])
      ]);
      drawD = customMark({
        d,
        projectedCoordinates,
        xScale,
        yScale,
        bounds: shapeBounds(projectedCoordinates)
      });
      shouldBeValid = true;
    } else {
      drawD = `M${d._xyfCoordinates
        .map(p => `${xScale(p[0])},${yScale(p[1])}`)
        .join('L')}Z`;
    }

    const renderKey = renderKeyFn ? renderKeyFn(d, i) : `area-${i}`;

    if (shouldBeValid && React.isValidElement(drawD)) {
      renderedAreas.push(drawD);
    } else if (canvasRender && canvasRender(d, i) === true) {
      const canvasArea = {
        type: 'area',
        baseClass: 'xyframe-area',
        tx: 0,
        ty: 0,
        d,
        i,
        markProps: { markType: 'path', d: drawD },
        styleFn: areaStyle,
        renderFn,
        classFn: () => className
      };
      canvasDrawing.push(canvasArea);
    } else {
      renderedAreas.push(
        <Mark
          key={renderKey}
          forceUpdate={true}
          renderMode={renderFn ? renderFn(d, i) : undefined}
          className={className}
          markType="path"
          d={drawD}
          style={areaStyle(d, i)}
        />
      );
    }
  });
  return renderedAreas;
};

export default createAreas;
