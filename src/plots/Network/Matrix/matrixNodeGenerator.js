import { Mark } from 'semiotic-mark';
import React from 'react';

const matrixNodeGenerator = () => (size, nodes) => {
  const gridSize = Math.min(...size);
  const stepSize = gridSize / (nodes.length + 1);

  return ({ d, i, styleFn, renderMode, key, className, baseMarkProps }) => {
    const showText = stepSize > 6;
    const showLine = stepSize > 3;
    const showRect = stepSize > 0.5;

    const textProps = {
      textAnchor: 'end',
      fontSize: `${stepSize / 2}px`
    };
    const style = styleFn(d, i);
    const renderModeValue = renderMode ? renderMode(d, i) : undefined;

    return (
      <g key={key} className={className}>
        {showRect && (
          <Mark
            markType="rect"
            x={stepSize / 2}
            y={d.y - stepSize / 2}
            width={gridSize - stepSize}
            height={stepSize}
            style={{ ...style, stroke: 'none' }}
            renderMode={renderModeValue}
            forceUpdate={true}
            baseMarkProps={baseMarkProps}
          />
        )}
        {showRect && (
          <Mark
            markType="rect"
            y={stepSize / 2}
            x={d.y - stepSize / 2}
            height={gridSize - stepSize}
            width={stepSize}
            style={{ ...style, stroke: 'none' }}
            renderMode={renderModeValue}
            forceUpdate={true}
            baseMarkProps={baseMarkProps}
          />
        )}
        {showLine && (
          <Mark
            markType="line"
            stroke="black"
            x1={0}
            x2={gridSize - stepSize / 2}
            y1={d.y - stepSize / 2}
            y2={d.y - stepSize / 2}
            style={style}
            renderMode={renderModeValue}
            forceUpdate={true}
            baseMarkProps={baseMarkProps}
          />
        )}
        {showLine && (
          <Mark
            markType="line"
            stroke="black"
            y1={0}
            y2={gridSize - stepSize / 2}
            x1={d.y - stepSize / 2}
            x2={d.y - stepSize / 2}
            style={style}
            renderMode={renderModeValue}
            forceUpdate={true}
            baseMarkProps={baseMarkProps}
          />
        )}
        {showLine && i === nodes.length - 1 && (
          <Mark
            markType="line"
            stroke="black"
            x1={0}
            x2={gridSize - stepSize / 2}
            y1={d.y + stepSize / 2}
            y2={d.y + stepSize / 2}
            style={style}
            renderMode={renderModeValue}
            forceUpdate={true}
            baseMarkProps={baseMarkProps}
          />
        )}
        {showLine && i === nodes.length - 1 && (
          <Mark
            markType="line"
            stroke="black"
            y1={0}
            y2={gridSize - stepSize / 2}
            x1={d.y + stepSize / 2}
            x2={d.y + stepSize / 2}
            style={style}
            renderMode={renderModeValue}
            forceUpdate={true}
            baseMarkProps={baseMarkProps}
          />
        )}
        {showText && (
          <text x={0} y={d.y + stepSize / 5} {...textProps}>
            {d.id}
          </text>
        )}
        {showText && (
          <text
            transform={`translate(${d.y}) rotate(90) translate(0,${stepSize /
              5})`}
            {...textProps}
            y={0}
          >
            {d.id}
          </text>
        )}
      </g>
    );
  };
};

export default matrixNodeGenerator;
