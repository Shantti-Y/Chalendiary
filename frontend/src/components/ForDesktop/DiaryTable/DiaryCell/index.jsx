import React from 'react';
import style from './style';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import moment from 'moment';

import { setDiaryFormContent } from '@store/actions/ui/modalContent/base';
import { setDiaryDetailComponent } from '@store/actions/ui/submenu/main';

import { openDiaryForm, openArticle } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

import Delete from '@material-ui/icons/Delete';
import Create from '@material-ui/icons/Create';

const DiaryCell = ({
  me,
  currentContainer,
  memberId,
  postedAt,
  diary,
  onOpenDiaryForm,
  onOpenDiaryDetail,
  onOpenArticle
}) => {
  const diaryText = diary ? diary.contentText : "";

  const isYourDiary = me.id === memberId;

  const container = React.useRef(null);

  const handleOpeningDiary = () => {
    if(diary){
      onOpenDiaryDetail(diary);
    }
  }

  const handleOpeningFormModal = () => {
    if (isYourDiary){
      onOpenDiaryForm(container, me.id, postedAt, diaryText);
    }
  }

  if(diary){
    return (
      <TableCell
        style={currentContainer === container ? style.activeTableCell : style.tableCell}
        onClick={() => onOpenArticle(container, diary.id)}
        ref={container}
        padding="none"
        align="justify"
      >
        {diary.deletedAt === null ? diaryText : <Delete />}
      </TableCell>
    )
  } else if (isYourDiary){
    return (
      <TableCell
        style={currentContainer === container ? style.activeTableCell : style.tableCell}
        className="table-cell"
        onClick={handleOpeningFormModal}
        ref={container}
        padding="none"
        align="justify"
      >
        <Button><Create /></Button>
      </TableCell>
    )
  }else{
    return <TableCell className="table-cell"></TableCell>
  }
};

const mapStateToProps = state => ({
  me: state.me.me,
  currentContainer: state.ui.workspace.diaryTable.diaryDetail.base.container
});

const mapDispatchToProps = dispatch => ({
  onOpenDiaryDetail: diary => {
    dispatch(setDiaryDetailComponent({ diary }));
  },
  onOpenArticle: (container, diaryId) => dispatch(openArticle({ container, diaryId })),
  onOpenDiaryForm: (container, userId, postedAt, contentText) => {
    const diary = { userId, postedAt: moment(postedAt), contentText }
    dispatch(openDiaryForm({ container, diary }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(DiaryCell));