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

const AboutServiceNavbarContent = props => {
  return (
    <Toolbar className="about-service-navbar-content">
      <IconButton color="inherit" onClick={props.onCloseDialog} aria-label="Close">
        <ArrowBack />
      </IconButton>

      <NavbarText>About Service</NavbarText>
    </Toolbar>
  )
}

export default AboutServiceNavbarContent;