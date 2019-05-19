import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import {
  Typography,
  Divider,
  Button
} from '@material-ui/core';

import { Launch } from '@material-ui/icons';
import { changeValue, clearValue } from '@store/actions/newPostForm';
import { addNewDiary } from '@store/actions/diary';

import LongTextarea from '@components/Form/LongTextarea';

const NewDiary = props => {
  const {
    value,
    targetDate,
    targetUser,
    targetTeam,
    onChange,
    onSubmit,
    onCompleteSubmitting
  } = props;

  const handleSubmit = () => {
    const newDiary = {
      teamId: targetTeam.id,
      userId: targetUser.id,
      contentText: value,
      postedAt: targetDate
    }
    onSubmit(newDiary);
    onCompleteSubmitting();
  }

  return (
    <div className="new-post">
      <Typography className="new-post-date" variant="h6">{targetDate }</Typography>
      <Divider />
      <LongTextarea
        value={value}
        onChange={value => onChange(value)}
      />
      <Divider />
      <Button onClick={() => handleSubmit()}>POST<Launch /></Button>
    </div>  
  )
}

const mapStateToProps = state => {
  return {
    value: state.newPostForm.value,
    targetDate: state.date.currentDate,
    targetTeam: state.team.teams.find(team => team.id === state.team.currentTeamId),
    targetUser: state.me.me
  }
}

const mapDispatchToProps = {
  onChange: value => changeValue(value),
  onCompleteSubmitting: () => clearValue(),
  onSubmit: diary => addNewDiary({ diary })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDiary);