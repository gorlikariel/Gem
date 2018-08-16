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
  goBack = () => {
    this.props.history.push("/");
  };
  //removes the '/' from pathname, replaces '-' with a space and capitalizes the first charachters
  prettifyPathName = () =>
    this.props.location.pathname
      .substr(1)
      .replace("-", " ")
      .replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
  componentDidMount() {
    console.log(
      this.props.location.pathname
        .substr(1)
        .replace("-", " ")
        .replace(
          /\w\S*/g,
          txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        )
    );
  }
  render() {
    let navText = this.prettifyPathName();
    const styles = {
      root: {
        backgroundColor: "inherit",
        boxShadow: "0 0 0 0"
      }
    };

    return (
      <AppBar position="sticky" style={styles.root}>
        <Toolbar disableGutters>
          <IconButton onClick={this.goBack}>
            <LeftArrow />
          </IconButton>
          <Typography variant="title" color="primary">
            {navText}
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            <IconButton>
              <Checkmark />
            </IconButton>
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
