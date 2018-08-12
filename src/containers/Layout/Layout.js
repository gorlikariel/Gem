import TopNavigation from "../TopNavigation/TopNavigation";
import SectionA from "./SectionA";
import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavigation />
        <SectionA />
      </React.Fragment>
    );
  }
}

export default Layout;
