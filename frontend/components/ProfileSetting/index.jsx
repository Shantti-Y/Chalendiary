import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import {
  Typography,
  Divider,
  Button
} from '@material-ui/core';

import { Launch } from '@material-ui/icons';

import { updateUser } from '@store/actions/user';
import { changeValue, clearValue } from '@store/actions/newPostForm';

import LongTextarea from '@components/Form/LongTextarea';

const NewDiary = props => {


  const handleSubmit = () => {
  }

  return (
    <div className="profile-setting">
      
    </div>  
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.currentUser
  }
}

const mapDispatchToProps = {
  onChange: value => changeValue(value),
  onSubmit: user => updateUser(user),
  onCompleteSubmitting: () => clearValue()
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDiary);