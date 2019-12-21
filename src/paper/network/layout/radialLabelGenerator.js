import * as React from 'react';

const radialLabelGenerator = (node, nodei, nodeIDAccessor, size) => {
  const anglePct = (node.x1 + node.x0) / 2 / size[0];
  const nodeLabel = nodeIDAccessor(node, nodei);
  const labelRotate =
    anglePct > 0.5 ? anglePct * 360 + 90 : anglePct * 360 - 90;

  return (
    <g transform={`rotate(${labelRotate})`}>
      {typeof nodeLabel === 'string' ? (
        <text textAnchor="middle" y={5}>
          {nodeLabel}
        </text>
      ) : (
        nodeLabel
      )}
    </g>
  );
};

export default radialLabelGenerator;
