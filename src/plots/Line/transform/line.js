const line = ({ data, y1, yPropTop, yPropMiddle, yPropBottom }) => {
  if (y1) {
    data.forEach(d => {
      d.data.forEach(p => {
        p[yPropBottom] = y1(p);
        p[yPropMiddle] = p[yPropBottom] + p[yPropTop] / 2;
      });
    });
  }

  return data;
};

export default line;
