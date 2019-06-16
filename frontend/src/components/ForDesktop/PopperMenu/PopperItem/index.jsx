import React from 'react';
import style from './style';

import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';

const PopperItem = ({
  children,
  onClick
}) => {

  return (
    <MenuItem onClick={onClick}>{children}</MenuItem>
  )
}

export default connect(null, null)(PopperItem);