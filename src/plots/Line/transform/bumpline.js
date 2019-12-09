const datesForUnique = d => (d instanceof Date ? d.getTime() : d);

export const bumpline = ({ type = 'bumpline', data }) => {
  const uniqXValues = data
    .map(d => d._xyCoordinates.map(p => datesForUnique(p.x)))
    .reduce((a, b) => a.concat(b), [])
    .reduce((p, c) => {
      if (p.indexOf(c) === -1) {
        p.push(c);
      }
      return p;
    }, []);

  let bumpSort = (a, b) => {
    if (a.y > b.y) {
      return 1;
    }
    if (a.y < b.y) {
      return -1;
    }
    return -1;
  };
  if (type === 'bumparea-invert' || type === 'bumpline-invert') {
    bumpSort = (a, b) => {
      if (a.y < b.y) {
        return 1;
      }
      if (a.y > b.y) {
        return -1;
      }
      return -1;
    };
  }

  uniqXValues.forEach(xValue => {
    let negativeOffset = 0;
    let positiveOffset = 0;

    data
      .map(d => d._xyCoordinates.filter(p => datesForUnique(p.x) === xValue))
      .reduce((a, b) => a.concat(b), [])
      .sort(bumpSort)
      .forEach((l, rank) => {
        //determine ranking and offset by the number of less than this one at each step
        l._XYFrameRank = rank + 1;
        if (type === 'bumparea' || type === 'bumparea-invert') {
          if (l.y < 0) {
            l.y = negativeOffset + l.y;
            l.yMiddle = negativeOffset + l.y / 2;
            l.yBottom = negativeOffset;
            negativeOffset += l.y;
          } else {
            l.yTop = positiveOffset + l.y;
            l.yMiddle = positiveOffset + l.y / 2;
            l.yBottom = positiveOffset;
            positiveOffset += l.y;
          }
        } else {
          l.y = rank + 1;
          l.yTop = rank + 1;
          l.yBottom = rank + 1;
        }
      });
  });

  return data;
};

export default bumpline;
