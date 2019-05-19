import React from 'react';

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';

import './style.scss';

// TODO when websocket service in server-side is built, add a function to display signal that shows if users are logged-in.

const UserActivities = props => {
  const { users } = props

  return (
    <List dense={true} className="user-activities">
      {users.map(user => {
        return (
          <ListItem className="user-activity-list-item">
            <ListItemAvatar className="user-activity-avatar-container">
              <Avatar src={user.thumbnailPath} />
            </ListItemAvatar>
            <ListItemText className="user-activity-text">{user.screenName}</ListItemText>
            <div className="user-activity-status logged-in"></div>
          </ListItem>
        )
      })}
    </List>
  )
}

export default UserActivities;