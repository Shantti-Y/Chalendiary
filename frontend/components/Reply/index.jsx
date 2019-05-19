import React from 'react';

import {
  Avatar
} from '@material-ui/core';

import ReactionButton from '@components/ReactionButton';

import './style.scss';

const Reply = props => {
  const { reply } = props;
  return (
    <div className="reply">
      <div className="reply-contents">
        <Avatar className="reply-contents-avatar" alt="Remy Sharp" src={reply.user.thumbnailPath} />
        <div className="reply-text">
          <p className="reply-name">{reply.user.screenName}</p>
          <p className="reply-paragraph">{reply.contentText}</p>
        </div>
      </div>
      <ReactionButton />
    </div>
  )
}

export default Reply;