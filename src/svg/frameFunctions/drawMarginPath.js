import React from 'react';

const drawMarginPath = ({ margin, size, inset = 0 }) => {
  const iSize = [size[0] - inset, size[1] - inset];
  return `M0,0 h${size[0]} v${size[1]} h-${size[0]}Z M${margin.left -
    inset},${margin.top - inset} v${size[1] +
    inset * 2 -
    margin.top -
    margin.bottom} h${iSize[0] +
    inset * 3 -
    margin.left -
    margin.right} v-${iSize[1] + inset * 3 - margin.top - margin.bottom}Z`;
};

export default drawMarginPath;
