import React from 'react';
import style from './style';

import moment from 'moment';
import { connect } from 'react-redux';
import { changeDiaryForm } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';
import { closeMenu } from '@store/actions/ui/popperMenu';
import { setDiaryConfirmation } from '@store/actions/ui/deleteConfirmation/base';

import PopperItem from '@components/ForDesktop/PopperMenu/PopperItem';

const EditMenu = ({
  diary,
  onClickEdit,
  onClickDelete
}) => {
  return (
    <>
      <PopperItem onClick={() => onClickEdit(diary)}>Edit</PopperItem>
      <PopperItem onClick={() => onClickDelete(diary)}>Delete</PopperItem>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  onClickEdit: diary => {
    const newDiary = Object.assign({}, diary, { userId: diary.user.id, postedAt: moment(diary.postedAt) });
    dispatch(changeDiaryForm({ diary: newDiary }));
    dispatch(closeMenu());
  },
  onClickDelete: diary => {
    dispatch(setDiaryConfirmation({ diary }));
    dispatch(closeMenu());
  }
});

export default connect(null, mapDispatchToProps)(EditMenu);