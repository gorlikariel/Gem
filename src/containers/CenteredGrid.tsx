import * as React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import FullWidthButton from "./FullWidthButton/FullWidthButton";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: 30,
      flexGrow: 1
    },
    paperTop: {
      padding: theme.spacing.unit * 4,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    paperBottom: {
      padding: theme.spacing.unit * 10,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    button: {
      margin: theme.spacing.unit
    }
  });

interface GridProps {
  container: boolean;
  classes: {
    root: any;
    paperTop: string;
    paperBottom: string;
    button: string;
  };
}

const CenteredGrid: React.SFC<GridProps> = props => {
  return (
    <div className={props.classes.root}>
      <Grid container={true} spacing={40} alignItems="stretch">
        <Grid item={true} xs={12}>
          <Typography gutterBottom={true} variant="subheading">
            Daily Pill
          </Typography>

          <Paper className={props.classes.paperTop}>
            <Button className={props.classes.button}>Take Pill</Button>
          </Paper>
        </Grid>

        <Grid item={true} xs={12}>
          <Typography gutterBottom={true} variant="subheading">
            Monthly Streak
          </Typography>
          <Paper className={props.classes.paperBottom}>Cool Streak</Paper>
        </Grid>

        <Grid item={true} xs={12}>
          <Typography gutterBottom={true} variant="subheading">
            More
          </Typography>
          <FullWidthButton text="Settings" />
        </Grid>
        <Grid item={true} xs={12}>
          <FullWidthButton text="Statistics" />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CenteredGrid);
