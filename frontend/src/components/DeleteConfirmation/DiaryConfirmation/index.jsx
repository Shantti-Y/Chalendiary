import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { closeDeleteConfirmation } from '@store/actions/ui/deleteConfirmation/base';
import { submitDelete } from '@store/actions/ui/deleteConfirmation/diaryConfirmation';

const DiaryConfirmation = ({
  diary,
  onSubmit,
  onCancel
}) => {
  return (
    <>
      <DialogTitle>Delete Diary</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this diary message?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className={`${style.modalButton} ${style.plane}`} onClick={onCancel}>Cancel</Button>
        <Button className={`${style.modalButton} ${style.danger}`} onClick={() => onSubmit(diary)}>Delete</Button>
      </DialogActions>
    </>
  )
}

const mapStateToProps = state => ({
  diary: state.ui.deleteConfirmation.diaryConfirmation.diary
});

const mapDispatchToProps = dispatch => ({
  onSubmit: diary => dispatch(submitDelete({ diary })),
  onCancel: () => dispatch(closeDeleteConfirmation())
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryConfirmation);