import * as React from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
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

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Route path="/sisu-main" component={SisuMain} />
        <Route path="/" component={TopNavigation} />
        <Layout>
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
            <Route
              exact={true}
              path="/pill-settings"
              component={PillSettings}
            />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
