
import * as d3 from 'd3';
import React from 'react';
import { XAxis, YAxis, OFrame, Bar, Annotation, OrdinalPoint } from 'occult';
import { PapperBlock } from 'dan-components';
import { withStyles } from '@material-ui/core/styles';
import { HospitalFacilities } from './Data';

const TheMetLight = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722'
];

const colorScale = d3.scaleOrdinal().range(TheMetLight);

const axisLeftProps = {
    orient: 'left',
    baseline: false,
    tickLineGenerator: ({ xy }) => (
        <path
            style={{
                fill: '#efefef',
                stroke: '#ccc',
                opacity: 0.3,
                strokeDasharray: '4 4'
            }}
            d={`M${xy.x1},${xy.y1 - 5}L${xy.x2},${xy.y1 - 5}`}
        />
    ),
    label: (
        <text textAnchor={'middle'} fontWeight="bold" fill={'#E5BDF6'}>
            Community Board
        </text>
    ),
    jaggedBase: true
};

const axisRightProps = {
    key: 'Council-District-axis',
    orient: 'right',
    showTickLines: false,

    ticks: 6,
    label: (
        <text textAnchor={'middle'} fontWeight="bold" fill={'#45B649'} dy={-30}>
            Council District
        </text>
    )
}

const BarProps = {
    data: HospitalFacilities.slice(),
    type: "point",
    projection: "horizontal",
    oAccessor: "Borough",
    rAccessor: "Community Board",
    style: {
        // fill: 'url(#gradient)',
        fill: '#E5BDF6',
        stroke: 'none',
        opacity: 0.7
    },
    baseMarkProps: { transitionDuration: { default: 500, fill: 2500 } },
    summaryType:{ type: "violin",
        bins: 25, // Number, Bins ito bin the values into,
        binValue: d => d.length, //Function that determines the summarized value (by default it’s the number of items in a bin),
        useBins: true, //Boolean, if set to false, bins will have a one-to-one correspondence with the points passed to the column, allowing you to create your own samples without trying to wrangle bin numbers,
        curve: d3.curveCatmullRom, //d3-shape-like curve function,
        relative: false // Boolean, Whether or not the scale of each individual plot is relative to the maximum of all plots or only to its own plot (you can combine a relative={true} with,
        // axis: Object, Uses the same axis settings from everywhere else but makes an axis for each column
    },
    summaryStyle: d => ({
        fill: d && colorScale(d.Borough),
        fillOpacity: 0.2,
        stroke: d && colorScale(d.Borough),
        strokeWidth: 0.5
    }),
    pieceHoverAnnotation: true,
    // type: 'bar',
    oPadding: 2,
    connectorType: function(e) {
        return 0 !== e.rIndex && e.rIndex;
    },
    connectorStyle: { stroke: '#DCE35B', strokeWidth: 2, opacity: 0.3 },
    multiAxis: true,
    // summaryType: { type: "ridgeline", bins: 10, amplitude: 50, curve: "monotonex" },
    renderOrder: ['pieces', 'connectors'],
    // oAccessor: 'Facility Name',
    // rAccessor: ['Community Board', 'Census Tract'],

    // projection: 'vertical',
    oLabel: d => (<text fontSize={16} dx={-5} dy={5} textAnchor={'end'}>{d}</text>),

};
const FrameProps = {
    width: 1000,
    height: 600,
    margin: { top: 50, right: 30, left: 130, bottom: 40 },
    hoverAnnotation: false,
    title: (
        <text textAnchor="middle">
            NYC Hospital Facilities <tspan fill={'#E5BDF6'}>Community Board</tspan>
            vs <tspan fill={'#45B649'}>Council District</tspan>
        </text>
    ),
    additionalDefs: [
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
            <stop stopColor={'#D7E1EC'} offset="0%" />
            <stop stopColor={'#FFFFFF'} offset="100%" />
        </linearGradient>
    ],
};

const styles = {
    frame: {
        background: 'linear-gradient(to top, #4568DC 0%, #B06AB3 100%)',
        border: 0,
        borderRadius: 6,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white'
    }
};

const BarPage = props => {
    const { classes } = props;
    return (
        <PapperBlock>
            <OFrame {...FrameProps} className={classes.frame} >
                {/*<YAxis {...axisLeftProps}/>*/}
                {/*<YAxis {...axisRightProps}/>*/}
                <XAxis />
                <OrdinalPoint {...BarProps}/>
            </OFrame>
        </PapperBlock>
    );
};

export default withStyles(styles)(BarPage);
