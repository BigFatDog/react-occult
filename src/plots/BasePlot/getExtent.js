import { extent } from 'd3-array';

const extentValue = extent =>
  (extent && extent.extent) || (Array.isArray(extent) && extent) || [];

const getExtent = ({ data, xExtent, yExtent, xAccessor, yAccessor }) => {
  const calculatedXExtent = extent(data, xAccessor);
  const calculatedYExtent = extent(data, yAccessor);

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
    finalYExtent,
    finalXExtent
  };
};

export default getExtent;
