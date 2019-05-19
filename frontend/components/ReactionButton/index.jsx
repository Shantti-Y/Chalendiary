import React from 'react';
import './style.scss';

import {
  Avatar,
  Chip
} from '@material-ui/core';

import {
  Favorite,
  FavoriteBorder
} from '@material-ui/icons';

const ReactionButton = props => {
  return (
    <div className="reaction-button">
      <Chip
        avatar={<Avatar className="reaction-button-icon-avatar"><Favorite /></Avatar>}
        label="2"
        onClick={props.handleClick}
        className="reaction-button-icon"
      />
    </div>
  )
}

export default ReactionButton;