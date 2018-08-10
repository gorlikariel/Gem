import {
  WithStyles,
  createStyles,
  withStyles,
  Theme,
  Typography,
  AppBar,
  Toolbar
} from "@material-ui/core";
import * as React from "react";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      background: "transparent",
      boxShadow: "none"
    }
  });

interface Props extends WithStyles<typeof styles> {
  foo?: number;
  bar?: boolean;
}
const TopNavigation = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { classes } = this.props;
      return (
        <AppBar position="static" classes={classes}>
          <Toolbar>
            <Typography variant="headline" color="primary">
              <strong>Hello Dana,</strong> <br /> We're here for you
            </Typography>
          </Toolbar>
        </AppBar>
      );
    }
  }
);

export default TopNavigation;
