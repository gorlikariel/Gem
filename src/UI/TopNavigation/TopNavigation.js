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
import { Link } from "react-router-dom";

class TopNavigation extends Component {
  submitForm = navText => {
    this.props.updatePillSettings(this.props.pillSettings);
  };
  render() {
    const leftArrow = (
      <IconButton onClick={() => this.props.history.goBack()}>
        <LeftArrow />
      </IconButton>
    );
    const submitButton = (
      <IconButton onClick={() => this.submitForm("POOP")}>
        <Checkmark />
      </IconButton>
    );
    const settingsIcon = (
      <Link
        to={{
          pathname: "/settings",
          state: {
            showLeftArrow: true,
            showSubmit: false,
            title: "Settings"
          }
        }}
      >
        <IconButton>
          <CogwheelIcon />
        </IconButton>
      </Link>
    );
    const { showLeftArrow, showSubmit, title } = this.props.location.state;
    const styles = {
      root: {
        backgroundColor: "inherit",
        boxShadow: "0 0 0 0"
      }
    };

    return (
      <AppBar position="sticky" style={styles.root}>
        <Toolbar disableGutters>
          {showLeftArrow ? leftArrow : null}
          <Typography variant="title" color="primary">
            {title}
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            {showSubmit ? submitButton : null}
            {title === "" ? settingsIcon : null}
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
