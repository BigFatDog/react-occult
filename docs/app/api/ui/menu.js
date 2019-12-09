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
        key: 'centroid',
        name: 'Centroid Deviation',
        link: '/centroid'
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
        key: 'line',
        name: 'Line Chart',
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
        key: 'old_faithful',
        name: 'Old Faithful Contour',
        link: '/faithful'
      }
    ]
  }
];
