import { lighten } from '@material-ui/core/styles/colorManipulator';
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    boxShadow: theme.shade.light,
    color: theme.palette.text.primary,
    '&$noMargin': {
      margin: 0
    }
  }),
  descBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing.unit * 3
    }
  },
  titleText: {
    flex: 1
  },
  title: {
    position: 'relative',
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: 400,
    color:
      theme.palette.type === 'dark'
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontWeight: 600,
      marginBottom: theme.spacing.unit
    }
  },
  description: {
    maxWidth: 960,
    paddingTop: theme.spacing.unit / 2,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  content: {
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit,
    borderRadius: theme.rounded.medium,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing.unit * 2
    }
  },
  whiteBg: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0
  },
  blackBg: {
    backgroundColor: 'black',
    margin: 0,
    padding: 0
  },
  noMargin: {},
  colorMode: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
    '& $title': {
      color: theme.palette.grey[100],
      '&:after': {
        borderBottom: `5px solid ${theme.palette.primary.light}`
      }
    },
    '& $description': {
      color: theme.palette.grey[100]
    }
  },
  overflowX: {
    width: '100%',
    overflowX: 'auto'
  },
  iconTitle: {
    borderRadius: theme.rounded.small,
    border:
      theme.palette.type === 'dark'
        ? 'none'
        : `1px solid ${lighten(theme.palette.primary.dark, 0.9)}`,
    boxShadow: `0 2px 15px -5px ${theme.palette.primary.main}`,
    background:
      theme.palette.type === 'dark'
        ? theme.palette.primary.main
        : lighten(theme.palette.primary.light, 0.5),
    width: 48,
    height: 48,
    textAlign: 'center',
    lineHeight: '44px',
    verticalAlign: 'middle',
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& svg': {
      width: '60%',
      height: '60%',
      verticalAlign: 'middle',
      fill:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.primary.main
    }
  }
});

export default styles;
