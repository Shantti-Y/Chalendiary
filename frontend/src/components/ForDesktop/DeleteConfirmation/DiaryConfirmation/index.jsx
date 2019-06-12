import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DiaryConfirmation = ({
  diary
}) => {
  return (
    <>
      <DialogContent>
        <DialogTitle>Delete Diary</DialogTitle>
        <DialogContentText>Are you sure you want to delete this message? This cannot be undone.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancel</Button>
      </DialogActions>
    </>
  )
}

const mapStateToProps = state => ({
  diary: state.ui.deleteConfirmation.diaryConfirmation.diary
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryConfirmation);