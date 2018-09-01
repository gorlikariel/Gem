import React, { Component } from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
const NavigationBars = props => {
  return (
    <React.Fragment>
      <TopNavigation />
      <BottomNavbar />
    </React.Fragment>
  );
};

export default NavigationBars;
