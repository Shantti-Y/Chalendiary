import React from 'react';
import './style.scss';

import moment from 'moment';

import { connect } from 'react-redux';

import { setDiaryConfirmation } from '@store/actions/ui/deleteConfirmation/base';
import { setDiaryFormContent } from '@store/actions/ui/modalContent/base';

import MenuItem from '@material-ui/core/MenuItem';

const DiaryMenu = ({
  diary,
  onOpenEditModal,
  onOpenDeleteConfirmation
}) => {
  return (
    <>
      <MenuItem onClick={() => onOpenEditModal(diary)}>Edit</MenuItem>
      <MenuItem onClick={() => onOpenDeleteConfirmation(diary)}>Delete</MenuItem>
    </>
  );

}

const mapStateToProps = state => ({
  diary: state.ui.submenu.popperMenu.diaryMenu.diary
});

const mapDispatchToProps = dispatch => ({
  onOpenEditModal: diary => {
    const newDiary = Object.assign({}, diary, { userId: diary.user.id, postedAt: moment(diary.postedAt) });
    dispatch(setDiaryFormContent({ diary: newDiary }));
  },
  onOpenDeleteConfirmation: diary => {
    const newDiary = Object.assign({}, diary, { userId: diary.user.id, postedAt: moment(diary.postedAt) });
    dispatch(setDiaryConfirmation({ diary: newDiary }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryMenu);