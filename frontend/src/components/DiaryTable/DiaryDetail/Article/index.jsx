import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import { changeReplyForm } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

import Button from '@material-ui/core/Button';

import Create from '@material-ui/icons/Create';

import DiaryArticle from './DiaryArticle';
import ReplyArticle from './ReplyArticle';

const Article = ({
  me,
  diary,
  onOpenReplyForm
}) => {

  return (
    <>
      <DiaryArticle diary={diary} />
      <div className={style.repliesBorder}>
        <span className={style.replies}>{`${diary.replies.length} replies`}</span>
      </div>
      <ul>{diary.replies.map(reply => <ReplyArticle reply={reply} />)}</ul>
      {
        diary.deletedAt === null ? (
          <Button className={style.newDiaryButton} onClick={() => onOpenReplyForm(me.id, diary)}>
            Comment<Create className={style.newDiaryIcon} />
          </Button>
        ) : null
      }
    </>
  )
}

const mapStateToProps = state => ({
  me: state.me.me,
  diary: state.diary.diaries.map(item => item.diaries)
  .flat().find(diary => {
    return diary.id === state.ui.workspace.diaryTable.diaryDetail.article.currentDiaryId
  }),
});

const mapDispatchToProps = dispatch => ({
  onOpenReplyForm: (userId, diary) => {
    const reply = { userId, diaryId: diary.id };
    dispatch(changeReplyForm({ reply }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);