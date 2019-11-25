import {packEnclose} from "d3-hierarchy";
import CircleEnclosure from "./CircleEnclosure";

const SvgEncloseAnnotation = ({ screenCoordinates, d, i }) => {
    const circle = packEnclose(
        screenCoordinates.map(p => ({ x: p[0], y: p[1], r: 2 }))
    );

    const baseProps = { d, circle, i };

    return <CircleEnclosure {...baseProps}/>;
};

export default SvgEncloseAnnotation;