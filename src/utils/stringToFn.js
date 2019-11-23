const stringToFn = (accessor, defaultAccessor, raw) => {
    if (!accessor && defaultAccessor) {
        return defaultAccessor;
    } else if (typeof accessor !== 'function' && raw !== undefined) {
        return () => accessor;
    }

    return typeof accessor === 'function' ? accessor : d => d[accessor];
};

export default stringToFn;