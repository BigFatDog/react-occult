const constructDataObject = (d, props) => {
  if (d === undefined) return d;
  const { points } = props;
  return d && d.data ? { points, ...d.data, ...d } : { points, ...d };
};

const changeVoronoi = ({ d, customHoverTypes, props }) => {
  const { customHoverBehavior, voronoiHover } = props;
  const dataObject = constructDataObject(d, props);
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

const clickVoronoi = (d, props) => {
  const dataObject = constructDataObject(d, props);

  if (props.customClickBehavior) props.customClickBehavior(dataObject);
};

const doubleclickVoronoi = (d, props) => {
  const dataObject = constructDataObject(d, props);

  if (props.customDoubleClickBehavior)
    props.customDoubleClickBehavior(dataObject);
};

export { changeVoronoi, clickVoronoi, doubleclickVoronoi };
