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
      <Link to="/settings">
        <IconButton>
          <CogwheelIcon />
        </IconButton>
      </Link>
    );
    const { title, showLeftArrow, showSubmit, showSettingsIcon } = this.props;
    const styles = {
      root: {
        backgroundColor: "inherit",
        boxShadow: "0 0 0 0",
        marginTop: "25px"
      }
    };
    console.log(this.props.title);
    return (
      <AppBar position="fixed" style={styles.root}>
        <Toolbar disableGutters>
          {showLeftArrow ? leftArrow : null}
          <Typography variant="title" color="primary">
            {title}
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            {showSubmit ? submitButton : null}
            {showSettingsIcon ? settingsIcon : null}
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
    pillSettings: state.pillSettings.form,
    title: state.topNavigation.title,
    showLeftArrow: state.topNavigation.showLeftArrow,
    showSubmit: state.topNavigation.showSubmit,
    showSettingsIcon: state.topNavigation.showSettingsIcon
  };
};

export default connect(mapStateToProps, null)(TopNavigation);
