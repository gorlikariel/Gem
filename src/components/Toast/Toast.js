import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class Toast extends React.Component {
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'center'
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
      <div
        onClick={this.handleClick({
          vertical: 'bottom',
          horizontal: 'center'
        })}
      >
        <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'settings-message'
          }}
          message={
            <span id="settings-message">Settings successfully updated</span>
          }
        />
        {this.props.children}
      </div>
    );
  }
}

export default Toast;
