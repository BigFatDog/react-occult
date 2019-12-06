const renderCanvas = ({
  props,
  canvasMap,
  overlayRegions,
  interactionContext
}) => {
  if (interactionContext === null || !overlayRegions) return;

  const { svgSize, margin } = props;

  canvasMap.clear();

  interactionContext = interactionContext.getContext('2d');

  interactionContext.imageSmoothingEnabled = false;
  interactionContext.setTransform(1, 0, 0, 1, margin.left, margin.top);
  interactionContext.clearRect(
    -margin.left,
    -margin.top,
    svgSize[0],
    svgSize[1]
  );

  interactionContext.lineWidth = 1;

  overlayRegions.forEach((overlay, oi) => {
    const interactionRGBA = `rgba(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},255)`;

    canvasMap.set(interactionRGBA, oi);

    interactionContext.fillStyle = interactionRGBA;
    interactionContext.strokeStyle = interactionRGBA;

    const p = new Path2D(overlay.props.d);
    interactionContext.stroke(p);
    interactionContext.fill(p);
  });
};

export default renderCanvas;
