import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { setDiaryFormContent } from '@store/actions/ui/modalContent/base';
import { setDiaryDetailComponent } from '@store/actions/ui/submenu/main';

import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

import Delete from '@material-ui/icons/Delete';
import Create from '@material-ui/icons/Create';

const DiaryCell = ({
  me,
  memberId,
  postedAt,
  diary,
  onOpenModal,
  onOpenDiaryDetail
}) => {
  const diaryText = diary ? diary.contentText : "";

  const isYourDiary = me.id === memberId

  const handleOpeningDiary = () => {
    if(diary){
      onOpenDiaryDetail(diary);
    }
  }

  const handleOpeningFormModal = () => {
    if (isYourDiary){
      onOpenModal(me.id, postedAt, diaryText);
    }
  }

  if(diary){
    return (
      <TableCell className="table-cell" onClick={handleOpeningDiary}>
        {diary.deletedAt === null ? diaryText : <Delete />}
      </TableCell>
    )
  } else if (isYourDiary){
    return (
      <TableCell className="table-cell" onClick={handleOpeningFormModal}>
        <Button><Create /></Button>
      </TableCell>
    )
  }else{
    return <TableCell className="table-cell"></TableCell>
  }
};

const mapStateToProps = state => ({
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
  onOpenModal: (userId, postedAt, contentText) => {
    const diary = { userId, postedAt: moment(postedAt), contentText }
    dispatch(setDiaryFormContent({ diary }));
  },
  onOpenDiaryDetail: diary => {
    dispatch(setDiaryDetailComponent({ diary }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryCell);