import HullEnclosure from './HullEnclosure';

const SvgHullEnclosure = ({ screenCoordinates, d, i }) => {
    return HullEnclosure({ points: screenCoordinates, d, i })
};

export default SvgHullEnclosure;