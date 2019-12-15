import React from 'react';
import { Mark } from 'semiotic-mark';

const toLaidOutPieces = ({
  data,
  shouldRender,
  useCanvas,
  styleFn,
  classFn,
  baseMarkProps,
  renderKeyFn,
  ariaLabel,
  axis
}) => {
  const valueFormat = axis && axis[0] && axis[0].tickFormat;
  if (!shouldRender) return null;
  const svgPipeline = [];
  const canvasPipeline = [];

  data.forEach((d, i) => {
    if (useCanvas && useCanvas(d) === true) {
      const canvasPiece = {
        baseClass: 'orframe-piece',
        tx: d.renderElement.tx || 0,
        ty: d.renderElement.ty || 0,
        d: d.piece,
        i,
        markProps: d.renderElement || d,
        styleFn: styleFn,
        classFn
      };
      canvasPipeline.push(canvasPiece);
    } else {
      if (React.isValidElement(d.renderElement || d)) {
        svgPipeline.push(d.renderElement || d);
      } else {
        /*ariaLabel.items*/
        const pieceAriaLabel = `${d.o} ${
          ariaLabel.items
        } value ${(valueFormat && valueFormat(d.piece.value)) ||
          d.piece.value}`;
        svgPipeline.push(
          <Mark
            {...baseMarkProps}
            key={
              renderKeyFn
                ? renderKeyFn(d.piece)
                : d.renderKey || `piece-render-${i}`
            }
            {...(d.renderElement || d)}
            aria-label={pieceAriaLabel}
          />
        );
      }
    }
  });

  return {
    svgPipeline,
    canvasPipeline
  };
};

export default toLaidOutPieces;
