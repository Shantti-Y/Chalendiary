import React from 'react';

import {
  AppBar
} from '@material-ui/core'; 

import './style.scss';

const MobileNavbarLayout = props => {
  return (
    <AppBar className="mobile-navbar-layout" position="sticky">
      {props.children}
    </AppBar>
  )
}

export default MobileNavbarLayout;