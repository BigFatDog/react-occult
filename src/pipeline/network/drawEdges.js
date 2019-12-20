import { Mark } from 'semiotic-mark';
import * as React from 'react';
import { d as glyphD } from 'd3-glyphedge';
import { linkHorizontal, linkVertical } from 'd3-shape';

const sigmoidLinks = {
  horizontal: linkHorizontal()
    .x(d => d.x)
    .y(d => d.y),
  vertical: linkVertical()
    .x(d => d.x)
    .y(d => d.y),
  radial: glyphD.lineArc
};

const genericLineGenerator = d =>
  `M${d.source.x},${d.source.y}L${d.target.x},${d.target.y}`;

function sankeyEdgeSort(a, b, direction) {
  if (a.circular && !b.circular) return -1;
  if (b.circular && !a.circular) return 1;
  const first = direction === 'down' ? 'y' : 'x';
  const second = direction === 'down' ? 'x' : 'y';

  return a.source[first] === b.source[first]
    ? a.sankeyWidth === b.sankeyWidth
      ? a.source[second] - b.source[second]
      : b.sankeyWidth - a.sankeyWidth
    : a.source[first] - b.source[first];
}

const customEdgeHashD = {
  curve: (d, projection = 'vertical') => sigmoidLinks[projection](d),
  linearc: d => glyphD.lineArc(d),
  ribbon: d => glyphD.ribbon(d, d.width),
  arrowhead: d =>
    glyphD.arrowHead(d, d.target.nodeSize, d.width, d.width * 1.5),
  halfarrow: d =>
    glyphD.halfArrow(d, d.target.nodeSize, d.width, d.width * 1.5),
  nail: d => glyphD.nail(d, d.source.nodeSize),
  comet: d => glyphD.comet(d, d.target.nodeSize),
  taffy: d =>
    glyphD.taffy(
      d,
      d.source.nodeSize / 2,
      d.target.nodeSize / 2,
      (d.source.nodeSize + d.target.nodeSize) / 4
    )
};

const drawEdges = ({
  data: baseData,
  renderKeyFn,
  customMark,
  styleFn,
  classFn,
  renderMode,
  useCanvas,
  type,
  baseMarkProps,
  networkType,
  direction,
  projection
}) => {
  const data =
    networkType === 'sankey'
      ? baseData.sort((a, b) => sankeyEdgeSort(a, b, direction))
      : baseData;

  let dGenerator = genericLineGenerator;
  const svgPipeline = [];
  const canvasPipeline = [];

  if (customMark) {
    // CUSTOM MARK IMPLEMENTATION
    data.forEach((d, i) => {
      const renderedCustomMark = customMark({
        d,
        i,
        renderKeyFn,
        styleFn,
        classFn,
        renderMode,
        key: renderKeyFn ? renderKeyFn(d, i) : `edge-${i}`,
        className: `${classFn(d, i)} edge`,
        transform: `translate(${d.x},${d.y})`,
        baseMarkProps
      });
      if (
        renderedCustomMark &&
        renderedCustomMark.props &&
        (renderedCustomMark.props.markType !== 'path' ||
          renderedCustomMark.props.d)
      ) {
        svgPipeline.push(renderedCustomMark);
      }
    });
  } else {
    if (type) {
      if (typeof type === 'function') {
        dGenerator = type;
      } else if (customEdgeHashD[type]) {
        dGenerator = d => customEdgeHashD[type](d, projection);
      }
    }
    data.forEach((d, i) => {
      const renderedD = dGenerator(d);

      if (renderedD && useCanvas === true) {
        const canvasEdge = {
          baseClass: 'frame-piece',
          tx: d.x,
          ty: d.y,
          d,
          i,
          markProps: { markType: 'path', d: renderedD },
          styleFn,
          renderFn: renderMode,
          classFn
        };
        canvasPipeline.push(canvasEdge);
      } else if (renderedD) {
        svgPipeline.push(
          <Mark
            {...baseMarkProps}
            key={renderKeyFn ? renderKeyFn(d, i) : `edge-${i}`}
            markType="path"
            renderMode={renderMode ? renderMode(d, i) : undefined}
            className={`${classFn(d)} edge`}
            d={renderedD}
            style={styleFn(d, i)}
            tabIndex={-1}
            role="img"
            aria-label={`connection from ${d.source.id} to ${d.target.id}`}
          />
        );
      }
    });
  }

  return { svgPipeline, canvasPipeline };
};

export default drawEdges;
