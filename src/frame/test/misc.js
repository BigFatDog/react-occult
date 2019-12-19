import circlePath from './circlePath';

export function objectifyType(type) {
  if (type instanceof Function || typeof type === 'string') {
    return { type: type };
  } else if (type === undefined) {
    return {};
  }
  return type;
}

export function stringToArrayFn(accessor, defaultAccessor, raw) {
  if (accessor === undefined) {
    return [stringToFn(undefined, defaultAccessor, raw)];
  }
  let arrayOfAccessors = [];
  if (Array.isArray(accessor)) {
    arrayOfAccessors = accessor;
  } else {
    arrayOfAccessors = [accessor];
  }

  return arrayOfAccessors.map(a => stringToFn(a, defaultAccessor, raw));
}

export const stringToFn = (accessor, defaultAccessor, raw) => {
  if (!accessor && defaultAccessor) {
    return defaultAccessor;
  } else if (typeof accessor === 'object') {
    return () => accessor;
  } else if (accessor instanceof Function) {
    return accessor;
  } else if (raw === true) {
    const castAccessor = accessor;
    return () => castAccessor;
  } else if (typeof accessor === 'string') {
    return d => d[accessor];
  }

  return () => undefined;
};

export const calculateMargin = ({
  margin,
  axes,
  title,
  oLabel,
  projection,
  size
}) => {
  if (margin !== undefined) {
    if (typeof margin === 'function') {
      margin = margin({ size });
    }
    if (typeof margin !== 'object') {
      return { top: margin, bottom: margin, left: margin, right: margin };
    } else if (typeof margin === 'object') {
      return Object.assign({ top: 0, bottom: 0, left: 0, right: 0 }, margin);
    }
  }
  const finalMargin = { top: 0, bottom: 0, left: 0, right: 0 };

  let orient = 'left';

  if (axes && projection !== 'radial') {
    axes.forEach(axisObj => {
      const axisObjAdditionMargin = axisObj.label ? 60 : 50;
      orient = axisObj.orient;
      finalMargin[orient] = axisObjAdditionMargin;
    });
  }

  if (
    title.title &&
    !(typeof title.title === 'string' && title.title.length === 0)
  ) {
    const { orient = 'top' } = title;
    finalMargin[orient] += 40;
  }

  if (oLabel && projection !== 'radial') {
    if (orient === 'bottom' || orient === 'top') {
      finalMargin.left += 50;
    } else {
      finalMargin.bottom += 50;
    }
  }
  return finalMargin;
};
