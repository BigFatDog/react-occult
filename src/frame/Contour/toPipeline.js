import { stringToFn } from '../../data/dataFunctions';
import createLines from '../../svg/behaviors/createLines';
import createAreas from '../../svg/behaviors/createArea';
import createPoints from '../../svg/behaviors/createPoints';

const emptyObjectReturnFunction = () => ({});
const emptyStringReturnFunction = () => '';

const toPipeline = ({
  projectedAreas,
  projectedPoints,
  areaStyle,
  useCanvas,
  customMarks,
  pointStyle
}) => {
  return {
    areas: {
      accessibleTransform: (data, i) => ({ ...data[i], type: 'frame-hover' }),
      data: projectedAreas,
      styleFn: stringToFn(areaStyle, emptyObjectReturnFunction, true),
      classFn: stringToFn(null, emptyStringReturnFunction, true),
      renderMode: stringToFn(null, undefined, true),
      canvasRender: stringToFn(useCanvas, undefined, true),
      customMark: customMarks,
      type: null,
      renderKeyFn: stringToFn(null, (d, i) => `area-${i}`, true),
      behavior: createAreas
    },
    points: {
      accessibleTransform: (data, i) => ({
        type: 'frame-hover',
        ...(data[i].data || data[i])
      }),
      data: projectedPoints,
      styleFn: stringToFn(pointStyle, emptyObjectReturnFunction, true),
      classFn: stringToFn(null, emptyStringReturnFunction, true),
      renderMode: stringToFn(null, undefined, true),
      canvasRender: stringToFn(useCanvas, undefined, true),
      customMark: customMarks,
      renderKeyFn: stringToFn(null, (d, i) => `point-${i}`, true),
      behavior: createPoints
    }
  };
};

export default toPipeline;
