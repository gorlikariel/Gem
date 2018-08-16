import * as React from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Settings from "./containers/Settings/Settings";
import { MuiThemeProvider } from "../node_modules/@material-ui/core";
import theme from "./UI/theme/theme";
import AccountSettings from "./containers/Settings/AccountSettings/AccountSettings";

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact={true} path="/settings" component={Settings} />
            <Route
              exact={true}
              path="/account-settings"
              component={AccountSettings}
            />
          </Switch>
        </MuiThemeProvider>
      </Layout>
    );
  }
}

export default App;
