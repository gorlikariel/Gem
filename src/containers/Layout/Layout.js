import * as React from "react";
import TopNavigation from "../../UI/TopNavigation/TopNavigation";
import { MuiThemeProvider } from "../../../node_modules/@material-ui/core";
import theme from "../../UI/theme/theme";

class Layout extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ width: "100%", height: "100%" }}>
          <TopNavigation />
          <div
            style={{
              marginRight: "24px",
              marginLeft: "24px"
            }}
          >
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
