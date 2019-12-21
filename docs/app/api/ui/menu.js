module.exports = [
  {
    key: 'home',
    name: 'Home',
    icon: 'ios-home-outline',
    link: '/'
  },
  {
    key: 'layers',
    name: 'Layers of Information',
    icon: 'ios-infinite-outline',
    link: '/layers'
  },
  {
    key: 'charts',
    name: 'Charts',
    icon: 'ios-analytics-outline',
    child: [
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
        key: 'bar',
        name: 'NYC Hospital',
        link: '/bar'
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
        key: 'geo',
        name: 'Geo',
        link: '/geo'
      }
    ]
  }
];
