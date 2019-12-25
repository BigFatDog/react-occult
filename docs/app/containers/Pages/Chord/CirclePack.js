import React from 'react'
import { PapperBlock } from 'dan-components';
import { Paper, CirclePack } from "occult";
import { edges } from './SampleData'

const theme = ["#ac58e5","#E0488B","#9fd0cb","#e0d33a","#7566ff","#533f82","#7a255d","#365350","#a19a11","#3f4482"]
const frameProps = {
    size: [700,400],
    margin: 10,
    hoverAnnotation: [
        { type: "desaturation-layer", style: { fill: "white", fillOpacity: 0.25 } },
        {
            type: "highlight",
            style: d => ({
                fill: theme[d.depth],
                stroke: theme[d.depth],
                fillOpacity: 0.6
            })
        },
        { type: "frame-hover" }
    ],
    tooltipContent: d => (
        <div className="tooltip-content">
            {d.parent ? <p>{d.parent.data.name}</p> : undefined}
            <p>{d.data.name}</p>
        </div>),

}

const plotProps = {
    edges,
    nodeIDAccessor: "name",
    nodeStyle: d => ({
        fill: "none",
        stroke: theme[d.depth]
    }),
    filterRenderedNodes: d => d.depth !== 0,
        nodeLabels: d => {
        return d.depth > 1 ? null : (
            <g transform="translate(0,5)">
                <text
                    fontSize="12"
                    textAnchor="middle"
                    strokeWidth={2}
                    stroke="white"
                    fill="white"
                >
                    {d.id}
                </text>
                <text fontSize="12" textAnchor="middle" fill={theme[d.depth]}>
                    {d.id}
                </text>
            </g>
        )
    },
}

export default () => {
    return    <PapperBlock><Paper {...frameProps}>
        <CirclePack {...plotProps} />
    </Paper>
    </PapperBlock>
}