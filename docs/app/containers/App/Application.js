import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import LineChartPage from '../Pages/LineChartPage';
import ContourPage from '../Pages/ContourPage';
import HeatmapPage from '../Pages/HeatmapPage';
import HexbinPage from '../Pages/HexbinPage';
import AnnotationPage from '../Pages/AnnotationPage';
import AreaPage from '../Pages/AreaChart';
import NeighborhoodPage from '../Pages/Neighborhood';
import OldFaithfulPage from '../Pages/OldFaithfulPage';

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
          <Route path="/hexbin" component={HexbinPage} />
          <Route path="/heatmap" component={HeatmapPage} />
          <Route path="/area" component={AreaPage} />
          <Route path="/annotations" component={AnnotationPage} />
          <Route path="/neighborhood" component={NeighborhoodPage} />
          <Route path="/faithful" component={OldFaithfulPage} />
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
