import React from 'react';
import './style.scss';

import {
  Toolbar,
  IconButton
} from '@material-ui/core';

import {
  ArrowBack
} from '@material-ui/icons';

import NavbarText from '@components/NavbarContent/NavbarText';

const AboutTagNavbarContent = props => {
  return (
    <Toolbar className="about-tag-navbar-content">
      <IconButton color="inherit" onClick={props.onCloseDialog} aria-label="Close">
        <ArrowBack />
      </IconButton>

      <NavbarText>
        About Channel
      </NavbarText>
    </Toolbar>
  )
}

// TODO: Add Submenu and New Post

export default AboutTagNavbarContent;