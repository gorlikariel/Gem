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

class TopNavigation extends Component {
  render() {
    const styles = {
      root: {
        backgroundColor: "#fdfdfd",
        boxShadow: "0 0 0 0"
      }
    };

    return (
      <AppBar position="sticky" style={styles.root}>
        <Toolbar>
          <IconButton>
            <LeftArrow />
          </IconButton>
          <Typography variant="title" color="primary">
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopNavigation;
