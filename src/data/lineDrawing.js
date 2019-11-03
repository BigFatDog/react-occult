import { sum } from 'd3-array';

import { findFirstAccessorValue } from './multiAccessorUtils';

const datesForUnique = d => (d instanceof Date ? d.getTime() : d);

export const projectAreaData = ({
  data,
  areaDataAccessor,
  xAccessor,
  yAccessor
}) => {
  const projectedData = [];
  areaDataAccessor.forEach(actualAreaAccessor => {
    xAccessor.forEach(actualXAccessor => {
      yAccessor.forEach(actualYAccessor => {
        const projection = d =>
          actualAreaAccessor(d).map((p, q) => [
            actualXAccessor(p, q),
            actualYAccessor(p, q)
          ]);

        data.forEach(d => {
          projectedData.push({
            ...d,
            _baseData: actualAreaAccessor(d),
            _xyfCoordinates: projection(d)
          });
        });
      });
    });
  });

  return projectedData;
};

export const projectLineData = ({
  data,
  lineDataAccessor,
  xProp,
  yProp,
  yPropTop,
  yPropBottom,
  xAccessor,
  yAccessor
}) => {
  if (!Array.isArray(data)) {
    data = [data];
  }
  const projectedLine = [];

  lineDataAccessor.forEach((actualLineAccessor, lineIndex) => {
    xAccessor.forEach((actualXAccessor, xIndex) => {
      yAccessor.forEach((actualYAccessor, yIndex) => {
        data.forEach(d => {
          const originalLineData = { ...d, xIndex, yIndex, lineIndex };

          originalLineData.data = actualLineAccessor(d).map((p, q) => {
            const originalCoords = {};

            originalCoords[xProp] = actualXAccessor(p, q);
            originalCoords[yProp] = actualYAccessor(p, q);
            originalCoords[yPropTop] = originalCoords[yProp];
            originalCoords[yPropBottom] = originalCoords[yProp];
            originalCoords.data = p;

            return originalCoords;
          });
          originalLineData.key = originalLineData.key || projectedLine.length;
          projectedLine.push(originalLineData);
        });
      });
    });
  });

  return projectedLine;
};

export const differenceLine = ({ data, yProp, yPropTop, yPropBottom }) => {
  data.forEach((l, i) => {
    l.data.forEach((point, q) => {
      const otherLine = i === 0 ? 1 : 0;
      if (point[yProp] > data[otherLine].data[q][yProp]) {
        point[yPropBottom] = data[otherLine].data[q][yProp];
        point[yPropTop] = point[yProp];
      } else {
        point[yPropTop] = point[yProp];
        point[yPropBottom] = point[yProp];
      }
    });
  });

  return data;
};

export const stackedArea = ({
  type = 'stackedarea',
  data,
  xProp,
  yProp,
  yPropMiddle,
  sort,
  yPropTop,
  yPropBottom
}) => {
  const uniqXValues = data
    .map(d => d.data.map(p => datesForUnique(p[xProp])))
    .reduce((a, b) => a.concat(b), [])
    .reduce((p, c) => {
      if (p.indexOf(c) === -1) {
        p.push(c);
      }
      return p;
    }, []);

  let stackSort = (a, b) =>
    sum(b.data.map(p => p[yProp])) - sum(a.data.map(p => p[yProp]));
  if (type === 'stackedpercent-invert' || type === 'stackedarea-invert') {
    stackSort = (a, b) =>
      sum(a.data.map(p => p[yProp])) - sum(b.data.map(p => p[yProp]));
  }
  sort = sort === undefined ? stackSort : sort;

  if (sort !== null) {
    data = data.sort(sort);
  }

  uniqXValues.forEach(xValue => {
    let negativeOffset = 0;
    let positiveOffset = 0;
    const stepValues = data
      .map(d => d.data.filter(p => datesForUnique(p[xProp]) === xValue))
      .reduce((a, b) => a.concat(b), []);

    const positiveStepTotal = sum(
      stepValues.map(d => (d[yProp] > 0 ? d[yProp] : 0))
    );
    const negativeStepTotal = sum(
      stepValues.map(d => (d[yProp] < 0 ? d[yProp] : 0))
    );

    stepValues.forEach(l => {
      if (l[yProp] < 0) {
        if (
          type === 'linepercent' ||
          type === 'stackedpercent' ||
          type === 'stackedpercent-invert'
        ) {
          const percent = l[yProp] / negativeStepTotal;
          l.percent = percent;
          if (type === 'linepercent') {
            l[yPropBottom] = l[yPropBottom] = l[yPropTop] = l[
              yPropMiddle
            ] = percent;
          } else {
            const adjustment = negativeStepTotal >= 0 ? 0 : percent;
            l[yPropBottom] =
              negativeStepTotal === 0
                ? 0
                : -(negativeOffset / negativeStepTotal);
            l[yPropTop] = l[yPropBottom] - adjustment;
            l[yPropMiddle] = l[yPropBottom] - adjustment / 2;
          }
        } else {
          l[yPropBottom] = negativeOffset;
          l[yPropTop] = negativeOffset + l[yProp];
          l[yPropMiddle] = negativeOffset + l[yProp] / 2;
        }
        negativeOffset += l[yProp];
      } else {
        if (
          type === 'linepercent' ||
          type === 'stackedpercent' ||
          type === 'stackedpercent-invert'
        ) {
          const percent = l[yProp] / positiveStepTotal;
          l.percent = percent;

          if (type === 'linepercent') {
            l[yPropBottom] = l[yPropTop] = l[yPropMiddle] = percent;
          } else {
            const adjustment = positiveStepTotal <= 0 ? 0 : percent;
            l[yPropBottom] =
              positiveStepTotal === 0 ? 0 : positiveOffset / positiveStepTotal;
            l[yPropTop] = l[yPropBottom] + adjustment;
            l[yPropMiddle] = l[yPropBottom] + adjustment / 2;
          }
        } else {
          l[yPropBottom] = positiveOffset;
          l[yPropTop] = positiveOffset + l[yProp];
          l[yPropMiddle] = positiveOffset + l[yProp] / 2;
        }
        positiveOffset += l[yProp];
      }
    });
  });

  return data;
};

export const lineChart = ({ data, y1, yPropTop, yPropMiddle, yPropBottom }) => {
  if (y1) {
    data.forEach(d => {
      d.data.forEach(p => {
        p[yPropBottom] = y1(p);
        p[yPropMiddle] = p[yPropBottom] + p[yPropTop] / 2;
      });
    });
  }

  return data;
};

export const cumulativeLine = ({
  data,
  yPropTop,
  yPropMiddle,
  yPropBottom,
  type = 'cumulative'
}) => {
  data.forEach(d => {
    let cumulativeValue = 0;
    const dataArray = type === 'cumulative-reverse' ? d.data.reverse() : d.data;
    dataArray.forEach(p => {
      cumulativeValue += p[yPropTop];
      p[yPropBottom] = p[yPropTop] = p[yPropMiddle] = cumulativeValue;
    });
  });

  return data;
};

export const bumpChart = ({
  type = 'bumpline',
  data,
  xProp,
  yProp,
  yPropMiddle,
  yPropTop,
  yPropBottom
}) => {
  const uniqXValues = data
    .map(d => d.data.map(p => datesForUnique(p[xProp])))
    .reduce((a, b) => a.concat(b), [])
    .reduce((p, c) => {
      if (p.indexOf(c) === -1) {
        p.push(c);
      }
      return p;
    }, []);

  let bumpSort = (a, b) => {
    if (a[yProp] > b[yProp]) {
      return 1;
    }
    if (a[yProp] < b[yProp]) {
      return -1;
    }
    return -1;
  };
  if (type === 'bumparea-invert' || type === 'bumpline-invert') {
    bumpSort = (a, b) => {
      if (a[yProp] < b[yProp]) {
        return 1;
      }
      if (a[yProp] > b[yProp]) {
        return -1;
      }
      return -1;
    };
  }

  uniqXValues.forEach(xValue => {
    let negativeOffset = 0;
    let positiveOffset = 0;

    data
      .map(d => d.data.filter(p => datesForUnique(p[xProp]) === xValue))
      .reduce((a, b) => a.concat(b), [])
      .sort(bumpSort)
      .forEach((l, rank) => {
        //determine ranking and offset by the number of less than this one at each step
        l._XYFrameRank = rank + 1;
        if (type === 'bumparea' || type === 'bumparea-invert') {
          if (l[yProp] < 0) {
            l[yPropTop] = negativeOffset + l[yProp];
            l[yPropMiddle] = negativeOffset + l[yProp] / 2;
            l[yPropBottom] = negativeOffset;
            negativeOffset += l[yProp];
          } else {
            l[yPropTop] = positiveOffset + l[yProp];
            l[yPropMiddle] = positiveOffset + l[yProp] / 2;
            l[yPropBottom] = positiveOffset;
            positiveOffset += l[yProp];
          }
        } else {
          l[yProp] = rank + 1;
          l[yPropTop] = rank + 1;
          l[yPropBottom] = rank + 1;
        }
      });
  });

  return data;
};

export const dividedLine = (parameters, points, searchIterations = 10) => {
  let currentParameters = parameters(points[0], 0);
  let currentPointsArray = [];
  const dividedLinesData = [
    { key: currentParameters, points: currentPointsArray }
  ];
  points.forEach((point, pointI) => {
    const newParameters = parameters(point, pointI);

    let matchingParams = newParameters === currentParameters;
    const stringNewParams = JSON.stringify(newParameters);
    const stringCurrentParams = JSON.stringify(currentParameters);

    if (typeof currentParameters === 'object') {
      matchingParams = stringNewParams === stringCurrentParams;
    }

    if (matchingParams) {
      currentPointsArray.push(point);
    } else {
      const lastPoint = currentPointsArray[currentPointsArray.length - 1];
      let pointA = lastPoint;
      let pointB = point;
      let stringBParams = stringNewParams;

      let x = 0;
      while (x < searchIterations && stringNewParams === stringBParams) {
        const keys = Object.keys(pointA);
        const findPoints = simpleSearchFunction({
          pointA,
          pointB,
          currentParameters,
          parameters,
          keys
        });
        pointA = findPoints[0];
        pointB = findPoints[1];
        stringBParams = JSON.stringify(parameters(pointB));
        x++;
      }
      currentPointsArray.push(pointB);
      currentPointsArray = [pointB, point];
      dividedLinesData.push({ key: newParameters, points: currentPointsArray });
      currentParameters = newParameters;
    }
  });
  return dividedLinesData;
};

function simpleSearchFunction({
  pointA,
  pointB,
  currentParameters,
  parameters,
  keys
}) {
  const betweenPoint = {};
  keys.forEach(key => {
    betweenPoint[key] =
      typeof pointA[key] === 'number'
        ? (pointA[key] + pointB[key]) / 2
        : undefined;
  });
  const stringBetween = JSON.stringify(parameters(betweenPoint));
  const stringCurrent = JSON.stringify(currentParameters);

  if (stringBetween === stringCurrent) {
    return [betweenPoint, pointB];
  }
  return [pointA, betweenPoint];
}

export function funnelize({ data, steps, key }) {
  const funnelData = [];
  if (!Array.isArray(data)) {
    data = [data];
  }
  if (!steps) {
    steps = data.map(d => Object.keys(d)).reduce((a, b) => a.concat(b), []);
  }

  data.forEach((datum, i) => {
    const datumKey = key ? datum[key] : i;
    steps.forEach(step => {
      const funnelDatum = { funnelKey: datumKey, stepName: '', stepValue: 0 };
      funnelDatum.stepName = step;
      funnelDatum.stepValue = datum[step] ? datum[step] : 0;
      funnelData.push(funnelDatum);
    });
  });

  return funnelData;
}

export function relativeY({
  point,
  projectedYMiddle,
  projectedY,
  yAccessor,
  yScale
}) {
  const baseData =
    point &&
    (point[projectedYMiddle] !== undefined
      ? point[projectedYMiddle]
      : point[projectedY] !== undefined
      ? point[projectedY]
      : findFirstAccessorValue(yAccessor, point));

  if (Array.isArray(baseData)) {
    return baseData.map(d => yScale(d));
  }
  return baseData !== undefined ? yScale(baseData) : 0;
}

export function relativeX({
  point,
  projectedXMiddle,
  projectedX,
  xAccessor,
  xScale
}) {
  const baseData =
    point &&
    (point[projectedXMiddle] !== undefined
      ? point[projectedXMiddle]
      : point[projectedX] !== undefined
      ? point[projectedX]
      : findFirstAccessorValue(xAccessor, point));

  if (Array.isArray(baseData)) {
    return baseData.map(d => xScale(d));
  }
  return baseData !== undefined ? xScale(baseData) : 0;
}

export function findPointByID({
  point,
  idAccessor,
  lines,
  xScale,
  projectedX,
  xAccessor
}) {
  const pointID = idAccessor(point.parentLine || point);

  if (pointID) {
    const thisLine = lines.data.find(l => idAccessor(l) === pointID);

    if (!thisLine) {
      return null;
    }
    const thisPoint = thisLine.data.find(
      p =>
        xScale(p[projectedX]) ===
        xScale(findFirstAccessorValue(xAccessor, point))
    );

    if (!thisPoint) {
      return null;
    }

    const newPoint = {
      ...point,
      ...thisPoint,
      ...thisPoint.data,
      parentLine: thisLine
    };
    const reactAnnotationProps = [
      'type',
      'label',
      'note',
      'connector',
      'disabled',
      'color',
      'subject'
    ];

    reactAnnotationProps.forEach(prop => {
      if (point[prop]) newPoint[prop] = point[prop];
    });
    return newPoint;
  }
  return point;
}
