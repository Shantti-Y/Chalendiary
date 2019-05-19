import React from 'react';

import {
  Typography
} from '@material-ui/core';

import './style.scss';

const NavbarText = props => {
  const className = () => {
    const propsClassName = Object.assign([], props.className ? props.className.split(' ') : [])
    return propsClassName.concat(['navbar-text']).join(' ')
  }
  return(
    <Typography className={className()} variant="h6" color="inherit">
      {props.children}
    </Typography>
  )
}

export default NavbarText;