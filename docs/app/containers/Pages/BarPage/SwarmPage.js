import React from 'react';
import { PapperBlock } from 'dan-components';
import { Paper, Swarm, XAxis } from 'occult';

const swarmProps = {
    data: [{ date: "2016-1", total: 288653430 },
        { date: "2016-2", total: 213602441 },
        { date: "2016-3", total: 238871426 },
        { date: "2016-4", total: 156606884 },
        { date: "2016-5", total: 174857854 },
        { date: "2016-6", total: 126655737 },
        { date: "2016-7", total: 329793400 },
        { date: "2016-8", total: 185742605 },
        { date: "2016-9", total: 147644114 },
        { date: "2016-10", total: 208317815 },
        { date: "2016-11", total: 190642435 },
        { date: "2016-12", total: 183364848 },
        { date: "2016-13", total: 339294401 },
        { date: "2016-14", total: 171163378 },
        { date: "2016-15", total: 135033390 },
        { date: "2016-16", total: 227353314 },
        { date: "2016-17", total: 169456993 },
        { date: "2016-18", total: 137074918 },
        { date: "2016-19", total: 301891797 },
        { date: "2016-20", total: 169436865 },
        { date: "2016-21", total: 181469803 },
        { date: "2016-22", total: 247629656 },
        { date: "2016-23", total: 190373719 },
        { date: "2016-24", total: 218750239 },
        { date: "2016-25", total: 361776797 },
        { date: "2016-26", total: 291413387 },
        { date: "2016-27", total: 310794511 },
        { date: "2016-28", total: 323894969 },
        { date: "2016-29", total: 248828598 },
        { date: "2016-30", total: 295511972 },
        { date: "2016-31", total: 283985335 },
        { date: "2016-32", total: 329751902 },
        { date: "2016-33", total: 254080388 },
        { date: "2016-34", total: 187164992 },
        { date: "2016-35", total: 164705279 },
        { date: "2016-36", total: 149630996 },
        { date: "2016-37", total: 134442104 },
        { date: "2016-38", total: 121858313 },
        { date: "2016-39", total: 136363384 },
        { date: "2016-40", total: 150273827 },
        { date: "2016-41", total: 147945983 },
        { date: "2016-42", total: 132522033 },
        { date: "2016-43", total: 163324517 },
        { date: "2016-44", total: 119943009 },
        { date: "2016-45", total: 251689176 },
        { date: "2016-46", total: 198090307 },
        { date: "2016-47", total: 272743652 },
        { date: "2016-48", total: 224629485 },
        { date: "2016-49", total: 124970201 },
        { date: "2016-50", total: 113543199 },
        { date: "2016-51", total: 351816389 },
        { date: "2016-52", total: 468076652 },
        { date: "2016-53", total: 310955273 },
        { date: "2017-1", total: 191218617 },
        { date: "2017-2", total: 219557700 },
        { date: "2017-3", total: 193991048 },
        { date: "2017-4", total: 183747121 },
        { date: "2017-5", total: 131133002 },
        { date: "2017-6", total: 260605285 },
        { date: "2017-7", total: 221331736 },
        { date: "2017-8", total: 169121821 },
        { date: "2017-9", total: 252960428 },
        { date: "2017-10", total: 227594404 },
        { date: "2017-11", total: 348993026 },
        { date: "2017-12", total: 266163275 },
        { date: "2017-13", total: 222175519 },
        { date: "2017-14", total: 171808637 },
        { date: "2017-15", total: 228078362 },
        { date: "2017-16", total: 139923000 },
        { date: "2017-17", total: 128872964 },
        { date: "2017-18", total: 247760257 },
        { date: "2017-19", total: 176217364 },
        { date: "2017-20", total: 173475115 },
        { date: "2017-21", total: 218494936 },
        { date: "2017-22", total: 267837494 },
        { date: "2017-23", total: 210993612 },
        { date: "2017-24", total: 292402875 },
        { date: "2017-25", total: 213822222 },
        { date: "2017-26", total: 281153226 },
        { date: "2017-27", total: 303710823 },
        { date: "2017-28", total: 242910988 },
        { date: "2017-29", total: 273848680 },
        { date: "2017-30", total: 220904110 },
        { date: "2017-31", total: 184432805 },
        { date: "2017-32", total: 171926311 },
        { date: "2017-33", total: 137698773 }],
    r: 14,
    customMark: d => {
        const [year, week] = d.date.split("-");
        return (
            <g>
                <circle
                    r={11}
                    stroke={year === "2016" ? "#ac58e5" : "#9fd0cb"}
                    fill={year === "2016" ? "#ac58e5" : "#9fd0cb"}
                />
                <text
                    fill={year === "2016" ? "white" : "black"}
                    fontWeight="bold"
                    textAnchor="middle"
                    y=".4em"
                >
                    {week}
                </text>
            </g>
        );
    },
    projection: "horizontal",
    oAccessor: "none",
    rAccessor: "total",
    rExtent: [0],
    pieceHoverAnnotation: true,
}

const frameProps = {
    size: [700,450],
    margin: { left: 20, top: 50, bottom: 75, right: 20 },
    title: (
        <text textAnchor="middle">
            Weekly(1-52) Box Office Totals from <tspan fill={
            "#ac58e5"}
        >2016</tspan> -
            mid <tspan fill={"#9fd0cb"}>2017</tspan>
        </text>
    ),
    tooltipContent: d => (
        <div className="tooltip-content">
            {d.date} - {Math.round(d.total / 1000000)}m
        </div>
    )
}

const axisProps = { orient: "bottom", label: "Box office total", ticks: 8, tickFormat: function(e){return e/1e6+"m"} }

const SwarmPage = props => {
    return (
        <PapperBlock>
        <Paper {...frameProps} >
            <Swarm {...swarmProps} />
            <XAxis {...axisProps} />
        </Paper>
        </PapperBlock>
    )
}

export default SwarmPage;
