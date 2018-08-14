import TopNavigation from "../TopNavigation/TopNavigation";
import React, { Component } from "react";
import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../UI/theme";

class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TopNavigation />
        <div style={{ padding: 10 }}>
          <SectionA />
          <SectionB />
          <SectionC />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
