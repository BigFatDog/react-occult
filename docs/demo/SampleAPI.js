import React from 'react';

const Sample = props => {
  return (
    <XYFrame
      width={1200}
      height={800}
      title={'K-Means Centroid Deviation'}
      xAccessor={'x'}
      yAccessor={'y'}
      xExtent={[0]}
      yExtent={[0]}
      data={[]}
      margin={{ left: 60, bottom: 90, right: 10, top: 40 }}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <Contour
        threshold={1}
        bandwidth={15}
        canvas={true}
        showPoints={true}
        style={(e, i) => {
          return {
            fill: 'none',
            stroke: colors[e.parentSummary.title],
            strokeWidth: 0.5
          };
        }}
      />
      <XAxis title="X" />
      <YAxis label={{ name: 'Y', locationDistance: 55 }} />
      <SVGPathSegLinetoVerticalRel
        className="first-series"
        data={overrideData}
      />
    </XYFrame>
  );
};

export default Sample;
