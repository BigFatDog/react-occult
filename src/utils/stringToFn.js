const stringToFn = (accessor, defaultAccessor, raw) => {
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

export default stringToFn;
