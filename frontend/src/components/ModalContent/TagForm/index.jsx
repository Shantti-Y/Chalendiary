import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import {
  changeInputAttributes,
  submitInput
} from '@store/actions/ui/modalContent/tagForm/main';
import { openDeleteconfirmation } from '@store/actions/ui/modalContent/tagForm/deleteConfirmation';

import DeleteConfirmation from './DeleteConfirmation';
import MemberCheckboxList from './MemberCheckboxList';

const TagForm = ({
  form,
  onClose,
  onChangeValue,
  onSubmit,
  onOpenDeleteForm
}) => {

  const isEdit = form.id

  const dialogName = isEdit ? `Edit Tag` : 'Create New Tag';

  return (
    <>
      <DialogContent>
        <DialogContentText>{dialogName}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="name"
          value={form.name}
          fullWidth
          onChange={e => onChangeValue('name', e.target.value)}
        />
        <DialogContentText>Members</DialogContentText>
        <MemberCheckboxList />
        <ListItem key="public-flag" dense button onClick={() => onChangeValue('publicFlag', !form.publicFlag)}>
          <Checkbox
            edge="start"
            checked={form.publicFlag}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': 'public-flag' }}
          />
          <ListItemText id="public-flag" primary="Show in public" />
        </ListItem>
      </DialogContent>
      <DialogActions>
        <Button className={`${style.plane} ${style.modalButton}`} onClick={onClose}>Cancel</Button>
        <Button className={`${style.success} ${style.modalButton}`} onClick={() => onSubmit(form)}>Submit</Button>
        {
          isEdit ? <Button className={`${style.danger} ${style.modalButton}`} onClick={() => onOpenDeleteForm(form.id)}>Delete</Button> : null
        }
      </DialogActions>
      <DeleteConfirmation />
    </>
  )
}

const mapStateToProps = state => ({
  form: state.ui.modalContent.tagForm.main.input
});

const mapDispatchToProps = dispatch => ({
  onChangeValue: (key, value) => dispatch(changeInputAttributes({ key, value })),
  onSubmit: () => dispatch(submitInput()),
  onOpenDeleteForm: tagId => dispatch(openDeleteconfirmation({ tagId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagForm);