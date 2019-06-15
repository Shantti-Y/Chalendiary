import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { submitDelete } from '@store/actions/ui/deleteConfirmation/diaryConfirmation';

const DiaryConfirmation = ({
  diary,
  onSubmit
}) => {
  return (
    <>
      <DialogContent>
        <DialogTitle>Delete Diary</DialogTitle>
        <DialogContentText>Are you sure you want to delete this diary message?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="danger" onClick={() => onSubmit(diary)}>Delete</Button>
        <Button color="primary">Cancel</Button>
      </DialogActions>
    </>
  )
}

const mapStateToProps = state => ({
  diary: state.ui.deleteConfirmation.diaryConfirmation.diary
});

const mapDispatchToProps = dispatch => ({
  onSubmit: diary => dispatch(submitDelete({ diary }))
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryConfirmation);