import * as React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing.unit * 0.5
    },
    paperTop: {
      padding: theme.spacing.unit * 5,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    paperBottom: {
      padding: theme.spacing.unit * 10,
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  });

interface GridProps {
  container: boolean;
  classes: {
    root: any;
    paperTop: string;
    paperBottom: string;
  };
}

const CenteredGrid: React.SFC<GridProps> = props => {
  return (
    <div className={props.classes.root}>
      <Grid container={true}>
        <Grid container={true} spacing={16}>
          <Grid item={true} xs={12}>
            <Paper className={props.classes.paperTop}>xs=12</Paper>
          </Grid>
          <Grid item={true} xs={12}>
            <Paper className={props.classes.paperTop}>xs=12</Paper>
          </Grid>
          <Grid item={true} xs={12}>
            <Paper className={props.classes.paperTop}>xs=12</Paper>
          </Grid>
        </Grid>

        <Grid container={true} spacing={16}>
          <Grid item={true} xs={6}>
            <Paper className={props.classes.paperBottom}>xs=12</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CenteredGrid);
