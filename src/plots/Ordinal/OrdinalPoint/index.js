import React from 'react';
import PropTypes from 'prop-types';
import OrdinalPlot from '../OrdinalPlot';
import pointLayout from './pointLayout';

const OrdinalPoint = props => {

};

OrdinalPoint.layout = pointLayout;


OrdinalPoint.propTypes = {
    ...OrdinalPlot.propTypes,
    r: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
};

OrdinalPoint.defaultProps = {
    ...OrdinalPlot.defaultProps,
};

export default OrdinalPoint;