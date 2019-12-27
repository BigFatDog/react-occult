module.exports = [
  // {
  //   key: 'home',
  //   name: 'Home',
  //   icon: 'ios-home-outline',
  //   link: '/'
  // },
  {
    key: 'nyc',
    name: 'NYC Open Data',
    icon: 'ios-infinite-outline',
    child: [
      {
        key: 'bar',
        // icon: 'ios-barcode-outline',
        name: 'NYC Hospital',
        link: '/bar'
      },

      {
        key: 'geo',
        name: 'Geo',
        link: '/geo'
      },
      {
        key: 'old_faithful',
        name: 'Old Faithful Contour',
        link: '/faithful'
      },
      {
        key: 'margin',
        name: 'Margin',
        link: '/margin'
      },
      {
        key: 'neighbour',
        name: 'Neighbourhood',
        link: '/neighbour'
      },
    ]
  },
  {
    key: 'basic',
    name: 'Basic',
    icon: 'ios-pulse-outline',
    child: [
      {
        key: 'scatter',
        name: 'Scatter',
        link: '/scatter'
      },
      {
        key: 'area',
        name: 'Area',
        link: '/area'
      },
      {
        key: 'difference',
        name: 'Difference',
        link: '/difference'
      },

      {
        key: 'line',
        name: 'Line Charts',
        link: '/line'
      },
      {
        key: 'bumpline',
        name: 'Bumpline',
        link: '/bumpline'
      },
      {
        key: 'linepercentage',
        name: 'Line Percentage',
        link: '/linepercentage'
      },
    ]
  },
  {
    key: 'network',
    name: 'Network',
    icon: 'ios-brush-outline',
    child: [
      {
        key: 'force',
        name: 'Force',
        link: '/force'
      },
    ]
  },
  {
    key: 'path',
    icon: 'ios-ionic-outline',
    name: 'Path',
    child: [
      {
        key: 'chord',
        name: 'chord',
        link: '/chord'
      },
      {
        key: 'dagre',
        name: 'dagre',
        link: '/dagre'
      },

      // {
      //   key: 'sankey',
      //   name: 'Sankey',
      //   ink: '/sankey'
      // },
      {
        key: 'arc',
        name: 'Arc',
        link: '/arc'
      },
    ]
  },
  {
    key: 'hierarchy',
    icon: 'ios-leaf-outline',
    name: 'Hierarchy',
    child: [
      {
        key: 'dendrogram',
        name: 'Dendrogram',
        link: '/dendrogram'
      },
      {
        key: 'treemap',
        name: 'Treemap',
        link: '/treemap'
      },
      {
        key: 'partition',
        name: 'Partition',
        link: '/partition'
      },
      {
        key: 'circle_pack',
        name: 'Circle Pack',
        link: '/circlepack'
      },
    ]
  },
  {
    key: 'summary',
    icon: 'ios-bonfire-outline',
    name: 'Sumarry',
    child: [
      {
        key: 'violin',
        name: 'violin',
        link: '/violin'
      },
      {
        key: 'histgram',
        name: 'Histgram',
        link: '/histgram'
      },
      {
        key: 'heatmap',
        name: 'Heatmap',
        link: '/heatmap'
      },
      {
        key: 'contour',
        name: 'Contour',
        link: '/contour'
      },
      {
        key: 'hexbin',
        name: 'Hexbin',
        link: '/hexbin'
      },
      {
        key: 'trendline',
        name: 'Trendline',
        link: '/trendline'
      },
    ]
  },
  {
    key: 'ordinal',
    icon: 'ios-analytics-outline',
    name: 'Ordinal',
    child: [
      {
        key: 'swarm',
        name: 'Swarm',
        link: '/swarm'
      },

      {
        key: 'pencil',
        name: 'Pencil',
        link: '/sketch'
      },
    ]
  }
];
