import * as React from "react";
import TopNavigation from "../../UI/TopNavigation/TopNavigation";
import { MuiThemeProvider } from "../../../node_modules/@material-ui/core";
import theme from "../../UI/theme/theme";
import Settings from "../Settings/Settings";

class Layout extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TopNavigation />
        <Settings />
      </MuiThemeProvider>
    );
  }
}

export default Layout;
