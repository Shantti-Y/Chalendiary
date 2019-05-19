import React from 'react';

import {
  Popover,
  MenuItem
} from '@material-ui/core';

import './style.scss';

const Submenu = props => {

  const handleSelectSubmenu = name => {
    props.onSelectSubmenu(name);
    props.onCloseSubmenu();
  }

  return (
    <Popover
      id="submenu"
      open={Boolean(props.opened)}
      onClose={props.onCloseSubmenu}
      anchorEl={props.opened}
    >
      <MenuItem onClick={() => handleSelectSubmenu('about-tag')}>
        About
      </MenuItem>
      <MenuItem onClick={() => handleSelectSubmenu('leave')}>
        Leave # jungle pocket
      </MenuItem>
    </Popover>
  )
}

export default Submenu;