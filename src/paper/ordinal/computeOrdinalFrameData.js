import React from 'react';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import keyAndObjectifyBarData from './keyAndObjectifyBarData';
import { getAdjustedPositionSize } from '../utils';
import { extent, max, min, sum } from 'd3-array';
import { nest } from 'd3-collection';
import { arc } from 'd3-shape';
import calculateMargin from '../utils/calculateMargin';
import { objectifyType, stringToArrayFn, stringToFn } from '../../utils';
import pointOnArcAtAngle from '../../utils/pointOnArcAtAngle';

import toPipeline from '../../pipeline/ordinal/toPipeline';

import drawSummaries from '../../axis/drawSummaries';
import orFrameAxisGenerator from '../../axis/orFrameAxisGenerator';

const genericFunction = value => () => value;

const midMod = d => (d.middle ? d.middle : 0);
const zeroFunction = genericFunction(0);
const twoPI = Math.PI * 2;

const defaultOverflow = { top: 0, bottom: 0, left: 0, right: 0 };

const BAR_PERCENT = 'barpercent';
const TIMELINE = 'timeline';
const CLUSTER_BAR = 'clusterbar';
const BAR = 'bar';
const NONE = 'none';
const ORDINAL_POINT = 'ordinalpoint';
const PROJECTION_VERTICAL = 'vertical';
const PROJECTION_RADIAL = 'radial';
const PROJECTION_HORIZONTAL = 'horizontal';

const naturalLanguageTypes = {
  bar: { items: 'bar', chart: 'bar chart' },
  clusterbar: { items: 'bar', chart: 'grouped bar chart' },
  swarm: { items: 'point', chart: 'swarm plot' },
  ordinalpoint: { items: 'point', chart: 'point plot' },
  timeline: { items: 'bar', chart: 'timeline' }
};

const computeOrdinalFrameData = props => {
  const {
    width,
    height,
    title: baseTitle,
    margin: baseMargin,
    customClickBehavior,
    customHoverBehavior,
    customDoubleClickBehavior,
    hoverAnnotation,
    axesDefs: baseAxis,
    plotChildren
  } = props;

  const singleOrdinalPlot = plotChildren[0];

  const {
    // ordinal plot
    data,
    oScaleType,
    rScaleType,
    dynamicColumnWidth,
    pixelColumnWidth,
    oLabel,
    projection,

    multiAxis,
    renderMode,
    oPadding: padding = 0,
    oAccessor: baseOAccessor,
    rAccessor: baseRAccessor,
    oExtent: baseOExtent,
    pieceIDAccessor: basePieceIDAccessor,
    pieceHoverAnnotation,

    baseMarkProps = {},
    style: baseStyle,
    rExtent: baseRExtent,
    renderKey: baseRenderKey,
    oSort,
    pieceClass: basePieceClass,
    pieceUseCanvas,

    connectorStyle: baseConnectorStyle,
    connectorType: baseConnectorType,
    connectorUseCanvas,
    connectorClass,
    connectorRenderMode,

    summaryStyle: baseSummaryStyle,
    summaryClass: baseSummaryClass,
    summaryPosition: baseSummaryPosition,
    summaryRenderMode,
    summaryHoverAnnotation,
    summaryType: baseSummaryType,
    summaryUseCanvas
  } = singleOrdinalPlot.props;

  let pieceType = singleOrdinalPlot.type.name.toLowerCase();

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

  // Paper variables

  const summaryType = objectifyType(baseSummaryType);
  const oAccessor = stringToArrayFn(baseOAccessor, d => d.renderKey);
  const rAccessor = stringToArrayFn(baseRAccessor, d => d.value || 1);
  const renderKey = stringToFn(baseRenderKey, (d, i) => i);

  const eventListenersGenerator = () => ({});

  let oLabels;
  const projectedColumns = {};
  // --------------- same as xy  - start
  const size = [width, height];

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

  const margin = calculateMargin({
    margin: baseMargin,
    axes: arrayWrappedAxis,
    title,
    oLabel,
    projection,
    size
  });

  const { adjustedPosition, adjustedSize } = getAdjustedPositionSize({
    size: [width, height],
    margin
  });

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

  if (pieceType === BAR_PERCENT) {
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

    pieceType = BAR;
  }

  if (pixelColumnWidth) {
    if (projection === PROJECTION_RADIAL) {
      console.error('pixelColumnWidth is not honored in radial mode');
    } else if (projection === PROJECTION_VERTICAL) {
      adjustedSize[0] = oExtent.length * pixelColumnWidth;
    } else {
      adjustedSize[1] = oExtent.length * pixelColumnWidth;
    }
  }

  const oDomain = (projection === PROJECTION_VERTICAL && [
    0,
    adjustedSize[0]
  ]) || [0, adjustedSize[1]];

  const cwHash = oExtent.reduce(
    (p, c) => {
      p[c] = (1 / oExtent.length) * oDomain[1];
      p.total += p[c];
      return p;
    },
    { total: 0 }
  );

  const oScale = dynamicColumnWidth ? scaleOrdinal() : oScaleType;

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

  if (pieceType === BAR && summaryType.type && summaryType.type !== NONE) {
    pieceType = NONE;
  }

  const annotationsForExtent = [];

  // todo: annotations
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

  if (pieceType === TIMELINE) {
    const rData = allData.map(d => d.value);
    const leftExtent = extent(rData.map(d => d[0]));
    const rightExtent = extent(rData.map(d => d[1]));
    rExtent = extent([...leftExtent, ...rightExtent, ...annotationsForExtent]);
  } else if (pieceType !== BAR) {
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

  if ((pieceType === CLUSTER_BAR || multiAxis) && rExtent[0] > 0) {
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

  if (oSort !== undefined) {
    oExtent = oExtent.sort((a, b) =>
      oSort(
        a,
        b,
        nestedPieces[a].map(d => d.data),
        nestedPieces[b].map(d => d.data)
      )
    );

    oScale.domain(oExtent);
  }

  const rDomain = (projection === PROJECTION_VERTICAL && [
    0,
    adjustedSize[1]
  ]) || [0, adjustedSize[0]];

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
  if (projection === PROJECTION_VERTICAL) {
    mappedMiddleSize = adjustedSize[0];
  }
  const mappedMiddles = _mappedMiddles(oScale, mappedMiddleSize, padding);

  pieceData = oExtent.map(d => (nestedPieces[d] ? nestedPieces[d] : []));

  const zeroValue =
    projection === PROJECTION_VERTICAL ? rScaleReverse(rScale(0)) : rScale(0);

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

      if (pieceType === TIMELINE) {
        piece.scaledValue = rScale(piece.value[0]);
        piece.scaledEndValue = rScale(piece.value[1]);
        piece.scaledVerticalValue = rScaleVertical(piece.value[0]);
      } else if (pieceType !== BAR && pieceType !== CLUSTER_BAR) {
        piece.scaledValue = rScale(piece.value);
        piece.scaledVerticalValue = rScaleVertical(piece.value);
      } else if (pieceType === CLUSTER_BAR) {
        valPosition =
          projection === PROJECTION_VERTICAL
            ? rScaleReverse(rScale(piece.value))
            : rScale(piece.value);
        piece.scaledValue = Math.abs(zeroValue - valPosition);
      }

      piece.x = projectedColumns[o].x;
      if (piece.value >= 0) {
        if (pieceType === BAR) {
          piece.scaledValue =
            projection === PROJECTION_VERTICAL
              ? positiveOffset -
                rScaleReverse(rScale(positiveBaseValue + piece.value))
              : rScale(positiveBaseValue + piece.value) - positiveOffset;

          positiveBaseValue += piece.value;
        }
        piece.base = zeroValue;
        piece.bottom = pieceType === BAR ? positiveOffset : 0;
        piece.middle = piece.scaledValue / 2 + positiveOffset;
        positiveOffset =
          projection === PROJECTION_VERTICAL
            ? positiveOffset - piece.scaledValue
            : positiveOffset + piece.scaledValue;
        piece.negative = false;
      } else {
        if (pieceType === BAR) {
          piece.scaledValue =
            projection === PROJECTION_VERTICAL
              ? Math.abs(rScale(piece.value) - rScale(0))
              : Math.abs(rScale(piece.value) - zeroValue);

          negativeBaseValue += piece.value;
        }
        piece.base = zeroValue;
        piece.bottom = pieceType === BAR ? negativeOffset : 0;
        piece.middle = negativeOffset - piece.scaledValue / 2;
        negativeOffset =
          projection === PROJECTION_VERTICAL
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
    const { offsetAngle, angleRange } = singleOrdinalPlot.props;
    const offsetPct = (offsetAngle && offsetAngle / 360) || 0;

    const rangePct = (angleRange && angleRange.map(d => d / 360)) || [0, 1];
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

  if (oLabel) {
    let labelingFn;
    if (labelSettings.label === true) {
      const labelStyle = {
        textAnchor: 'middle'
      };
      if (
        projection === PROJECTION_HORIZONTAL &&
        labelSettings.orient === 'right'
      ) {
        labelStyle.textAnchor = 'start';
      } else if (projection === PROJECTION_HORIZONTAL) {
        labelStyle.textAnchor = 'end';
      }

      labelingFn = (d, p, i) => {
        const additionalStyle = {};
        let transformRotate;

        if (
          projection === PROJECTION_RADIAL &&
          labelSettings.orient === 'stem'
        ) {
          transformRotate = `rotate(${
            pieArcs[i].outerPoint[0] < 0
              ? pieArcs[i].midAngle * 360 + 90
              : pieArcs[i].midAngle * 360 - 90
          })`;
        } else if (
          projection === PROJECTION_RADIAL &&
          labelSettings.orient !== 'center'
        ) {
          transformRotate = `rotate(${
            pieArcs[i].outerPoint[1] < 0
              ? pieArcs[i].midAngle * 360
              : pieArcs[i].midAngle * 360 + 180
          })`;
        }
        if (
          projection === PROJECTION_RADIAL &&
          labelSettings.orient === 'stem' &&
          ((pieArcs[i].outerPoint[0] > 0 && labelSettings.padding < 0) ||
            (pieArcs[i].outerPoint[0] < 0 && labelSettings.padding >= 0))
        ) {
          additionalStyle.textAnchor = 'end';
        } else if (
          projection === PROJECTION_RADIAL &&
          labelSettings.orient === 'stem'
        ) {
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

      if (projection === PROJECTION_HORIZONTAL) {
        yPosition = projectedColumns[d].middle;
        if (labelSettings.orient === 'right') {
          xPosition = adjustedSize[0] + 3;
        } else {
          xPosition = -3;
        }
      } else if (projection === PROJECTION_RADIAL) {
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

    if (projection === PROJECTION_VERTICAL) {
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
    } else if (projection === PROJECTION_HORIZONTAL) {
      oLabels = (
        <g
          key="ordinalframe-labels-container"
          className="ordinal-labels"
          transform={`translate(${margin.left},${margin.top})`}
        >
          {labelArray}
        </g>
      );
    } else if (projection === PROJECTION_RADIAL) {
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
      if (projection === PROJECTION_HORIZONTAL) {
        yPosition = projectedColumns[d].x;
        xPosition = 0;
        width = rScale.range()[1];
        height = barColumnWidth;
      }

      if (projection === PROJECTION_RADIAL) {
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

  let screenCoordinates;

  const pieceTypeForXY =
    pieceType && pieceType !== NONE ? pieceType : ORDINAL_POINT;
  const pieceTypeLayout =
    typeof pieceTypeForXY === 'function'
      ? pieceTypeForXY
      : singleOrdinalPlot.type.layout;

  const calculatedPieceData = pieceTypeLayout({
    ...singleOrdinalPlot.props,
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

  if (summaryType.type && summaryType.type !== NONE) {
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

  const yMod = projection === PROJECTION_HORIZONTAL ? midMod : zeroFunction;
  const xMod = projection === PROJECTION_VERTICAL ? midMod : zeroFunction;
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
      [BAR, CLUSTER_BAR, TIMELINE].indexOf(pieceType) === -1) ||
    summaryHoverAnnotation
  ) {
    if (summaryHoverAnnotation && calculatedSummaries.xyPoints) {
      screenCoordinates = calculatedSummaries.xyPoints.map(d =>
        Object.assign({}, d, {
          type: 'frame-hover',
          isSummaryData: true,
          x: d.x,
          y: d.y
        })
      );
    } else if (pieceHoverAnnotation && calculatedPieceData) {
      screenCoordinates = basePieceData;
    }
  }

  const { innerRadius = 0 } = singleOrdinalPlot.props;
  // todo: move to toAxes
  const { axis, axesTickLines } = orFrameAxisGenerator({
    axis: arrayWrappedAxis,
    data: allData,
    projection,
    adjustedSize,
    size,
    rScale,
    rScaleType: instantiatedRScaleType.copy(),
    innerRadius,
    rExtent,
    maxColumnValues,
    xyData: basePieceData,
    margin
  });

  if (
    pieceHoverAnnotation &&
    [BAR, CLUSTER_BAR, TIMELINE].indexOf(pieceType) !== -1
  ) {
    const yMod = projection === PROJECTION_HORIZONTAL ? midMod : zeroFunction;
    const xMod = projection === PROJECTION_VERTICAL ? midMod : zeroFunction;

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

  const typeAriaLabel = naturalLanguageTypes[pieceType] || {
    items: 'piece',
    chart: 'ordinal chart'
  };

  const { svgPipe, canvasPipe } = toPipeline({
    shouldRender: pieceType !== NONE,
    isOrdinalPoint: pieceType === 'ordinalpoint',
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
    axis: arrayWrappedAxis
  });

  const svgPipeline = [...svgPipe, ...(calculatedSummaries.marks || [])];
  const canvasPipeline = canvasPipe.slice();

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

  let interactionOverflow;

  if (summaryType && summaryType.amplitude) {
    if (projection === PROJECTION_HORIZONTAL) {
      interactionOverflow = {
        top: summaryType.amplitude,
        bottom: 0,
        left: 0,
        right: 0
      };
    } else if (projection === PROJECTION_RADIAL) {
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

  return {
    projectedColumns,
    pieceIDAccessor,
    oColumn: null,
    canvasPipeline,
    svgPipeline,
    screenCoordinates,
    xyPoints: [],
    adjustedPosition,
    adjustedSize,
    axes: axis,
    axesTickLines,
    overlay: columnOverlays,
    interactionOverflow,
    projection,
    oAccessor,
    rAccessor,
    rScale,
    rScaleType,
    summaryType,
    type: pieceType,
    oLabels
  };
};

export default computeOrdinalFrameData;
