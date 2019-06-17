import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import {
  addUserId,
  removeUserId
} from '@store/actions/ui/modalContent/tagForm/main';

const MemberCheckboxList = ({
  userIds,
  users,
  onToggleCheck
}) => {

  return (
    <List>
      {users.map(user => {
        return (
          <ListItem key={user.id} dense button onClick={() => onToggleCheck(user.id, !userIds.includes(user.id))}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={userIds.includes(user.id)}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': user.id }}
              />
            </ListItemIcon>
            <ListItemText id={user.id} primary={user.screenName} />
          </ListItem>
        );
      })}
    </List>
  )
}

const mapStateToProps = state => ({
  userIds: state.ui.modalContent.tagForm.main.userIds,
  users: state.user.users
});

const mapDispatchToProps = dispatch => ({
  onToggleCheck: (userId, checked) => {
    if (checked) {
      dispatch(addUserId({ userId }));
    } else {
      dispatch(removeUserId({ userId }));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberCheckboxList);