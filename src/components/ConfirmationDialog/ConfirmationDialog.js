import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class ConfirmationDialog extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleAgree = () => {
    this.props.onAgree();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleAgree}
          disableBackdropClick
        >
          <DialogTitle>{this.props.message}</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleAgree} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmationDialog;
