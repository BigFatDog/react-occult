import { extent } from 'd3-array';

const extentValue = extent =>
  (extent && extent.extent) || (Array.isArray(extent) && extent) || [];

const trimExtent = ({
  xExtent,
  yExtent,
  calculatedXExtent,
  calculatedYExtent
}) => {
  const userDefinedXExtent = extentValue(xExtent);
  const userDefinedYExtent = extentValue(yExtent);

  const xMin =
    userDefinedXExtent && userDefinedXExtent[0] !== undefined
      ? userDefinedXExtent[0]
      : calculatedXExtent[0];
  const xMax =
    userDefinedXExtent && userDefinedXExtent[1] !== undefined
      ? userDefinedXExtent[1]
      : calculatedXExtent[1];

  const yMin =
    userDefinedYExtent && userDefinedYExtent[0] !== undefined
      ? userDefinedYExtent[0]
      : calculatedYExtent[0];
  const yMax =
    userDefinedYExtent && userDefinedYExtent[1] !== undefined
      ? userDefinedYExtent[1]
      : calculatedYExtent[1];

  const finalYExtent = [yMin, yMax];
  const finalXExtent = [xMin, xMax];

  return {
    yExtent: finalYExtent,
    xExtent: finalXExtent
  };
};

const getFrameScopeExtent = plotChildren => {
  // frame scope scales
  return plotChildren
    .map(d => {
      const calculatedXExtent = extent(d.props.data, d.props.xAccessor);
      const calculatedYExtent = extent(d.props.data, d.props.yAccessor);

      return trimExtent({
        xExtent: d.props.xExtent,
        yExtent: d.props.yExtent,
        calculatedXExtent,
        calculatedYExtent
      });
    })
    .reduce((acc, cur) => {
      if (acc === null) {
        acc = Object.assign({}, cur);
      } else {
        acc.xExtent[0] = Math.min(acc.xExtent[0], cur.xExtent[0]);
        acc.xExtent[1] = Math.max(acc.xExtent[1], cur.xExtent[1]);
        acc.yExtent[0] = Math.min(acc.yExtent[0], cur.yExtent[0]);
        acc.yExtent[1] = Math.max(acc.yExtent[1], cur.yExtent[1]);
      }

      return acc;
    }, null);
};

export { getFrameScopeExtent };
