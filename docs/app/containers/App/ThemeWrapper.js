import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Loading from 'react-loading-bar';
import { bindActionCreators } from 'redux';
import {
  withTheme,
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import 'dan-styles/vendors/react-loading-bar/index.css';
import {
  changeThemeAction,
  changeRandomThemeAction,
  changeModeAction,
  changeGradientAction,
  changeDecoAction,
  changeBgPositionAction,
  changeLayoutAction
} from 'dan-actions/UiActions';
import { TemplateSettings } from 'dan-components';
import applicationTheme from '../../styles/theme/applicationTheme';

const styles = {
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1
  }
};

export const AppContext = React.createContext();

class ThemeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: true,
      theme: createMuiTheme(applicationTheme(props.color, props.mode)),
      palette: undefined
    };
  }

  componentWillMount = () => {
    this.onProgressShow();
  };

  componentDidMount = () => {
    const { palette } = this.props;
    this.playProgress();
    this.setState({ palette });
  };

  componentWillUnmount() {
    this.onProgressShow();
  }

  onProgressShow = () => {
    this.setState({ pageLoaded: true });
  };

  onProgressHide = () => {
    this.setState({ pageLoaded: false });
  };

  playProgress = () => {
    this.onProgressShow();
    setTimeout(() => {
      this.onProgressHide();
    }, 500);
  };

  handleChangeTheme = event => {
    const { mode, changeTheme } = this.props;
    this.setState({
      theme: createMuiTheme(applicationTheme(event.target.value, mode))
    });
    changeTheme(event.target.value);
  };

  handleChangeRandomTheme = () => {
    const { mode } = this.props;
    this.props.changeRandomTheme(); // eslint-disable-line
    setTimeout(() => {
      this.setState({
        theme: createMuiTheme(applicationTheme(this.props.color, mode))
      }); // eslint-disable-line
    }, 500);
  };

  handleChangeMode = mode => {
    const { color, changeMode } = this.props;
    this.setState({ theme: createMuiTheme(applicationTheme(color, mode)) });
    changeMode(mode);
  };

  handleChangeGradient = value => {
    const { changeGradient } = this.props;
    changeGradient(value);
  };

  handleChangeDecoration = value => {
    const { changeDecoration } = this.props;
    changeDecoration(value);
  };

  handleChangeBgPosition = value => {
    const { changeBgPosition } = this.props;
    changeBgPosition(value);
  };

  handleChangeLayout = value => {
    const { changeLayout } = this.props;
    changeLayout(value);
  };

  render() {
    const {
      classes,
      children,
      color,
      mode,
      gradient,
      decoration,
      bgPosition,
      layout
    } = this.props;
    const { pageLoaded, theme, palette } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Loading
            show={pageLoaded}
            color="rgba(255,255,255,.9)"
            showSpinner={false}
          />
          {/*<TemplateSettings*/}
          {/*  palette={palette}*/}
          {/*  selectedValue={color}*/}
          {/*  mode={mode}*/}
          {/*  gradient={gradient}*/}
          {/*  decoration={decoration}*/}
          {/*  bgPosition={bgPosition}*/}
          {/*  layout={layout}*/}
          {/*  changeTheme={this.handleChangeTheme}*/}
          {/*  changeRandomTheme={this.handleChangeRandomTheme}*/}
          {/*  changeMode={this.handleChangeMode}*/}
          {/*  changeGradient={this.handleChangeGradient}*/}
          {/*  changeDecoration={this.handleChangeDecoration}*/}
          {/*  changeBgPosition={this.handleChangeBgPosition}*/}
          {/*  changeLayout={this.handleChangeLayout}*/}
          {/*/>*/}
          <AppContext.Provider value={this.handleChangeMode}>
            {children}
          </AppContext.Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}

ThemeWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  decoration: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  palette: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeRandomTheme: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeGradient: PropTypes.func.isRequired,
  changeDecoration: PropTypes.func.isRequired,
  changeBgPosition: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired
};

const reducer = 'ui';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  color: state.getIn([reducer, 'theme']),
  palette: state.getIn([reducer, 'palette']),
  mode: state.getIn([reducer, 'type']),
  gradient: state.getIn([reducer, 'gradient']),
  decoration: state.getIn([reducer, 'decoration']),
  bgPosition: state.getIn([reducer, 'bgPosition']),
  layout: state.getIn([reducer, 'layout'])
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
  changeRandomTheme: () => dispatch(changeRandomThemeAction),
  changeMode: bindActionCreators(changeModeAction, dispatch),
  changeGradient: bindActionCreators(changeGradientAction, dispatch),
  changeDecoration: bindActionCreators(changeDecoAction, dispatch),
  changeBgPosition: bindActionCreators(changeBgPositionAction, dispatch),
  changeLayout: bindActionCreators(changeLayoutAction, dispatch)
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withTheme()(withStyles(styles)(ThemeWrapperMapped));
