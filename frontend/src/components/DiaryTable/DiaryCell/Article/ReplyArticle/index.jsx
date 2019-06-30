import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';
import { openMenu } from '@store/actions/ui/popperMenu';

import IconButton from '@material-ui/core/IconButton';

import MoreVert from '@material-ui/icons/MoreVert';

import EditPopperMenu from './EditPopperMenu';

const ReplyArticle = ({
  me,
  reply,
  container,
  onOpenMenu
}) => {
  const isYourReply = reply.user.id === me.id;

  return (
    <li key={reply.id}>
      {isYourReply ? (
        <IconButton
          className={style.iconButton}
          onClick={e => onOpenMenu(e.currentTarget, <EditPopperMenu reply={reply} container={container} />)}
        >
          <MoreVert className={style.moveVertIcon} />
        </IconButton>
      ) : null}
      <p className={style.screenName}>{reply.user.screenName}</p>
      <p className={style.contentText}>{reply.contentText}</p>
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