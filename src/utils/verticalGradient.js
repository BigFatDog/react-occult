import { hsl } from 'd3-color';
import linearStops from './linearStops';

/**
 * add linear gradient, x0, y0 -> x1, y1
 *
 * @param context CanvasRenderingContext2D
 * @param scheme color scheme
 * @param opacity fill opacity
 */
const verticalGradient = (context, scheme, opacity = 1) => {
  let grd = context.createLinearGradient(
    context.canvas.clientWidth / 2,
    context.canvas.clientHeight,
    context.canvas.clientWidth / 2,
    0
  );

  const stops = linearStops(scheme);

  for (const { offset, color } of stops) {
    if (opacity < 1) {
      const hslColor = hsl(color);
      hslColor.opacity = opacity;
      grd.addColorStop(offset, hslColor);
    } else {
      grd.addColorStop(offset, color);
    }
  }

  return grd;
};

export default verticalGradient;
