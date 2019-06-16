import React from 'react';
import style from './style';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import { changeInputAttributes, submitInput } from '@store/actions/ui/workspace/diaryTable/diaryDetail/replyForm';
import { changeArticle } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

const ReplyForm = ({
  diary,
  form,
  onCancel,
  onChangeValue,
  onSubmit
}) => {

  return (
    <>
      <DialogContent>
        <DialogContentText>Reply to {diary.user.screenName}</DialogContentText>
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
        <Button onClick={() => onCancel(diary.id)} color="primary">
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
  form: state.ui.workspace.diaryTable.diaryDetail.replyForm.input,
  diary: state.diary.diaries.map(item => item.diaries)
    .flat().find(diary => {
    return diary.id === state.ui.workspace.diaryTable.diaryDetail.article.currentDiaryId
  }),
});

const mapDispatchToProps = dispatch => ({
  onChangeValue: (key, value) => dispatch(changeInputAttributes({ key, value })),
  onSubmit: input => dispatch(submitInput({ input })),
  onCancel: diaryId => dispatch(changeArticle({ diaryId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyForm);