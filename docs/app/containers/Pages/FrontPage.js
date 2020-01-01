import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomePage from './HomePage';

const styles = theme => ({
  bg: {
    padding: 2,
    marginTop: 70,
    marginBottom: 70,
    // backgroundImage: `linear-gradient(-45deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 33%, ${theme.palette.secondary.dark} 100%);`,
    textAlign: 'center'
    // borderRadius: theme.rounded.small,
    // '& h3': {
    //     color: theme.palette.secondary.light
    // }
  },

  font: {
    color: '#252b7e',
    fontWeight: 800,
    fontSize: 76
  },
  author: {
    color: '#252b7e',
    fontWeight: 400,
    fontSize: 24
  }
});

const FrontPage = props => {
  const { classes } = props;

  return (
    <div
      style={{
        padding: 10,
        backgroundImage:
          'radial-gradient( circle 879px at 10.4% 22.3%,  rgba(255,235,238,1) 0%, rgba(186,190,245,1) 93.6% )'
      }}
    >
      <div className={classes.bg}>
        <Typography variant="h3" component="h3" className={classes.font}>
          OCCULT
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          style={{ marginTop: 10 }}
          className={classes.author}
        >
          by Yun XING
        </Typography>
      </div>
      <div>
        <HomePage {...props}/>
      </div>
    </div>
  );
};

export default withStyles(styles)(FrontPage);
