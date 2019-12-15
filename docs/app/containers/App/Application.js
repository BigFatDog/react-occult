import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import LineChartPage from '../Pages/LineChartPage';
import ContourPage from '../Pages/ContourPage';
import HeatmapPage from '../Pages/HeatmapPage';
import HexbinPage from '../Pages/HexbinPage';
import ScatterPage from '../Pages/ScatterPage';
import AnnotationPage from '../Pages/AnnotationPage';
import AreaPage from '../Pages/AreaChart';
import OldFaithfulPage from '../Pages/OldFaithfulPage';
import Bumpline from '../Pages/Bumpline';
import LinePercentage from '../Pages/LinePercentage';
import MarginPage from '../Pages/MarginSummaryPage';
import GeoProjectionPage from '../Pages/GeoProjection';
import TrendlinePage from '../Pages/TrendlinePage';
import NeighbourPage from '../Pages/Neighbourhood';
import DifferencePage from '../Pages/Difference';
import BarPage from '../Pages/BarPage';
import SketchPage from '../Pages/BarPage/Sketch';
import NetworkPage from '../Pages/Chord';

import BlankPage from '../Pages/BlankPage';
import { NotFound } from '../pageListAsync';

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          <Route exact path="/" component={BlankPage} />
          <Route path="/line" component={LineChartPage} />
          <Route path="/contour" component={ContourPage} />
          <Route path="/scatter" component={ScatterPage} />
          <Route path="/hexbin" component={HexbinPage} />
          <Route path="/heatmap" component={HeatmapPage} />
          <Route path="/area" component={AreaPage} />
          <Route path="/annotations" component={AnnotationPage} />
          <Route path="/faithful" component={OldFaithfulPage} />
          <Route path="/bumpline" component={Bumpline} />
          <Route path="/linepercentage" component={LinePercentage} />
          <Route path="/trendline" component={TrendlinePage} />
          <Route path="/margin" component={MarginPage} />
          <Route path="/geo" component={GeoProjectionPage} />
          <Route path="/neighbour" component={NeighbourPage} />
          <Route path="/difference" component={DifferencePage} />
          <Route path="/bar" component={BarPage} />
          <Route path="/sketch" component={SketchPage} />
          <Route path="/network" component={NetworkPage} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Application;
