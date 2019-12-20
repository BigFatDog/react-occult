import React from 'react';

import { curveLinearClosed, line } from 'd3-shape';

const dedupeRibbonPoints = (weight = 1) => (p, c) => {
  const l = p[p.length - 1];
  if (
    !l ||
    Math.round(l.x / weight) !== Math.round(c.x / weight) ||
    Math.round(l.y / weight) !== Math.round(c.y / weight)
  ) {
    p.push(c);
  }
  return p;
};

// FROM d3-svg-ribbon
const linearRibbon = () => {
  const _lineConstructor = line();
  let _xAccessor = function(d) {
    return d.x;
  };
  let _yAccessor = function(d) {
    return d.y;
  };
  let _rAccessor = function(d) {
    return d.r;
  };
  let _interpolator = curveLinearClosed;

  function _ribbon(pathData) {
    if (pathData.multiple) {
      const original_r = _rAccessor;
      const parallelTotal = pathData.multiple.reduce((p, c) => p + c.weight, 0);

      _rAccessor = () => parallelTotal;

      const totalPoints = buildRibbon(pathData.points);

      let currentPoints = totalPoints
        .filter(d => d.direction === 'forward')
        .reduce(dedupeRibbonPoints(), []);

      const allRibbons = [];

      pathData.multiple.forEach((siblingPath, siblingI) => {
        _rAccessor = () => siblingPath.weight;
        const currentRibbon = buildRibbon(currentPoints);
        allRibbons.push(currentRibbon);
        const nextSibling = pathData.multiple[siblingI + 1];

        if (nextSibling) {
          const currentLeftSide = currentRibbon
            .reverse()
            .filter(d => d.direction === 'back')
            .reduce(dedupeRibbonPoints(), []);

          _rAccessor = () => nextSibling.weight;

          const leftHandInflatedRibbon = buildRibbon(currentLeftSide);
          currentPoints = leftHandInflatedRibbon
            .reverse()
            .filter(d => d.direction === 'back')
            .reduce(dedupeRibbonPoints(), []);
        }
      });

      _rAccessor = original_r;
      return allRibbons.map(d =>
        _lineConstructor
          .x(_xAccessor)
          .y(_yAccessor)
          .curve(_interpolator)(d)
      );
    }
    const bothPoints = buildRibbon(pathData).reduce(dedupeRibbonPoints(), []);

    return _lineConstructor
      .x(_xAccessor)
      .y(_yAccessor)
      .curve(_interpolator)(bothPoints);
  }

  _ribbon.x = function(_value) {
    if (!arguments.length) return _xAccessor;

    _xAccessor = _value;
    return _ribbon;
  };

  _ribbon.y = function(_value) {
    if (!arguments.length) return _yAccessor;

    _yAccessor = _value;
    return _ribbon;
  };

  _ribbon.r = function(_value) {
    if (!arguments.length) return _rAccessor;

    _rAccessor = _value;
    return _ribbon;
  };

  _ribbon.interpolate = function(_value) {
    if (!arguments.length) return _interpolator;

    _interpolator = _value;
    return _ribbon;
  };

  return _ribbon;

  function offsetEdge(d) {
    const diffX = _yAccessor(d.target) - _yAccessor(d.source);
    const diffY = _xAccessor(d.target) - _xAccessor(d.source);

    const angle0 = Math.atan2(diffY, diffX) + Math.PI / 2;
    const angle1 = angle0 + Math.PI * 0.5;
    const angle2 = angle0 + Math.PI * 0.5;

    const x1 = _xAccessor(d.source) + _rAccessor(d.source) * Math.cos(angle1);
    const y1 = _yAccessor(d.source) - _rAccessor(d.source) * Math.sin(angle1);
    const x2 = _xAccessor(d.target) + _rAccessor(d.target) * Math.cos(angle2);
    const y2 = _yAccessor(d.target) - _rAccessor(d.target) * Math.sin(angle2);

    return { x1: x1, y1: y1, x2: x2, y2: y2 };
  }

  function buildRibbon(points) {
    const bothCode = [];
    let x = 0;
    let transformedPoints = { x1: 0, y1: 0, x2: 0, y2: 0 };

    while (x < points.length) {
      if (x !== points.length - 1) {
        transformedPoints = offsetEdge({
          source: points[x],
          target: points[x + 1]
        });
        const p1 = {
          x: transformedPoints.x1,
          y: transformedPoints.y1,
          direction: 'forward'
        };
        const p2 = {
          x: transformedPoints.x2,
          y: transformedPoints.y2,
          direction: 'forward'
        };
        bothCode.push(p1, p2);
        if (bothCode.length > 3) {
          const l = bothCode.length - 1;
          const lineA = { a: bothCode[l - 3], b: bothCode[l - 2] };
          const lineB = { a: bothCode[l - 1], b: bothCode[l] };
          const intersect = findIntersect(
            lineA.a.x,
            lineA.a.y,
            lineA.b.x,
            lineA.b.y,
            lineB.a.x,
            lineB.a.y,
            lineB.b.x,
            lineB.b.y
          );
          if (intersect.found === true) {
            lineA.b.x = intersect.x;
            lineA.b.y = intersect.y;
            lineB.a.x = intersect.x;
            lineB.a.y = intersect.y;
          }
        }
      }

      x++;
    }
    x--;
    //Back
    while (x >= 0) {
      if (x !== 0) {
        transformedPoints = offsetEdge({
          source: points[x],
          target: points[x - 1]
        });
        const p1 = {
          x: transformedPoints.x1,
          y: transformedPoints.y1,
          direction: 'back'
        };
        const p2 = {
          x: transformedPoints.x2,
          y: transformedPoints.y2,
          direction: 'back'
        };
        bothCode.push(p1, p2);
        if (bothCode.length > 3) {
          const l = bothCode.length - 1;
          const lineA = { a: bothCode[l - 3], b: bothCode[l - 2] };
          const lineB = { a: bothCode[l - 1], b: bothCode[l] };
          const intersect = findIntersect(
            lineA.a.x,
            lineA.a.y,
            lineA.b.x,
            lineA.b.y,
            lineB.a.x,
            lineB.a.y,
            lineB.b.x,
            lineB.b.y
          );
          if (intersect.found === true) {
            lineA.b.x = intersect.x;
            lineA.b.y = intersect.y;
            lineB.a.x = intersect.x;
            lineB.a.y = intersect.y;
          }
        }
      }

      x--;
    }

    return bothCode;
  }

  function findIntersect(l1x1, l1y1, l1x2, l1y2, l2x1, l2y1, l2x2, l2y2) {
    let a, b;

    const result = {
      x: null,
      y: null,
      found: false
    };

    const d = (l2y2 - l2y1) * (l1x2 - l1x1) - (l2x2 - l2x1) * (l1y2 - l1y1);
    if (d === 0) {
      return result;
    }
    a = l1y1 - l2y1;
    b = l1x1 - l2x1;
    const n1 = (l2x2 - l2x1) * a - (l2y2 - l2y1) * b;
    const n2 = (l1x2 - l1x1) * a - (l1y2 - l1y1) * b;
    a = n1 / d;
    b = n2 / d;

    result.x = l1x1 + a * (l1x2 - l1x1);
    result.y = l1y1 + a * (l1y2 - l1y1);

    if (a > 0 && a < 1 && b > 0 && b < 1) {
      result.found = true;
    }

    return result;
  }
};

export default linearRibbon;
