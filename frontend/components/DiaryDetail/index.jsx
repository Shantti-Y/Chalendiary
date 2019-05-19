import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import DiaryPost from '@components/DiaryPost';
import Reply from '@components/Reply';

const DiaryDetail = props => {
  const { diary } = props;

  const handleClickReplies = () => {
    return true
  }

  return (
    <div className="post-detail">
      <DiaryPost
        diary={diary}
        onClickReplies={handleClickReplies}
      />
      {diary.replies.map(reply => {
        return <Reply reply={reply} />
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    diary: state.diary.diaries.find(diary => diary.id === state.diary.currentDiaryId)
  }
}

export default connect(mapStateToProps, null)(DiaryDetail);