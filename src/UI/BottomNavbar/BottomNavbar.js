import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import StatisticsIcon from "../Icons/StatisticsIcon/StatisticsIcon";
import HomeIcon from "../Icons/HomeIcon/HomeIcon";
import QuestionMark from "../Icons/QuestionMark/QuestionMark";
import * as theme from "../theme/theme";
import { withRouter } from "react-router-dom";
// TODO bottom nav isn't responsive (should stretch on wider screens) and there's a weird space in the left corner
const styles = {
  root: {
    width: "100%",
    bottom: 0,
    position: "fixed",
    backgroundColor: "inherit"
  }
};

class BottomNavbar extends React.Component {
  state = {
    value: null,
    redirect: null
  };

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case 1:
        this.props.history.push("/");
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
