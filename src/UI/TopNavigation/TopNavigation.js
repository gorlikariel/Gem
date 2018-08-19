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

class TopNavigation extends Component {
  submitForm = navText => {
    console.log(navText);
  };
  goBack = pageName => {
    pageName === "Account Settings" || "Alarm Settings" || "Pill Settings"
      ? this.props.history.push("/settings")
      : this.props.history.push("/");
  };
  //removes the '/' from pathname, replaces '-' with a space and capitalizes the first charachters
  prettifyPathName = pathname =>
    pathname
      .substr(1)
      .replace("-", " ")
      .replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
  render() {
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
          <IconButton onClick={() => this.goBack(pageName)}>
            <LeftArrow />
          </IconButton>
          <Typography variant="title" color="primary">
            {pageName}
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            {pageName === "Settings" ? null : (
              <IconButton onClick={() => this.submitForm(ass)}>
                <Checkmark />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.accountSettings.form
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

// export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation);
export default TopNavigation;
