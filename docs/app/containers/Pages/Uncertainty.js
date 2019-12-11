import React from 'react';
import {Helmet} from 'react-helmet';

import brand from 'dan-api/dummy/brand';
import {PapperBlock} from 'dan-components';
import {
    XYFrame,
    Line,
    XAxis,
    YAxis,
    Annotation
} from 'occult';


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

const Data = [{
    title: "Curve A", forecast: undefined, data: [{month: 1, pct: 100},
        {month: 2, pct: 30},
        {month: 3, pct: 25},
        {month: 4, pct: 23},
        {month: 5, pct: 22},
        {month: 6, pct: 20},
        {month: 7, pct: 24},
        {month: 8, pct: 23},
        {month: 9, pct: 24},
        {month: 10, pct: 25},
        {month: 11, pct: 20},
        {month: 12, pct: 22},
        {month: 13, pct: 21},
        {month: 14, pct: 23},
        {month: 15, pct: 21},
        {month: 16},
        {month: 17},
        {month: 18}]
},
    {
        title: "Curve A", forecast: "lower", data: [{month: 1},
            {month: 2},
            {month: 3},
            {month: 4},
            {month: 5},
            {month: 6},
            {month: 7},
            {month: 8},
            {month: 9},
            {month: 10},
            {month: 11},
            {month: 12},
            {month: 13},
            {month: 14},
            {month: 15, pct: 21},
            {month: 16, pct: 18},
            {month: 17, pct: 15},
            {month: 18, pct: 10}]
    },
    {
        title: "Curve A", forecast: "mean", data: [{month: 1},
            {month: 2},
            {month: 3},
            {month: 4},
            {month: 5},
            {month: 6},
            {month: 7},
            {month: 8},
            {month: 9},
            {month: 10},
            {month: 11},
            {month: 12},
            {month: 13},
            {month: 14},
            {month: 15, pct: 21},
            {month: 16, pct: 22},
            {month: 17, pct: 23},
            {month: 18, pct: 25}]
    },
    {
        title: "Curve A", forecast: "upper", data: [{month: 1},
            {month: 2},
            {month: 3},
            {month: 4},
            {month: 5},
            {month: 6},
            {month: 7},
            {month: 8},
            {month: 9},
            {month: 10},
            {month: 11},
            {month: 12},
            {month: 13},
            {month: 14},
            {month: 15, pct: 21},
            {month: 16, pct: 25},
            {month: 17, pct: 30},
            {month: 18, pct: 38}]
    }];
const LinePage = props => {
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
            strokeWidth: 2,
            fill: 'red',
            fillOpacity: 0.6
        }),
        pointStyle: {
            stroke: 'grey',
            alpha: 0.4,
            strokeWidth: 1
        },
        lineUseCanvas: true
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
                    <Annotation
                        type={AnnotationCalloutCircle}
                        note={{label: 'callout', title: 'important'}}
                        score={10}
                        subject={{radius: 10}}
                        x={100}
                        y={100}
                    />
                    <Line {...lineProps} />
                </XYFrame>
            </PapperBlock>
        </div>
    );
};

export default LinePage;
