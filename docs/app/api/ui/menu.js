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
        key: 'index.js',
        name: 'Line Chart',
        link: '/line'
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
        key: 'area',
        name: 'Area',
        link: '/area'
      },
      {
        key: 'hexbin',
        name: 'Hexbin',
        link: '/hexbin'
      },
      {
        key: 'annotations',
        name: 'Annotations',
        link: '/annotations'
      },
      {
        key: 'neighborhood',
        name: 'Neighborhood Map',
        link: '/neighborhood'
      }
    ]
  }
];
