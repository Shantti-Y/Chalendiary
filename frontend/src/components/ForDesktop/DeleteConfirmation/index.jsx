import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  closeDeleteconfirmation,
  submitDelete
} from '@store/actions/ui/modalContent/tagForm/deleteConfirmation';

const Deleteconfirmation = ({
  tag,
  opened,
  onClose,
  onSubmit
}) => {

  if (opened) {
    return (
      <Dialog
        open={opened}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <DialogTitle>Delete Message</DialogTitle>
          <DialogContentText>Are you sure you want to delete this message? This cannot be undone.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">Cancel</Button>
          <Button onClick={() => onSubmit(tag.id)} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    )
  } else {
    return null;
  }
}

const mapStateToProps = state => ({
  opened: state.ui.modalContent.tagForm.deleteConfirmation.opened,
  tag: state.ui.modalContent.tagForm.deleteConfirmation.tag
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(closeDeleteconfirmation()),
  onSubmit: tagId => dispatch(submitDelete({ tagId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Deleteconfirmation);