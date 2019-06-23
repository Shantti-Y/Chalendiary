import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';

const PopperItem = ({
  children,
  onClick
}) => {

  return (
    <MenuItem className={style.menuItem} onClick={onClick}>{children}</MenuItem>
  )
}

export default connect(null, null)(PopperItem);