import React from 'react';
import { XAxis, YAxis, Paper, Force, Sankey } from 'occult';
import { PapperBlock } from 'dan-components';
import * as d3 from 'd3';

const frameProps = {
  width: 700,
  height: 500,
  margin: 70
};

const forceProps = {
  edgeUseCanvas: false,
  nodeUseCanvas: false,
  edges: {
    name: 'flare',
    children: [
      {
        name: 'analytics',
        children: [
          {
            name: 'cluster',
            children: [
              { name: 'AgglomerativeCluster', value: 3938 },
              { name: 'CommunityStructure', value: 3812 },
              { name: 'HierarchicalCluster', value: 6714 },
              { name: 'MergeEdge', value: 743 }
            ]
          },
          {
            name: 'graph',
            children: [
              { name: 'BetweennessCentrality', value: 3534 },
              { name: 'LinkDistance', value: 5731 },
              { name: 'MaxFlowMinCut', value: 7840 },
              { name: 'ShortestPaths', value: 5914 },
              { name: 'SpanningTree', value: 3416 }
            ]
          },
          {
            name: 'optimization',
            children: [{ name: 'AspectRatioBanker', value: 7074 }]
          }
        ]
      },
      {
        name: 'animate',
        children: [
          { name: 'Easing', value: 17010 },
          { name: 'FunctionSequence', value: 5842 },
          {
            name: 'interpolate',
            children: [
              { name: 'ArrayInterpolator', value: 1983 },
              { name: 'ColorInterpolator', value: 2047 },
              { name: 'DateInterpolator', value: 1375 },
              { name: 'Interpolator', value: 8746 },
              { name: 'MatrixInterpolator', value: 2202 },
              { name: 'NumberInterpolator', value: 1382 },
              { name: 'ObjectInterpolator', value: 1629 },
              { name: 'PointInterpolator', value: 1675 },
              { name: 'RectangleInterpolator', value: 2042 }
            ]
          },
          { name: 'ISchedulable', value: 1041 },
          { name: 'Parallel', value: 5176 },
          { name: 'Pause', value: 449 },
          { name: 'Scheduler', value: 5593 },
          { name: 'Sequence', value: 5534 },
          { name: 'Transition', value: 9201 },
          { name: 'Transitioner', value: 19975 },
          { name: 'TransitionEvent', value: 1116 },
          { name: 'Tween', value: 6006 }
        ]
      },
      {
        name: 'data',
        children: [
          {
            name: 'converters',
            children: [
              { name: 'Converters', value: 721 },
              { name: 'DelimitedTextConverter', value: 4294 },
              { name: 'GraphMLConverter', value: 9800 },
              { name: 'IDataConverter', value: 1314 },
              { name: 'JSONConverter', value: 2220 }
            ]
          },
          { name: 'DataField', value: 1759 },
          { name: 'DataSchema', value: 2165 },
          { name: 'DataSet', value: 586 },
          { name: 'DataSource', value: 3331 },
          { name: 'DataTable', value: 772 },
          { name: 'DataUtil', value: 3322 }
        ]
      },
      {
        name: 'display',
        children: [
          { name: 'DirtySprite', value: 8833 },
          { name: 'LineSprite', value: 1732 },
          { name: 'RectSprite', value: 3623 },
          { name: 'TextSprite', value: 10066 }
        ]
      },
      { name: 'flex', children: [{ name: 'FlareVis', value: 4116 }] },
      {
        name: 'physics',
        children: [
          { name: 'DragForce', value: 1082 },
          { name: 'GravityForce', value: 1336 },
          { name: 'IForce', value: 319 },
          { name: 'NBodyForce', value: 10498 },
          { name: 'Particle', value: 2822 },
          { name: 'Simulation', value: 9983 },
          { name: 'Spring', value: 2213 },
          { name: 'SpringForce', value: 1681 }
        ]
      },
      {
        name: 'query',
        children: [
          { name: 'AggregateExpression', value: 1616 },
          { name: 'And', value: 1027 },
          { name: 'Arithmetic', value: 3891 },
          { name: 'Average', value: 891 },
          { name: 'BinaryExpression', value: 2893 },
          { name: 'Comparison', value: 5103 },
          { name: 'CompositeExpression', value: 3677 },
          { name: 'Count', value: 781 },
          { name: 'DateUtil', value: 4141 },
          { name: 'Distinct', value: 933 },
          { name: 'Expression', value: 5130 },
          { name: 'ExpressionIterator', value: 3617 },
          { name: 'Fn', value: 3240 },
          { name: 'If', value: 2732 },
          { name: 'IsA', value: 2039 },
          { name: 'Literal', value: 1214 },
          { name: 'Match', value: 3748 },
          { name: 'Maximum', value: 843 },
          {
            name: 'methods',
            children: [
              { name: 'add', value: 593 },
              { name: 'and', value: 330 },
              { name: 'average', value: 287 },
              { name: 'count', value: 277 },
              { name: 'distinct', value: 292 },
              { name: 'div', value: 595 },
              { name: 'eq', value: 594 },
              { name: 'fn', value: 460 },
              { name: 'gt', value: 603 },
              { name: 'gte', value: 625 },
              { name: 'iff', value: 748 },
              { name: 'isa', value: 461 },
              { name: 'lt', value: 597 },
              { name: 'lte', value: 619 },
              { name: 'max', value: 283 },
              { name: 'min', value: 283 },
              { name: 'mod', value: 591 },
              { name: 'mul', value: 603 },
              { name: 'neq', value: 599 },
              { name: 'not', value: 386 },
              { name: 'or', value: 323 },
              { name: 'orderby', value: 307 },
              { name: 'range', value: 772 },
              { name: 'select', value: 296 },
              { name: 'stddev', value: 363 },
              { name: 'sub', value: 600 },
              { name: 'sum', value: 280 },
              { name: 'update', value: 307 },
              { name: 'variance', value: 335 },
              { name: 'where', value: 299 },
              { name: 'xor', value: 354 },
              { name: '_', value: 264 }
            ]
          },
          { name: 'Minimum', value: 843 },
          { name: 'Not', value: 1554 },
          { name: 'Or', value: 970 },
          { name: 'Query', value: 13896 },
          { name: 'Range', value: 1594 },
          { name: 'StringUtil', value: 4130 },
          { name: 'Sum', value: 791 },
          { name: 'Variable', value: 1124 },
          { name: 'Variance', value: 1876 },
          { name: 'Xor', value: 1101 }
        ]
      },
      {
        name: 'scale',
        children: [
          { name: 'IScaleMap', value: 2105 },
          { name: 'LinearScale', value: 1316 },
          { name: 'LogScale', value: 3151 },
          { name: 'OrdinalScale', value: 3770 },
          { name: 'QuantileScale', value: 2435 },
          { name: 'QuantitativeScale', value: 4839 },
          { name: 'RootScale', value: 1756 },
          { name: 'Scale', value: 4268 },
          { name: 'ScaleType', value: 1821 },
          { name: 'TimeScale', value: 5833 }
        ]
      },
      {
        name: 'util',
        children: [
          { name: 'Arrays', value: 8258 },
          { name: 'Colors', value: 10001 },
          { name: 'Dates', value: 8217 },
          { name: 'Displays', value: 12555 },
          { name: 'Filter', value: 2324 },
          { name: 'Geometry', value: 10993 },
          {
            name: 'heap',
            children: [
              { name: 'FibonacciHeap', value: 9354 },
              { name: 'HeapNode', value: 1233 }
            ]
          },
          { name: 'IEvaluable', value: 335 },
          { name: 'IPredicate', value: 383 },
          { name: 'IValueProxy', value: 874 },
          {
            name: 'math',
            children: [
              { name: 'DenseMatrix', value: 3165 },
              { name: 'IMatrix', value: 2815 },
              { name: 'SparseMatrix', value: 3366 }
            ]
          },
          { name: 'Maths', value: 17705 },
          { name: 'Orientation', value: 1486 },
          {
            name: 'palette',
            children: [
              { name: 'ColorPalette', value: 6367 },
              { name: 'Palette', value: 1229 },
              { name: 'ShapePalette', value: 2059 },
              { name: 'SizePalette', value: 2291 }
            ]
          },
          { name: 'Property', value: 5559 },
          { name: 'Shapes', value: 19118 },
          { name: 'Sort', value: 6887 },
          { name: 'Stats', value: 6557 },
          { name: 'Strings', value: 22026 }
        ]
      },
      {
        name: 'vis',
        children: [
          {
            name: 'axis',
            children: [
              { name: 'Axes', value: 1302 },
              { name: 'Axis', value: 24593 },
              { name: 'AxisGridLine', value: 652 },
              { name: 'AxisLabel', value: 636 },
              { name: 'CartesianAxes', value: 6703 }
            ]
          },
          {
            name: 'controls',
            children: [
              { name: 'AnchorControl', value: 2138 },
              { name: 'ClickControl', value: 3824 },
              { name: 'Control', value: 1353 },
              { name: 'ControlList', value: 4665 },
              { name: 'DragControl', value: 2649 },
              { name: 'ExpandControl', value: 2832 },
              { name: 'HoverControl', value: 4896 },
              { name: 'IControl', value: 763 },
              { name: 'PanZoomControl', value: 5222 },
              { name: 'SelectionControl', value: 7862 },
              { name: 'TooltipControl', value: 8435 }
            ]
          },
          {
            name: 'data',
            children: [
              { name: 'Data', value: 20544 },
              { name: 'DataList', value: 19788 },
              { name: 'DataSprite', value: 10349 },
              { name: 'EdgeSprite', value: 3301 },
              { name: 'NodeSprite', value: 19382 },
              {
                name: 'render',
                children: [
                  { name: 'ArrowType', value: 698 },
                  { name: 'EdgeRenderer', value: 5569 },
                  { name: 'IRenderer', value: 353 },
                  { name: 'ShapeRenderer', value: 2247 }
                ]
              },
              { name: 'ScaleBinding', value: 11275 },
              { name: 'Tree', value: 7147 },
              { name: 'TreeBuilder', value: 9930 }
            ]
          },
          {
            name: 'events',
            children: [
              { name: 'DataEvent', value: 2313 },
              { name: 'SelectionEvent', value: 1880 },
              { name: 'TooltipEvent', value: 1701 },
              { name: 'VisualizationEvent', value: 1117 }
            ]
          },
          {
            name: 'legend',
            children: [
              { name: 'Legend', value: 20859 },
              { name: 'LegendItem', value: 4614 },
              { name: 'LegendRange', value: 10530 }
            ]
          },
          {
            name: 'operator',
            children: [
              {
                name: 'distortion',
                children: [
                  { name: 'BifocalDistortion', value: 4461 },
                  { name: 'Distortion', value: 6314 },
                  { name: 'FisheyeDistortion', value: 3444 }
                ]
              },
              {
                name: 'encoder',
                children: [
                  { name: 'ColorEncoder', value: 3179 },
                  { name: 'Encoder', value: 4060 },
                  { name: 'PropertyEncoder', value: 4138 },
                  { name: 'ShapeEncoder', value: 1690 },
                  { name: 'SizeEncoder', value: 1830 }
                ]
              },
              {
                name: 'filter',
                children: [
                  { name: 'FisheyeTreeFilter', value: 5219 },
                  { name: 'GraphDistanceFilter', value: 3165 },
                  { name: 'VisibilityFilter', value: 3509 }
                ]
              },
              { name: 'IOperator', value: 1286 },
              {
                name: 'label',
                children: [
                  { name: 'Labeler', value: 9956 },
                  { name: 'RadialLabeler', value: 3899 },
                  { name: 'StackedAreaLabeler', value: 3202 }
                ]
              },
              {
                name: 'layout',
                children: [
                  { name: 'AxisLayout', value: 6725 },
                  { name: 'BundledEdgeRouter', value: 3727 },
                  { name: 'CircleLayout', value: 9317 },
                  { name: 'CirclePackingLayout', value: 12003 },
                  { name: 'DendrogramLayout', value: 4853 },
                  { name: 'ForceDirectedLayout', value: 8411 },
                  { name: 'IcicleTreeLayout', value: 4864 },
                  { name: 'IndentedTreeLayout', value: 3174 },
                  { name: 'Layout', value: 7881 },
                  { name: 'NodeLinkTreeLayout', value: 12870 },
                  { name: 'PieLayout', value: 2728 },
                  { name: 'RadialTreeLayout', value: 12348 },
                  { name: 'RandomLayout', value: 870 },
                  { name: 'StackedAreaLayout', value: 9121 },
                  { name: 'TreeMapLayout', value: 9191 }
                ]
              },
              { name: 'Operator', value: 2490 },
              { name: 'OperatorList', value: 5248 },
              { name: 'OperatorSequence', value: 4190 },
              { name: 'OperatorSwitch', value: 2581 },
              { name: 'SortOperator', value: 2023 }
            ]
          },
          { name: 'Visualization', value: 16540 }
        ]
      }
    ]
  },
  forceManyBody: -250,
  distanceMax: 500,
  edgeStrength: 2,
  nodeIDAccessor: function(e) {
    return e.hierarchicalID || e.name;
  },
  edgeStyle: { stroke: '#9fd0cb', fill: 'none' },
  nodeSizeAccessor: 2,
  edgeType: 'linearc'
};
const colors = {
  'Base Import': '#ac58e5',
  Usage: '#E0488B',
  Intermediary: '#9fd0cb',
  Other: '#e0d33a'
};
const sankeyProps = {
  /* --- Data --- */
  nodes: [
    { id: 'Coal reserves', input: 0, output: 127.93, category: 'Base Import' },
    {
      id: 'Coal imports',
      input: 0,
      output: 349.7879708,
      category: 'Base Import'
    },
    {
      id: 'Oil reserves',
      input: 0,
      output: 802.5479528,
      category: 'Base Import'
    },
    {
      id: 'Oil imports',
      input: 0,
      output: 65.64315528,
      category: 'Base Import'
    },
    {
      id: 'Gas reserves',
      input: 0,
      output: 645.7728959,
      category: 'Base Import'
    },
    {
      id: 'Gas imports',
      input: 0,
      output: 355.6589677,
      category: 'Base Import'
    },
    {
      id: 'UK land based bioenergy',
      input: 0,
      output: 3.027913952,
      category: 'Base Import'
    },
    {
      id: "Agricultural 'waste'",
      input: 0,
      output: 9.282517755,
      category: 'Base Import'
    },
    {
      id: 'Other waste',
      input: 0,
      output: 35.834982973,
      category: 'Base Import'
    },
    {
      id: 'Biomass imports',
      input: 0,
      output: 4.089432558,
      category: 'Base Import'
    },
    { id: 'Solar', input: 0, output: 0.028059966, category: 'Base Import' },
    { id: 'Nuclear', input: 0, output: 160.71, category: 'Base Import' },
    {
      id: 'Coal',
      input: 477.7179708,
      output: 477.7179708,
      category: 'Intermediary'
    },
    {
      id: 'Oil',
      input: 868.1911080799999,
      output: 868.1911081,
      category: 'Intermediary'
    },
    {
      id: 'Natural Gas',
      input: 1001.4318636,
      output: 1001.431864,
      category: 'Intermediary'
    },
    {
      id: 'Bio-conversion',
      input: 41.025159347,
      output: 41.025159349000006,
      category: 'Intermediary'
    },
    {
      id: 'Solid',
      input: 504.62288648099997,
      output: 504.622886431,
      category: 'Intermediary'
    },
    {
      id: 'Liquid',
      input: 869.260235105,
      output: 868.8924025279999,
      category: 'Intermediary'
    },
    {
      id: 'Gas',
      input: 1019.73061411,
      output: 1019.730613744,
      category: 'Intermediary'
    },
    {
      id: 'Solar PV',
      input: 0.028059966,
      output: 0.028059966,
      category: 'Intermediary'
    },
    {
      id: 'Electricity grid',
      input: 386.24405559099995,
      output: 386.24405554800006,
      category: 'Intermediary'
    },
    {
      id: 'Thermal generation',
      input: 946.6966335120001,
      output: 946.6966335309999,
      category: 'Intermediary'
    },
    {
      id: 'District heating',
      input: 9.042140031,
      output: 9.042140031,
      category: 'Intermediary'
    },
    { id: 'Wind', input: 0, output: 14.4406701, category: 'Intermediary' },
    { id: 'Tidal', input: 0, output: 0.005003425, category: 'Intermediary' },
    { id: 'Wave', input: 0, output: 0, category: 'Intermediary' },
    { id: 'Hydro', input: 0, output: 5.329728, category: 'Intermediary' },
    { id: 'Losses', input: 615.5268253639999, output: 0, category: 'Usage' },
    {
      id: 'Over generation / exports',
      input: 1.14e-13,
      output: 0,
      category: 'Usage'
    },
    { id: 'Industry', input: 539.6958806810001, output: 0, category: 'Usage' },
    {
      id: 'Heating and cooling - homes',
      input: 408.56077568,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Heating and cooling - commercial',
      input: 121.41835477199999,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Lighting & appliances - homes',
      input: 95.393170916,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Lighting & appliances - commercial',
      input: 82.034798449,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Agriculture',
      input: 10.647506258999998,
      output: 0,
      category: 'Usage'
    },
    { id: 'Road transport', input: 470.2870297, output: 0, category: 'Usage' },
    {
      id: 'Rail transport',
      input: 17.724487402999998,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'Domestic aviation',
      input: 9.55109733,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'National navigation',
      input: 26.57289571,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'International aviation',
      input: 125.0236042,
      output: 0,
      category: 'Usage'
    },
    {
      id: 'International shipping',
      input: 57.28499215,
      output: 0,
      category: 'Usage'
    }
  ],
  edges: [
    { source: 'Coal reserves', target: 'Coal', value: 127.93 },
    { source: 'Coal imports', target: 'Coal', value: 349.7879708 },
    { source: 'Oil reserves', target: 'Oil', value: 802.5479528 },
    { source: 'Oil imports', target: 'Oil', value: 65.64315528 },
    { source: 'Gas reserves', target: 'Natural Gas', value: 645.7728959 },
    { source: 'Gas imports', target: 'Natural Gas', value: 355.6589677 },
    {
      source: 'UK land based bioenergy',
      target: 'Bio-conversion',
      value: 3.027913952
    },
    {
      source: "Agricultural 'waste'",
      target: 'Bio-conversion',
      value: 9.282517755
    },
    { source: 'Other waste', target: 'Bio-conversion', value: 28.71472764 },
    { source: 'Other waste', target: 'Solid', value: 7.120255333 },
    { source: 'Biomass imports', target: 'Solid', value: 4.089432558 },
    { source: 'Coal', target: 'Solid', value: 477.7179708 },
    { source: 'Oil', target: 'Liquid', value: 868.1911081 },
    { source: 'Natural Gas', target: 'Gas', value: 1001.431864 },
    { source: 'Solar', target: 'Solar PV', value: 0.028059966 },
    { source: 'Solar PV', target: 'Electricity grid', value: 0.028059966 },
    { source: 'Bio-conversion', target: 'Solid', value: 15.69522779 },
    { source: 'Bio-conversion', target: 'Liquid', value: 1.069127005 },
    { source: 'Bio-conversion', target: 'Gas', value: 18.29875011 },
    { source: 'Bio-conversion', target: 'Losses', value: 5.962054444 },
    { source: 'Solid', target: 'Thermal generation', value: 434.145135 },
    { source: 'Liquid', target: 'Thermal generation', value: 8.534858112 },
    { source: 'Gas', target: 'Thermal generation', value: 343.3066404 },
    { source: 'Nuclear', target: 'Thermal generation', value: 160.71 },
    {
      source: 'Thermal generation',
      target: 'District heating',
      value: 9.042140031
    },
    {
      source: 'Thermal generation',
      target: 'Electricity grid',
      value: 366.4405941
    },
    { source: 'Thermal generation', target: 'Losses', value: 571.2138994 },
    { source: 'Wind', target: 'Electricity grid', value: 14.4406701 },
    { source: 'Tidal', target: 'Electricity grid', value: 0.005003425 },
    { source: 'Wave', target: 'Electricity grid', value: 0 },
    { source: 'Hydro', target: 'Electricity grid', value: 5.329728 },
    {
      source: 'Electricity grid',
      target: 'Over generation / exports',
      value: 1.14e-13
    },
    { source: 'Electricity grid', target: 'Losses', value: 26.94051694 },
    { source: 'District heating', target: 'Industry', value: 9.042140031 },
    {
      source: 'Electricity grid',
      target: 'Heating and cooling - homes',
      value: 28.7767749
    },
    {
      source: 'Solid',
      target: 'Heating and cooling - homes',
      value: 13.14794248
    },
    {
      source: 'Liquid',
      target: 'Heating and cooling - homes',
      value: 11.7924845
    },
    {
      source: 'Gas',
      target: 'Heating and cooling - homes',
      value: 354.8435738
    },
    {
      source: 'Electricity grid',
      target: 'Heating and cooling - commercial',
      value: 31.40903798
    },
    {
      source: 'Liquid',
      target: 'Heating and cooling - commercial',
      value: 9.357802772
    },
    {
      source: 'Gas',
      target: 'Heating and cooling - commercial',
      value: 80.65151402
    },
    {
      source: 'Electricity grid',
      target: 'Lighting & appliances - homes',
      value: 87.37770782
    },
    {
      source: 'Gas',
      target: 'Lighting & appliances - homes',
      value: 8.015463096
    },
    {
      source: 'Electricity grid',
      target: 'Lighting & appliances - commercial',
      value: 73.04774089
    },
    {
      source: 'Gas',
      target: 'Lighting & appliances - commercial',
      value: 8.987057559
    },
    { source: 'Electricity grid', target: 'Industry', value: 126.2492384 },
    { source: 'Solid', target: 'Industry', value: 56.47800845 },
    { source: 'Liquid', target: 'Industry', value: 137.4335097 },
    { source: 'Gas', target: 'Industry', value: 210.4929841 },
    { source: 'Electricity grid', target: 'Agriculture', value: 4.259002504 },
    { source: 'Solid', target: 'Agriculture', value: 0.851800501 },
    { source: 'Liquid', target: 'Agriculture', value: 3.513677065 },
    { source: 'Gas', target: 'Agriculture', value: 2.023026189 },
    { source: 'Electricity grid', target: 'Road transport', value: 0 },
    { source: 'Liquid', target: 'Road transport', value: 470.2870297 },
    {
      source: 'Electricity grid',
      target: 'Rail transport',
      value: 8.184036114
    },
    { source: 'Liquid', target: 'Rail transport', value: 9.540451289 },
    { source: 'Liquid', target: 'Domestic aviation', value: 9.55109733 },
    { source: 'Liquid', target: 'National navigation', value: 26.57289571 },
    { source: 'Liquid', target: 'International aviation', value: 125.0236042 },
    { source: 'Liquid', target: 'International shipping', value: 57.28499215 },
    { source: 'Gas', target: 'Losses', value: 11.41035458 }
  ],

  /* --- Size --- */
  /* --- Layout --- */
  nodePaddingRatio: 0.1,
  /* --- Process --- */
  nodeIDAccessor: 'id',
  sourceAccessor: 'source',
  targetAccessor: 'target',

  /* --- Customize --- */
  nodeStyle: d => ({
    stroke: colors[d.category],
    fill: colors[d.category]
  }),
  edgeStyle: d => ({
    stroke: colors[d.target.category],
    fill: colors[d.source.category],
    fillOpacity: 0.2
  }),

  /* --- Draw --- */
  edgeWidthAccessor: 'value',

  /* --- Interact --- */
  hoverAnnotation: true,

  /* --- Annotate --- */
  nodeLabels: d => <text>{d.id}</text>
};

const Network = props => {
  return (
    <PapperBlock>
      <Paper {...frameProps}>
        <Force {...forceProps}></Force>
        {/*<Sankey {...sankeyProps}></Sankey>*/}
      </Paper>
    </PapperBlock>
  );
};

export default Network;
