import React from 'react'
import { PapperBlock } from 'dan-components';
import { Paper, Partition } from "occult";
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
        fill: d.height === 0 ? theme[d.depth] : "none",
        fillOpacity: 1,
        stroke: theme[d.depth]
    }),
    filterRenderedNodes: d => d.depth !== 0,
    nodeLabels: d => {
        return d.depth > 1 ? null : (
            <g transform="translate(0,5)">
                <text
                    fontSize="18"
                    textAnchor="middle"
                    strokeWidth={2}
                    stroke="white"
                    fill="white"
                >
                    {d.id}
                </text>
                <text fontSize="18" textAnchor="middle" fill={theme[d.depth]}>
                    {d.id}
                </text>
            </g>
        )
    },
    projection: "radial",
    zoom: true, // Zoom the laid out nodes in or out so that they fit the specified size, can also be "stretch" if you want zoom not to maintain aspect ratio
    padding: 0, // Pixel value to separate individual nodes from each other
    // projection: "vertical", // Accepts (vertical|horizontal|radial) whether to display the chart with steps laid out on the y axis (vertical) or the x axis (horizontal)
    hierarhcySum: d => d.value, // Function for summing up children values into parent totals
    hierarchyChildren: d => d.children
}

export default () => {
    return    <PapperBlock><Paper {...frameProps}>
        <Partition {...plotProps} />
    </Paper>
    </PapperBlock>
}