import { range } from 'd3-array';
import { scaleSequential } from 'd3-scale';
import { hsl } from 'd3-color';
import isFunction from 'lodash-es/isFunction';
import isArray from 'lodash-es/isArray';
import equalIntervalBreaks from './equalIntervalBreaks';

const linearStops = (colorFn, opacity = 1) => {
  if (isFunction(colorFn)) {
    let offsets = range(0, 1, 0.1);
    offsets.push(1); // range is 0-0.9

    if (interpolator != null) {
      let seqScale = scaleSequential(colorFn).domain([0, 1]); // explicit domain, not really need to do so

      return offsets.map(d => ({
        offset: d,
        color: seqScale(d)
      }));
    } else {
      // fade out a single hue
      return offsets.map(d => {
        const _hsl = hsl(colorFn);
        _hsl.opacity = opacity * d;

        return {
          offset: d,
          color: _hsl
        };
      });
    }
  } else if (isArray(colorFn)) {
    const count = colorFn.length;

    if (count > 1) {
      let steps = equalIntervalBreaks([0, 1], count - 1);

      return steps.map((d, i) => ({
        offset: d,
        color: colorFn[i]
      }));
    } else {
      console.log('linear gradient requires at least two colors');
    }
  }
};

export default linearStops;
