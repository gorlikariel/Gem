import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import GemIcon from "../../UI/Icons/GemIcon/GemIcon.png";
import WideButton from "../../UI/WideButton/WideButton";
import * as theme from "../../UI/theme/theme";
import { Link } from "react-router-dom";
import SisuButton from "../../UI/SisuButtons/SisuButton";
const styles = {
  root: {
    marginTop: "70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};
class SisuMain extends Component {
  render() {
    const { root } = styles;
    return (
      <div style={root}>
        <div style={{ margin: "20px" }}>
          <img width="60px" height="71" src={GemIcon} alt="logo" />
        </div>
        <Typography align="center" variant="display1">
          Gem
        </Typography>
        <Typography align="center" variant="display3">
          Never miss a pill ever again.
        </Typography>
        <SisuButton to={"login"}>Login</SisuButton>
        <SisuButton variant="greyed" to={"register"}>
          Register
        </SisuButton>
      </div>
    );
  }
}

export default SisuMain;
