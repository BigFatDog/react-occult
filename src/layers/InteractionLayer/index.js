import * as React from 'react';
import { brushX, brushY, brush } from 'd3-brush';
import { extent as d3Extent } from 'd3-array';
import { select, event } from 'd3-selection';
import { voronoi } from 'd3-voronoi';
import { Mark } from 'semiotic-mark';

import Brush from './Brush';
import {
  object,
  string,
  func,
  array,
  arrayOf,
  oneOfType,
  bool,
  node,
  number
} from 'prop-types';
import SpanOrDiv from '../../utils/SpanOrDiv';

import {
  projectedX,
  projectedY,
  projectedYTop,
  projectedYMiddle,
  projectedYBottom
} from '../../constants/coordinateNames';

const generateOMappingFn = projectedColumns => d =>
  d
    ? Object.values(projectedColumns).filter(
        c => d[1] >= c.x && d[0] <= c.x + c.width
      )
    : null;

const generateOEndMappingFn = projectedColumns => d => {
  if (
    d &&
    event.sourceEvent &&
    event.sourceEvent.path &&
    event.sourceEvent.path[1] &&
    event.sourceEvent.path[1].classList.contains('xybrush') &&
    event.target.move
  ) {
    const columnValues = Object.values(projectedColumns);
    const foundColumns = columnValues.filter(
      c => d[1] >= c.x && d[0] <= c.x + c.width
    );

    const firstColumn = foundColumns[0] || {
      x: 0,
      width: 0
    };

    const lastColumn = foundColumns[foundColumns.length - 1] || {
      x: 0,
      width: 0
    };

    const columnPosition = [
      firstColumn.x + Math.min(5, firstColumn.width / 10),
      lastColumn.x + lastColumn.width - Math.min(5, lastColumn.width / 10)
    ];

    select(event.sourceEvent.path[1])
      .transition(750)
      .call(event.target.move, columnPosition);

    return foundColumns;
  }
  return null;
};

class InteractionLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overlayRegions: this.calculateOverlay(props),
      interactionCanvas: (
        <canvas
          className="frame-canvas-interaction"
          ref={canvasContext => {
            if (canvasContext) {
              canvasContext.onmousemove = e => {
                const interactionContext = canvasContext.getContext('2d');
                const hoverPoint = interactionContext.getImageData(
                  e.offsetX,
                  e.offsetY,
                  1,
                  1
                );

                const mostCommonRGB = `rgba(${hoverPoint.data[0]},${
                  hoverPoint.data[1]
                },${hoverPoint.data[2]},255)`;

                let overlay = this.state.overlayRegions[
                  this.canvasMap.get(mostCommonRGB)
                ];
                if (!overlay) {
                  const hoverArea = interactionContext.getImageData(
                    e.offsetX - 2,
                    e.offsetY - 2,
                    5,
                    5
                  );
                  let x = 0;

                  while (!overlay && x < 100) {
                    overlay = this.state.overlayRegions[
                      this.canvasMap.get(
                        `rgba(${hoverArea.data[x]},${hoverArea.data[x + 1]},${
                          hoverArea.data[x + 2]
                        },255)`
                      )
                    ];
                    x += 4;
                  }
                }

                if (overlay && overlay.props) {
                  overlay.props.onMouseEnter();
                } else {
                  this.changeVoronoi();
                }
              };
            }
            this.interactionContext = canvasContext;
          }}
          style={{
            position: 'absolute',
            left: `0px`,
            top: `0px`,
            imageRendering: 'pixelated',
            pointerEvents: 'all',
            opacity: 0
          }}
          width={props.svgSize[0]}
          height={props.svgSize[1]}
        />
      )
    };
  }

  static defaultProps = {
    svgSize: [500, 500]
  };

  interactionContext = null;

  canvasMap = new Map();

  constructDataObject = d => {
    if (d === undefined) return d;
    const { points } = this.props;
    return d && d.data ? { points, ...d.data, ...d } : { points, ...d };
  };

  changeVoronoi = (d, customHoverTypes) => {
    const { customHoverBehavior, voronoiHover } = this.props;
    //Until semiotic 2
    const dataObject = this.constructDataObject(d);
    if (customHoverBehavior) customHoverBehavior(dataObject);

    if (!d) voronoiHover(null);
    else if (customHoverTypes === true) {
      const vorD = Object.assign({}, dataObject);
      vorD.type = vorD.type === 'column-hover' ? 'column-hover' : 'frame-hover';
      voronoiHover(vorD);
    } else if (customHoverTypes) {
      const arrayWrappedHoverTypes = Array.isArray(customHoverTypes)
        ? customHoverTypes
        : [customHoverTypes];
      const mappedHoverTypes = arrayWrappedHoverTypes
        .map(c => {
          const finalC = typeof c === 'function' ? c(dataObject) : c;
          if (!finalC) return undefined;
          return Object.assign({}, dataObject, finalC);
        })
        .filter(d => d);

      voronoiHover(mappedHoverTypes);
    }
  };

  clickVoronoi = d => {
    //Until semiotic 2
    const dataObject = this.constructDataObject(d);

    if (this.props.customClickBehavior)
      this.props.customClickBehavior(dataObject);
  };
  doubleclickVoronoi = d => {
    //Until semiotic 2
    const dataObject = this.constructDataObject(d);

    if (this.props.customDoubleClickBehavior)
      this.props.customDoubleClickBehavior(dataObject);
  };

  brushStart = e => {
    if (this.props.interaction && this.props.interaction.start)
      this.props.interaction.start(e, column, data);
  };

  brush = e => {
    if (this.props.interaction && this.props.interaction.during)
      this.props.interaction.during(e, column, data);
  };

  brushEnd = e => {
    if (this.props.interaction && this.props.interaction.end)
      this.props.interaction.end(e, column, data);
  };

  createBrush = interaction => {
    let semioticBrush, mappingFn, selectedExtent, endMappingFn;

    const { xScale, yScale, size, renderPipeline } = this.props;

    const brushData = {};

    Object.entries(renderPipeline).forEach(([key, value]) => {
      if (value.data && value.data.length > 0) {
        brushData[key] = value.data;
      }
    });

    const { projection, projectedColumns } = interaction;

    const actualBrush =
      interaction.brush === 'oBrush'
        ? projection === 'horizontal'
          ? 'yBrush'
          : 'xBrush'
        : interaction.brush;

    const {
      extent = actualBrush === 'xyBrush'
        ? [
            [xScale.invert(0), yScale.invert(0)],
            [xScale.invert(size[0]), yScale.invert(size[1])]
          ]
        : actualBrush === 'xBrush'
        ? [xScale.invert(0), xScale.invert(size[0])]
        : [yScale.invert(0), yScale.invert(size[1])]
    } = interaction;

    if (extent.indexOf && extent.indexOf(undefined) !== -1) {
      return <g />;
    }

    if (actualBrush === 'xBrush') {
      const castExtent = extent;
      mappingFn = d => (!d ? null : [xScale.invert(d[0]), xScale.invert(d[1])]);
      semioticBrush = brushX();
      selectedExtent = castExtent.map(d => xScale(d));
      endMappingFn = mappingFn;
    } else if (actualBrush === 'yBrush') {
      const castExtent = extent;

      mappingFn = d =>
        !d
          ? null
          : [yScale.invert(d[0]), yScale.invert(d[1])].sort((a, b) => a - b);
      semioticBrush = brushY();
      selectedExtent = castExtent.map(d => yScale(d)).sort((a, b) => a - b);
      endMappingFn = mappingFn;
    } else {
      const castExtent = extent;
      if (
        castExtent.indexOf(undefined) !== -1 ||
        castExtent[0].indexOf(undefined) !== -1 ||
        castExtent[1].indexOf(undefined) !== -1
      ) {
        return <g />;
      }

      semioticBrush = brush();
      mappingFn = d => {
        if (!d) return null;
        const yValues = [yScale.invert(d[0][1]), yScale.invert(d[1][1])].sort(
          (a, b) => a - b
        );

        return [
          [xScale.invert(d[0][0]), yValues[0]],
          [xScale.invert(d[1][0]), yValues[1]]
        ];
      };

      const yValues = [yScale(extent[0][1]), yScale(extent[1][1])].sort(
        (a, b) => a - b
      );

      selectedExtent = castExtent.map((d, i) => [xScale(d[0]), yValues[i]]);

      endMappingFn = mappingFn;
    }

    if (interaction.brush === 'oBrush') {
      selectedExtent = null;
      if (interaction.extent) {
        const [leftExtent, rightExtent] = interaction.extent;
        if (
          (typeof leftExtent === 'string' || typeof leftExtent === 'number') &&
          (typeof rightExtent === 'string' || typeof rightExtent === 'number')
        ) {
          selectedExtent = [
            projectedColumns[leftExtent].x,
            projectedColumns[rightExtent].x +
              projectedColumns[rightExtent].width
          ];
        }
      }

      mappingFn = generateOMappingFn(projectedColumns);
      endMappingFn = generateOEndMappingFn(projectedColumns);
    }

    semioticBrush
      .extent([[0, 0], [this.props.size[0], this.props.size[1]]])
      .on('start', () => {
        this.brushStart(mappingFn(event.selection), undefined, brushData);
      })
      .on('brush', () => {
        this.brush(mappingFn(event.selection), undefined, brushData);
      })
      .on('end', () => {
        this.brushEnd(endMappingFn(event.selection), undefined, brushData);
      });

    return (
      <g className="brush">
        <Brush
          selectedExtent={selectedExtent}
          extent={extent}
          svgBrush={semioticBrush}
        />
      </g>
    );
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.overlay !== nextProps.overlay ||
      nextProps.points !== this.props.points ||
      this.props.xScale !== nextProps.xScale ||
      this.props.yScale !== nextProps.yScale ||
      this.props.hoverAnnotation !== nextProps.hoverAnnotation
    ) {
      this.setState({ overlayRegions: this.calculateOverlay(nextProps) });
    }
  }

  calculateOverlay = props => {
    let voronoiPaths = [];
    const {
      xScale,
      yScale,
      points,
      showLinePoints,
      size,
      overlay,
      interactionOverflow = { top: 0, bottom: 0, left: 0, right: 0 },
      customClickBehavior,
      customDoubleClickBehavior,
      hoverAnnotation
    } = props;
    const whichPoints = {
      top: projectedYTop,
      bottom: projectedYBottom
    };

    const pointerStyle =
      customClickBehavior || customDoubleClickBehavior
        ? { cursor: 'pointer' }
        : {};

    if (points && hoverAnnotation && !overlay) {
      const voronoiDataset = [];
      const voronoiUniqueHash = {};

      points.forEach(d => {
        const xValue = Math.floor(xScale(d[projectedX]));
        const yValue = Math.floor(
          yScale(
            showLinePoints && d[whichPoints[showLinePoints]] !== undefined
              ? d[whichPoints[showLinePoints]]
              : d[projectedYMiddle] !== undefined
              ? d[projectedYMiddle]
              : d[projectedY]
          )
        );
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
            onClick={() => {
              this.clickVoronoi(voronoiDataset[i]);
            }}
            onDoubleClick={() => {
              this.doubleclickVoronoi(voronoiDataset[i]);
            }}
            onMouseEnter={() => {
              this.changeVoronoi(voronoiDataset[i], props.hoverAnnotation);
            }}
            onMouseLeave={() => {
              this.changeVoronoi();
            }}
            key={`interactionVoronoi${i}`}
            d={`M${d.join('L')}Z`}
            style={{
              fillOpacity: 0,
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
            onMouseEnter: () => {
              this.changeVoronoi(overlayData, props.hoverAnnotation);
            },
            onMouseLeave: () => {
              this.changeVoronoi();
            },
            onClick: () => {
              this.clickVoronoi(overlayData);
            },
            onDoubleClick: () => {
              this.doubleclickVoronoi(overlayData);
            },
            style: { opacity: 0, ...pointerStyle }
          };
          return React.cloneElement(overlayRegion.renderElement, overlayProps);
        } else {
          return (
            <Mark
              forceUpdate={true}
              {...rest}
              key={`overlay-${i}`}
              onMouseEnter={() => {
                this.changeVoronoi(overlayData, props.hoverAnnotation);
              }}
              onMouseLeave={() => {
                this.changeVoronoi();
              }}
              onClick={() => {
                this.clickVoronoi(overlayData);
              }}
              onDoubleClick={() => {
                this.doubleclickVoronoi(overlayData);
              }}
              style={{ opacity: 0, ...pointerStyle }}
            />
          );
        }
      });

      return renderedOverlay;
    }
  };

  componentDidMount() {
    this.canvasRendering();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.overlayRegions !== prevState.overlayRegions) {
      this.canvasRendering();
    }
  }

  canvasRendering = () => {
    if (this.interactionContext === null || !this.state.overlayRegions) return;

    const { svgSize, margin } = this.props;
    const { overlayRegions } = this.state;

    this.canvasMap.clear();

    const interactionContext = this.interactionContext.getContext('2d');

    interactionContext.imageSmoothingEnabled = false;
    interactionContext.setTransform(1, 0, 0, 1, margin.left, margin.top);
    interactionContext.clearRect(
      -margin.left,
      -margin.top,
      svgSize[0],
      svgSize[1]
    );

    interactionContext.lineWidth = 1;

    overlayRegions.forEach((overlay, oi) => {
      const interactionRGBA = `rgba(${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},255)`;

      this.canvasMap.set(interactionRGBA, oi);

      interactionContext.fillStyle = interactionRGBA;
      interactionContext.strokeStyle = interactionRGBA;

      const p = new Path2D(overlay.props.d);
      interactionContext.stroke(p);
      interactionContext.fill(p);
    });
  };

  createColumnsBrush = interaction => {
    const { projection, rScale, size, oColumns, renderPipeline } = this.props;

    if (!projection || !rScale || !oColumns) return;

    const brushData = {};
    Object.entries(renderPipeline).forEach(([key, value]) => {
      if (value.data && value.data.length > 0) {
        brushData[key] = value.data;
      }
    });

    let semioticBrush, mappingFn;

    const max = rScale.domain()[1];

    if (projection && projection === 'horizontal') {
      mappingFn = d => (!d ? null : [rScale.invert(d[0]), rScale.invert(d[1])]);
    } else
      mappingFn = d =>
        !d
          ? null
          : [
              Math.abs(rScale.invert(d[1]) - max),
              Math.abs(rScale.invert(d[0]) - max)
            ];

    const rRange = rScale.range();

    const columnHash = oColumns;
    let brushPosition, selectedExtent;
    const brushes = Object.keys(columnHash).map(c => {
      if (projection && projection === 'horizontal') {
        selectedExtent = interaction.extent[c]
          ? interaction.extent[c].map(d => rScale(d))
          : rRange;
        brushPosition = [0, columnHash[c].x];
        semioticBrush = brushX();
        semioticBrush
          .extent([[rRange[0], 0], [rRange[1], columnHash[c].width]])
          .on('start', () => {
            this.brushStart(mappingFn(event.selection), c, brushData);
          })
          .on('brush', () => {
            this.brush(mappingFn(event.selection), c, brushData);
          })
          .on('end', () => {
            this.brushEnd(mappingFn(event.selection), c, brushData);
          });
      } else {
        selectedExtent = interaction.extent[c]
          ? interaction.extent[c].map(d => rRange[1] - rScale(d)).reverse()
          : rRange;
        brushPosition = [columnHash[c].x, 0];
        semioticBrush = brushY();
        semioticBrush
          .extent([[0, rRange[0]], [columnHash[c].width, rRange[1]]])
          .on('start', () => {
            this.brushStart(mappingFn(event.selection), c, brushData);
          })
          .on('brush', () => {
            this.brush(mappingFn(event.selection), c, brushData);
          })
          .on('end', () => {
            this.brushEnd(mappingFn(event.selection), c, brushData);
          });
      }

      return (
        <g key={`column-brush-${c}`} className="brush">
          <Brush
            key={`orbrush${c}`}
            selectedExtent={selectedExtent}
            svgBrush={semioticBrush}
            position={brushPosition}
          />
        </g>
      );
    });
    return brushes;
  };

  render() {
    let semioticBrush = null;
    const {
      interaction,
      svgSize,
      margin,
      useSpans = false,
      canvasRendering,
      disableCanvasInteraction
    } = this.props;

    const { overlayRegions } = this.state;
    let { enabled } = this.props;

    if (interaction && interaction.brush) {
      enabled = true;
      semioticBrush = this.createBrush(interaction);
    }

    if (interaction && interaction.columnsBrush) {
      enabled = true;
      semioticBrush = this.createColumnsBrush(interaction);
    }

    if (!overlayRegions && !semioticBrush) {
      return null;
    }

    const interactionCanvas =
      !disableCanvasInteraction &&
      canvasRendering &&
      this.state.overlayRegions &&
      this.state.interactionCanvas;

    return (
      <SpanOrDiv
        span={useSpans}
        className="interaction-layer"
        style={{
          position: 'absolute',
          background: 'none',
          pointerEvents: 'none'
        }}
      >
        {interactionCanvas || (
          <svg
            height={svgSize[1]}
            width={svgSize[0]}
            style={{ background: 'none', pointerEvents: 'none' }}
          >
            <g
              className="interaction-overlay"
              transform={`translate(${margin.left},${margin.top})`}
              style={{ pointerEvents: enabled ? 'all' : 'none' }}
            >
              <g className="interaction-regions">{overlayRegions}</g>
              {semioticBrush}
            </g>
          </svg>
        )}
      </SpanOrDiv>
    );
  }
}

InteractionLayer.propTypes = {
  name: string,
  interaction: object,
  overlay: array,
  oColumns: object,
  xScale: func,
  yScale: func,
  rScale: func,
  svgSize: array,
  hoverAnnotation: oneOfType([bool, object, array, func]),
  interactionOverflow: object,
  size: arrayOf(number),
  points: arrayOf(object),
  position: arrayOf(number),
  enabled: bool,
  useSpans: bool,
  margin: object,
  projection: string,
  customDoubleClickBehavior: func,
  customClickBehavior: func,
  customHoverBehavior: func,
  voronoiHover: func,
  canvasRendering: bool,
  disableCanvasInteraction: bool,
  showLinePoints: string,
  renderPipeline: object
};

export default InteractionLayer;
