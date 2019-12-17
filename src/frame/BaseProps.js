import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';

export const BaseProps = {
  // routine
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
  frameKey: PropTypes.string,
  renderKey: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  useSpans: PropTypes.bool,
  additionalDefs: PropTypes.array,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  matte: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.func,
    PropTypes.object
  ]),
  // render as it is
  beforeElements: PropTypes.object,
  afterElements: PropTypes.object,
  backgroundGraphics: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  foregroundGraphics: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  canvasPostProcess: PropTypes.string,
  // interaction
  hoverAnnotation: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.bool
  ]),
  interaction: PropTypes.func,
  customClickBehavior: PropTypes.func,
  customHoverBehavior: PropTypes.func,
  customDoubleClickBehavior: PropTypes.func,
  overlay: PropTypes.object,
  interactionOverflow: PropTypes.func,
  tooltipContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.func
  ]),
  disableCanvasInteraction: PropTypes.func
};

export const BaseDefaultProps = {
  width: 800,
  height: 600,
  name: '',
  className: '',
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
  title: { title: '', orient: 'top' },
  useSpans: false,
  beforeElements: null,
  afterElements: null,
  backgroundGraphics: null,
  foregroundGraphics: null,
  additionalDefs: null,
  canvasPostProcess: 'chunkClose',
  frameXScale: scaleLinear(),
  frameYScale: scaleLinear()
};
