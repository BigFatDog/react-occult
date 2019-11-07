import React from 'react';
import drawMarginPath from '../svg/frameFunctions/drawMarginPath';

const getMargin = ({ matte, size, margin, name }) => {
  let marginGraphic = null;
  if (typeof matte === 'function') {
    marginGraphic = matte({ size, margin });
  } else if (React.isValidElement(matte)) {
    marginGraphic = matte;
  } else if (matte === true) {
    marginGraphic = (
      <path
        fill="white"
        transform={`translate(${-margin.left},${-margin.top})`}
        d={drawMarginPath({
          margin,
          size,
          inset: 0
        })}
        className={`${name}-matte`}
      />
    );
  }

  return marginGraphic;
};

export default getMargin;
