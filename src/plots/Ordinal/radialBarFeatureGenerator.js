import { scaleLinear } from 'd3-scale';
import { arc } from 'd3-shape';
import arcTweener from '../../frame/test/arcTweener';
import { pointOnArcAtAngle } from '../../frame/test/layout/util';

const twoPI = Math.PI * 2;
const radialBarFeatureGenerator = ({
  innerRadius,
  offsetAngle = 0,
  angleRange = [0, 360],
  ordset,
  isClusterBar = false,
  isTimeline = false,
  adjustedSize,
  piece,
  i
}) => {
  const offsetPct = offsetAngle / 360;
  const rangePct = angleRange.map(d => d / 360);
  const rangeMod = rangePct[1] - rangePct[0];

  const adjustedPct =
    rangeMod < 1
      ? scaleLinear()
          .domain([0, 1])
          .range(rangePct)
      : d => d;

  let innerSize = isClusterBar
    ? 0
    : isTimeline
    ? piece.scaledValue / 2
    : piece.bottom / 2;
  let outerSize = isClusterBar
    ? piece.scaledValue / 2
    : isTimeline
    ? piece.scaledEndValue / 2
    : piece.scaledValue / 2 + piece.bottom / 2;

  if (innerRadius) {
    innerRadius = parseInt(innerRadius, 10);
    const canvasRadius = adjustedSize[0] / 2;
    const donutMod = (canvasRadius - innerRadius) / canvasRadius;
    innerSize = innerSize * donutMod + innerRadius;
    outerSize = outerSize * donutMod + innerRadius;
  }

  const arcGenerator = arc()
    .innerRadius(innerSize)
    .outerRadius(outerSize);

  const angle =
    (isClusterBar
      ? (ordset.pct - ordset.pct_padding) / ordset.pieceData.length
      : ordset.pct) * rangeMod;

  const startAngle = adjustedPct(
    isClusterBar
      ? ordset.pct_start +
          (i / ordset.pieceData.length) * (ordset.pct - ordset.pct_padding)
      : ordset.pct === 1
      ? 0
      : ordset.pct_start + offsetPct
  );

  const endAngle =
    ordset.pct === 1
      ? rangePct[1]
      : Math.max(startAngle, startAngle + angle - ordset.pct_padding / 2);

  const startAngleFinal = startAngle * twoPI;
  const endAngleFinal = endAngle * twoPI;

  const markD = arcGenerator({
    startAngle: startAngleFinal,
    endAngle: endAngleFinal
  });

  const centroid = arcGenerator.centroid({
    startAngle: startAngleFinal,
    endAngle: endAngleFinal
  });

  const xOffset = adjustedSize[0] / 2;
  const yOffset = adjustedSize[1] / 2;
  const xPosition = centroid[0] + xOffset;
  const yPosition = centroid[1] + yOffset;

  const outerPoint = pointOnArcAtAngle(
    [0, 0],
    (startAngle + endAngle) / 2,
    piece.scaledValue / 2
  );

  const xy = {
    arcGenerator: arcGenerator,
    startAngle: startAngleFinal,
    endAngle: endAngleFinal,
    dx: outerPoint[0],
    dy: outerPoint[1]
  };
  const translate = `translate(${xOffset},${yOffset})`;

  return {
    xPosition,
    yPosition,
    xy,
    translate,
    markProps: {
      markType: 'path',
      d: markD,
      tx: xOffset,
      ty: yOffset,
      transform: translate,
      customTween: {
        fn: arcTweener,
        props: {
          startAngle: startAngleFinal,
          endAngle: endAngleFinal,
          innerRadius: innerSize,
          outerRadius: outerSize
        }
      }
    }
  };
};

const clusterRadialBarFeatureGenerator = props =>
  radialBarFeatureGenerator({
    ...props,
    isClusterBar: true
  });

const timelineRadialBarFeatureGenerator = props =>
  radialBarFeatureGenerator({
    ...props,
    isTimeline: true
  });

export { clusterRadialBarFeatureGenerator, timelineRadialBarFeatureGenerator };

export default radialBarFeatureGenerator;
