import React from 'react';


import SvgXYAnnotation from '../widgets/SvgXYAnnotation';
import SvgXAnnotation from '../widgets/SvgXAnnotation';
import HullEnclosure from '../widgets/HullEnclosure';
import SvgHullEnclosure from "../widgets/SvgHullEncloseAnnotation";
import SvgYAnnotation from "../widgets/SvgYAnnotation";
import {
  SvgHorizontalPointsAnnotation,
  SvgVerticalPointsAnnotation
} from '../widgets/PointsAlong';
import BasicReactAnnotation from '../widgets/BasicReactAnnotation';
import SvgLineAnnotation from '../widgets/SvgLineAnnotation';
import SvgEncloseAnnotation from '../widgets/SvgEncloseAnnotation';
import DesaturationLayer from "../widgets/DesaturationLayer";
import SvgRectEncloseAnnotation from '../widgets/SvgRectEncloseAnnotation';


const defaultSVGRule = (d, i, props) => {
  const { adjustedSize } = props;
  const screenCoordinates = [
    d.x ? d.x : 0,
    d.y ? adjustedSize[1] - d.y : adjustedSize[1]
  ];

  const widgetProps = {
    ...props,
    d,
    i,
    screenCoordinates,
  };

  if (d.type === 'desaturation-layer') {
    return <DesaturationLayer {...widgetProps}/>;
  } else if (d.type === 'xy' || d.type === 'frame-hover') {
    return  <SvgXYAnnotation {...widgetProps} />;
  } else if (d.type === 'react-annotation' || typeof d.type === 'function') {
    return <BasicReactAnnotation {...widgetProps} />;
  } else if (d.type === 'enclose') {
    return <SvgEncloseAnnotation {...widgetProps}/>;
  } else if (d.type === 'enclose-rect') {
    return <SvgRectEncloseAnnotation {...widgetProps} />;
  } else if (d.type === 'enclose-hull') {
    return <SvgHullEnclosure {...widgetProps}/>
  } else if (d.type === 'x') {
    return <SvgXAnnotation {...widgetProps}/>;
  } else if (d.type === 'y') {
    return <SvgYAnnotation {...widgetProps}/>;
  } else if (d.type === 'bounds') {
    return <SvgBoundsAnnotation {...widgetProps}/>;
  } else if (d.type === 'line') {
    return <SvgLineAnnotation {...widgetProps}/>;
  } else if (d.type === 'area') {
    return <SvgAreaAnnotation {...widgetProps}/>
  } else if (d.type === 'horizontal-points') {
    return <SvgHorizontalPointsAnnotation {...widgetProps}/>;
  } else if (d.type === 'vertical-points') {
    return <SvgVerticalPointsAnnotation {...widgetProps}/>;
  }
  return null;
};


export { defaultSVGRule };
