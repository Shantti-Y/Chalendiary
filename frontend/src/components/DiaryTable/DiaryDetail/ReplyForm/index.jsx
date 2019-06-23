import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { changeInputAttributes, submitInput } from '@store/actions/ui/workspace/diaryTable/diaryDetail/replyForm';
import { changeArticle } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

const ReplyForm = ({
  diary,
  form,
  onCancel,
  onChangeValue,
  onSubmit
}) => {

  const isNew = form.id === null;

  return (
    <>
      <p className={style.inputHead}>{isNew ? 'New Comment' : 'Edit Comment'}</p>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Leave a message!"
        rows="8"
        value={form.contentText}
        multiline
        fullWidth
        variant="outlined"
        onChange={e => onChangeValue('contentText', e.target.value)}
      />
      <div className={style.formActions}>
        <Button className={`${style.plane} ${style.modalButton}`} onClick={() => onCancel(diary.id)}>Cancel</Button>
        <Button className={`${style.success} ${style.modalButton}`} onClick={() => onSubmit(form)}>Post</Button>
      </div>
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