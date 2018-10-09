import Helmet from 'react-helmet';
import * as React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import theme from './styleguide/theme';
import { MuiThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from './store/actions/actionsIndex';
import {
  asyncIntroduction,
  asyncMainPage,
  asyncSettings,
  asyncAccountSettings,
  asyncAlarmSettings,
  asyncPillSettings,
  asyncRegister,
  asyncLogin,
  asyncSisuMain,
  asyncTopNavigation,
  asyncBottomNavbar
} from './util/appComponents';
import Layout from './containers/Layout/Layout';
import Toast from './components/Toast/Toast';

class App extends React.Component {
  componentDidMount() {
    const hourStampToMinutes = hourStamp => +hourStamp.slice(3);
    const hourStampToHours = hourStamp => +hourStamp.slice(0, 2);

    const haveTwelveHoursPastSincePill = (currentTime, lastTimeTaken) => {
      const currentHour = hourStampToHours(currentTime);
      const pillHour = hourStampToHours(lastTimeTaken);
      if (pillHour <= 12) {
        return currentHour - 12 >= pillHour;
      }
      if (pillHour > 12) {
        return currentHour <= 12
          ? currentHour + 12 >= pillHour
          : pillHour > currentHour;
      }
      return false;
    };
    console.log(haveTwelveHoursPastSincePill('09:50', '21:03'));

    this.props.onTryAutoSignUp();
  }
  render() {
    const isBottomNavbar = this.props.isAuth ? (
      <Route exact path="/" component={asyncBottomNavbar} />
    ) : null;
    // ---------Routes for logged in users
    const routes = this.props.isAuth ? (
      <React.Fragment>
        <Switch>
          <Route exact path="/introduction" component={asyncIntroduction} />
          <Layout>
            <Route exact={true} path="/" component={asyncMainPage} />
            <Route exact={true} path="/settings" component={asyncSettings} />
            <Route
              exact={true}
              path="/account-settings"
              component={asyncAccountSettings}
            />
            <Route
              exact={true}
              path="/alarm-settings"
              component={asyncAlarmSettings}
            />
            <Route
              exact={true}
              path="/pill-settings"
              component={asyncPillSettings}
            />
            <Redirect to="/" />
          </Layout>
        </Switch>
      </React.Fragment>
    ) : (
      // ---------Routes for users not logged in

      <React.Fragment>
        <Switch>
          <Route exact path="/introduction" component={asyncIntroduction} />
          <Layout>
            <Route exact path="/register" component={asyncRegister} />
            <Route exact path="/login" component={asyncLogin} />
            <Route exact path="/sisu-main" component={asyncSisuMain} />
            <Redirect to="/sisu-main" />
          </Layout>
        </Switch>
      </React.Fragment>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <Helmet bodyAttributes={{ style: 'background-color : #fafafa' }} />
        <Route path="/" component={asyncTopNavigation} />
        {routes}
        <Toast message="It's time for your pill" />
        {isBottomNavbar}
      </MuiThemeProvider>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.checkIfAuth())
  };
};

const mapStateToProps = state => {
  return {
    initialState: state,
    isAuth: state.auth.token !== null
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
