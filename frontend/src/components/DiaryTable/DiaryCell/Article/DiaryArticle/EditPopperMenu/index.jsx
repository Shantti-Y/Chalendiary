import React from 'react';
import style from './style';

import moment from 'moment';
import { connect } from 'react-redux';
import { openDiaryForm } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';
import { closeMenu } from '@store/actions/ui/popperMenu';
import { setDiaryConfirmation } from '@store/actions/ui/deleteConfirmation/base';

import PopperItem from '@components/PopperMenu/PopperItem';

const EditMenu = ({
  diary,
  container,
  onClickEdit,
  onClickDelete
}) => {
  return (
    <>
      <PopperItem onClick={() => onClickEdit(container, diary)}>Edit</PopperItem>
      <PopperItem onClick={() => onClickDelete(diary)}>Delete</PopperItem>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  onClickEdit: (container, diary) => {
    const newDiary = Object.assign({}, diary, { userId: diary.user.id, postedAt: moment(diary.postedAt), emojiId: diary.emoji.id });
    dispatch(openDiaryForm({ container, diary: newDiary }));
    dispatch(closeMenu());
  },
  onClickDelete: diary => {
    dispatch(setDiaryConfirmation({ diary }));
    dispatch(closeMenu());
  }
});

export default connect(null, mapDispatchToProps)(EditMenu);