import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const UserProfile = ({
  currentUser,
  me,
  onClose,
}) => {

  const isYourself = currentUser.id === me.id;

  return (
    <>
      <DialogContent className={style.container}>
        <DialogTitle className={style.title}>{`${isYourself ? `Your` : `${currentUser.screenName}'s`} Profile`}</DialogTitle>
        <dl className={style.itemContent}>
          <dt className={style.itemField}>username</dt>
          <dd className={style.itemValue}>{currentUser.screenName}</dd>
        </dl>
        <dl className={style.itemContent}>
          <dt className={style.itemField}>email</dt>
          <dd className={style.itemValue}>{currentUser.email}</dd>
        </dl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
      </DialogActions>
    </>
  )
}

const mapStateToProps = state => ({
  me: state.me.me,
  currentUser: state.user.users.find(user => user.id === state.ui.modalContent.userProfile.currentUserId)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);