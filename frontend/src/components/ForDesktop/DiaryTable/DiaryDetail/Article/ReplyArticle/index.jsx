import React from 'react';
import style from './style';

import { connect } from 'react-redux';
import { openMenu } from '@store/actions/ui/popperMenu';

import Button from '@material-ui/core/Button';

import MoreVert from '@material-ui/icons/MoreVert';

import EditPopperMenu from './EditPopperMenu';

const ReplyArticle = ({
  me,
  reply,
  onOpenMenu
}) => {
  const isYourReply = reply.user.id === me.id;

  return (
    <li key={reply.id}>
      {reply.user.screenName}: {reply.contentText}
      {isYourReply ? <Button><MoreVert onClick={e => onOpenMenu(e.currentTarget, <EditPopperMenu reply={reply} />)} /></Button> : null}
    </li>
  )
}

const mapStateToProps = state => ({
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
  onOpenMenu: (anchorEl, component) => dispatch(openMenu({ anchorEl, component }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyArticle);