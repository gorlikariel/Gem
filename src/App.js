import * as React from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Settings from "./containers/Settings/Settings";
import AccountSettings from "./containers/Settings/AccountSettings/AccountSettings";
import AlarmSettings from "./containers/Settings/AlarmSettings/AlarmSettings";
import PillSettings from "./containers/Settings/PillSettings/PillSettings";
import MainPage from "./containers/MainPage/MainPage";
import SisuMain from "./containers/Sisu/SisuMain";
import Register from "./containers/Sisu/Register";
import Login from "./containers/Sisu/Login";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import theme from "./styleguide/theme";
import { MuiThemeProvider } from "@material-ui/core";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import { connect } from "react-redux";
import * as actions from "./store/actions/actionsIndex";
class App extends React.Component {
  componentDidMount() {
    console.log("APP");
    this.props.onTryAutoSignUp();
  }
  componentDidUpdate() {
    this.props.isAuth ? console.log("logged in") : console.log("logged out");
  }
  render() {
    const isBottomNavbar = this.props.isAuth ? (
      <Route exact path="/" component={BottomNavbar} />
    ) : null;

    const routes = this.props.isAuth ? (
      <React.Fragment>
        <Switch>
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
          <Route exact={true} path="/pill-settings" component={PillSettings} />

          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Switch>
          <Route exact path="/sisu-main" component={SisuMain} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Redirect to="/sisu-main" />
        </Switch>
      </React.Fragment>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <Route path="/" component={TopNavigation} />
        <Layout>{routes}</Layout>
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
