const objectifyType = type => {
  if (type instanceof Function || typeof type === 'string') {
    return { type: type };
  } else if (type === undefined) {
    return {};
  }
  return type;
};

export default objectifyType;
