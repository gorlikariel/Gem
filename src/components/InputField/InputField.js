import * as React from "react";
import * as theme from "../../styleguide/theme";
import { withStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";

const C3 = theme.C3;
const styles = theme => ({
  container: {
    width: "100%"
  },
  cssLabel: {
    "&$cssFocused": {
      color: C3
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: C3,
      color: C3
    }
  }
});

const InputField = props => {
  const { classes, type, onChange, autoFocus, focused, ...otherProps } = props;
  console.log(autoFocus);
  const isSnoozeField =
    props.id === "snoozeEvery" ? (
      <InputAdornment position="start">Min</InputAdornment>
    ) : null;
  return (
    <div className={classes.container}>
      <TextField
        {...otherProps}
        autoFocus={autoFocus}
        type={type}
        style={{ width: "100%" }}
        InputLabelProps={{
          FormLabelClasses: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classs: { underline: classes.cssUnderline },
          startAdornment: isSnoozeField,
          autoFocus: focused
        }}
        onChange={onChange}
        label={props.label}
        value={props.value}
      />
    </div>
  );
};

export default withStyles(styles)(InputField);
