import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import GemIcon from "../../Icons/GemIcon/GemIcon.png";
import { Link } from "react-router-dom";
import WideButton from "../../components/WideButton/WideButton";
import theme from "../../styleguide/theme";
import SisuButton from "../../components/SisuButtons/SisuButton";
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