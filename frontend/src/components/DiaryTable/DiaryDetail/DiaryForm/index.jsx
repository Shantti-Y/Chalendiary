import React from 'react';
import style from './style.scss'
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { changeInputAttributes, submitInput } from '@store/actions/ui/workspace/diaryTable/diaryDetail/diaryForm';
import { closeDetail, changeArticle } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

const DiaryDetail = ({
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

  const isNew = form.id === null;

  return (
    <>
      <p className={style.inputHead}>{isNew ? 'New Post' : 'Edit Post'}</p>
      <TextField
        className={style.inputField}
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
        <Button className={`${style.plane} ${style.modalButton}`} onClick={handleOnCancel}>Cancel</Button>
        <Button className={`${style.success} ${style.modalButton}`} onClick={() => onSubmit(form)}>Post</Button>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DiaryDetail);