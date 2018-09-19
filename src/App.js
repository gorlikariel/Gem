import Helmet from 'react-helmet';
import * as React from 'react';
import Layout from './containers/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Settings from './containers/Settings/Settings';
import AccountSettings from './containers/Settings/AccountSettings/AccountSettings';
import AlarmSettings from './containers/Settings/AlarmSettings/AlarmSettings';
import PillSettings from './containers/Settings/PillSettings/PillSettings';
import MainPage from './containers/MainPage/MainPage';
import SisuMain from './containers/Sisu/SisuMain';
import Register from './containers/Sisu/Register';
import Login from './containers/Sisu/Login';
import TopNavigation from './components/TopNavigation/TopNavigation';
import theme from './styleguide/theme';
import { MuiThemeProvider } from '@material-ui/core';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import { connect } from 'react-redux';
import * as actions from './store/actions/actionsIndex';
import Introduction from './containers/Introduction/Introduction';
import Toast from './components/Toast/Toast';
class App extends React.Component {
  componentDidMount() {
    console.log(this.props.initialState);
    this.props.onTryAutoSignUp();
  }
  render() {
    const isBottomNavbar = this.props.isAuth ? (
      <Route exact path="/" component={BottomNavbar} />
    ) : null;
    // ---------Routes for logged in users
    const routes = this.props.isAuth ? (
      <React.Fragment>
        <Layout>
          <Switch>
            <Route exact path="/introduction" component={Introduction} />
            <Route exact={true} path="/" component={MainPage} />
            <Route exact={true} path="/settings" component={Settings} />
            <Route
              exact={true}
              path="/account-settings"
              component={AccountSettings}
            />
            <Route
              exact={true}
              path="/alarm-settings"
              component={AlarmSettings}
            />
            <Route
              exact={true}
              path="/pill-settings"
              component={PillSettings}
            />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </React.Fragment>
    ) : (
      // ---------Routes for users not logged in

      <React.Fragment>
        <Layout>
          <Switch>
            <Route exact path="/introduction" component={Introduction} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sisu-main" component={SisuMain} />
            <Redirect to="/sisu-main" />
          </Switch>
        </Layout>
      </React.Fragment>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <Helmet bodyAttributes={{ style: 'background-color : #fafafa' }} />
        <Route path="/" component={TopNavigation} />
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
