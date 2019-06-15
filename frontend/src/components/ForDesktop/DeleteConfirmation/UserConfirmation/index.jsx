import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { submitDelete } from '@store/actions/ui/deleteConfirmation/userConfirmation';

const UserConfirmation = ({
  user,
  onSubmit
}) => {
  return (
    <>
      <DialogContent>
        <DialogTitle>Delete User</DialogTitle>
        <DialogContentText>Are you sure you want to delete yourself? This cannot be undone</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="danger" onClick={() => onSubmit(user)}>Delete</Button>
        <Button color="primary">Cancel</Button>
      </DialogActions>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user.users.find(user => {
    return user.id === state.ui.deleteConfirmation.userConfirmation.userId
  })
});

const mapDispatchToProps = dispatch => ({
  onSubmit: user => dispatch(submitDelete({ user }))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmation);