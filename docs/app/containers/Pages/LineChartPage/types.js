import { LineData } from './lineData';
import * as d3 from 'd3';

const TheMetLight = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722'
];

const colorScale = d3.scaleOrdinal().range(TheMetLight);

const BaseProps = {
  data: LineData,
  xAccessor: d => d.year,
  yAccessor: d => d.n,
  sAccessor: d => d.name,
  lineStyle: (d, i) => ({
    stroke: colorScale(d.s),
    fill: colorScale(d.s),
    fillOpacity: 0.6,
    strokeDasharray: i === 0 ? '10 10' : '5 5'
  }),

  lineType: {
    type: 'cumulative-reverse',
    interpolator: d3.curveCatmullRom
  },
  pointStyle: {
    stroke: 'grey',
    alpha: 0.4,
    strokeWidth: 1
  },
  showPoints: false,
  lineUseCanvas: false
};

const makeByType = type =>
  Object.assign({}, BaseProps, {
    lineType: {
      type,
      interpolator: d3.curveCatmullRom
    }
  });

const CumulativeReverse = makeByType('cumulative-reverse');
const Cumulative = makeByType('cumulative');
const Area = makeByType('area');
const Line = makeByType('line');
const Bumpline = makeByType('bumpline');
const Bumparea = makeByType('bumparea');
const BumpareaInvert = makeByType('bumparea-invert');
const Difference = makeByType('difference');
const Linepercent = makeByType('linepercent');
const StackedpercentInvert = makeByType('stackedpercent-invert');
const Stackedpercent = makeByType('stackedpercent');
const StackedareaInvert = makeByType('stackedarea-invert');
const Stackedarea = makeByType('stackedarea');

export {
  CumulativeReverse,
  Cumulative,
  Area,
  Line,
  Bumpline,
  Bumparea,
  BumpareaInvert,
  Difference,
  Linepercent,
  StackedpercentInvert,
  Stackedpercent,
  StackedareaInvert,
  Stackedarea
};