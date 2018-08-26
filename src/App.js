import * as React from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Settings from "./containers/Settings/Settings";
import { MuiThemeProvider } from "../node_modules/@material-ui/core";
import theme from "./UI/theme/theme";
import AccountSettings from "./containers/Settings/AccountSettings/AccountSettings";
import AlarmSettings from "./containers/Settings/AlarmSettings/AlarmSettings";
import PillSettings from "./containers/Settings/PillSettings/PillSettings";
import TopNavigation from "./UI/TopNavigation/TopNavigation";
import MainPage from "./containers/MainPage/MainPage";
//remove muithemeprovider from here or from layout
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Route path="/" component={TopNavigation} />

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
          </Switch>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
