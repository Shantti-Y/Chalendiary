import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { setReplyFormContent } from '@store/actions/ui/modalContent/base';
import { setReplyMenu } from '@store/actions/ui/submenu/popperMenu/main';

import Button from '@material-ui/core/Button';

import Create from '@material-ui/icons/Create';

const diaryDetail = ({
  me,
  reply,
  onOpenMenu
}) => {
  const isYourReply = reply.user.id === me.id;

  return (
    <li key={reply.id}>
      {reply.user.screenName}: {reply.contentText}
      {isYourReply ? <Button><Create onClick={e => onOpenMenu(reply, e.currentTarget)} /></Button> : null}
    </li>
  )
}

const mapStateToProps = state => ({
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
  onModal: reply => {
    const newReply = Object.assign({}, reply, { diaryId: reply.diaryId, userId: reply.user.id });
    dispatch(setReplyFormContent({ reply: newReply }));
  },
  onOpenMenu: (reply, anchorEl) => dispatch(setReplyMenu({ reply, anchorEl }))
});

export default connect(mapStateToProps, mapDispatchToProps)(diaryDetail);