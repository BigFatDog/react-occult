const keyAndObjectifyBarData = ({
  data,
  renderKey = (d, i) => i,
  oAccessor,
  rAccessor: baseRAccessor,
  originalRAccessor,
  originalOAccessor,
  multiAxis = false
}) => {
  let rAccessor;
  let multiExtents;
  if (multiAxis && baseRAccessor.length > 1) {
    multiExtents = baseRAccessor.map(accessor => extent(data.map(accessor)));
    const rScales = multiExtents.map(ext =>
      scaleLinear()
        .domain(ext)
        .range([0, 1])
    );
    rAccessor = rScales.map((scale, i) => d => scale(baseRAccessor[i](d)));
  } else {
    rAccessor = baseRAccessor;
  }
  const decoratedData = [];
  oAccessor.forEach((actualOAccessor, oIndex) => {
    rAccessor.forEach((actualRAccessor, rIndex) => {
      data.forEach(d => {
        const appliedKey = renderKey(d, decoratedData.length);
        const originalR = originalRAccessor[rIndex];
        const originalO = originalOAccessor[oIndex];
        const rName =
          typeof originalR === 'string' ? originalR : `function-${rIndex}`;
        const oName =
          typeof originalO === 'string' ? originalO : `function-${oIndex}`;

        if (typeof d !== 'object') {
          const expandedData = { value: d, renderKey: appliedKey };
          const value = actualRAccessor(expandedData);
          decoratedData.push({
            data: expandedData,
            value,
            rIndex,
            rName,
            oIndex,
            oName,
            column:
              (appliedKey !== undefined &&
                appliedKey.toString &&
                appliedKey.toString()) ||
              appliedKey,
            renderKey: appliedKey
          });
        } else {
          const value = actualRAccessor(d);
          decoratedData.push({
            renderKey: appliedKey,
            data: d,
            rIndex,
            rName,
            oIndex,
            oName,
            value,
            column: actualOAccessor(d)
          });
        }
      });
    });
  });
  return { allData: decoratedData, multiExtents };
};

export default keyAndObjectifyBarData;
