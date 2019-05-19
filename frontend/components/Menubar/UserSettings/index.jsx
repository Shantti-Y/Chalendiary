import React from 'react';
import './style.scss';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';

import {
  Settings,
  AccountBox,
  Help,
  ExitToApp
} from '@material-ui/icons';

import MenuHeader from '@components/MenuHeader';

const UserSettings = props => {

  const {
    onSelectSettingMenu
  } = props

  // TODO: Handle exiting app when building authentication system is completed.
  return (
    <div>
      <MenuHeader icon={<Settings />} label="Settings" />
      <List dense={true}>
        <ListItem button onClick={() => onSelectSettingMenu('profile-setting')}>
          <ListItemIcon><AccountBox /></ListItemIcon>
          <ListItemText primary="Profile Setting" />
        </ListItem>
        <ListItem button onClick={() => onSelectSettingMenu('about-service')}>
          <ListItemIcon><Help /></ListItemIcon>
          <ListItemText primary="About Service" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><ExitToApp /></ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </div>
  )
}

export default UserSettings;