import React from 'react';
import Masonry from 'react-masonry-css';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import 'dan-styles/vendors/image-lightbox/image-lightbox.css';
import styles from './photo-jss';
import scatterImg from './img/scatter.png';
import hosptial from './img/nyc_hospital.png';
import CirclePackImg from './img/circle_pack.png';
import OldFaithfulImg from './img/old_faithful.png';
import ContourMarginImg from './img/contour.png';
import AppleStockImg from './img/stock.png';
import TrendLineImg from './img/trendline.png';
import NeighbourHoodImg from './img/neighbourhood.png';
import DifferenceImg from './img/difference.png';
import ChordImg from './img/chord.png';
import ForceImg from './img/force.png';
import LinePercentageImg from './img/line_percentage.png';
import Line1 from './img/line_1.png';
import Line2 from './img/line_2.png';
import Line3 from './img/line_3.png';
import DagreImg from './img/dagre.png';
import ArcImg from './img/arc.png';
import TreemapImg from './img/treemap.png';
import ClusterImg from './img/cluster.png';
import PartitionImg from './img/partition.png';
import RadarImg from './img/radar.png';

const imgData = [
  { thumb: scatterImg, title: 'scatter', url: '/scatter' },
  {
    thumb: LinePercentageImg,
    title: 'Line Percentage',
    url: '/linepercentage'
  },
  { thumb: hosptial, title: 'NYC Hospital Facilities', url: '/bar' },
  { thumb: CirclePackImg, title: 'Circle Pack', url: '/circlepack' },
  { thumb: RadarImg, title: 'Radar', url: '/radar' },
  { thumb: ForceImg, title: 'Force', url: '/force' },
  { thumb: AppleStockImg, title: 'Apple Stock', url: '/area' },
  { thumb: ChordImg, title: 'Chord', url: '/chord' },
  { thumb: PartitionImg, title: 'Partition', url: '/partition' },
  { thumb: DifferenceImg, title: 'Difference', url: '/difference' },
  { thumb: TrendLineImg, title: 'Trendline', url: '/trendline' },
  {
    thumb: ContourMarginImg,
    title: 'Contour with Marginal Graphics',
    url: '/margin'
  },
  { thumb: NeighbourHoodImg, title: 'Neighbourhood', url: '/neighbour' },
  { thumb: Line1, title: 'Stacked', url: '/line' },
  { thumb: Line2, title: 'Percentage', url: '/line' },
  { thumb: Line3, title: 'Lines', url: '/line' },
  { thumb: OldFaithfulImg, title: 'Old Faithful', url: '/faithful' },
  { thumb: DagreImg, title: 'Dagre', url: '/dagre' },
  { thumb: ArcImg, title: 'Arc', url: '/arc' },
  { thumb: TreemapImg, title: 'Treemap', url: '/treemap' },
  { thumb: ClusterImg, title: 'Cluster', url: '/cluster' }
];

const HomePage = props => {
  const { classes, history } = props;

  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imgData.map(({ thumb, title, url }, index) => (
          <figure className={classes.item} key={index}>
            <ButtonBase
              focusRipple
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              onClick={() => history.push(url)}
            >
              <img src={thumb} alt={title} />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </figure>
        ))}
      </Masonry>
    </div>
  );
};

export default withStyles(styles)(HomePage);
