module.exports = [
  {
    key: 'home',
    name: 'Home',
    icon: 'ios-home-outline',
    link: '/'
  },
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
    ]
  },

  {
    key: 'charts',
    name: 'Charts',
    icon: 'ios-analytics-outline',
    child: [
      {
        key: 'circle_pack',
        // icon: 'ios-barcode-outline',
        name: 'Circle Pack',
        link: '/circlepack'
      },

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
        key: 'sankey',
        name: 'Sankey',
        link: '/sankey'
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
        key: 'trendline',
        name: 'Trendline',
        link: '/trendline'
      },
      {
        key: 'neighbour',
        name: 'Neighbourhood',
        link: '/neighbour'
      },
      {
        key: 'difference',
        name: 'Difference',
        link: '/difference'
      },
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
        key: 'pencil',
        name: 'Pencil',
        link: '/sketch'
      },
      {
        key: 'network',
        name: 'Network',
        link: '/network'
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
      {
        key: 'swarm',
        name: 'Swarm',
        link: '/swarm'
      },
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
      {
        key: 'geo',
        name: 'Geo',
        link: '/geo'
      }
    ]
  }
];
