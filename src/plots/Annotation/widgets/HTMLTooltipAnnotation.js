const HTMLTooltipAnnotation = ({
  content,
  screenCoordinates,
  i,
  d,
  useSpans
}) => {
  //To string because React gives a DOM error if it gets a date
  return (
    <SpanOrDiv
      span={useSpans}
      key={`xylabel-${i}`}
      className={`annotation annotation-xy-label ${d.className || ''} `}
      style={{
        position: 'absolute',
        top: `${screenCoordinates[1]}px`,
        left: `${screenCoordinates[0]}px`
      }}
    >
      {content}
    </SpanOrDiv>
  );
};

export default HTMLTooltipAnnotation;
