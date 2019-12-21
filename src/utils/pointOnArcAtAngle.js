const pointOnArcAtAngle = (center, angle, distance) => {
  const radians = Math.PI * (angle + 0.75) * 2;

  const xPosition = center[0] + distance * Math.cos(radians);
  const yPosition = center[1] + distance * Math.sin(radians);

  return [xPosition, yPosition];
};

export default pointOnArcAtAngle;
