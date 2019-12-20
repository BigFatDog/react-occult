import { interpolateNumber } from 'd3-interpolate';
import { arc } from 'd3-shape';

const arcTweener = (oldProps, newProps) => {
  const innerRadiusInterpolator = interpolateNumber(
    oldProps.innerRadius,
    newProps.innerRadius
  );
  const outerRadiusInterpolator = interpolateNumber(
    oldProps.outerRadius,
    newProps.outerRadius
  );
  const startAngleInterpolator = interpolateNumber(
    oldProps.startAngle,
    newProps.startAngle
  );
  const endAngleInterpolator = interpolateNumber(
    oldProps.endAngle,
    newProps.endAngle
  );

  return t => {
    const sliceGenerator = arc()
      .innerRadius(innerRadiusInterpolator(t))
      .outerRadius(outerRadiusInterpolator(t));
    return sliceGenerator({
      startAngle: startAngleInterpolator(t),
      endAngle: endAngleInterpolator(t)
    });
  };
};

export default arcTweener;
