import React from 'react';

const toRenderedElements = ({ props, piecesGroup, handleKeyDown }) => {
  const {
    renderOrder,
    renderPipeline,
    xScale,
    yScale,
    baseMarkProps = {},
    voronoiHover
  } = props;
  const renderedElements = [];
  const canvasDrawing = [];

  // pipeLine to renderedElements
  const renderVizKeys = Object.keys(renderPipeline);
  const renderKeys = renderOrder.concat(
    renderVizKeys.filter(d => renderOrder.indexOf(d) === -1)
  );

  console.log('-------------');

  renderKeys.forEach(k => {
    const pipe = renderPipeline[k];
    if (
      pipe &&
      ((pipe.data &&
        typeof pipe.data === 'object' &&
        !Array.isArray(pipe.data)) ||
        (pipe.data && pipe.data.length > 0))
    ) {
      const renderedPipe = pipe.behavior({
        xScale,
        yScale,
        canvasDrawing,
        baseMarkProps: Object.assign(baseMarkProps, {
          'aria-label':
            (pipe.ariaLabel && pipe.ariaLabel.items) || 'dataviz-element',
          role: 'img',
          tabIndex: -1
        }),
        ...pipe
      });

      if (renderedPipe && renderedPipe.length > 0) {
        renderedElements.push(
          <g
            key={k}
            className={k}
            role={'group'}
            tabIndex={0}
            aria-label={
              (pipe.ariaLabel &&
                `${renderedPipe.length} ${pipe.ariaLabel.items}s in a ${
                  pipe.ariaLabel.chart
                }`) ||
              k
            }
            onKeyDown={e => handleKeyDown(e, k)}
            onBlur={() => {
              voronoiHover(undefined);
            }}
            ref={thisNode => thisNode && (piecesGroup[k] = thisNode.childNodes)}
          >
            {renderedPipe}
          </g>
        );
      }
    }
  });

  return {
    renderedElements,
    canvasDrawing
  };
};

export default toRenderedElements;
