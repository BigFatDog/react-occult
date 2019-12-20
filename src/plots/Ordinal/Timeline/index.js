import React from 'react';
import PropTypes from 'prop-types';
import OrdinalPlot from '../OrdinalPlot';
import timelineLayout from './timelineLayout';

const Timeline = props => {


};

Timeline.layout = timelineLayout;

Timeline.propTypes = {
    ...OrdinalPlot.propTypes,
    innerRadius: PropTypes.number,
    offsetAngle: PropTypes.number,
    angleRange: PropTypes.array
};

Timeline.defaultProps = {
    ...OrdinalPlot.defaultProps,
    angleRange: [0, 360]
};

export default Timeline;