import React, { useState, useEffect } from 'react';

import { BaseProps, BaseDefaultProps } from './BaseProps';

import {
  defaultNetworkSVGRule,
  defaultNetworkHTMLRule
} from '../plots/Annotation/networkAnnotationFn';
import {
  generateXYSVGAnnotations,
  generateXYHtmlAnnotations
} from '../plots/Annotation/xyAnnotationFn';

import {
  generateOrdinalSVGAnnotations,
  generateOrdinalHTMLAnnotations
} from '../plots/Annotation/ordinalAnnotationFn';

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
import Swarm from '../plots/Ordinal/Swarm';

// network
import Arc from '../plots/Network/Arc';
import Chord from '../plots/Network/Chord';
import CirclePack from '../plots/Network/CirclePack';
import Cluster from '../plots/Network/Cluster';
import Dagre from '../plots/Network/Dagre';
import Force from '../plots/Network/Force';
import Matrix from '../plots/Network/Matrix';
import Motifs from '../plots/Network/Motifs';
import Partition from '../plots/Network/Partition';
import Sankey from '../plots/Network/Sankey';
import Tree from '../plots/Network/Tree';
import Treemap from '../plots/Network/Treemap';

// axes
import XAxis from '../axis/XAxis';
import YAxis from '../axis/YAxis';
import Axis from '../axis/Axis';
import Frame from './Frame';

import computeXYFrameData from './computeXYFrameData';
import computeOrdinalFrameData from './ordinal/computeOrdinalFrameData';
import computeNetworkFrameData from './network/computeNetworkFrameData';

const isAxis = type => [Axis, XAxis, YAxis].includes(type);
const isXY = type =>
  [Hexbin, Contour, Heatmap, Line, Scatter, Trendline].includes(type);
const isOrdinal = type =>
  [Timeline, OrdinalPoint, Bar, ClusterBar, BarPercent, Swarm].includes(type);
const isNetwork = type =>
  [
    Arc,
    Chord,
    CirclePack,
    Cluster,
    Dagre,
    Force,
    Matrix,
    Motifs,
    Partition,
    Sankey,
    Tree,
    Treemap
  ].includes(type);

const Paper = props => {
  const { children } = props;
  const axesDefs = React.Children.toArray(children)
    .filter(d => isAxis(d.type))
    .map(d => Object.assign({}, d.props));

  const xyChildren = React.Children.toArray(children).filter(d => isXY(d.type));

  const ordinalChildren = React.Children.toArray(children).filter(d =>
    isOrdinal(d.type)
  );

  const networkChildren = React.Children.toArray(children).filter(d =>
    isNetwork(d.type)
  );

  let frameData = null;
  let plotChildren = null;
  let generateSVGAnnotations = null;
  let generateHTMLAnnotations = null;

  if (xyChildren.length > 0) {
    plotChildren = xyChildren;

    const frameProps = {
      ...props,
      axesDefs,
      plotChildren
    };
    frameData = computeXYFrameData(frameProps);

    generateSVGAnnotations = generateXYSVGAnnotations({
      frameProps,
      frameData
    });
    generateHTMLAnnotations = generateXYHtmlAnnotations({
      frameProps,
      frameData
    });
  } else if (ordinalChildren.length > 0) {
    if (ordinalChildren.length !== 1) {
      console.error('Only 1 Ordinal plot is allowed');
    }

    const { useAxes } = ordinalChildren[0].props;
    plotChildren = ordinalChildren;
    const frameProps = {
      ...props,
      axesDefs: useAxes === true ? [true] : axesDefs,
      plotChildren
    };
    frameData = computeOrdinalFrameData(frameProps);

    generateSVGAnnotations = generateOrdinalSVGAnnotations({
      frameProps,
      frameData
    });
    generateHTMLAnnotations = generateOrdinalHTMLAnnotations({
      frameProps,
      frameData
    });
  } else if (networkChildren.length > 0) {
    if (networkChildren.length !== 1) {
      console.error('Only 1 network plot is allowed');
    }
    plotChildren = networkChildren;
    const frameProps = {
      ...props,
      axesDefs,
      plotChildren
    };
    frameData = computeNetworkFrameData(frameProps);

    generateSVGAnnotations = defaultNetworkSVGRule({ frameProps, frameData });
    generateHTMLAnnotations = defaultNetworkHTMLRule({ frameProps, frameData });
  }

  const frameProps = {
    ...props,
    ...frameData,
    plotChildren,
    generateSVGAnnotations,
    generateHTMLAnnotations
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
