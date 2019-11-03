import * as React from 'react';
import { data } from './verticality';
import { csvParse } from 'd3-dsv';
import { Mark } from 'semiotic-mark';

const groupedData = [];
const groupHash = {};
const colors = [
  '#007190',
  '#00a2ce',
  '#d38779',
  '#b3331d',
  'rgb(77, 67, 12)',
  'rgb(182, 167, 86)'
];

const parsedPoints = [];
const annotationData = [];
csvParse(data).forEach((d, i) => {
  const point = {
    posx: +d.x,
    posy: +d.y,
    hood: +d.hood
  };
  parsedPoints.push(point);
  if (!groupHash[d.hood]) {
    groupHash[d.hood] = {
      key: d.hood,
      coordinates: [],
      color: colors[+d.hood % 6]
    };
    groupedData.push(groupHash[d.hood]);
  }
  groupHash[d.hood].coordinates.push(point);
  if (i % 4 === 0) {
    annotationData.push(
      Object.assign({}, point, {
        type: 'react-annotation',
        dx: 0,
        dy: 0,
        label: `Note ${annotationData.length + 1}`,
        color: colors[+d.hood % 6]
      })
    );
  }
});

annotationData.push({
  type: 'enclose-hull',
  coordinates: parsedPoints.filter(d => d.hood === 98),
  label: 'Hull Annotation'
});

const NeighborhoodMapProps = {
  size: [700, 700],
  areas: groupedData,
  lineDataAccessor: 'd',
  showLinePoints: true,
  xAccessor: 'posx',
  yAccessor: 'posy',
  summaryStyle: d => ({
    stroke: 'none',
    fill: d.parentSummary.color,
    opacity: 0.25
  }),
  pointStyle: d => ({
    stroke: colors[d.hood % 6],
    strokeOpacity: 1,
    fill: colors[d.hood % 6]
  }),
  annotationSettings: {
    layout: {
      type: 'marginalia',
      orient: 'nearest',
      characterWidth: 8,
      lineWidth: 20,
      padding: 2,
      iterations: 1000,
      pointSizeFunction: () => 2
    }
  },
  customPointMark: () => <Mark markType="circle" r="1" />,
  hoverAnnotation: true,
  annotations: [] || annotationData,
  tooltipContent: d => <div className="tooltip-content">{d.hood}</div>,
  areaType: {
    type: 'contour',
    thresholds: 4,
    bandwidth: 5,
    neighborhood: true
  },
  summaryRenderMode: {
    renderMode: 'sketchy',
    fillWeight: 3,
    hachureGap: 4
  },
  margin: 150,
  axes: [
    { orient: 'bottom', marginalSummaryType: 'violin' },
    { orient: 'left', marginalSummaryType: 'ridgeline' },
    { orient: 'right', marginalSummaryType: 'boxplot' },
    { orient: 'top', marginalSummaryType: 'histogram' }
  ]
};

export default NeighborhoodMapProps;
