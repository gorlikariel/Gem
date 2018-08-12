import TopNavigation from "../TopNavigation/TopNavigation";
import SectionA from "./SectionA/SectionA";
import React, { Component } from "react";
import SectionB from "./SectionB/SectionB";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavigation />
        <SectionA />
        <SectionB />
      </React.Fragment>
    );
  }
}

export default Layout;
