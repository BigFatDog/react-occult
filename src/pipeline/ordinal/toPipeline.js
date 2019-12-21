import toLaidOutPieces from './toLaidOutPieces';
import toConnectors from './toConnectors';

const toPipeline = ({
  // pieces
  pieceStyle,
  pieceData,
  pieceClass,
  pieceType,
  pieceUseCanvas,
  //connectors
  connectorType,
  connectorData,
  connectorStyle,
  connectorClass,
  connectorUseCanvas,
  connectorRenderMode,
  projection,
  ariaLabel,
  axis,
  baseMarkProps,
  renderKeyFn,

  isOrdinalPoint,
  shouldRender = true
}) => {
  const {
    svgPipeline: pieceSvg,
    canvasPipeline: pieceCanvas
  } = toLaidOutPieces({
    data: pieceData,
    shouldRender,
    useCanvas: pieceUseCanvas,
    styleFn: pieceStyle,
    classFn: pieceClass,
    baseMarkProps,
    renderKeyFn,
    ariaLabel,
    axis
  });

  const {
    svgPipeline: connectorSvg,
    canvasPipeline: connectorCanvas
  } = toConnectors({
    type: connectorType,
    isOrdinalPoint,
    data: connectorData,
    useCanvas: connectorUseCanvas,
    styleFn: connectorStyle,
    classFn: connectorClass,
    renderMode: connectorRenderMode,
    baseMarkProps,
    renderKeyFn,
    ariaLabel,
    axis,
    projection
  });

  const svgPipe = [...pieceSvg, ...connectorSvg];
  const canvasPipe = [...pieceCanvas, ...connectorCanvas];

  return {
    svgPipe,
    canvasPipe
  };
};

export default toPipeline;
