import React from 'react';

import { BaseProps, BaseDefaultProps } from './BaseProps';

// xy
import Hexbin from '../plots/Hexbin';
import Contour from '../plots/Contour';
import Heatmap from '../plots/Heatmap';
import Line from '../plots/Line';
import Scatter from '../plots/Scatter';
import Trendline from '../plots/Trendline';

// ordinal
import Timeline from '../plots/Ordinal/Timeline';
import OrdinalPoint from '../plots/Ordinal/OrdinalPoint';
import Bar from '../plots/Ordinal/Bar';
import ClusterBar from '../plots/Ordinal/ClusterBar';
import BarPercent from '../plots/Ordinal/BarPercent';

// axes
import XAxis from '../axis/XAxis';
import YAxis from '../axis/YAxis';
import Axis from '../axis/Axis';
import Frame from './Frame';
import computeXYFrameData from './computeXYFrameData';
import computeOrdinalFrameData from './ordinal/computeOrdinalFrameData';

const isAxis = type => [Axis, XAxis, YAxis].includes(type);
const isXY = type =>
  [Hexbin, Contour, Heatmap, Line, Scatter, Trendline].includes(type);
const isOrdinal = type =>
  [Timeline, OrdinalPoint, Bar, ClusterBar, BarPercent].includes(type);

const Paper = props => {
  const { children } = props;
  console.log(children);
  const axesDefs = React.Children.toArray(children)
    .filter(d => isAxis(d.type))
    .map(d => Object.assign({}, d.props));

  const xyChildren = React.Children.toArray(children).filter(d => isXY(d.type));

  const ordinalChildren = React.Children.toArray(children).filter(d =>
    isOrdinal(d.type)
  );

  let frameData = null;
  if (xyChildren.length > 0) {
    frameData = computeXYFrameData({
      ...props,
      axesDefs,
      plotChildren: xyChildren
    });
  } else if (ordinalChildren.length > 0) {
      if (ordinalChildren.length !== 1) {
          console.error('Only 1 Orindal plot is allowed');
      }
      frameData = computeOrdinalFrameData({
          ...props,
          axesDefs,
          plotChildren: ordinalChildren
      });
  }

  const frameProps = {
    ...props,
    ...frameData
  };

  return <Frame {...frameProps}>{children}</Frame>;
};

Paper.propTypes = {
  ...BaseProps
};

Paper.defaultProps = {
  ...BaseDefaultProps
};

export default Paper;
