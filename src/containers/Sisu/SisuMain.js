import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import GemIcon from "../../Icons/GemIcon/sisuLogo.png";
import { Link } from "react-router-dom";
import WideButton from "../../components/WideButton/WideButton";
import theme from "../../styleguide/theme";
import SisuButton from "../../components/SisuButtons/SisuButton";
import GemText from "../../Icons/GemIcon/GemText";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionsIndex";
import * as topNavConfig from "../../store/actions/topNavigationConfigs";

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
  componentDidMount() {
    this.props.onInitPage(topNavConfig.SISU_TOP_NAVIGATION);
  }
  render() {
    const { root } = styles;
    return (
      <div style={root}>
        <div style={{ margin: "20px" }}>
          <img width="60px" height="71" src={GemIcon} alt="logo" />
        </div>
        <GemText />
        <div style={{ paddingBottom: "50px", paddingTop: "12px" }}>
          <Typography align="center" variant="display3">
            Never miss a pill ever again.
          </Typography>
        </div>
        <SisuButton to={"login"}>Login</SisuButton>
        <SisuButton buttonType="greyed" to={"register"}>
          Register
        </SisuButton>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPage: navBarConfig => {
      dispatch(actions.setTopNavigationState(navBarConfig));
    }
  };
};

export default connect(null, mapDispatchToProps)(SisuMain);
