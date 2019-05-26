import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { setDiaryFormContent } from '@store/actions/ui/modalContent/base';
import { setDiaryDetailComponent } from '@store/actions/ui/submenu';

import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

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
      onOpenDiaryDetail(diary.id);
    }
  }

  const handleOpeningFormModal = () => {
    if (isYourDiary){
      onOpenModal(postedAt, diaryText);
    }
  }

  if(diary){
    return (
      <TableCell className="table-cell" onClick={handleOpeningDiary}>{diaryText}</TableCell>
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
  onOpenModal: (postedAt, contentText) => {
    const diary = { id: null, postedAt, contentText }
    dispatch(setDiaryFormContent({ diary }));
  },
  onOpenDiaryDetail: diaryId => {
    dispatch(setDiaryDetailComponent({ diaryId }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryCell);