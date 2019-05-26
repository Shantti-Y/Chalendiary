import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import { changeInputAttributes, submitInput } from '@store/actions/ui/modalContent/diaryForm';

const DiaryForm = ({
  form,
  onClose,
  onChangeValue,
  onSubmit
}) => {
  
  return(
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
          onChange={e => onChangeValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
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
  form: state.ui.modalContent.diaryForm
});

const mapDispatchToProps = dispatch => ({
  onChangeValue: contentText => dispatch(changeInputAttributes({ contentText })),
  onSubmit: input => dispatch(submitInput({ input }))
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryForm);