import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { setDiaryDetailComponent } from '@store/actions/ui/submenu/main';

import { openDiaryForm, openArticle } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

import Delete from '@material-ui/icons/Delete';
import Launch from '@material-ui/icons/Launch';

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

  const handleOpeningFormModal = () => {
    if (isYourDiary){
      onOpenDiaryForm(container, me.id, postedAt, diaryText);
    }
  }

  if(diary){
    return (
      <TableCell
        className={currentContainer === container ? style.activeBodyCell : style.bodyCell}
        onClick={() => onOpenArticle(container, diary.id)}
        ref={container}
        padding="none"
        align="justify"
      >
        <span className={style.cellText}>
          {diary.deletedAt === null ? diaryText : <span><Delete /> deleted</span>}
        </span>
      </TableCell>
    )
  } else if (isYourDiary){
    return (
      <TableCell
        className={currentContainer === container ? style.activeBodyCell : style.bodyCell}
        onClick={handleOpeningFormModal}
        ref={container}
        padding="none"
        align="justify"
      >
        <Button>New Post<Launch /></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DiaryCell);