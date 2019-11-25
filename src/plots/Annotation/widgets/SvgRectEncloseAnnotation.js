import RectangleEnclosure from './RectangleEnclosure';

const SvgRectEncloseAnnotation = ({ d, i, screenCoordinates }) => {
  const bboxNodes = screenCoordinates.map(p => {
    return {
      x0: (p.x0 = p[0]),
      x1: (p.x1 = p[0]),
      y0: (p.y0 = p[1]),
      y1: (p.y1 = p[1])
    };
  });

  const baseProps = { bboxNodes, d, i };
  return <RectangleEnclosure {...baseProps} />;
};

export default SvgRectEncloseAnnotation;
