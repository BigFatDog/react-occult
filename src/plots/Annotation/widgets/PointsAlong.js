import * as React from "react";

const PointsAlong = along => ({
                                  d,
                                  lines,
                                  points,
                                  xScale,
                                  yScale,
                                  pointStyle
                              }) => {
    const alongScale = along === 'x' ? xScale : yScale;
    along = along === 'yTop' && d.yMiddle ? 'yMiddle' : along;
    if (d && d[along]) {
        const { threshold = 1, r = () => 4, styleFn = pointStyle } = d;
        const foundPoints = [];

        const halfThreshold = threshold / 2;

        if (lines && lines.length > 0) {
            lines.forEach(linedata => {
                const linePoints = linedata.data.filter(p => {
                    const pAlong = alongScale(p[along]);
                    const dAlong = alongScale(d[along]);

                    return (
                        pAlong <= dAlong + halfThreshold && pAlong >= dAlong - halfThreshold
                    );
                });
                foundPoints.push(...linePoints);
            });
        }

        if (points && points.length > 0) {
            const pointPoints = points.filter(p => {
                const pAlong = alongScale(p[along]);
                const dAlong = alongScale(d[along]);

                return (
                    pAlong <= dAlong + halfThreshold && pAlong >= dAlong - halfThreshold
                );
            });
            foundPoints.push(...pointPoints);
        }

        return foundPoints.map((p, i) => (
            <circle
                key={`found-circle-${i}`}
                r={r(p, i)}
                style={styleFn(p, i)}
                cx={xScale(p.xMiddle || p.x)}
                cy={yScale(p.yMiddle || p.yTop)}
            />
        ));
    }
    return null;
};

const SvgHorizontalPointsAnnotation = PointsAlong('yTop');
const SvgVerticalPointsAnnotation = PointsAlong('x');

export default PointsAlong;

export {
    SvgHorizontalPointsAnnotation,
    SvgVerticalPointsAnnotation
}