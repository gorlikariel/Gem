import {
  WithStyles,
  createStyles,
  Theme,
  Typography,
  withStyles,
  Paper
} from "@material-ui/core";
import * as React from "react";

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: "left",
      color: theme.palette.text.secondary
    }
  });

interface Props extends WithStyles<typeof styles> {
  text: string;
}
const FullWidthButton = withStyles(styles)(({ text, classes }: Props) => (
  <Paper className={classes.paper}>
    <Typography style={{ paddingLeft: 15 }} variant={"subheading"}>
      {text}
    </Typography>
  </Paper>
));

export default FullWidthButton;
