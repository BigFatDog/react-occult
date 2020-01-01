import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { Paper, ClusterBar, Bar, XAxis, YAxis } from 'occult';
import { PapperBlock } from 'dan-components';
import SquirrelData from '../data/2018_Central_Park_Squirrel_Census_-_Squirrel_Data.json';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYmlnZmF0ZG9nIiwiYSI6ImM1ZWIyYzYzMzkyM2JlMTc0M2VjNmRlOTk5NDdkN2VjIn0.DoyA-reichUjF_FO9dkazQ';

const SquirrelGeoFeatures = SquirrelData.map(d => ({
  type: 'Feature',
  properties: {
    Running: d.Running,
    Chasing: d.Chasing,
    Climbing: d.Climbing,
    Eating: d.Eating,
    Foraging: d.Foraging,
    Kuks: d.Kuks,
    Quaas: d.Quaas,
    Moans: d.Moans,
    PrimaryColor: d['Primary Fur Color'],
    HighlightFurColor: d['Highlight Fur Color'],
    CombinationColor: d['Combination of Primary and Highlight Color']
  },
  geometry: {
    type: 'Point',
    coordinates: [d.X, d.Y]
  }
}));

const Squirrel = props => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer && mapContainer.current) {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        zoom: 14,
        maxZoom: 18,
        center: [-73.974187, 40.771133]
      });

      map.once('style.load', async () => {
        map.addSource('squirrel-data-source', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: SquirrelGeoFeatures
          }
        });

        map.addLayer(
          {
            id: 'squirrel-circle',
            type: 'circle',
            source: 'squirrel-data-source',
            paint: {
              'circle-color': [
                'match',
                ['get', 'PrimaryColor'],
                'Grey',
                '#00ddc6',
                'Black',
                '#04a6ff',
                'Cinnamon',
                '#ff2fab',
                '',
                '#3bb2d0',
                /* other */ '#DDDDDD'
              ],
              'circle-radius': 3,
              'circle-opacity': 0.5
            }
          },
          'waterway-label'
        );
      });
    }
  }, [mapContainer]);

  return (
    <PapperBlock whiteBg={true}>
      <div
        id={'map'}
        ref={mapContainer}
        style={{ width: 500, height: 400 }}
      ></div>
    </PapperBlock>
  );
};

export default Squirrel;
