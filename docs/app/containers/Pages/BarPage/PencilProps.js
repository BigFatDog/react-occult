import React from 'react';

export const VerticalISOTypeChart = {
  width: 700,
  height: 438,
  margin: { top: 60, bottom: 140, left: 10, right: 80 },
  hoverAnnotation: true,
tooltipContent: d => (
    <div className="tooltip-content">
        {d.date} - {Math.round(d.total / 1000000)}m
    </div>
),
  foregroundGraphics: (
    <g>
      <g transform="translate(20,165)">
        <rect fill="#b3331d" x={-10} y={-10} width={93} height={55} />
        <text fontWeight="700" fill="white" x={5} y={15}>
          DATA VIZ
        </text>
        <text fontWeight="700" fill="white" x={5} y={30}>
          EXPERTS
        </text>
      </g>
      <g transform="translate(505,10)">
        <rect fill="#1db333" x={-10} y={-10} width={123} height={40} />
        <text fontWeight="700" fill="white" x={5} y={15}>
          JOURNALISTS
        </text>
      </g>
      <g transform="translate(0,300)">
        <line strokeWidth={2} stroke={'darkgray'} x1={10} x2={620} />
      </g>
      <g fill="darkgray" transform="translate(5,305)">
        <text fontWeight="700" x={5} y={15}>
          CREATE MORE
        </text>
        <text fontWeight="700" x={5} y={30}>
          DATA VIZ EACH DAY
        </text>
      </g>
      <g fill="darkgray" textAnchor="end" transform="translate(615,305)">
        <text fontWeight="700" x={5} y={15}>
          WRITE MORE
        </text>
        <text fontWeight="700" x={5} y={30}>
          EACH DAY
        </text>
      </g>
    </g>
  )
};
