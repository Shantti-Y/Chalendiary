import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { openDiaryForm, openArticle } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

import Launch from '@material-ui/icons/Launch';

import Article from './Article';
import PopperMenu from '@components/PopperMenu';

const DiaryCell = ({
  me,
  memberId,
  postedAt,
  diary,
  onOpenDiaryForm,
  currentContainer
}) => {
  const container = React.useRef();
  const isOpeningDetail = currentContainer;

  const isYourDiary = me.id === memberId;

  const handleOpeningFormModal = () => {
    if (isYourDiary){
      const diaryText = diary ? diary.contentText : "";
      onOpenDiaryForm(container, me.id, postedAt, diaryText, 1);
    }
  }

  if(diary){
    return (
      <TableCell
        className={isOpeningDetail ? style.activeBodyCell : style.bodyCell}
        ref={container}
        padding="none"
        align="justify"
      >
        <PopperMenu />
        <Article diary={diary} container={container} />
      </TableCell>
    )
  } else if (isYourDiary){
    return (
      <TableCell
        className={[style.bodyCell, style.newPostCell]}
        onClick={handleOpeningFormModal}
        ref={container}
        padding="none"
        align="justify"
      >
        <Button className={style.button} disabled>Post<Launch /></Button>
      </TableCell>
    )
  }else{
    return <TableCell className={style.bodyCell}><div /></TableCell>
  }
};

const mapStateToProps = state => ({
  me: state.me.me,
  currentContainer: state.ui.workspace.diaryTable.diaryDetail.base.container
});

const mapDispatchToProps = dispatch => ({

  onOpenDiaryForm: (container, userId, postedAt, contentText, emojiId) => {
    const diary = { userId, postedAt: moment(postedAt), contentText, emojiId }
    dispatch(openDiaryForm({ container, diary }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryCell);