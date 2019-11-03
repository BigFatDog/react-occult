import { fade } from '@material-ui/core/styles/colorManipulator';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';

const drawerWidth = 240;
const styles = theme => ({
  user: {
    justifyContent: 'center'
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    border: 'none',
    background: 'none',
    color: theme.palette.text.primary,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  swipeDrawerPaper: {
    width: drawerWidth
  },
  opened: {
    '& $primary, & $icon': {
      color: theme.palette.primary.main
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 5,
      height: theme.spacing.unit * 5,
      top: 0,
      left: 0,
      background: fade(theme.palette.primary.main, 0.5)
    }
  },
  drawerPaperClose: {
    width: 66,
    position: 'absolute',
    overflowX: 'hidden',
    background: theme.palette.background.paper,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '& $user': {
      justifyContent: 'flex-start'
    },
    '& $bigAvatar': {
      width: 40,
      height: 40
    },
    '& nav': {
      display: 'none'
    },
    '&:hover': {
      width: drawerWidth,
      boxShadow: theme.shadows[6],
      '& nav': {
        display: 'block'
      }
    },
    '& $brand': {
      display: 'none'
    },
    '& $profile': {
      flexDirection: 'row',
      top: theme.spacing.unit * 6,
      padding: theme.spacing.unit / 2
    },
    '& $avatar': {
      marginRight: theme.spacing.unit * 3
    },
    '& $menuContainer': {
      '&$menuContainer': {
        // paddingTop: theme.spacing.unit * 10,
        paddingBottom: 0
      }
    }
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    position: 'fixed',
    backgroundColor:
      theme.palette.type === 'dark'
        ? fade(theme.palette.background.paper, 0.75)
        : fade(theme.palette.background.paper, 0.95),
    boxShadow: theme.shade.light
  },
  drawerInnerMobile: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    backgroundColor:
      theme.palette.type === 'dark'
        ? fade(theme.palette.background.paper, 0.75)
        : fade(theme.palette.background.paper, 0.95)
  },
  drawerHeader: {
    padding: '0',
    zIndex: 1,
    position: 'relative',
    ...theme.mixins.toolbar
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 80,
    height: 80,
    boxShadow: theme.glow.light
  },
  brandBar: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    '&:after': {
      transition: theme.transitions.create(['box-shadow'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  },
  darker: {
    background: 'none'
  },
  nested: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`,
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing.unit * 3
    }
  },
  child: {
    '& a': {
      paddingLeft: theme.spacing.unit * 6
    }
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    paddingLeft: theme.spacing.unit * 10,
    marginTop: theme.spacing.unit * 3,
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '28px',
    fontWeight: 'bold'
  },
  dense: {
    marginLeft: -15,
    '& > $title:first-child': {
      margin: '0'
    }
  },
  active: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? fade(theme.palette.primary.main, 0.24)
        : theme.palette.primary.light,
    '& $primary': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.primary.dark
    },
    '& $icon svg': {
      fill: theme.palette.primary.dark
    },
    '&:hover': {
      backgroundColor:
        theme.palette.type === 'dark'
          ? fade(theme.palette.primary.main, 0.24)
          : theme.palette.primary.light
    }
  },
  nolist: {
    listStyle: 'none'
  },
  primary: {
    whiteSpace: 'nowrap'
  },
  icon: {
    marginRight: theme.spacing.unit / 2,
    fill:
      theme.palette.type === 'dark'
        ? theme.palette.primary.light
        : theme.palette.primary.dark
  },
  iconed: {},
  head: {
    padding: `${theme.spacing.unit}px 0`,
    margin: `${theme.spacing.unit}px 0`,
    borderRadius: `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px 0`,
    paddingLeft: theme.spacing.unit * 3,
    '&$iconed': {
      paddingLeft: theme.spacing.unit * 3
    },
    '& svg[class^="MuiSvgIcon"]': {
      left: -10,
      position: 'relative'
    }
  },
  headCapital: {
    padding: `${theme.spacing.unit}px 0 ${theme.spacing.unit}px ${theme.spacing
      .unit * 3}px`,
    left: theme.spacing.unit * -1.5,
    position: 'relative',
    textTransform: 'uppercase',
    borderRadius: `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px 0`,
    margin: `${theme.spacing.unit}px`,
    '& span': {
      fontSize: 14
    }
  },
  copyright: {
    color: theme.palette.text.secondary,
    background: theme.palette.background.paper,
    padding: theme.spacing.unit * 2,
    position: 'fixed',
    [theme.breakpoints.up('lg')]: {
      background: 'none',
      position: 'absolute'
    },
    bottom: 0,
    left: theme.spacing.unit * 3,
    lineHeight: '24px'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px 5px',
    height: 64,
    position: 'relative',
    textDecoration: 'none',
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
    color: theme.palette.text.primary,
    '& img': {
      width: 30,
      marginRight: 10
    }
  },
  brandBig: {
    paddingTop: theme.spacing.unit * 4,
    position: 'relative',
    textAlign: 'center',
    '& img': {
      width: 68
    },
    '& h3': {
      fontSize: 18,
      marginTop: theme.spacing.unit * 2,
      fontWeight: 500,
      color: theme.palette.text.primary
    }
  },
  profile: {
    height: 120,
    width: '100%',
    display: 'flex',
    fontSize: 14,
    padding: 10,
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    position: 'absolute',
    margin: `${theme.spacing.unit * 2}px 0`,
    zIndex: 0,
    '& h4': {
      fontSize: 18,
      marginBottom: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 110
    },
    '& button': {
      fontSize: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 110,
      display: 'block',
      overflow: 'hidden',
      textTransform: 'capitalize',
      padding: 0,
      minHeight: 20,
      marginTop: 4
    }
  },
  statusMenu: {
    '& li': {
      width: 100
    }
  },
  dotStatus: {
    width: theme.spacing.unit,
    height: theme.spacing.unit,
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: theme.spacing.unit / 2
  },
  online: {
    backgroundColor: lightGreen[500]
  },
  bussy: {
    backgroundColor: red[500]
  },
  idle: {
    backgroundColor: amber[500]
  },
  offline: {
    backgroundColor: grey[500]
  },
  rounded: {},
  landingNav: {},
  withProfile: {},
  menuContainer: {
    overflow: 'auto',
    height: 'calc(100% - 64px)',
    width: drawerWidth,
    position: 'relative',
    display: 'block',
    // padding: `${theme.spacing.unit * 5}px 0`,
    // '&$withProfile': {
    //   paddingTop: theme.spacing.unit * 18
    // },
    '&$landingNav': {
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing.unit * 5
      },
      [theme.breakpoints.down('lg')]: {
        height: 'calc(100% - 164px)',
        paddingTop: theme.spacing.unit * 5
      }
    },
    '&$rounded': {
      paddingRight: theme.spacing.unit * 1.5,
      '& a': {
        borderRadius: `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit *
          3}px 0`
      },
      '& $opened': {
        '&:before': {
          background: theme.palette.primary.main
        }
      }
    },
    '&::-webkit-scrollbar': {
      width: 8
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      backgroundColor: 'rgba(0,0,0,0)'
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.4)'
      }
    }
  },
  divider: {
    marginTop: theme.spacing.unit
  },
  badge: {
    height: 'auto'
  }
});

export default styles;
