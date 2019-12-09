import { sum } from 'd3-array';
const datesForUnique = d => (d instanceof Date ? d.getTime() : d);

const stackedArea = ({
  type = 'stackedarea',
  data,
  sort,
}) => {
  const uniqXValues = data
    .map(d => d._xyCoordinates.map(p => datesForUnique(p.x)))
    .reduce((a, b) => a.concat(b), [])
    .reduce((p, c) => {
      if (p.indexOf(c) === -1) {
        p.push(c);
      }
      return p;
    }, []);

  let stackSort = (a, b) =>
    sum(b._xyCoordinates.map(p => p.y)) - sum(a._xyCoordinates.map(p => p.y));
  if (type === 'stackedpercent-invert' || type === 'stackedarea-invert') {
    stackSort = (a, b) =>
      sum(a._xyCoordinates.map(p => p.y)) - sum(b._xyCoordinates.map(p => p.y));
  }
  sort = sort === undefined ? stackSort : sort;

  if (sort !== null) {
    data = data.sort(sort);
  }

  uniqXValues.forEach(xValue => {
    let negativeOffset = 0;
    let positiveOffset = 0;
    const stepValues = data
      .map(d => d._xyCoordinates.filter(p => datesForUnique(p.x) === xValue))
      .reduce((a, b) => a.concat(b), []);

    const positiveStepTotal = sum(stepValues.map(d => (d.y > 0 ? d.y : 0)));
    const negativeStepTotal = sum(stepValues.map(d => (d.y < 0 ? d.y : 0)));

    stepValues.forEach(l => {
      if (l.y < 0) {
        if (
          type === 'linepercent' ||
          type === 'stackedpercent' ||
          type === 'stackedpercent-invert'
        ) {
          const percent = l.y / negativeStepTotal;
          l.percent = percent;
          if (type === 'linepercent') {
            l.yBottom = l.yBottom = l.yTop = l.yMiddle = percent;
          } else {
            const adjustment = negativeStepTotal >= 0 ? 0 : percent;
            l.yBottom =
              negativeStepTotal === 0
                ? 0
                : -(negativeOffset / negativeStepTotal);
            l.yTop = l.yBottom - adjustment;
            l.yMiddle = l.yBottom - adjustment / 2;
          }
        } else {
          l.yBottom = negativeOffset;
          l.yTop = negativeOffset + l.y;
          l.yMiddle = negativeOffset + l.y / 2;
        }
        negativeOffset += l.y;
      } else {
        if (
          type === 'linepercent' ||
          type === 'stackedpercent' ||
          type === 'stackedpercent-invert'
        ) {
          const percent = l.y / positiveStepTotal;
          l.percent = percent;

          if (type === 'linepercent') {
            l.yBottom = l.yTop = l.yMiddle = percent;
          } else {
            const adjustment = positiveStepTotal <= 0 ? 0 : percent;
            l.yBottom =
              positiveStepTotal === 0 ? 0 : positiveOffset / positiveStepTotal;
            l.yTop = l.yBottom + adjustment;
            l.yMiddle = l.yBottom + adjustment / 2;
          }
        } else {
          l.yBottom = positiveOffset;
          l.yTop = positiveOffset + l.y;
          l.yMiddle = positiveOffset + l.y / 2;
        }
        positiveOffset += l.y;
      }
    });
  });

  return data;
};

export default stackedArea;
