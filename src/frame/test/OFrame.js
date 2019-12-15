import React, { useEffect, useRef, useState } from 'react';
import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale';
import keyAndObjectifyBarData from './keyAndObjectifyBarData';
import PropTypes from 'prop-types';
import {
  generateFrameTitle,
  getAdjustedPositionSize,
  toMarginGraphic
} from '../utils';
import { extent, max, min, sum } from 'd3-array';
import { nest } from 'd3-collection';
import { arc } from 'd3-shape';
import {
  objectifyType,
  stringToArrayFn,
  stringToFn,
  orFrameAxisGenerator
} from './misc';

import {
  clusterBarLayout,
  barLayout,
  pointLayout,
  swarmLayout,
  timelineLayout
} from './oLayout';

import toPipeline from './toPipeline';

import drawSummaries from '../../axis/drawSummaries';
import SpanOrDiv from '../../widgets/SpanOrDiv';
import FilterDefs from '../../widgets/FilterDefs';
import VisualizationLayer from '../../layers/VisualizationLayer';
import InteractionLayer from '../../layers/InteractionLayer';

const genericFunction = value => () => value;

const midMod = d => (d.middle ? d.middle : 0);
const zeroFunction = genericFunction(0);
const twoPI = Math.PI * 2;

const pointOnArcAtAngle = (center, angle, distance) => {
  const radians = Math.PI * (angle + 0.75) * 2;

  const xPosition = center[0] + distance * Math.cos(radians);
  const yPosition = center[1] + distance * Math.sin(radians);

  return [xPosition, yPosition];
};

const naturalLanguageTypes = {
  bar: { items: 'bar', chart: 'bar chart' },
  clusterbar: { items: 'bar', chart: 'grouped bar chart' },
  swarm: { items: 'point', chart: 'swarm plot' },
  point: { items: 'point', chart: 'point plot' },
  timeline: { items: 'bar', chart: 'timeline' }
};

const getCanvasScale = context => {
  const devicePixelRatio = window.devicePixelRatio || 1;

  const backingStoreRatio =
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return devicePixelRatio / backingStoreRatio;
};

const defaultOverflow = { top: 0, bottom: 0, left: 0, right: 0 };

const layoutHash = {
  clusterbar: clusterBarLayout,
  bar: barLayout,
  point: pointLayout,
  swarm: swarmLayout,
  timeline: timelineLayout
};

const OrdinalFrame = props => {
  const {
    width,
    height,
    title: baseTitle,
    data,
    oScaleType,
    rScaleType,
    dynamicColumnWidth,
    className,
    oLabel,
    pixelColumnWidth,
    name,
    matte,
    interaction,
    customClickBehavior,
    customHoverBehavior,
    customDoubleClickBehavior,
    projection,
    backgroundGraphics,
    foregroundGraphics,
    afterElements,
    beforeElements,
    summaryRenderMode,
    summaryHoverAnnotation,
    connectorRenderMode,
    pieceHoverAnnotation,
    hoverAnnotation,
    canvasPostProcess,
    useSpans,
    pieceUseCanvas,
    summaryUseCanvas,
    connectorUseCanvas,
    connectorClass,
    additionalDefs,
    multiAxis,
    renderMode,
    oPadding: padding = 0,
    summaryType: baseSummaryType,
    type: baseType,
    connectorType: baseConnectorType,
    oAccessor: baseOAccessor,
    rAccessor: baseRAccessor,
    connectorStyle: baseConnectorStyle,
    style: baseStyle,
    rExtent: baseRExtent,
    oSort,
    sortO = oSort,
    pieceClass: basePieceClass,
    summaryStyle: baseSummaryStyle,
    summaryClass: baseSummaryClass,
    legend,
    renderKey: baseRenderKey,
    margin: baseMargin,
    oExtent: baseOExtent,
    axes,
    axis: baseAxis = axes,
    pieceIDAccessor: basePieceIDAccessor,
    summaryPosition: baseSummaryPosition,
    baseMarkProps = {},
    annotations
  } = props;

  const _mappedMiddles = (oScale, middleMax, padding) => {
    const oScaleDomainValues = oScale.domain();

    const mappedMiddles = {};
    oScaleDomainValues.forEach((p, q) => {
      const base = oScale(p) - padding;
      const next = oScaleDomainValues[q + 1]
        ? oScale(oScaleDomainValues[q + 1])
        : middleMax;
      const diff = (next - base) / 2;
      mappedMiddles[p] = base + diff;
    });

    return mappedMiddles;
  };

  const connectorStyle = stringToFn(baseConnectorStyle, () => ({}), true);
  const summaryStyle = stringToFn(baseSummaryStyle, () => ({}), true);

  const pieceStyle = stringToFn(baseStyle, () => ({}), true);
  const pieceClass = stringToFn(basePieceClass, () => '', true);
  const summaryClass = stringToFn(baseSummaryClass, () => '', true);
  const summaryPosition = baseSummaryPosition || (position => position);
  const title =
    typeof baseTitle === 'object' &&
    !React.isValidElement(baseTitle) &&
    baseTitle !== null
      ? baseTitle
      : { title: baseTitle, orient: 'top' };

  const pieceIDAccessor = stringToFn(basePieceIDAccessor, () => '');

  // OFrame variables
  const pieceType = objectifyType(baseType);
  const summaryType = objectifyType(baseSummaryType);
  const oAccessor = stringToArrayFn(baseOAccessor, d => d.renderKey);
  const rAccessor = stringToArrayFn(baseRAccessor, d => d.value || 1);
  const renderKey = stringToFn(baseRenderKey, (d, i) => i);

  const eventListenersGenerator = () => ({});

  let oLabels;
  const projectedColumns = {};

  // --------------- same as xy  - start
  const size = [width, height];
  const devicePixelRatio = window.devicePixelRatio || 1;

  const finalBackgroundGraphics =
    typeof backgroundGraphics === 'function'
      ? backgroundGraphics({ size, margin })
      : backgroundGraphics;

  const finalForegroundGraphics =
    typeof foregroundGraphics === 'function'
      ? foregroundGraphics({ size, margin })
      : foregroundGraphics;

  const userTitle =
    typeof title === 'object' && !React.isValidElement(title) && title !== null
      ? title
      : { title, orient: 'top' };
  const generatedTitle = generateFrameTitle({
    title: userTitle,
    size
  });

  const margin =
    typeof baseMargin !== 'object'
      ? {
          top: baseMargin,
          bottom: baseMargin,
          left: baseMargin,
          right: baseMargin
        }
      : Object.assign({ top: 0, bottom: 0, left: 0, right: 0 }, baseMargin);

  const marginGraphic = toMarginGraphic({ matte, size, margin, name });

  const { adjustedPosition, adjustedSize } = getAdjustedPositionSize({
    size: [width, height],
    margin
  });

  console.log('-----------------');
  // --------------- same as xy  - close

  const originalRAccessor = Array.isArray(baseRAccessor)
    ? baseRAccessor
    : [baseRAccessor];

  const originalOAccessor = Array.isArray(baseOAccessor)
    ? baseOAccessor
    : [baseOAccessor];

  const { allData, multiExtents } = keyAndObjectifyBarData({
    data,
    renderKey,
    oAccessor,
    rAccessor,
    originalRAccessor,
    originalOAccessor,
    multiAxis
  });

  let arrayWrappedAxis;

  if (Array.isArray(baseAxis)) {
    arrayWrappedAxis = baseAxis.map(axisFnOrObject =>
      typeof axisFnOrObject === 'function'
        ? axisFnOrObject({ size })
        : axisFnOrObject
    );
  } else if (baseAxis) {
    arrayWrappedAxis = [baseAxis].map(axisFnOrObject =>
      typeof axisFnOrObject === 'function'
        ? axisFnOrObject({ size })
        : axisFnOrObject
    );
  }

  if (multiExtents && baseAxis) {
    arrayWrappedAxis.forEach((d, i) => {
      d.extentOverride = multiExtents[i];
    });
  }

  const oExtentSettings =
    baseOExtent === undefined || Array.isArray(baseOExtent)
      ? { extent: baseOExtent }
      : baseOExtent;

  const calculatedOExtent = allData.reduce((p, c) => {
    const baseOValue = c.column;
    const oValue = baseOValue !== undefined ? String(baseOValue) : baseOValue;

    if (p.indexOf(oValue) === -1) {
      p.push(oValue);
    }
    return p;
  }, []);

  let oExtent = oExtentSettings.extent || calculatedOExtent;

  if (pieceType.type === 'barpercent') {
    const oExtentSums = oExtent
      .map(d =>
        allData
          .filter(p => String(p.column) === d)
          .reduce((p, c) => p + c.value, 0)
      )
      .reduce((p, c, i) => {
        p[oExtent[i]] = c;
        return p;
      }, {});

    allData.forEach(d => {
      d.value = (oExtentSums[d.column] && d.value / oExtentSums[d.column]) || 0;
    });

    pieceType.type = 'bar';
  }

  if (pixelColumnWidth) {
    if (projection === 'radial') {
      console.error('pixelColumnWidth is not honored in radial mode');
    } else if (projection === 'vertical') {
      adjustedSize[0] = oExtent.length * pixelColumnWidth;
    } else {
      adjustedSize[1] = oExtent.length * pixelColumnWidth;
    }
  }

  const oDomain = (projection === 'vertical' && [0, adjustedSize[0]]) || [
    0,
    adjustedSize[1]
  ];

  const cwHash = oExtent.reduce(
    (p, c) => {
      p[c] = (1 / oExtent.length) * oDomain[1];
      p.total += p[c];
      return p;
    },
    { total: 0 }
  );

  const castOScaleType = oScaleType;

  const oScale = dynamicColumnWidth ? scaleOrdinal() : castOScaleType();

  oScale.domain(oExtent);

  let maxColumnValues;

  if (dynamicColumnWidth) {
    let columnValueCreator;
    if (typeof dynamicColumnWidth === 'string') {
      columnValueCreator = d => sum(d.map(p => p.data[dynamicColumnWidth]));
    } else {
      columnValueCreator = d => dynamicColumnWidth(d.map(p => p.data));
    }
    const thresholdDomain = [0];
    maxColumnValues = 0;
    const columnValues = [];

    oExtent.forEach(d => {
      const oValues = allData.filter(p => p.column === d);
      const columnValue = columnValueCreator(oValues);

      columnValues.push(columnValue);
      maxColumnValues += columnValue;
    });

    cwHash.total = 0;
    oExtent.forEach((d, i) => {
      const oValue = columnValues[i];
      const stepValue = (oValue / maxColumnValues) * (oDomain[1] - oDomain[0]);
      cwHash[d] = stepValue;
      cwHash.total += stepValue;
      if (i !== oExtent.length - 1) {
        thresholdDomain.push(stepValue + thresholdDomain[i]);
      }
    });
    oScale.range(thresholdDomain);
  } else {
    oScale.range(oDomain);
  }

  const rExtentSettings =
    baseRExtent === undefined || Array.isArray(baseRExtent)
      ? { extent: baseRExtent, onChange: undefined, includeAnnotations: false }
      : baseRExtent;

  let rExtent = rExtentSettings.extent;
  let subZeroRExtent = [0, 0];

  if (
    pieceType.type === 'bar' &&
    summaryType.type &&
    summaryType.type !== 'none'
  ) {
    pieceType.type = 'none';
  }

  const annotationsForExtent = [];

  if (rExtentSettings.includeAnnotations && annotations) {
    rAccessor.forEach(actualRAccessor => {
      annotations.forEach((annotation, annotationIndex) => {
        const r = actualRAccessor(annotation, annotationIndex);
        if (isFinite(r)) {
          annotationsForExtent.push(r);
        }
      });
    });
  }

  if (pieceType.type === 'timeline') {
    const rData = allData.map(d => d.value);
    const leftExtent = extent(rData.map(d => d[0]));
    const rightExtent = extent(rData.map(d => d[1]));
    rExtent = extent([...leftExtent, ...rightExtent, ...annotationsForExtent]);
  } else if (pieceType.type !== 'bar') {
    rExtent = extent([...allData.map(d => d.value), ...annotationsForExtent]);
  } else {
    const positiveData = allData.filter(d => d.value >= 0);
    const negativeData = allData.filter(d => d.value < 0);

    const nestedPositiveData = nest()
      .key(d => d.column)
      .rollup(leaves => sum(leaves.map(d => d.value)))
      .entries(positiveData);

    const nestedNegativeData = nest()
      .key(d => d.column)
      .rollup(leaves => sum(leaves.map(d => d.value)))
      .entries(negativeData);

    const positiveAnnotations = annotationsForExtent.filter(d => d > 0);

    rExtent = [
      0,
      nestedPositiveData.length === 0 && positiveAnnotations.length === 0
        ? 0
        : Math.max(
            max([
              ...nestedPositiveData.map(d => d.value),
              ...positiveAnnotations
            ]),
            0
          )
    ];

    const negativeAnnotations = annotationsForExtent.filter(d => d < 0);

    subZeroRExtent = [
      0,
      nestedNegativeData.length === 0
        ? 0
        : Math.min(
            min([
              ...nestedNegativeData.map(d => d.value),
              ...negativeAnnotations
            ]),
            0
          )
    ];
    rExtent = [subZeroRExtent[1], rExtent[1]];
  }

  if ((pieceType.type === 'clusterbar' || multiAxis) && rExtent[0] > 0) {
    rExtent[0] = 0;
  }

  const calculatedRExtent = rExtent;

  if (
    rExtentSettings.extent &&
    rExtentSettings.extent[0] !== undefined &&
    rExtentSettings.extent[1] !== undefined
  ) {
    rExtent = rExtentSettings.extent;
  } else {
    if (
      rExtentSettings.extent &&
      rExtentSettings.extent[1] !== undefined &&
      rExtentSettings.extent[0] === undefined
    ) {
      rExtent[1] = rExtentSettings.extent[1];
    }

    if (
      rExtentSettings.extent &&
      rExtentSettings.extent[0] !== undefined &&
      rExtentSettings.extent[1] === undefined
    ) {
      rExtent[0] = rExtentSettings.extent[0];
    }
  }

  if (
    props.invertR ||
    (rExtentSettings.extent &&
      rExtentSettings.extent[0] > rExtentSettings.extent[1])
  ) {
    rExtent = [rExtent[1], rExtent[0]];
  }

  const nestedPieces = {};
  nest()
    .key(d => d.column)
    .entries(allData)
    .forEach(d => {
      nestedPieces[d.key] = d.values;
    });

  if (sortO !== undefined) {
    oExtent = oExtent.sort((a, b) =>
      sortO(
        a,
        b,
        nestedPieces[a].map(d => d.data),
        nestedPieces[b].map(d => d.data)
      )
    );

    oScale.domain(oExtent);
  }

  const rDomain = (projection === 'vertical' && [0, adjustedSize[1]]) || [
    0,
    adjustedSize[0]
  ];

  const castRScaleType = rScaleType;

  const instantiatedRScaleType = rScaleType.domain
    ? rScaleType
    : castRScaleType();

  const rScale = instantiatedRScaleType
    .copy()
    .domain(rExtent)
    .range(rDomain);

  const rScaleReverse = instantiatedRScaleType
    .copy()
    .domain(rDomain)
    .range(rDomain.reverse());

  const rScaleVertical = instantiatedRScaleType
    .copy()
    .domain(rExtent)
    .range(rDomain);

  const columnWidth = cwHash ? 0 : oScale.bandwidth();

  let pieceData = [];

  let mappedMiddleSize = adjustedSize[1];
  if (projection === 'vertical') {
    mappedMiddleSize = adjustedSize[0];
  }
  const mappedMiddles = _mappedMiddles(oScale, mappedMiddleSize, padding);

  pieceData = oExtent.map(d => (nestedPieces[d] ? nestedPieces[d] : []));

  const zeroValue =
    projection === 'vertical' ? rScaleReverse(rScale(0)) : rScale(0);

  oExtent.forEach((o, i) => {
    projectedColumns[o] = {
      name: o,
      padding,
      pieceData: pieceData[i],
      pieces: pieceData[i]
    };
    projectedColumns[o].x = oScale(o) + padding / 2;
    projectedColumns[o].y = 0;
    projectedColumns[o].middle = mappedMiddles[o] + padding / 2;

    let negativeOffset = zeroValue;
    let positiveOffset = zeroValue;

    let negativeBaseValue = 0;
    let positiveBaseValue = 0;

    projectedColumns[o].pieceData.forEach(piece => {
      let valPosition;

      if (pieceType.type === 'timeline') {
        piece.scaledValue = rScale(piece.value[0]);
        piece.scaledEndValue = rScale(piece.value[1]);
        piece.scaledVerticalValue = rScaleVertical(piece.value[0]);
      } else if (pieceType.type !== 'bar' && pieceType.type !== 'clusterbar') {
        piece.scaledValue = rScale(piece.value);
        piece.scaledVerticalValue = rScaleVertical(piece.value);
      } else if (pieceType.type === 'clusterbar') {
        valPosition =
          projection === 'vertical'
            ? rScaleReverse(rScale(piece.value))
            : rScale(piece.value);
        piece.scaledValue = Math.abs(zeroValue - valPosition);
      }

      piece.x = projectedColumns[o].x;
      if (piece.value >= 0) {
        if (pieceType.type === 'bar') {
          piece.scaledValue =
            projection === 'vertical'
              ? positiveOffset -
                rScaleReverse(rScale(positiveBaseValue + piece.value))
              : rScale(positiveBaseValue + piece.value) - positiveOffset;

          positiveBaseValue += piece.value;
        }
        piece.base = zeroValue;
        piece.bottom = pieceType.type === 'bar' ? positiveOffset : 0;
        piece.middle = piece.scaledValue / 2 + positiveOffset;
        positiveOffset =
          projection === 'vertical'
            ? positiveOffset - piece.scaledValue
            : positiveOffset + piece.scaledValue;
        piece.negative = false;
      } else {
        if (pieceType.type === 'bar') {
          piece.scaledValue =
            projection === 'vertical'
              ? Math.abs(rScale(piece.value) - rScale(0))
              : Math.abs(rScale(piece.value) - zeroValue);

          negativeBaseValue += piece.value;
        }
        piece.base = zeroValue;
        piece.bottom = pieceType.type === 'bar' ? negativeOffset : 0;
        piece.middle = negativeOffset - piece.scaledValue / 2;
        negativeOffset =
          projection === 'vertical'
            ? negativeOffset + piece.scaledValue
            : negativeOffset - piece.scaledValue;
        piece.negative = true;
      }
    });

    if (cwHash) {
      projectedColumns[o].width = cwHash[o] - padding;

      if (props.ordinalAlign === 'center') {
        if (i === 0) {
          projectedColumns[o].x =
            projectedColumns[o].x - projectedColumns[o].width / 2;
          projectedColumns[o].middle =
            projectedColumns[o].middle - projectedColumns[o].width / 2;
        } else {
          projectedColumns[o].x =
            projectedColumns[oExtent[i - 1]].x +
            projectedColumns[oExtent[i - 1]].width;
          projectedColumns[o].middle =
            projectedColumns[o].x + projectedColumns[o].width / 2;
        }
      }

      projectedColumns[o].pct = cwHash[o] / cwHash.total;
      projectedColumns[o].pct_start =
        (projectedColumns[o].x - oDomain[0]) / cwHash.total;
      projectedColumns[o].pct_padding = padding / cwHash.total;
      projectedColumns[o].pct_middle =
        (projectedColumns[o].middle - oDomain[0]) / cwHash.total;
    } else {
      projectedColumns[o].width = columnWidth - padding;
      if (props.ordinalAlign === 'center') {
        projectedColumns[o].x =
          projectedColumns[o].x - projectedColumns[o].width / 2;
        projectedColumns[o].middle =
          projectedColumns[o].middle - projectedColumns[o].width / 2;
      }

      projectedColumns[o].pct = columnWidth / adjustedSize[1];
      projectedColumns[o].pct_start =
        (projectedColumns[o].x - oDomain[0]) / adjustedSize[1];
      projectedColumns[o].pct_padding = padding / adjustedSize[1];
      projectedColumns[o].pct_middle =
        (projectedColumns[o].middle - oDomain[0]) / adjustedSize[1];
    }
  });

  const labelArray = [];

  const pieArcs = [];

  const labelSettings =
    typeof oLabel === 'object'
      ? Object.assign({ label: true, padding: 5 }, oLabel)
      : { orient: 'default', label: oLabel, padding: 5 };

  if (oLabel || hoverAnnotation) {
    const offsetPct =
      (pieceType.offsetAngle && pieceType.offsetAngle / 360) || 0;

    const rangePct = (pieceType.angleRange &&
      pieceType.angleRange.map(d => d / 360)) || [0, 1];
    const rangeMod = rangePct[1] - rangePct[0];

    const adjustedPct =
      rangeMod < 1
        ? scaleLinear()
            .domain([0, 1])
            .range(rangePct)
        : d => d;

    oExtent.forEach(d => {
      const arcGenerator = arc()
        .innerRadius(0)
        .outerRadius(rScale.range()[1] / 2);

      const angle = projectedColumns[d].pct * rangeMod;
      const startAngle = adjustedPct(projectedColumns[d].pct_start + offsetPct);

      const endAngle = startAngle + angle;
      const midAngle = startAngle + angle / 2;

      const markD = arcGenerator({
        startAngle: startAngle * twoPI,
        endAngle: endAngle * twoPI
      });
      const translate = [adjustedSize[0] / 2, adjustedSize[1] / 2];
      const centroid = arcGenerator.centroid({
        startAngle: startAngle * twoPI,
        endAngle: endAngle * twoPI
      });

      const addedPadding =
        centroid[1] > 0 &&
        (!labelSettings.orient ||
          labelSettings.orient === 'default' ||
          labelSettings.orient === 'edge')
          ? 8
          : 0;

      const outerPoint = pointOnArcAtAngle(
        [0, 0],
        midAngle,
        rScale.range()[1] / 2 + labelSettings.padding + addedPadding
      );

      pieArcs.push({
        startAngle,
        endAngle,
        midAngle,
        markD,
        translate,
        centroid,
        outerPoint
      });
    });
  }

  if (props.oLabel) {
    let labelingFn;
    if (labelSettings.label === true) {
      const labelStyle = {
        textAnchor: 'middle'
      };
      if (projection === 'horizontal' && labelSettings.orient === 'right') {
        labelStyle.textAnchor = 'start';
      } else if (projection === 'horizontal') {
        labelStyle.textAnchor = 'end';
      }

      labelingFn = (d, p, i) => {
        const additionalStyle = {};
        let transformRotate;

        if (projection === 'radial' && labelSettings.orient === 'stem') {
          transformRotate = `rotate(${
            pieArcs[i].outerPoint[0] < 0
              ? pieArcs[i].midAngle * 360 + 90
              : pieArcs[i].midAngle * 360 - 90
          })`;
        } else if (
          projection === 'radial' &&
          labelSettings.orient !== 'center'
        ) {
          transformRotate = `rotate(${
            pieArcs[i].outerPoint[1] < 0
              ? pieArcs[i].midAngle * 360
              : pieArcs[i].midAngle * 360 + 180
          })`;
        }
        if (
          projection === 'radial' &&
          labelSettings.orient === 'stem' &&
          ((pieArcs[i].outerPoint[0] > 0 && labelSettings.padding < 0) ||
            (pieArcs[i].outerPoint[0] < 0 && labelSettings.padding >= 0))
        ) {
          additionalStyle.textAnchor = 'end';
        } else if (projection === 'radial' && labelSettings.orient === 'stem') {
          additionalStyle.textAnchor = 'start';
        }
        return (
          <text
            {...labelStyle}
            {...additionalStyle}
            transform={transformRotate}
          >
            {d}
          </text>
        );
      };
    } else if (typeof labelSettings.label === 'function') {
      labelingFn = labelSettings.label;
    }

    oExtent.forEach((d, i) => {
      let xPosition = projectedColumns[d].middle;
      let yPosition = 0;

      if (projection === 'horizontal') {
        yPosition = projectedColumns[d].middle;
        if (labelSettings.orient === 'right') {
          xPosition = adjustedSize[0] + 3;
        } else {
          xPosition = -3;
        }
      } else if (projection === 'radial') {
        if (labelSettings.orient === 'center') {
          xPosition = pieArcs[i].centroid[0] + pieArcs[i].translate[0];
          yPosition = pieArcs[i].centroid[1] + pieArcs[i].translate[1];
        } else {
          xPosition = pieArcs[i].outerPoint[0] + pieArcs[i].translate[0];
          yPosition = pieArcs[i].outerPoint[1] + pieArcs[i].translate[1];
        }
      }

      const label = labelingFn(
        d,
        projectedColumns[d].pieceData.map(d => d.data),
        i
        //          ,{ arc: pieArcs[i], data: projectedColumns[d] }
      );
      labelArray.push(
        <g
          key={`olabel-${i}`}
          transform={`translate(${xPosition},${yPosition})`}
        >
          {label}
        </g>
      );
    });

    if (projection === 'vertical') {
      let labelY;
      if (labelSettings.orient === 'top') {
        labelY = -15;
      } else {
        labelY = 15 + rScale.range()[1];
      }
      oLabels = (
        <g
          key="ordinalframe-labels-container"
          className="ordinal-labels"
          transform={`translate(${margin.left},${labelY + margin.top})`}
        >
          {labelArray}
        </g>
      );
    } else if (projection === 'horizontal') {
      oLabels = (
        <g
          key="ordinalframe-labels-container"
          className="ordinal-labels"
          transform={`translate(${margin.left},${margin.top})`}
        >
          {labelArray}
        </g>
      );
    } else if (projection === 'radial') {
      oLabels = (
        <g
          key="ordinalframe-labels-container"
          className="ordinal-labels"
          transform={`translate(${margin.left},${margin.top})`}
        >
          {labelArray}
        </g>
      );
    }
  }

  let columnOverlays;

  if (props.hoverAnnotation) {
    columnOverlays = oExtent.map((d, i) => {
      const barColumnWidth = projectedColumns[d].width;
      let xPosition = projectedColumns[d].x;
      let yPosition = 0;
      let height = rScale.range()[1];
      let width = barColumnWidth + padding;
      if (projection === 'horizontal') {
        yPosition = projectedColumns[d].x;
        xPosition = 0;
        width = rScale.range()[1];
        height = barColumnWidth;
      }

      if (projection === 'radial') {
        const { markD, centroid, translate, midAngle } = pieArcs[i];
        const radialMousePackage = {
          type: 'column-hover',
          column: projectedColumns[d],
          pieces: projectedColumns[d].pieceData,
          summary: projectedColumns[d].pieceData,
          arcAngles: {
            centroid,
            translate,
            midAngle,
            length: rScale.range()[1] / 2
          }
        };
        return {
          markType: 'path',
          key: `hover${d}`,
          d: markD,
          transform: `translate(${translate.join(',')})`,
          style: { opacity: 0, fill: 'pink' },
          overlayData: radialMousePackage,
          onDoubleClick:
            customDoubleClickBehavior &&
            (() => {
              customDoubleClickBehavior(radialMousePackage);
            }),
          onClick:
            customClickBehavior &&
            (() => {
              customClickBehavior(radialMousePackage);
            }),
          onMouseEnter:
            customHoverBehavior &&
            (() => {
              customHoverBehavior(radialMousePackage);
            }),
          onMouseLeave:
            customHoverBehavior &&
            (() => {
              customHoverBehavior();
            })
        };
      }

      const baseMousePackage = {
        type: 'column-hover',
        column: projectedColumns[d],
        pieces: projectedColumns[d].pieceData,
        summary: projectedColumns[d].pieceData
      };
      return {
        markType: 'rect',
        key: `hover-${d}`,
        x: xPosition,
        y: yPosition,
        height: height,
        width: width,
        style: { opacity: 0, stroke: 'black', fill: 'pink' },
        onDoubleClick:
          customDoubleClickBehavior &&
          (() => {
            customDoubleClickBehavior(baseMousePackage);
          }),
        onClick:
          customClickBehavior &&
          (() => {
            customClickBehavior(baseMousePackage);
          }),
        onMouseEnter:
          customHoverBehavior &&
          (() => {
            customHoverBehavior(baseMousePackage);
          }),
        onMouseLeave: () => ({}),
        overlayData: baseMousePackage
      };
    });
  }

  let pieceDataXY;

  const pieceTypeForXY =
    pieceType.type && pieceType.type !== 'none' ? pieceType.type : 'point';
  const pieceTypeLayout =
    typeof pieceTypeForXY === 'function'
      ? pieceTypeForXY
      : layoutHash[pieceTypeForXY];

  const calculatedPieceData = pieceTypeLayout({
    type: pieceType,
    data: projectedColumns,
    renderMode: stringToFn(renderMode, undefined, true),
    eventListenersGenerator,
    styleFn: pieceStyle,
    projection,
    classFn: pieceClass,
    adjustedSize,
    chartSize: size,
    margin,
    rScale,
    baseMarkProps
  });

  const keyedData = calculatedPieceData.reduce((p, c) => {
    if (c.o) {
      if (!p[c.o]) {
        p[c.o] = [];
      }
      p[c.o].push(c);
    }
    return p;
  }, {});

  Object.keys(projectedColumns).forEach(d => {
    projectedColumns[d].xyData = keyedData[d] || [];
  });
  let calculatedSummaries = {};

  if (summaryType.type && summaryType.type !== 'none') {
    calculatedSummaries = drawSummaries({
      data: projectedColumns,
      type: summaryType,
      renderMode: stringToFn(summaryRenderMode, undefined, true),
      styleFn: stringToFn(summaryStyle, () => ({}), true),
      classFn: stringToFn(summaryClass, () => '', true),
      //        canvasRender: stringToFn<boolean>(summaryUseCanvas, undefined, true),
      positionFn: summaryPosition,
      projection,
      eventListenersGenerator,
      adjustedSize,
      baseMarkProps,
      //        chartSize: size,
      margin
    });

    calculatedSummaries.originalData = projectedColumns;
  }

  const yMod = projection === 'horizontal' ? midMod : zeroFunction;
  const xMod = projection === 'vertical' ? midMod : zeroFunction;
  const basePieceData = calculatedPieceData
    .map(d => {
      if (d.piece && d.xy) {
        return {
          ...d.piece,
          type: 'frame-hover',
          x: d.xy.x + xMod(d.xy),
          y: d.xy.y + yMod(d.xy)
        };
      }
      return null;
    })
    .filter(d => d);

  if (
    (pieceHoverAnnotation &&
      ['bar', 'clusterbar', 'timeline'].indexOf(pieceType.type) === -1) ||
    summaryHoverAnnotation
  ) {
    if (summaryHoverAnnotation && calculatedSummaries.xyPoints) {
      pieceDataXY = calculatedSummaries.xyPoints.map(d =>
        Object.assign({}, d, {
          type: 'frame-hover',
          isSummaryData: true,
          x: d.x,
          y: d.y
        })
      );
    } else if (pieceHoverAnnotation && calculatedPieceData) {
      pieceDataXY = basePieceData;
    }
  }

  const { axis, axesTickLines } = orFrameAxisGenerator({
    axis: arrayWrappedAxis,
    data: allData,
    projection,
    adjustedSize,
    size,
    rScale,
    rScaleType: instantiatedRScaleType.copy(),
    pieceType,
    rExtent,
    maxColumnValues,
    xyData: basePieceData,
    margin
  });

  if (
    pieceHoverAnnotation &&
    ['bar', 'clusterbar', 'timeline'].indexOf(pieceType.type) !== -1
  ) {
    const yMod = projection === 'horizontal' ? midMod : zeroFunction;
    const xMod = projection === 'vertical' ? midMod : zeroFunction;

    columnOverlays = calculatedPieceData.map((d, i) => {
      const mousePackage = {
        ...d.piece,
        x: d.xy.x + xMod(d.xy),
        y: d.xy.y + yMod(d.xy)
      };
      if (React.isValidElement(d.renderElement)) {
        return {
          renderElement: d.renderElement,
          overlayData: mousePackage
        };
      }
      return {
        ...d.renderElement,
        key: `hover-${i}`,
        type: 'frame-hover',
        style: { opacity: 0, stroke: 'black', fill: 'pink' },
        overlayData: mousePackage,
        onClick:
          customClickBehavior &&
          (() => {
            customClickBehavior(mousePackage.data);
          }),
        onDoubleClick:
          customDoubleClickBehavior &&
          (() => {
            customDoubleClickBehavior(mousePackage.data);
          }),
        onMouseEnter:
          customHoverBehavior &&
          (() => {
            customHoverBehavior(mousePackage.data);
          }),
        onMouseLeave:
          customHoverBehavior &&
          (() => {
            customHoverBehavior();
          })
      };
    });
  }

  const typeAriaLabel = (pieceType.type !== undefined &&
    typeof pieceType.type !== 'function' &&
    naturalLanguageTypes[pieceType.type]) || {
    items: 'piece',
    chart: 'ordinal chart'
  };

  const { svgPipe, canvasPipe } = toPipeline({
    pieceType: objectifyType(baseType),
    pieceData: calculatedPieceData,
    pieceUseCanvas,
    pieceStyle: stringToFn(pieceStyle, () => ({}), true),
    pieceClass: stringToFn(pieceClass, () => '', true),
    connectorType: objectifyType(baseConnectorType),
    connectorData: keyedData,
    connectorStyle: stringToFn(connectorStyle, () => ({}), true),
    connectorClass: stringToFn(connectorClass, () => '', true),
    connectorUseCanvas,
    connectorRenderMode: stringToFn(connectorRenderMode, undefined, true),

    projection,
    ariaLabel: typeAriaLabel,
    axis: arrayWrappedAxis,
  });

  const svgPipeline = [...svgPipe, ...(calculatedSummaries.marks || [])];
  const canvasPipeline = canvasPipe.slice();

  console.log(canvasPipeline);
  if (
    rExtentSettings.onChange &&
    (calculatedRExtent || []).join(',') !== (calculatedRExtent || []).join(',')
  ) {
    rExtentSettings.onChange(calculatedRExtent);
  }

  if (
    oExtentSettings.onChange &&
    (calculatedOExtent || []).join(',') !== (calculatedOExtent || []).join(',')
  ) {
    oExtentSettings.onChange(calculatedOExtent);
  }

  const frontCanvasRef = useRef(null);
  const backCanvasRef = useRef(null);
  const [frontCanvas, setFrontCanvas] = useState(null);
  const [backCanvas, setBackCanvas] = useState(null);
  const [voronoiHover, setVoronoiHover] = useState(null);

  const updateCanvas = () => {
    if (frontCanvasRef && frontCanvasRef.current) {
      const _frontContext = frontCanvasRef.current.getContext('2d');
      const canvasScale = getCanvasScale(_frontContext);
      _frontContext.scale(canvasScale, canvasScale);
      setFrontCanvas(frontCanvasRef.current);
    }

    if (backCanvasRef && backCanvasRef.current) {
      const _backContext = backCanvasRef.current.getContext('2d');

      _backContext.mozImageSmoothingEnabled = false;
      _backContext.webkitImageSmoothingEnabled = false;
      _backContext.msImageSmoothingEnabled = false;
      _backContext.imageSmoothingEnabled = false;

      const canvasScale = getCanvasScale(_backContext);
      _backContext.scale(canvasScale, canvasScale);
      setBackCanvas(backCanvasRef.current);
    }
  };

  useEffect(() => {
    updateCanvas();
  }, []);
  const frameKey = '0';
  const frameXScale = null;
  const frameYScale = null;
  const screenCoordinates = [];
  const annotationLayer = null;
  const disableCanvasInteraction = true;

  let interactionOverflow;

  if (summaryType && summaryType.amplitude) {
    if (projection === 'horizontal') {
      interactionOverflow = {
        top: summaryType.amplitude,
        bottom: 0,
        left: 0,
        right: 0
      };
    } else if (projection === 'radial') {
      interactionOverflow = defaultOverflow;
    } else {
      interactionOverflow = {
        top: 0,
        bottom: 0,
        left: summaryType.amplitude,
        right: 0
      };
    }
  }

  return (
    <SpanOrDiv span={useSpans} className={`${className} frame ${name}`}>
      {beforeElements && (
        <SpanOrDiv span={useSpans} className={`${name} frame-before-elements`}>
          {beforeElements}
        </SpanOrDiv>
      )}
      <SpanOrDiv
        span={useSpans}
        className="frame-elements"
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        <SpanOrDiv
          span={useSpans}
          className="visualization-layer"
          style={{ position: 'absolute' }}
        >
          {(axesTickLines || backgroundGraphics) && (
            <svg
              className="background-graphics"
              style={{ position: 'absolute' }}
              width={width}
              height={height}
            >
              {backgroundGraphics && (
                <g aria-hidden={true} className="background-graphics">
                  {finalBackgroundGraphics}
                </g>
              )}
              {axesTickLines && (
                <g
                  transform={`translate(${margin.left},${margin.top})`}
                  key="visualization-tick-lines"
                  className={'axis axis-tick-lines'}
                  aria-hidden={true}
                >
                  {axesTickLines}
                </g>
              )}
            </svg>
          )}
          <canvas
            className="frame-canvas frame-canvas-front"
            ref={frontCanvasRef}
            style={{
              position: 'absolute',
              left: `0px`,
              top: `0px`,
              width: `${width}px`,
              height: `${height}px`
            }}
            width={width * devicePixelRatio}
            height={height * devicePixelRatio}
          />

          <canvas
            className="frame-canvas frame-canvas-hidden"
            ref={backCanvasRef}
            style={{
              position: 'absolute',
              left: `0px`,
              top: `0px`,
              width: `${width}px`,
              height: `${height}px`
            }}
            width={width * devicePixelRatio}
            height={height * devicePixelRatio}
          />
          <svg
            className="visualization-layer"
            style={{ position: 'absolute' }}
            width={width}
            height={height}
          >
            <FilterDefs
              matte={marginGraphic}
              key={name}
              additionalDefs={additionalDefs}
            />
            <VisualizationLayer
              title={generatedTitle}
              frameKey={frameKey}
              width={width}
              height={height}
              size={adjustedSize}
              position={adjustedPosition}
              frontCanvas={frontCanvas}
              backCanvas={backCanvas}
              matte={marginGraphic}
              margin={margin}
              canvasPostProcess={canvasPostProcess}
              canvasPipeline={canvasPipeline}
              voronoiHover={setVoronoiHover}
            >
              {svgPipeline}
              {axis && (
                <g key="visualization-axis-labels" className="axis axis-labels">
                  {axis}
                </g>
              )}
            </VisualizationLayer>
            {generatedTitle && <g className="frame-title">{generatedTitle}</g>}
            {foregroundGraphics && (
              <g aria-hidden={true} className="foreground-graphics">
                {finalForegroundGraphics}
                {oLabels}
              </g>
            )}
          </svg>
        </SpanOrDiv>

        <InteractionLayer
          useSpans={useSpans}
          hoverAnnotation={hoverAnnotation}
          interaction={interaction}
          voronoiHover={setVoronoiHover}
          customClickBehavior={customClickBehavior}
          customHoverBehavior={customHoverBehavior}
          customDoubleClickBehavior={customDoubleClickBehavior}
          position={adjustedPosition}
          margin={margin}
          size={adjustedSize}
          svgSize={size}
          xScale={frameXScale}
          yScale={frameYScale}
          data={screenCoordinates}
          enabled={true}
          useCanvas={canvasPipeline.length > 0}
          overlay={columnOverlays}
          oColumns={projectedColumns}
          interactionOverflow={interactionOverflow}
          disableCanvasInteraction={disableCanvasInteraction}
        />
        {annotationLayer}
        {afterElements && (
          <SpanOrDiv span={useSpans} className={`${name} frame-after-elements`}>
            {afterElements}
          </SpanOrDiv>
        )}
      </SpanOrDiv>
    </SpanOrDiv>
  );
};

OrdinalFrame.displayName = 'OrdinalFrame';

OrdinalFrame.propTypes = {
  rAccessor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  oAccessor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  annotations: PropTypes.array,
  projection: PropTypes.string,
  disableContext: PropTypes.bool,
  summaryType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  summaryHoverAnnotation: PropTypes.bool,
  pieceHoverAnnotation: PropTypes.bool,
  baseMarkProps: PropTypes.object,

  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
  frameKey: PropTypes.string,
  renderKey: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  useSpans: PropTypes.bool,
  additionalDefs: PropTypes.array,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  matte: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.func,
    PropTypes.object
  ]),
  beforeElements: PropTypes.object,
  afterElements: PropTypes.object,
  backgroundGraphics: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  foregroundGraphics: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  canvasPostProcess: PropTypes.string,
  hoverAnnotation: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.bool
  ]),
  interaction: PropTypes.func,
  customClickBehavior: PropTypes.func,
  customHoverBehavior: PropTypes.func,
  customDoubleClickBehavior: PropTypes.func,
  overlay: PropTypes.object,
  columns: PropTypes.object,
  interactionOverflow: PropTypes.func,
  disableCanvasInteraction: PropTypes.func,
  tooltipContent: PropTypes.func,

  pieceUseCanvas: PropTypes.bool,
  renderMode: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  summaryUseCanvas: PropTypes.bool,
  connectorUseCanvas: PropTypes.bool,
  renderOrder: PropTypes.array
};

OrdinalFrame.defaultProps = {
  annotations: [],
  foregroundGraphics: [],
  annotationSettings: {},
  projection: 'vertical',
  size: [500, 500],
  className: '',
  data: [],
  oScaleType: scaleBand,
  rScaleType: scaleLinear,
  type: 'none',
  summaryType: 'none',
  useSpans: false,
  connectorUseCanvas: true,
  pieceUseCanvas: false,
  summaryUseCanvas: false,
  optimizeCustomTooltipPosition: false
};

export default OrdinalFrame;