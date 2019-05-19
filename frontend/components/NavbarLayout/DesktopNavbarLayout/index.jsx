import React from 'react';

import {
  AppBar
} from '@material-ui/core';

import './style.scss';

const DesktopNavbar = props => {
  return (
    <AppBar className="desktop-navbar-layout" position="sticky">
      {props.children}
    </AppBar>
  )
}

export default DesktopNavbar;