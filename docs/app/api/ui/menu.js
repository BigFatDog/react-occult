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
