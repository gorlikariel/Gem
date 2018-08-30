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
import SisuMain from "./containers/Sisu/SisuMain";
import Register from "./containers/Sisu/Register";

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
          </Switch>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
