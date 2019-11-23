import polylabel from '@mapbox/polylabel';

const shapeBounds = coordinates => {
  let left = [Infinity, 0];
  let right = [-Infinity, 0];
  let top = [0, Infinity];
  let bottom = [0, -Infinity];
  coordinates.forEach(d => {
    left = d[0] < left[0] ? d : left;
    right = d[0] > right[0] ? d : right;
    bottom = d[1] > bottom[1] ? d : bottom;
    top = d[1] < top[1] ? d : top;
  });

  return { center: polylabel([coordinates]), top, left, right, bottom };
};

export default shapeBounds;
