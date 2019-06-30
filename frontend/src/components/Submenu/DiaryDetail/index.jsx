import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { setReplyFormContent } from '@store/actions/ui/modalContent/base';
import { setDiaryMenu, setRecoverDiaryMenu } from '@store/actions/ui/submenu/popperMenu/main';

import Button from '@material-ui/core/Button';

import Create from '@material-ui/icons/Create';

import ReplyDetail from './ReplyDetail';

const diaryDetail = ({
  me,
  diary,
  onOpenDiaryMenu,
  onOpenRecoverDiaryMenu,
  onOpenReplyModal
}) => {
  const isYourDiary = diary.user.id === me.id; 

  return (
    <div>
      {
        diary.deletedAt === null ? (
          <div>
            {isYourDiary ? <Button><Create onClick={e => onOpenDiaryMenu(diary, e.currentTarget)} /></Button> : null}
            {diary.user.screenName}
            {diary.contentText}
          </div>
        ) : (
          <div>
            Deleted!!
            {diary.deletedAt ? <Button><Create onClick={e => onOpenRecoverDiaryMenu(diary, e.currentTarget)} /></Button> : null}
          </div>
        )
      }
      
      <ul>
        {diary.replies.map(reply => <ReplyDetail key={reply.id} reply={reply} />)}
      </ul>
      {
        diary.deletedAt === null ? (
          <div>
            <Button><Create onClick={() => onOpenReplyModal(me.id, diary)} /></Button>
          </div>
        ) : null
      }
    </div>
  )
}

const mapStateToProps = state => ({
  me: state.me.me,
  diary: state.diary.diaries.map(item => item.diaries).flat().find(diary => diary.id === state.diary.currentDiaryId),
});

const mapDispatchToProps = dispatch => ({
  onOpenDiaryMenu: (diary, anchorEl) => dispatch(setDiaryMenu({ diary, anchorEl })),
  onOpenRecoverDiaryMenu: (diary, anchorEl) => dispatch(setRecoverDiaryMenu({ diary, anchorEl })),
  onOpenReplyModal: (userId, diary) => {
    const reply = { userId, diaryId: diary.id };
    dispatch(setReplyFormContent({ reply }));
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(diaryDetail);