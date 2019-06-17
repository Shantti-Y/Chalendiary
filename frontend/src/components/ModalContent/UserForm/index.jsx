import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { changeInputAttributes, submitInput } from '@store/actions/ui/modalContent/userForm/main';
import { setUserConfirmation } from '@store/actions/ui/deleteConfirmation/base';

const UserForm = ({
  form,
  onClose,
  onChangeValue,
  onSubmit,
  onOpenDeleteForm
}) => {

  return (
    <>
      <DialogContent>
        <DialogTitle>Edit Profile</DialogTitle>
        <TextField
          id="screen-name"
          label="screenName"
          value={form.screenName}
          onChange={e => onChangeValue('screenName', e.target.value)}
          margin="normal"
        />
        <TextField
          id="phone"
          label="phone"
          value={form.phone}
          onChange={e => onChangeValue('phone', e.target.value)}
          type="tel"
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={() => onSubmit(form)} color="primary">Submit</Button>
        <Button onClick={() => onOpenDeleteForm(form.id)}>Delete</Button>
      </DialogActions>
    </>
  )
}

const mapStateToProps = state => ({
  form: state.ui.modalContent.userForm.main.input
});

const mapDispatchToProps = dispatch => ({
  onChangeValue: (key, value) => dispatch(changeInputAttributes({ key, value })),
  onSubmit: input => dispatch(submitInput({ input })),
  onOpenDeleteForm: userId => dispatch(setUserConfirmation({ userId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);