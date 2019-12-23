const adjustedAnnotationKeyMapper = d => {
  const { note = {} } = d.props.noteData;
  const { label } = note;
  const id =
    d.props.noteData.id || `${d.props.noteData.x}-${d.props.noteData.y}`;
  return `${id}-${label}`;
};

export default adjustedAnnotationKeyMapper;
