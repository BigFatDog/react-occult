const styles = theme => ({
  masonry: {
    /* Masonry container */
    [theme.breakpoints.up('sm')]: {
      columnCount: 2
    },
    [theme.breakpoints.up('md')]: {
      columnCount: 3
    },
    columnGap: '1em',
    columnFill: 'initial',
    margin: '1.5em auto'
  },
  item: {
    display: 'inline-block',
    margin: `0 0 2px`,
    width: '100%',
    boxShadow: theme.shadows[4],
    overflow: 'hidden',
    borderRadius: 2,
    transition: 'box-shadow .3s',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: theme.shadows[7]
    },
    '& img': {
      marginBottom: -7
    }
  },
  image: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important' // Overrides inline-style
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: theme.palette.common.white,
    paddingBottom: 10
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: `4px 6px 4px 6px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
});

export default styles;
