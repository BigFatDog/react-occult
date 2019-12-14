import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { XYFrame, Scatter, XAxis, YAxis } from 'occult';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { withStyles } from '@material-ui/core/styles';
import { Data } from './data';
import { scaleSequential, scaleLog, scaleTime, scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { csvParse } from 'd3-dsv';
import * as d3 from 'd3';

const styles = {
  frame: {
    background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  }
};

const ScatterPage = props => {
  const { classes } = props;
  const title = brand.name + ' - K-Means Centroid Deviation';
  const description = brand.desc;

  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    fetch(`/data/diamonds.csv`)
      .then(response => response.text())
      .then(data => {
        const parsedDiamonds = [];
        csvParse(data).forEach(d => {
          parsedDiamonds.push({
            price: +d.price,
            carat: +d.carat,
            size: +d.table,
            cut: d.cut,
            clarity: d.clarity
          });
        });
        setDiamonds(parsedDiamonds);
      });
  });

  const frameProps = {
    margin: { left: 100, bottom: 90, right: 10, top: 40 },
    width: 1000,
    height: 500,
    title: (
      <text textAnchor="middle">
        Daimond Price and Carat
      </text>
    ),
    hoverAnnotation: true,
    tooltipContent: d => {
      return (
        <div className="tooltip-content">
          <p>price: {d.price}</p>
          <p>carat: {d.carat}</p>
          <p>size: {d.size}</p>
          <p>cut: {d.cut}</p>
          <p>clarity: {d.clarity}</p>
        </div>
      );
    }
  };

  const scatterProps = {
    data: diamonds,
    xAccessor: d => d.price,
    yAccessor: d => d.carat,
    pointStyle: (d, i) => ({
      r: 5,
      fill: 'red',
      opacity: 0.5
    }),
    pointUseCanvas: true
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="Blank Page" desc="Some text description">
        <XYFrame {...frameProps} className={classes.frame}>
          <XAxis label={'Price'} rotate={60} />
          <YAxis label={'Caret'} />
          <Scatter {...scatterProps} />
        </XYFrame>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(ScatterPage);
