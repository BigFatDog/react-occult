export const stringToFn = (accessor, defaultAccessor, raw) => {
  if (!accessor && defaultAccessor) {
    return defaultAccessor;
  } else if (typeof accessor !== 'function' && raw !== undefined) {
    return () => accessor;
  }

  return typeof accessor === 'function' ? accessor : d => d[accessor];
};

export const stringToArrayFn = (accessor, defaultAccessor, raw) => {
  if (!accessor) {
    return [stringToFn(accessor, defaultAccessor, raw)];
  }
  const arrayOfAccessors = Array.isArray(accessor) ? accessor : [accessor];

  return arrayOfAccessors.map(a => stringToFn(a, defaultAccessor, raw));
};

export function objectifyType(type) {
  return typeof type === 'object' ? type : { type: type, simpleLine: false };
}

export function adjustedPositionSize({
  size = [500, 500],
  position = [0, 0],
  margin,
  projection
}) {
  const heightAdjust = margin.top + margin.bottom;
  const widthAdjust = margin.left + margin.right;

  const adjustedPosition = [position[0], position[1]];
  let adjustedSize = [size[0] - widthAdjust, size[1] - heightAdjust];
  if (projection === 'radial') {
    const minSize = Math.min(adjustedSize[0], adjustedSize[1]);
    adjustedSize = [minSize, minSize];
  }

  return { adjustedPosition, adjustedSize };
}
