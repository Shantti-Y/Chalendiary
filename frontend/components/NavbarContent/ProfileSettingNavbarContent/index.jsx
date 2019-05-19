import React from 'react';
import './style.scss';

import {
  Toolbar,
  IconButton
} from '@material-ui/core';

import { ArrowBack } from '@material-ui/icons';

import NavbarText from '@components/NavbarContent/NavbarText';

const ProfileSettingNavbarContent = props => {
  return (
    <Toolbar className="about-tag-navbar-content">
      <IconButton color="inherit" onClick={props.onCloseDialog} aria-label="Close">
        <ArrowBack />
      </IconButton>

      <NavbarText>
        Profile Setting
      </NavbarText>
    </Toolbar>
  )
}

export default ProfileSettingNavbarContent;