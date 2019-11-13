import React from 'react';
import { Mark } from 'semiotic-mark';

const toRenderedElements = ({
  data,
  xScale,
  yScale,
  useCanvas,
  styleFn = () => ({}),
  classFn = () => '',
  renderKeyFn,
  renderFn,
  customMark
}) => {
  const renderedElements = [];
  const canvasPipeline = [];

  data.forEach((d, i) => {
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
      const projectedCoordinates = d._xyCoordinates.map(p => [
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
      drawD = `M${d._xyCoordinates
        .map(p => `${xScale(p[0])},${yScale(p[1])}`)
        .join('L')}Z`;
    }

    const renderKey = renderKeyFn ? renderKeyFn(d, i) : `area-${i}`;
    const className = classFn ? `xyframe-area ${classFn(d)}` : 'xyframe-area';

    if (shouldBeValid && React.isValidElement(drawD)) {
      renderedAreas.push(drawD);
    } else if (useCanvas === true) {
      const canvasArea = {
        type: 'area',
        baseClass: 'xyframe-area',
        tx: 0,
        ty: 0,
        d,
        i,
        markProps: { markType: 'path', d: drawD },
        styleFn,
        renderFn,
        classFn: () => className
      };
      canvasPipeline.push(canvasArea);
    } else {
      renderedElements.push(
        <Mark
          key={renderKey}
          forceUpdate={true}
          renderMode={renderFn ? renderFn(d, i) : undefined}
          className={className}
          markType="path"
          d={drawD}
          style={styleFn(d, i)}
        />
      );
    }
  });

  return {
    renderedElements,
    canvasPipeline
  };
};

export default toRenderedElements;
