import React from 'react';
import './style.scss';

import {
  Toolbar,
  IconButton,
  Dialog,
  Button
} from '@material-ui/core';

import {
  Close,
  Launch
} from '@material-ui/icons';

import NavbarText from '@components/NavbarContent/NavbarText';
import NavbarSpacing from '@components/NavbarContent/NavbarSpacing';

const NewDiaryNavbarContent = props => {
  return (
    <Toolbar className="new-post-navbar-content">
      <IconButton color="inherit" onClick={props.onCloseDialog} aria-label="Close">
        <Close />
      </IconButton>

      <NavbarText>
        New Post
      </NavbarText>

      <NavbarSpacing />

      <Button className="new-post-navbar-content-post-button" variant="outlined" color="inherit">
        POST<Launch />
      </Button>
    </Toolbar>
  )
}

export default NewDiaryNavbarContent;