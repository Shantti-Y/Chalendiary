import React from 'react';
import style from './style'

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import { changeInputAttributes, submitInput } from '@store/actions/ui/workspace/diaryTable/diaryDetail/diaryForm';
import { closeDetail, changeArticle } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

const DiaryDetail = ({
  classes,
  form,
  onCancelEdit,
  onCancelNew,
  onChangeValue,
  onSubmit
}) => {
  const handleOnCancel = () => {
    if(form.id){
      onCancelEdit(form.id);
    }else{
      onCancelNew();
    }
  }

  return (
    <>
      <DialogContent>
        <DialogContentText>{form.postedAt.format('YYYY-MM-DD')}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Leave a message!"
          rows="6"
          value={form.contentText}
          multiline
          fullWidth
          onChange={e => onChangeValue('contentText', e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnCancel} color="primary">
          Cancel
      </Button>
        <Button onClick={() => onSubmit(form)} color="primary">
          Submit
      </Button>
      </DialogActions>
    </>
  )
}

const mapStateToProps = state => ({
  form: state.ui.workspace.diaryTable.diaryDetail.diaryForm.input
});

const mapDispatchToProps = dispatch => ({
  onChangeValue: (key, value) => dispatch(changeInputAttributes({ key, value })),
  onSubmit: input => dispatch(submitInput({ input })),
  onCancelEdit: diaryId => dispatch(changeArticle({ diaryId })),
  onCancelNew: () => dispatch(closeDetail())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(DiaryDetail));