import groupData from '../data';
import {
  stackedArea,
  differenceLine,
  bumpline,
  line,
  cumulativeLine
} from './transform';

const differenceCatch = (olineType, data) =>
  olineType === 'difference' && data.length !== 2 ? 'line' : olineType;

const builtInTransformations = {
  stackedarea: stackedArea,
  'stackedarea-invert': stackedArea,
  stackedpercent: stackedArea,
  'stackedpercent-invert': stackedArea,
  linepercent: stackedArea,
  difference: differenceLine,
  bumparea: bumpline,
  bumpline: bumpline,
  'bumparea-invert': bumpline,
  line: line,
  area: line,
  cumulative: cumulativeLine,
  'cumulative-reverse': cumulativeLine
};

const objectifyType = type => {
  if (type instanceof Function || typeof type === 'string') {
    return { type: type };
  } else if (type === undefined) {
    return {};
  }
  return type;
};

const lineTransformation = lineType => data =>
  builtInTransformations[differenceCatch(lineType.type, data)]({
    ...lineType,
    data
  });

const lineProjection = ({
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints,
  lineType: userType
}) => {
  const { groupedData, projectedPoints } = groupData({
    data,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints
  });

  const lineType = objectifyType(userType);
  const projectedLines = lineTransformation(lineType)(groupedData.slice());

  return {
    projectedLines,
    projectedAreas: [],
    projectedPoints
  };
};

export default lineProjection;
