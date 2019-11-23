import { defaultHTMLRule } from './rules';

const generateHTMLAnnotations = (props, annotations) =>
  annotations
    .map((d, i) => defaultHTMLRule(d, i, props))
    .filter(d => d !== null && d !== undefined);

const getHTMLAnnotations = props => {
  const { annotations } = props;
  return generateHTMLAnnotations(props, annotations);
};

export default getHTMLAnnotations;
