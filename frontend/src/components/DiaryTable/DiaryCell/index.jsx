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

import Emoji from '@components/Emoji';

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
  const isYourDiary = me.id === memberId;

  const container = React.useRef(null);

  const handleOpeningFormModal = () => {
    if (isYourDiary){
      const diaryText = diary ? diary.contentText : "";
      onOpenDiaryForm(container, me.id, postedAt, diaryText, 1);
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
          {diary.deletedAt === null ? (
            <><Emoji emoji={diary.emoji} />{diary.contentText}</>
          ) : (<span><Delete /> deleted</span>)}
        </span>
        <span className={style.repliesText}>{`${diary.replies.length} replies`}</span>
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
        <Button className={style.button} disabled>Post<Launch /></Button>
      </TableCell>
    )
  }else{
    return <TableCell className={style.bodyCell}></TableCell>
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
  onOpenDiaryForm: (container, userId, postedAt, contentText, emojiId) => {
    const diary = { userId, postedAt: moment(postedAt), contentText, emojiId }
    dispatch(openDiaryForm({ container, diary }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryCell);