import * as React from 'react';
import * as theme from '../../styleguide/theme';
import { withStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, WithStyles } from '@material-ui/core';

const C3 = theme.C3;
const styles = {
  container: {
    width: '100%'
  },
  cssLabel: {
    '&$cssFocused': {
      color: C3
    }
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: C3,
      color: C3
    }
  }
};

interface InputFieldProps extends WithStyles<typeof styles> {
  type: string;
  onChange: React.ChangeEventHandler<any>;
  autoFocus: boolean;
  focused: boolean;
  value: string;
  label: string;
  id: string;
}

const InputField: React.SFC<InputFieldProps> = props => {
  const {
    classes,
    type,
    onChange,
    autoFocus,
    focused,
    value,
    label,
    id,
    ...otherProps
  } = props;
  const isSnoozeField =
    id === 'snoozeEvery' ? (
      <InputAdornment position="start">Min</InputAdornment>
    ) : null;
  return (
    <div className={classes.container}>
      <TextField
        {...otherProps}
        autoFocus={autoFocus}
        type={type}
        style={{ width: '100%' }}
        InputLabelProps={{
          FormLabelClasses: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: { underline: classes.cssUnderline },
          startAdornment: isSnoozeField,
          autoFocus: focused
        }}
        onChange={onChange}
        label={label}
        value={value}
      />
    </div>
  );
};

export default withStyles(styles)(InputField);
