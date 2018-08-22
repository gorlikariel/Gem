import * as React from "react";
import TopNavigation from "../../UI/TopNavigation/TopNavigation";
import { MuiThemeProvider } from "../../../node_modules/@material-ui/core";
import theme from "../../UI/theme/theme";
import BodyBackgroundColor from "react-body-backgroundcolor";
import * as pallete from "../../UI/theme/theme";
import BottomNavbar from "../../UI/BottomNavbar/BottomNavbar";
class Layout extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BodyBackgroundColor backgroundColor={pallete.PWL}>
          <div
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <div
              style={{
                marginRight: "24px",
                marginLeft: "24px"
              }}
            >
              {this.props.children}
            </div>
          </div>
        </BodyBackgroundColor>
        <BottomNavbar />
      </MuiThemeProvider>
    );
  }
}

export default Layout;
