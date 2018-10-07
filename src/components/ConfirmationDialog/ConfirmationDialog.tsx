import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ConfirmationDialogProps {
  onClose: Function;
  onAgree: Function;
  open: boolean;
  message: string;
}

class ConfirmationDialog extends React.Component<ConfirmationDialogProps> {
  handleClose = () => {
    this.props.onClose();
  };

  handleAgree = () => {
    this.props.onAgree();
  };

  render() {
    const { open, message } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleAgree}
          disableBackdropClick={true}
        >
          <DialogTitle>{message}</DialogTitle>
          <DialogActions>
            <Button
              id="disagreeDialog"
              onClick={this.handleClose}
              color="primary"
            >
              Disagree
            </Button>
            <Button
              id="agreeDialog"
              onClick={this.handleAgree}
              color="primary"
              autoFocus={true}
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmationDialog;
