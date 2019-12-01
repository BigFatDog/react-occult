import { extent as d3Extent } from 'd3-array';
import { voronoi } from 'd3-voronoi';
import React from 'react';
import { Mark } from 'semiotic-mark';

import { changeVoronoi, clickVoronoi, doubleclickVoronoi } from './voronoi';

const calculateOverlay = props => {
  let voronoiPaths = [];
  const {
    xScale,
    yScale,
    data,
    size,
    overlay,
    interactionOverflow = { top: 0, bottom: 0, left: 0, right: 0 },
    customClickBehavior,
    customDoubleClickBehavior,
    hoverAnnotation,
    voronoiHover
  } = props;
  const pointerStyle =
    customClickBehavior || customDoubleClickBehavior
      ? { cursor: 'pointer' }
      : {};

  if (data && hoverAnnotation && !overlay) {
    const voronoiDataset = [];
    const voronoiUniqueHash = {};

    data.forEach(d => {
      const xValue = Math.floor(xScale(d.x));
      const yValue = Math.floor(yScale(d.y));

      if (
        xValue >= 0 &&
        xValue <= size[0] &&
        yValue >= 0 &&
        yValue <= size[1] &&
        xValue !== undefined &&
        yValue !== undefined &&
        isNaN(xValue) === false &&
        isNaN(yValue) === false
      ) {
        const pointKey = `${xValue},${yValue}`;
        if (!voronoiUniqueHash[pointKey]) {
          const voronoiPoint = {
            ...d,
            points: data,
            coincidentPoints: [d],
            voronoiX: xValue,
            voronoiY: yValue
          };
          voronoiDataset.push(voronoiPoint);
          voronoiUniqueHash[pointKey] = voronoiPoint;
        } else voronoiUniqueHash[pointKey].coincidentPoints.push(d);
      }
    });

    const voronoiXExtent = d3Extent(voronoiDataset.map(d => d.voronoiX));
    const voronoiYExtent = d3Extent(voronoiDataset.map(d => d.voronoiY));

    const voronoiExtent = [
      [
        Math.min(voronoiXExtent[0], -interactionOverflow.left),
        Math.min(voronoiYExtent[0], -interactionOverflow.top)
      ],
      [
        Math.max(voronoiXExtent[1], size[0] + interactionOverflow.right),
        Math.max(voronoiYExtent[1], size[1] + interactionOverflow.bottom)
      ]
    ];

    const voronoiDiagram = voronoi()
      .extent(voronoiExtent)
      .x(d => d.voronoiX)
      .y(d => d.voronoiY);

    const voronoiData = voronoiDiagram.polygons(voronoiDataset);

    voronoiPaths = voronoiData.map((d, i) => {
      return (
        <path
          onClick={() => clickVoronoi(voronoiDataset[i], props)}
          onDoubleClick={() => doubleclickVoronoi(voronoiDataset[i], props)}
          onMouseEnter={() =>
            changeVoronoi({
              d: voronoiDataset[i],
              customHoverTypes: props.hoverAnnotation,
              props
            })
          }
          onMouseLeave={() => voronoiHover([])}
          key={`interactionVoronoi${i}`}
          d={`M${d.join('L')}Z`}
          style={{
            fillOpacity: 0,
            strokeOpacity: 0.5,
            stroke: 'none',
            ...pointerStyle
          }}
        />
      );
    }, this);
    return voronoiPaths;
  } else if (overlay) {
    const renderedOverlay = overlay.map((overlayRegion, i) => {
      const { overlayData, ...rest } = overlayRegion;
      if (React.isValidElement(overlayRegion.renderElement)) {
        const overlayProps = {
          key: `overlay-${i}`,
          onMouseEnter: () =>
            changeVoronoi({
              d: overlayData,
              customHoverTypes: props.hoverAnnotation,
              props
            }),
          onMouseLeave: () => voronoiHover([]),
          onClick: () => clickVoronoi(overlayData, props),
          onDoubleClick: () => doubleclickVoronoi(overlayData, props),
          style: { opacity: 0, ...pointerStyle }
        };
        return React.cloneElement(overlayRegion.renderElement, overlayProps);
      } else {
        return (
          <Mark
            forceUpdate={true}
            {...rest}
            key={`overlay-${i}`}
            onMouseEnter={() =>
              changeVoronoi({
                d: overlayData,
                customHoverTypes: props.hoverAnnotation,
                props
              })
            }
            onMouseLeave={() => voronoiHover([])}
            onClick={() => clickVoronoi(overlayData, props)}
            onDoubleClick={() => doubleclickVoronoi(overlayData, props)}
            style={{ opacity: 0, ...pointerStyle }}
          />
        );
      }
    });

    return renderedOverlay;
  }
};

export default calculateOverlay;
