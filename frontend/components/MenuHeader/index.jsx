import React from 'react';
import './style.scss';

import { Typography, Divider } from '@material-ui/core';

const MenuHeader = props => {
  return (
    <div className="menu-header">
      <div className="menu-header-wrapper">
        <div className="menu-header-icon">{props.icon}</div>
      
        <Typography className="menu-header-label" variant="h6">{props.label}</Typography>
      </div>
      <Divider />
    </div>
  )
}

export default MenuHeader;