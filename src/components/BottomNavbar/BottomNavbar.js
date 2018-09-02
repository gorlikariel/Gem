import React from "react";
import { withStyles } from "@material-ui/core/styles";
import * as theme from "../../styleguide/theme";
import { withRouter } from "react-router-dom";
import QuestionMark from "../../Icons/QuestionMark/QuestionMark";
import HomeIcon from "../../Icons/HomeIcon/HomeIcon";
import StatisticsIcon from "../../Icons/StatisticsIcon/StatisticsIcon";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const HOME_BUTTON = 1;
// TODO bottom nav isn't responsive (should stretch on wider screens) and there's a weird space in the left corner
const styles = {
  root: {
    marginRight: "20px",
    width: "100%",
    bottom: 0,
    right: 0,
    left: 0,
    position: "fixed",
    backgroundColor: "inherit"
  }
};

class BottomNavbar extends React.Component {
  state = {
    value: null
  };

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case HOME_BUTTON:
        this.props.history.push({
          pathname: "/",
          state: {
            showLeftArrow: false,
            showSubmit: false,
            title: ""
          }
        });
        break;

      default:
        break;
    }
  };
  //change values to strings and export them to a different file
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction icon={<StatisticsIcon />} />
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction icon={<QuestionMark />} />
      </BottomNavigation>
    );
  }
}

export default withRouter(withStyles(styles)(BottomNavbar));
