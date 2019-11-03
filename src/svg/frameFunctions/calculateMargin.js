const calculateMargin = ({ margin, axes, title, oLabel, projection }) => {
  if (margin !== undefined) {
    if (typeof margin !== 'object') {
      return { top: margin, bottom: margin, left: margin, right: margin };
    } else if (typeof margin === 'object') {
      return Object.assign({ top: 0, bottom: 0, left: 0, right: 0 }, margin);
    }
  }
  const finalMargin = { top: 0, bottom: 0, left: 0, right: 0 };

  let orient = trueAxis('left', projection);

  if (axes && projection !== 'radial') {
    axes.forEach(axisObj => {
      const axisObjAdditionMargin = axisObj.label ? 60 : 50;
      orient = trueAxis(axisObj.orient, projection);
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

export default calculateMargin;
