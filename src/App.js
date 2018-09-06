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
class App extends React.Component {
  componentDidMount() {
    console.log('APP MOUNTED');
  }
  render() {
    const isBottomNavbar = this.props.isAuth ? (
      <Route exact path="/" component={BottomNavbar} />
    ) : null;

    const routes = this.props.isAuth ? (
      <React.Fragment>
        <Switch>
          <Route exact path="/introduction" component={Introduction} />
          <Layout>
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
          </Layout>
        </Switch>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Switch>
          <Route exact path="/introduction" component={Introduction} />
          <Layout>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sisu-main" component={SisuMain} />
            <Redirect to="/sisu-main" />
          </Layout>
        </Switch>
      </React.Fragment>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <Route path="/" component={TopNavigation} />
        {routes}
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
    isAuth: state.auth.token !== null,
    loading: state.auth.loading
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
