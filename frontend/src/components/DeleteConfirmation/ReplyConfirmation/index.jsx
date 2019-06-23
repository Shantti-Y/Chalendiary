import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { submitDelete } from '@store/actions/ui/deleteConfirmation/replyConfirmation';

const ReplyConfirmation = ({
  reply,
  onSubmit
}) => {
  return (
    <>
      <DialogTitle>Delete Reply</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this reply? This cannot be undone.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className={`${style.modalButton} ${style.plane}`} >Cancel</Button>
        <Button className={`${style.modalButton} ${style.danger}`}  onClick={() => onSubmit(reply)}>Delete</Button>
      </DialogActions>
    </>
  )
}

const mapStateToProps = state => ({
  reply: state.ui.deleteConfirmation.replyConfirmation.reply
});

const mapDispatchToProps = dispatch => ({
  onSubmit: reply => dispatch(submitDelete({ reply }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyConfirmation);