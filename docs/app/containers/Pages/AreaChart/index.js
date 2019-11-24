import React from 'react';
import {Helmet} from 'react-helmet';
import {AnnotationCalloutCircle} from 'react-annotation';
import {TheaterSummaryData} from './ThreaterFlattenData';

import brand from 'dan-api/dummy/brand';
import {PapperBlock} from 'dan-components';
import {XYFrame, Line, XAxis, YAxis, Contour, Hexbin, Heatmap, Annotation} from 'occult';
import {scaleLinear} from 'd3-scale';

const h = scaleLinear()
    .domain([0, 1])
    .range(['white', '#1b6ae5']);

const colors = {
    'Ex Machina': '#ac58e5',
    'Far from the Madding Crowd': '#E0488B',
    'The Longest Ride': '#9fd0cb'
};

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

const GradientDefs = [
    <pattern
        key="triangle"
        id="triangle"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
    >
        <rect fill={'#9fd0cb'} width="10" height="10"/>
        <circle fill={'#7566ff'} r="5" cx="3" cy="3"/>
    </pattern>,
    <linearGradient key="gradient" x1="0" x2="0" y1="0" y2="1" id="gradient">
        <stop stopColor={'#ac58e5'} offset="0%"/>
        <stop stopColor={'#7566ff'} offset="100%"/>
    </linearGradient>
];

const AreaPage = props => {
    const title = brand.name + ' - Sample Area Chart';
    const description = brand.desc;

    const frameProps = {
        margin: {left: 60, bottom: 90, right: 10, top: 40},
        width: 700,
        height: 400,
        title: (
            <text textAnchor="middle">
                Theaters showing <tspan fill={'#ac58e5'}>Ex Machina</tspan> vs{' '}
                <tspan fill={'#E0488B'}>Far from the Madding Crowd</tspan>
            </text>
        )
        // style: { fill: 'url(#gradient' },
        // additionalDefs: { GradientDefs }
    };

    const lineProps = {
        data: TheaterSummaryData,
        xAccessor: d => d.rank,
        yAccessor: d => d.theaterCount,
        sAccessor: d => d.title,
        xExtent: [0],
        yExtent: [0],
        lineStyle: (d, i) => ({
            stroke: theme[i],
            strokeWidth: 2
        }),

        pointStyle: {
            stroke: 'grey',
            alpha: 0.4,
            strokeWidth: 1
        },
        useCanvas: false
    };

    const contourProps = {
        xAccessor: d => d.theaterCount,
        yAccessor: d => d.rank,
        sAccessor: d => d.title,
        xExtent: [0],
        yExtent: [0],
        data: TheaterSummaryData,
        threshold: 10,
        bandWidth: 15,
        areaStyle: (e, i) => ({
            fill: 'none',
            stroke: colors[e.parentSummary.s],
            strokeWidth: 0.5
        }),
        pointStyle: d => ({
            r: 2,
            fill: colors[d.parentSummary.s]
        }),
        // areaRenderMode: {
        //   renderMode: 'sketchy',
        //   fillWeight: 3,
        //   hachureGap: 4
        // },
        useCanvas: false
    };

    const hexbinProps = {
        xAccessor: d => d.theaterCount,
        yAccessor: d => d.rank,
        sAccessor: d => d.title,
        xExtent: [0],
        yExtent: [0],
        data: TheaterSummaryData,
        areaStyle: (e, i) => ({
            stroke: colors[e.parentSummary.s],
            fill: h(e.percent),
            strokeWidth: 0.5
        }),
        pointStyle: d => ({
            r: 2,
            fill: colors[d.parentSummary.s]
        }),
        // areaRenderMode: {
        //   renderMode: 'sketchy',
        //   fillWeight: 3,
        //   hachureGap: 4
        // },
        useCanvas: false
    };

    const heatmapProps = {
        xAccessor: d => d.theaterCount,
        yAccessor: d => d.rank,
        sAccessor: d => d.title,
        xExtent: [0],
        yExtent: [0],
        data: TheaterSummaryData,
        areaStyle: (e, i) => ({
            stroke: colors[e.parentSummary.s],
            fill: h(e.percent),
            strokeWidth: 0.5
        }),
        pointStyle: d => ({
            r: 2,
            fill: colors[d.parentSummary.s]
        }),
        // areaRenderMode: {
        //   renderMode: 'sketchy',
        //   fillWeight: 3,
        //   hachureGap: 4
        // },
        useCanvas: false
    };

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="twitter:title" content={title}/>
                <meta property="twitter:description" content={description}/>
            </Helmet>
            <PapperBlock title="Area Chart" desc="Basic Area Chart">
                <XYFrame {...frameProps}>
                    <XAxis label={'Rank'}/>
                    <YAxis left={50} label={'Theaters'}/>
                    <Annotation type={'y'} label={'a note'} y={100}/>
                    <Annotation type={AnnotationCalloutCircle} note={{label: 'callout', title: 'important'}}
                                score={10}
                                subject={{radius: 10}}
                                x={100}
                                y={200}
                    />
                    {/*<Hexbin {...hexbinProps} />*/}
                    <Line {...lineProps} />
                    {/*<Heatmap {...heatmapProps} />*/}
                    {/*<Contour {...contourProps} />*/}
                </XYFrame>
            </PapperBlock>
        </div>
    );
};

export default AreaPage;
