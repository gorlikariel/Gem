import * as theme from "../../UI/theme/theme";
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, TextField, InputLabel, Input } from "@material-ui/core";
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
      borderBottomColor: C3
    }
  }
});

const InputField = props => {
  const { classes, type, onChange, ...otherProps } = props;

  return (
    <div className={classes.container}>
      <TextField
        {...otherProps}
        type={type}
        style={{ width: "100%" }}
        InputLabelProps={{
          FormLabelClasses: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{ classes: { underline: classes.cssUnderline } }}
        onChange={onChange}
        label={props.label}
        value={props.value}
      />
    </div>
  );
};

export default withStyles(styles)(InputField);
