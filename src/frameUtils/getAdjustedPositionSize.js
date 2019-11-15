export const stringToFn = (accessor, defaultAccessor, raw) => {
    if (!accessor && defaultAccessor) {
        return defaultAccessor;
    } else if (typeof accessor !== 'function' && raw !== undefined) {
        return () => accessor;
    }

    return typeof accessor === 'function' ? accessor : d => d[accessor];
};

const getAdjustedPositionSize = ({
                                         size = [500, 500],
                                         position = [0, 0],
                                         margin,
                                         projection
                                     }) => {
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

export default getAdjustedPositionSize;
