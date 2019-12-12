import * as React from 'react';
import { Mark } from 'semiotic-mark';

const horizontalTornTickGenerator = (width, ticks, y, orient) => {
  const step = width / ticks;
  let currentStep = 0;
  let tickPath = `M0,${y}`;
  const mod = orient === 'right' ? -1 : 1;
  while (currentStep <= width) {
    tickPath += `L${currentStep},${y}`;
    if (currentStep < width) {
      tickPath += `L${currentStep + step / 2},${y + 10 * mod}`;
    }
    currentStep += step;
  }
  return tickPath;
};

const generateTornBaseline = (orient, baselineSettings) => {
  let tornD = '';
  const { x1, x2, y1, y2 } = baselineSettings;
  if (orient === 'left' || orient === 'right') {
    const calcWidth = Math.abs(x2 - x1);
    const ticks = Math.ceil(calcWidth / 40);
    tornD = horizontalTornTickGenerator(
      calcWidth,
      ticks,
      orient === 'right' ? 0 : y1,
      orient
    );
  } else {
    const calcHeight = Math.abs(y2 - y1);
    const ticks = Math.ceil(calcHeight / 40);
    tornD = verticalTornTickGenerator(calcHeight, ticks, x1, orient);
  }
  return tornD;
};

const defaultTickLineGenerator = ({
  xy,
  orient,
  i,
  baseMarkProps,
  className = '',
  jaggedBase
}) => {
  const genD =
    jaggedBase && i === 0
      ? generateTornBaseline(orient, xy)
      : `M${xy.x1},${xy.y1}L${xy.x2},${xy.y2}`;

  return (
    <Mark
      key={i}
      markType="path"
      renderMode={xy.renderMode}
      stroke="black"
      strokeWidth="1px"
      simpleInterpolate={true}
      d={genD}
      className={`tick-line tick ${orient} ${className}`}
      {...baseMarkProps}
    />
  );
};

export function generateTickValues(tickValues, ticks, scale) {
  const axisSize = Math.abs(scale.range()[1] - scale.range()[0]);

  if (!tickValues) {
    if (!ticks) {
      ticks = Math.max(1, Math.floor(axisSize / 40));
    }
    tickValues = scale.ticks(ticks);
  }
  return tickValues;
}
export function axisPieces({
  renderMode = () => undefined,
  padding = 5,
  scale,
  ticks,
  tickValues = generateTickValues(undefined, ticks, scale),
  orient = 'left',
  size,
  footer = false,
  tickSize = footer
    ? -10
    : ['top', 'bottom'].find(d => d === orient)
    ? size[1]
    : size[0]
}) {
  //returns x1 (start of line), x2 (end of line) associated with the value of the tick
  let axisDomain = [],
    position1,
    position2,
    domain1,
    domain2,
    tposition1,
    tposition2,
    textPositionMod = 0,
    textPositionMod2 = 0,
    defaultAnchor = 'middle';

  switch (orient) {
    case 'top':
      position1 = 'x1';
      position2 = 'x2';
      domain1 = 'y1';
      domain2 = 'y2';
      axisDomain = [0, tickSize];
      tposition1 = 'tx';
      tposition2 = 'ty';
      textPositionMod -= 20 - padding;
      break;
    case 'bottom':
      position1 = 'x1';
      position2 = 'x2';
      domain1 = 'y2';
      domain2 = 'y1';
      axisDomain = [size[1], size[1] - tickSize];
      tposition1 = 'tx';
      tposition2 = 'ty';
      textPositionMod += 20 + padding;
      break;
    case 'right':
      position1 = 'y2';
      position2 = 'y1';
      domain1 = 'x2';
      domain2 = 'x1';
      axisDomain = [size[0], size[0] - tickSize];
      tposition1 = 'ty';
      tposition2 = 'tx';
      textPositionMod += 5 + padding;
      textPositionMod2 += 5;
      defaultAnchor = 'start';
      break;
    //left
    default:
      position1 = 'y1';
      position2 = 'y2';
      domain1 = 'x1';
      domain2 = 'x2';
      axisDomain = [0, tickSize];
      tposition1 = 'ty';
      tposition2 = 'tx';
      textPositionMod -= 5 + padding;
      textPositionMod2 += 5;
      defaultAnchor = 'end';
      break;
  }
  const generatedTicks =
    tickValues instanceof Function ? tickValues({ orient }) : tickValues;
  return generatedTicks.map((tick, i) => {
    const tickPosition = scale(tick);
    return {
      [position1]: tickPosition,
      [position2]: tickPosition,
      [domain1]: axisDomain[0],
      [domain2]: axisDomain[1],
      [tposition1]: tickPosition + textPositionMod2,
      [tposition2]: axisDomain[0] + textPositionMod,
      defaultAnchor,
      renderMode: renderMode(tick, i),
      value: tick
    };
  });
}

export const axisLabels = ({
  axisParts,
  tickFormat,
  rotate = 0,
  center = false,
  orient
}) => {
  return axisParts.map((axisPart, i) => {
    let renderedValue = tickFormat(axisPart.value, i);
    if (typeof renderedValue !== 'object' || renderedValue instanceof Date) {
      renderedValue = (
        <text textAnchor={axisPart.defaultAnchor} className="axis-label">
          {renderedValue.toString ? renderedValue.toString() : renderedValue}
        </text>
      );
    }

    let textX = axisPart.tx;
    let textY = axisPart.ty;
    if (center) {
      switch (orient) {
        case 'right':
          textX -= (axisPart.x2 - axisPart.x1) / 2;
          break;
        case 'left':
          textX += (axisPart.x2 - axisPart.x1) / 2;
          break;
        case 'top':
          textY += (axisPart.y2 - axisPart.y1) / 2;
          break;
        case 'bottom':
          textY -= (axisPart.y2 - axisPart.y1) / 2;
          break;
      }
    }

    return (
      <g
        key={i}
        pointerEvents="none"
        transform={`translate(${textX},${textY}) rotate(${rotate})`}
        className="axis-label"
      >
        {renderedValue}
      </g>
    );
  });
};

export const axisLines = ({
  axisParts,
  orient,
  tickLineGenerator = defaultTickLineGenerator,
  baseMarkProps,
  className,
  jaggedBase
}) => {
  return axisParts.map((axisPart, i) =>
    tickLineGenerator({
      xy: axisPart,
      orient,
      i,
      baseMarkProps,
      className,
      jaggedBase
    })
  );
};
