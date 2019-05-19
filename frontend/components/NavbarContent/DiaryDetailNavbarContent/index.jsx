import React from 'react';
import './style.scss';

import {
  Button,
  Toolbar,
  IconButton,
  Dialog
} from '@material-ui/core';

import {
  ArrowBack
} from '@material-ui/icons';

import NavbarText from '@components/NavbarContent/NavbarText';

const DiaryDetailNavbarContent = props => {
  return (
    <Toolbar className="post-detail-navbar-content">
      <IconButton color="inherit" onClick={props.onCloseDialog} aria-label="Close">
        <ArrowBack />
      </IconButton>

      <NavbarText>
        2019/01/04
      </NavbarText>
    </Toolbar>
  )
}

// TODO: Add Submenu and New Post

export default DiaryDetailNavbarContent;