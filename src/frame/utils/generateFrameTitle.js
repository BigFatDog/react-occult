import React from 'react';

const generateFrameTitle = ({
  title: rawTitle = { title: '', orient: 'top' },
  size
}) => {
  let finalTitle = null;
  const { title, orient = 'top' } = rawTitle;
  let x = 0,
    y = 0,
    transform;
  switch (orient) {
    case 'top':
      x = size[0] / 2;
      y = 25;
      break;
    case 'bottom':
      x = size[0] / 2;
      y = size[1] - 25;
      break;
    case 'left':
      x = 25;
      y = size[1] / 2;
      transform = 'rotate(-90)';
      break;
    case 'right':
      x = size[0] - 25;
      y = size[1] / 2;
      transform = 'rotate(90)';

      break;
  }
  const gTransform = `translate(${x},${y})`;
  if (typeof title === 'string' && title.length > 0) {
    finalTitle = (
      <g transform={gTransform}>
        <text
          className={'frame-title'}
          transform={transform}
          style={{ textAnchor: 'middle', pointerEvents: 'none' }}
        >
          {title}
        </text>
      </g>
    );
  } else if (title) {
    //assume if defined then its an svg mark of some sort
    finalTitle = <g transform={gTransform}>{title}</g>;
  }
  return finalTitle;
};

export default generateFrameTitle;
