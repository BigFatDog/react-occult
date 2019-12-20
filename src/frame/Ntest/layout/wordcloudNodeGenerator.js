import * as React from 'react';

const wordcloudNodeGenerator = ({
  d,
  i,
  styleFn,
  key,
  className,
  transform
}) => {
  const textStyle = styleFn(d, i);
  textStyle.fontSize = `${d.fontSize}px`;
  textStyle.fontWeight = d.fontWeight;
  textStyle.textAnchor = 'middle';
  let textTransform, textY, textX;
  textTransform = `scale(${d.scale})`;

  if (!d.rotate) {
    textY = d.textHeight / 4;
    textTransform = `scale(${d.scale})`;
  } else {
    textTransform = `rotate(90) scale(${d.scale})`;
    textY = d.textHeight / 4;
  }

  return (
    <g key={key} transform={transform}>
      <text
        style={textStyle}
        y={textY}
        x={textX}
        transform={textTransform}
        className={`${className} wordcloud`}
        aria-label={d._NWFText}
        role="img"
        tabIndex={-1}
      >
        {d._NWFText}
      </text>
    </g>
  );
};

export default wordcloudNodeGenerator;
