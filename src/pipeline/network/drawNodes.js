const drawNodes = ({
  data,
  renderKeyFn,
  customMark,
  styleFn,
  classFn,
  renderMode,
  useCanvas,
  baseMarkProps
}) => {
  const svgPipeline = [];
  const canvasPipeline = [];

  if (customMark && useCanvas) {
    console.error(
      'canvas rendering currently only supports generic circle nodes based on nodeSize'
    );
  }

  data.forEach((d, i) => {
    if (useCanvas === true) {
      const canvasNode = {
        baseClass: 'frame-piece',
        tx: d.x,
        ty: d.y,
        d,
        i,
        markProps: { markType: 'circle', r: d.nodeSize },
        styleFn,
        renderFn: renderMode,
        classFn
      };
      canvasPipeline.push(canvasNode);
    } else {
      // CUSTOM MARK IMPLEMENTATION
        if (customMark) {
            svgPipeline.push(
                customMark({
                    d,
                    i,
                    renderKeyFn,
                    styleFn,
                    classFn,
                    renderMode,
                    key: renderKeyFn ? renderKeyFn(d, i) : d.id || `node-${i}`,
                    className: `node ${classFn(d, i)}`,
                    transform: `translate(${d.x},${d.y})`,
                    baseMarkProps
                })
            );
        }

    }
  });
  return { svgPipeline, canvasPipeline };
};

export default drawNodes;
