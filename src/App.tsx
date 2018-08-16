import * as React from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Settings from "./containers/Settings/Settings";
import { MuiThemeProvider } from "../node_modules/@material-ui/core";
import theme from "./UI/theme/theme";
import AccountSettings from "./containers/Settings/AccountSettings/AccountSettings";
import AlarmSettings from "./containers/Settings/AlarmSettings/AlarmSettings";
import TopNavigation from "./UI/TopNavigation/TopNavigation";

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <MuiThemeProvider theme={theme}>
          <Route path="/" component={TopNavigation} />
          <Switch>
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
          </Switch>
        </MuiThemeProvider>
      </Layout>
    );
  }
}

export default App;
