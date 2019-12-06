import React from 'react';

const canvasEvent = (canvasContext, overlayRegions, canvasMap, e) => {
  const interactionContext = canvasContext.getContext('2d');
  const hoverPoint = interactionContext.getImageData(
    e.offsetX,
    e.offsetY,
    1,
    1
  );

  const mostCommonRGB = `rgba(${hoverPoint.data[0]},${hoverPoint.data[1]},${hoverPoint.data[2]},255)`;

  let overlay = overlayRegions[canvasMap.get(mostCommonRGB)];
  if (!overlay) {
    const hoverArea = interactionContext.getImageData(
      e.offsetX - 2,
      e.offsetY - 2,
      5,
      5
    );
    let x = 0;

    while (!overlay && x < 100) {
      overlay =
        overlayRegions[
          canvasMap.get(
            `rgba(${hoverArea.data[x]},${hoverArea.data[x + 1]},${
              hoverArea.data[x + 2]
            },255)`
          )
        ];
      x += 4;
    }
  }

  return overlay;
};

export default canvasEvent;
