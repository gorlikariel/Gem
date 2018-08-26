import React, { Component } from "react";
import {
  AppBar,
  IconButton,
  withStyles,
  Typography,
  Toolbar
} from "@material-ui/core";
import LeftArrow from "../Icons/LeftArrow/LeftArrow";
import theme from "../theme/theme";
import { connect } from "react-redux";
import Checkmark from "../Icons/Checkmark/Checkmark";
import blueMarble from "../../axios/axiosInstance";
import * as actions from "../../store/actions/actionsIndex";
import CogwheelIcon from "../Icons/CogwheelIcon/CogwheelIcon";

class TopNavigation extends Component {
  goToSettings = () => {
    this.props.history.push("/settings");
  };
  submitForm = navText => {
    this.props.updatePillSettings(this.props.pillSettings);
  };
  //change it to stack based history push
  // goBack = pageName => {
  //   pageName === "Settings"
  //     ? this.props.history.push("/")
  //     : this.props.history.push("/settings");
  // };
  //removes the '/' from pathname, replaces '-' with a space and capitalizes the first charachters
  //change it please
  prettifyPathName = pathname =>
    pathname
      .substr(1)
      .replace("-", " ")
      .replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
  render() {
    console.log(this.props);
    const leftArrow = (
      <IconButton onClick={() => this.props.history.goBack()}>
        <LeftArrow />
      </IconButton>
    );
    const submitButton = (
      <IconButton onClick={() => this.submitForm(ass)}>
        <Checkmark />
      </IconButton>
    );

    const pageName = this.prettifyPathName(this.props.location.pathname);

    const ass = "ass";
    const styles = {
      root: {
        backgroundColor: "inherit",
        boxShadow: "0 0 0 0"
      }
    };

    return (
      <AppBar position="sticky" style={styles.root}>
        <Toolbar disableGutters>
          {pageName !== "" ? leftArrow : null}
          <Typography variant="title" color="primary">
            {pageName}
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            {pageName === "Settings" || pageName === "" ? null : submitButton}
            {pageName === "" ? (
              <IconButton onClick={() => this.goToSettings()}>
                <CogwheelIcon />
              </IconButton>
            ) : null}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    accountSettings: state.accountSettings.form,
    alarmSettings: state.alarmSettings.form,
    pillSettings: state.pillSettings.form
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePillSettings: form => dispatch(actions.postPillSettings(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation);
