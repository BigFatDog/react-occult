import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Palette from '@material-ui/icons/Palette';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {
  LeftSidebarThumb,
  RightSidebarThumb,
  TopNavigationThumb,
  MegaMenuThumb
} from './templatePreview';
import ThemeThumb from './ThemeThumbs';
import LayoutThumb from './LayoutThumb';
import styles from './settings-jss';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 1.5 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class TemplateSettings extends React.Component {
  state = {
    type: 0,
    show: false,
    showAllThemes: false
  };

  // Tab Handle
  handleChangeTab = (event, type) => {
    this.setState({ type });
  };

  handleChangeIndexTab = index => {
    this.setState({ type: index });
  };

  // Theme Mode Handle
  handleSwitchMode = name => event => {
    const { changeMode } = this.props;
    const mode = event.target.checked ? 'dark' : 'light';
    changeMode(mode);
    this.setState({ [name]: event.target.checked });
  };

  // Background Position Handle
  handleBgChangePosition = event => {
    const { changeBgPosition } = this.props;
    this.setState({ [event.target.name]: event.target.value });
    changeBgPosition(event.target.value);
  };

  // Decoration Handle
  handleChangeDecoration = name => event => {
    const { changeDecoration } = this.props;
    this.setState({ [name]: event.target.checked });
    changeDecoration(event.target.checked);
  };

  // Decoration Handle
  handleChangeGradient = name => event => {
    const { changeGradient } = this.props;
    this.setState({ [name]: event.target.checked });
    changeGradient(event.target.checked);
  };

  // Layout Handle
  handleChangeLayout = event => {
    const { changeLayout } = this.props;
    changeLayout(event.target.value);
  };

  // Show Hide Panel
  handleTogglePanel = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  // Toggle All Themes
  handleToggleAllThemes = () => {
    const { showAllThemes } = this.state;
    this.setState({ showAllThemes: !showAllThemes });
  };

  render() {
    const {
      classes,
      palette,
      mode,
      gradient,
      decoration,
      bgPosition,
      selectedValue,
      layout,
      changeTheme,
      changeRandomTheme
    } = this.props;
    const { show, type, showAllThemes } = this.state;
    const getItem = dataArray =>
      dataArray.map((item, index) => (
        <FormControlLabel
          key={index.toString()}
          className={classNames(
            classes.themeField,
            index > 7 && !showAllThemes ? classes.hide : ''
          )}
          control={
            <ThemeThumb
              value={item.value}
              selectedValue={selectedValue}
              handleChange={changeTheme}
              name={item.name}
            />
          }
        />
      ));

    return (
      <aside
        className={classNames(
          classes.settingSidebar,
          layout === 'right-sidebar'
            ? classes.leftSidebar
            : classes.rightSidebar,
          show && classes.expanded
        )}
      >
        <div className={classes.toggleButton}>
          <Fab
            size="small"
            color="primary"
            aria-label="toggle"
            className={classes.button}
            onClick={this.handleTogglePanel}
            classes={{
              root: classes.buttonDrawer
            }}
          >
            {show ? <Close /> : <Palette />}
          </Fab>
        </div>
        <Slide
          direction={layout === 'right-sidebar' ? 'right' : 'left'}
          in={show}
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.root}>
            <AppBar position="fixed" className={classes.tab} color="default">
              <div className={classes.header}>
                <IconButton
                  onClick={this.handleTogglePanel}
                  className={classes.backButton}
                  aria-label="Baack"
                >
                  <ArrowBack />
                </IconButton>
                <Typography variant="button">Template Settings</Typography>
              </div>
              <Tabs
                value={type}
                onChange={this.handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Theme" />
                <Tab label="Layout" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              index={type}
              onChangeIndex={this.handleChangeIndexTab}
            >
              <TabContainer>
                <section className={classes.settingWraper}>
                  <Paper className={classes.optBlock}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend" className={classes.title}>
                        <Icon className={classes.icon}>invert_colors</Icon>
                        Theme Mode
                      </FormLabel>
                      <FormGroup className={classes.themeMode}>
                        <span>Light Mode</span>
                        <FormControlLabel
                          className={classes.switch}
                          control={
                            <Switch
                              checked={mode === 'dark'}
                              onChange={this.handleSwitchMode('dark')}
                              value="dark"
                              color="default"
                              classes={{
                                bar: classes.themeCheckBar,
                                icon: classes.themeCheck
                              }}
                            />
                          }
                        />
                        <span>Dark Mode</span>
                      </FormGroup>
                    </FormControl>
                  </Paper>
                  <Paper className={classes.optBlock}>
                    <FormControl
                      component="fieldset"
                      className={classes.themeGroup}
                    >
                      <FormLabel component="legend" className={classes.title}>
                        <Icon className={classes.icon}>color_lens</Icon>
                        Theme Color
                      </FormLabel>
                      <div className={classes.randomThemeField}>
                        <ButtonBase onClick={() => changeRandomTheme()}>
                          <img src="/images/random.jpg" alt="random" />
                        </ButtonBase>
                      </div>
                      {palette !== undefined && getItem(palette)}
                      <div className={classes.center}>
                        <Button
                          color="primary"
                          onClick={this.handleToggleAllThemes}
                        >
                          {showAllThemes ? 'Hide Some' : 'Show All'}
                        </Button>
                      </div>
                    </FormControl>
                  </Paper>
                  <Paper className={classes.optBlock}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend" className={classes.title}>
                        <Icon className={classes.icon}>branding_watermark</Icon>
                        Background Size
                      </FormLabel>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="background-position">
                          Choose Size
                        </InputLabel>
                        <Select
                          value={bgPosition}
                          onChange={this.handleBgChangePosition}
                          inputProps={{
                            name: 'position',
                            id: 'background-position'
                          }}
                        >
                          <MenuItem value="header">Header</MenuItem>
                          <MenuItem value="half">Half</MenuItem>
                          <MenuItem value="full">Full</MenuItem>
                        </Select>
                      </FormControl>
                    </FormControl>
                  </Paper>
                  <Paper className={classes.optBlock}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend" className={classes.title}>
                        <Icon className={classes.icon}>texture</Icon>
                        Art Decoration
                      </FormLabel>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={decoration}
                              onChange={this.handleChangeDecoration(
                                'decorated'
                              )}
                              value="decorated"
                            />
                          }
                          label="Show Art Decoration"
                        />
                      </FormGroup>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={gradient}
                              onChange={this.handleChangeGradient('gradient')}
                              value="gradient"
                            />
                          }
                          label="Use Gradient"
                        />
                      </FormGroup>
                    </FormControl>
                  </Paper>
                </section>
                {/* END */}
              </TabContainer>
              <TabContainer>
                <section className={classes.settingWraper}>
                  <Paper className={classes.optBlock}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend" className={classes.title}>
                        <Icon className={classes.icon}>chrome_reader_mode</Icon>
                        Navigation Layout
                      </FormLabel>
                      <FormGroup row>
                        <FormControlLabel
                          className={classes.layoutField}
                          control={
                            <LayoutThumb
                              value="left-sidebar"
                              selectedLayout={layout}
                              handleChange={this.handleChangeLayout}
                              name="Left Sidebar"
                              preview={<LeftSidebarThumb />}
                            />
                          }
                        />
                        <FormControlLabel
                          className={classes.layoutField}
                          control={
                            <LayoutThumb
                              value="right-sidebar"
                              selectedLayout={layout}
                              handleChange={this.handleChangeLayout}
                              name="Right Sidebar"
                              preview={<RightSidebarThumb />}
                            />
                          }
                        />
                        <FormControlLabel
                          className={classes.layoutField}
                          control={
                            <LayoutThumb
                              value="top-navigation"
                              selectedLayout={layout}
                              handleChange={this.handleChangeLayout}
                              name="Top Navigation"
                              preview={<TopNavigationThumb />}
                            />
                          }
                        />
                        <FormControlLabel
                          className={classes.layoutField}
                          control={
                            <LayoutThumb
                              value="mega-menu"
                              selectedLayout={layout}
                              handleChange={this.handleChangeLayout}
                              name="Mega Menu"
                              preview={<MegaMenuThumb />}
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Paper>
                </section>
              </TabContainer>
            </SwipeableViews>
          </div>
        </Slide>
      </aside>
    );
  }
}

TemplateSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  palette: PropTypes.object,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  decoration: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeRandomTheme: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeGradient: PropTypes.func.isRequired,
  changeDecoration: PropTypes.func.isRequired,
  changeBgPosition: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired
};

TemplateSettings.defaultProps = {
  palette: undefined
};

export default withStyles(styles)(TemplateSettings);
