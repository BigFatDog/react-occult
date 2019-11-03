import React from 'react';
import { Helmet } from 'react-helmet';
import { scaleLinear, scaleTime } from 'd3-scale';
import { timeParse } from 'd3-time-format';
import { interpolateCubehelix, interpolateRound } from 'd3-interpolate';
import { interpolateCool } from 'd3-scale-chromatic';
import { hsl } from 'd3-color';

import brand from 'dan-api/dummy/brand';
import { PapperBlock, SourceReader } from 'dan-components';
import doc from 'raw-loader!dan-demo/centroid';
import { CartesianFrame } from 'occult';
import { NasdaqData } from '../AnnotationPage/nasdaq';
import generateOffsets from './linearColors';

import { MetroRain3 } from './metropolis';
import { curveCatmullRom } from 'd3-shape';

import { TheaterSummaryData } from '../ContourPage/ThreaterSummaryData';

const timeParser = timeParse('%m/%d/%Y');

const theme = [
  '#ac58e5',
  '#E0488B',
  '#9fd0cb',
  '#e0d33a',
  '#7566ff',
  '#533f82',
  '#7a255d',
  '#365350',
  '#a19a11',
  '#3f4482'
];

class CentroidDeviationPage extends React.Component {
  render() {
    const title = brand.name + ' - K-Means Centroid Deviation';
    const description = brand.desc;

    const opacity = 0.5;
    const fillContextWithGradient = context => {
      const grd = context.createLinearGradient(
        context.canvas.clientWidth / 2,
        context.canvas.clientHeight,
        context.canvas.clientWidth / 2,
        0
      );

      const stops = generateOffsets(MetroRain3);

      for (const { offset, color } of stops) {
        if (opacity < 1) {
          const hslColor = hsl(color);
          hslColor.opacity = opacity;
          grd.addColorStop(offset, hslColor);
        } else {
          grd.addColorStop(offset, color);
        }
      }

      context.fillStyle = grd;
    };

    const GradientDefs = [
      <pattern
        key="triangle"
        id="triangle"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <rect fill={'#9fd0cb'} width="10" height="10" />
        <circle fill={'#7566ff'} r="5" cx="3" cy="3" />
      </pattern>,
      <linearGradient key="gradient" x1="0" x2="0" y1="0" y2="1" id="gradient">
        <stop stopColor={'#ac58e5'} offset="0%" />
        <stop stopColor={'#7566ff'} offset="100%" />
      </linearGradient>
    ];

    const width = 1030;
    const height = 400;

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Blank Page" desc="Some text description">
          <CartesianFrame
            frameKey={'test'}
            width={width}
            height={height}
            name={'test frame'}
            useSpans={true}
            summaries={[]}
            style={{ fill: 'url(#gradient' }}
            additionalDefs={GradientDefs}
            lines={[
              {
                title: 'Ex Machina',
                coordinates: [
                  {
                    week: 1,
                    grossWeekly: 327616,
                    theaterCount: 4,
                    theaterAvg: 81904,
                    date: '2015-04-10',
                    rank: 18
                  },
                  {
                    week: 2,
                    grossWeekly: 1150814,
                    theaterCount: 39,
                    theaterAvg: 29508,
                    date: '2015-04-17',
                    rank: 15
                  },
                  {
                    week: 3,
                    grossWeekly: 7156570,
                    theaterCount: 1255,
                    theaterAvg: 5702,
                    date: '2015-04-24',
                    rank: 6
                  },
                  {
                    week: 4,
                    grossWeekly: 3615000,
                    theaterCount: 1279,
                    theaterAvg: 2826,
                    date: '2015-05-01',
                    rank: 6
                  },
                  {
                    week: 5,
                    grossWeekly: 5212462,
                    theaterCount: 2004,
                    theaterAvg: 2601,
                    date: '2015-05-08',
                    rank: 6
                  },
                  {
                    week: 6,
                    grossWeekly: 3108609,
                    theaterCount: 1718,
                    theaterAvg: 1809,
                    date: '2015-05-15',
                    rank: 9
                  },
                  {
                    week: 7,
                    grossWeekly: 2248258,
                    theaterCount: 896,
                    theaterAvg: 2509,
                    date: '2015-05-22',
                    rank: 12
                  },
                  {
                    week: 8,
                    grossWeekly: 1122034,
                    theaterCount: 506,
                    theaterAvg: 2217,
                    date: '2015-05-29',
                    rank: 13
                  },
                  {
                    week: 9,
                    grossWeekly: 551552,
                    theaterCount: 302,
                    theaterAvg: 1826,
                    date: '2015-06-05',
                    rank: 19
                  },
                  {
                    week: 10,
                    grossWeekly: 316877,
                    theaterCount: 194,
                    theaterAvg: 1633,
                    date: '2015-06-12',
                    rank: 20
                  },
                  {
                    week: 11,
                    grossWeekly: 201345,
                    theaterCount: 124,
                    theaterAvg: 1624,
                    date: '2015-06-19',
                    rank: 29
                  },
                  {
                    week: 12,
                    grossWeekly: 153162,
                    theaterCount: 81,
                    theaterAvg: 1891,
                    date: '2015-06-26',
                    rank: 34
                  },
                  {
                    week: 13,
                    grossWeekly: 102114,
                    theaterCount: 61,
                    theaterAvg: 1674,
                    date: '2015-07-03',
                    rank: 36
                  },
                  {
                    week: 14,
                    grossWeekly: 64350,
                    theaterCount: 39,
                    theaterAvg: 1650,
                    date: '2015-07-10',
                    rank: 42
                  },
                  {
                    week: 15,
                    grossWeekly: 45344,
                    theaterCount: 31,
                    theaterAvg: 1463,
                    date: '2015-07-17',
                    rank: 47
                  }
                ]
              },
              {
                title: 'Far from the Madding Crowd',
                coordinates: [
                  {
                    week: 1,
                    grossWeekly: 240160,
                    theaterCount: 10,
                    theaterAvg: 24016,
                    date: '2015-05-01',
                    rank: 24
                  },
                  {
                    week: 2,
                    grossWeekly: 1090487,
                    theaterCount: 99,
                    theaterAvg: 11015,
                    date: '2015-05-08',
                    rank: 15
                  },
                  {
                    week: 3,
                    grossWeekly: 1831958,
                    theaterCount: 289,
                    theaterAvg: 6339,
                    date: '2015-05-15',
                    rank: 10
                  },
                  {
                    week: 4,
                    grossWeekly: 3779833,
                    theaterCount: 865,
                    theaterAvg: 4370,
                    date: '2015-05-22',
                    rank: 7
                  },
                  {
                    week: 5,
                    grossWeekly: 2246233,
                    theaterCount: 902,
                    theaterAvg: 2490,
                    date: '2015-05-29',
                    rank: 9
                  },
                  {
                    week: 6,
                    grossWeekly: 1129007,
                    theaterCount: 610,
                    theaterAvg: 1851,
                    date: '2015-06-05',
                    rank: 14
                  },
                  {
                    week: 7,
                    grossWeekly: 701207,
                    theaterCount: 366,
                    theaterAvg: 1916,
                    date: '2015-06-12',
                    rank: 17
                  },
                  {
                    week: 8,
                    grossWeekly: 430870,
                    theaterCount: 256,
                    theaterAvg: 1683,
                    date: '2015-06-19',
                    rank: 20
                  },
                  {
                    week: 9,
                    grossWeekly: 270977,
                    theaterCount: 122,
                    theaterAvg: 2221,
                    date: '2015-06-26',
                    rank: 24
                  },
                  {
                    week: 10,
                    grossWeekly: 195483,
                    theaterCount: 105,
                    theaterAvg: 1862,
                    date: '2015-07-03',
                    rank: 28
                  },
                  {
                    week: 11,
                    grossWeekly: 138071,
                    theaterCount: 98,
                    theaterAvg: 1409,
                    date: '2015-07-10',
                    rank: 30
                  },
                  {
                    week: 12,
                    grossWeekly: 86393,
                    theaterCount: 74,
                    theaterAvg: 1167,
                    date: '2015-07-17',
                    rank: 39
                  },
                  {
                    week: 13,
                    grossWeekly: 52821,
                    theaterCount: 47,
                    theaterAvg: 1124,
                    date: '2015-07-24',
                    rank: 42
                  },
                  {
                    week: 14,
                    grossWeekly: 25708,
                    theaterCount: 27,
                    theaterAvg: 952,
                    date: '2015-07-31',
                    rank: 58
                  },
                  {
                    week: 15,
                    grossWeekly: 17292,
                    theaterCount: 18,
                    theaterAvg: 961,
                    date: '2015-08-07',
                    rank: 60
                  }
                ]
              }
            ]}
            pointRadius={5}
            xAccessor={d => d.week}
            yAccessor={d => d.theaterCount}
            yExtent={[0]}
            xExtent={[0]}
            lineStyle={(d, i) => ({
              stroke: theme[i],
              strokeWidth: 2
            })}
            pointStyle={{
              stroke: 'grey',
              alpha: 0.4,
              strokeWidth: 1
            }}
            showLinePoints={true}
            xScale={scaleLinear()}
            yScale={scaleTime().interpolate(interpolateRound)}
            canvasLines={true}
            canvasPoints={false}
            // backgroundGraphics={
            //   <rect width="1030" height="400" rx="14" fill="url(#gradient)" />
            // }
            title={
              <text textAnchor="middle">
                Theaters showing <tspan fill={'#ac58e5'}>Ex Machina</tspan> vs{' '}
                <tspan fill={'#E0488B'}>Far from the Madding Crowd</tspan>
              </text>
            }
            axes={[
              {
                orient: 'left',
                label: 'Number of Theaters',
                tickFormat: function(e) {
                  return e / 1e3 + 'k';
                }
              },
              {
                orient: 'bottom',
                label: { name: 'Weeks from Opening Day', locationDistance: 55 }
              }
            ]}
          />

          <SourceReader
            componentName={'dan-demo/centroid'}
            componentDoc={doc}
          />
        </PapperBlock>
      </div>
    );
  }
}

export default CentroidDeviationPage;
