import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Application from './Application';
import ThemeWrapper, { AppContext } from './ThemeWrapper';
import FrontPage from '../Pages/FrontPage';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class App extends React.Component {
  render() {
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
          {changeMode => (
            <Switch>
              <Route exact path="/home" render={props => <FrontPage {...props} />} />
              <Route
                path="/"
                render={props => (
                  <Application {...props} changeMode={changeMode} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          )}
        </AppContext.Consumer>
      </ThemeWrapper>
    );
  }
}

export default App;
