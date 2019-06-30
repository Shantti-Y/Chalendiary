import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import { openReplyForm } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

import Button from '@material-ui/core/Button';

import Create from '@material-ui/icons/Create';

import DiaryArticle from './DiaryArticle';
import ReplyArticle from './ReplyArticle';

const Article = ({
  me,
  diary,
  container,
  onOpenReplyForm
}) => {

  return (
    <div className={style.article}>
      <DiaryArticle diary={diary} container={container} />
      <div className={style.repliesBorder}>
        <span className={style.replies}>{`${diary.replies.length} replies`}</span>
      </div>
      <ul>{diary.replies.map(reply => <ReplyArticle reply={reply} container={container} />)}</ul>
      {
        diary.deletedAt === null ? (
          <Button className={style.plane} onClick={() => onOpenReplyForm(container, me.id, diary)}>
            Comment<Create className={style.newDiaryIcon} />
          </Button>
        ) : null
      }
    </div>
  )
}

const mapStateToProps = state => ({
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
  onOpenReplyForm: (container, userId, diary) => {
    const reply = { userId, diaryId: diary.id };
    dispatch(openReplyForm({ container, reply }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);