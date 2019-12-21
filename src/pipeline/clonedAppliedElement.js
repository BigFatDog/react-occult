import React from 'react';
import { Mark } from 'semiotic-mark';

const clonedAppliedElement = ({
  tx,
  ty,
  d,
  i,
  markProps,
  styleFn,
  renderFn,
  classFn,
  renderKeyFn,
  baseClass,
  yi
}) => {
  markProps.style = styleFn ? styleFn(d, i, yi) : {};

  markProps.className = baseClass;

  markProps.key = renderKeyFn
    ? renderKeyFn(d, i, yi)
    : `${baseClass}-${d.key === undefined ? i : d.key}`;

  if (tx || ty) {
    markProps.transform = `translate(${tx || 0},${ty || 0})`;
  }

  if (classFn) {
    markProps.className = `${baseClass} ${classFn(d, i, yi)}`;
  }

  if (!markProps.markType) {
    const RenderableMark = markProps;
    return React.createElement(RenderableMark);
  }

  markProps.renderMode = renderFn ? renderFn(d, i, yi) : undefined;

  return <Mark {...markProps} />;
};

export default clonedAppliedElement;
