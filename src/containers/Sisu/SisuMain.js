import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import GemIcon from "../../UI/Icons/GemIcon/GemIcon.png";
import WideButton from "../../UI/WideButton/WideButton";
import * as theme from "../../UI/theme/theme";
import { Link } from "react-router-dom";
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
        <WideButton bgColor={"PG"} color={theme.PWH} height="50px" width="87%">
          <Link style={{ textDecoration: "none" }} to="register">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="display3" color="textPrimary" align="center">
                Login
              </Typography>
            </div>
          </Link>
        </WideButton>
        <WideButton
          bgColor={"PWL"}
          backgroundColor="#ededff"
          color={theme.PWH}
          height="50px"
          width="87%"
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="register"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="display3" color="primary" align="center">
                Register
              </Typography>
            </div>
          </Link>
        </WideButton>
      </div>
    );
  }
}

export default SisuMain;
