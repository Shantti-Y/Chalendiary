import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { setDiaryFormContent, setReplyFormContent } from '@store/actions/ui/modalContent/base';

import Button from '@material-ui/core/Button';

import Create from '@material-ui/icons/Create';

import ReplyDetail from './ReplyDetail';

const diaryDetail = ({
  me,
  diary,
  onOpenDiaryModal,
  onOpenReplyModal
}) => {
  const isYourDiary = diary.user.id === me.id; 

  return (
    <div>
      <div>
        {isYourDiary ? <Button><Create onClick={() => onOpenDiaryModal(diary)} /></Button>: null}
        {diary.user.screenName}
        {diary.contentText}
      </div>
      <ul>
        {diary.replies.map(reply => <ReplyDetail reply={reply} />)}
      </ul>
      <div>
        <Button><Create onClick={() => onOpenReplyModal(me.id, diary)} /></Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  me: state.me.me,
  diary: state.diary.diaries.map(item => item.diaries).flat().find(diary => diary.id === state.diary.currentDiaryId),
});

const mapDispatchToProps = dispatch => ({
  onOpenDiaryModal: diary => {
    const newDiary = Object.assign({}, diary, { userId: diary.user.id, postedAt: moment(diary.postedAt) });
    dispatch(setDiaryFormContent({ diary: newDiary }));
  },
  onOpenReplyModal: (userId, diary) => {
    const reply = { userId, diaryId: diary.id };
    dispatch(setReplyFormContent({ reply }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(diaryDetail);