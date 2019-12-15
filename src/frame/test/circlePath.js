const roundToTenth = number => Math.round(number * 10) / 10;

const circlePath = (cx, cy, r) =>
  `${[
    'M',
    roundToTenth(cx - r),
    roundToTenth(cy),
    'a',
    r,
    r,
    0,
    1,
    0,
    r * 2,
    0,
    'a',
    r,
    r,
    0,
    1,
    0,
    -(r * 2),
    0
  ].join(' ')}Z`;

export default circlePath;
