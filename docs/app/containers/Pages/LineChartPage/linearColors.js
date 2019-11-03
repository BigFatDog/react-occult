import { range } from 'd3-array';
import { scaleSequential } from 'd3-scale';
import isFunction from 'occult/utils/isFunction';
import equalIntervalBreaks from 'occult/utils/equalIntervalBreaks';

const generateOffsets = interpolator => {
  const offsets = range(0, 1, 0.1);
  offsets.push(1); // range is 0-0.9

  if (isFunction(interpolator)) {
    const seqScale = scaleSequential(interpolator).domain([0, 1]); // explicit domain, not really need to do so

    return offsets.map(d => ({
      offset: d,
      color: seqScale(d)
    }));
  } else {
    let count = interpolator.length;

    if (count > 1) {
      let steps = equalIntervalBreaks([0, 1], count - 1);

      return steps.map((d, i) => ({
        offset: d,
        color: interpolator[i]
      }));
    } else {
      console.log('linear gradient requires at least two colors');
    }
  }
};

export default generateOffsets;
