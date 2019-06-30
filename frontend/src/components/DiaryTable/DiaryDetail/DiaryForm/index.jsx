import React from 'react';
import style from './style.scss'
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Emoji from '@components/Emoji';

import { changeInputAttributes, submitInput } from '@store/actions/ui/workspace/diaryTable/diaryDetail/diaryForm';
import { closeDetail } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

const DiaryDetail = ({
  form,
  emojis,
  onCancel,
  onChangeValue,
  onSubmit
}) => {

  const isNew = form.id === null;

  return (
    <>
      <div className={style.header}>
        <p className={style.inputHead}>{isNew ? 'New Post' : 'Edit Post'}</p>
        <FormControl>
          <Select
            className={style.emojiSelector}
            value={form.emojiId}
            onChange={e => onChangeValue('emojiId', e.target.value)}
          >
            {emojis.map(emoji => (
              <MenuItem
                className={style.emojiSelectorItem}
                component="div"
                value={emoji.id}
                disableGutters
              >
                <Emoji emoji={emoji} size={17} />
              </MenuItem>
            ))}

          </Select>

        </FormControl>
        
      </div>
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
        <Button className={`${style.plane} ${style.modalButton}`} onClick={onCancel}>Cancel</Button>
        <Button className={`${style.success} ${style.modalButton}`} onClick={() => onSubmit(form)}>Post</Button>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  form: state.ui.workspace.diaryTable.diaryDetail.diaryForm.input,
  emojis: state.emoji.emojis
});

const mapDispatchToProps = dispatch => ({
  onChangeValue: (key, value) => dispatch(changeInputAttributes({ key, value })),
  onSubmit: input => dispatch(submitInput({ input })),
  onCancel: () => dispatch(closeDetail())
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryDetail);