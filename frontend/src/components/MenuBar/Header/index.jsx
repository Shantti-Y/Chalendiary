import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

// TODO: replace icon with iconic image
import Today from '@material-ui/icons/Today';

const Header = ({

}) => {
  return (
    <ListItem disableGutters className={style.listItem} >
      <ListItemIcon className={style.listItemIcon} ><Today className={style.icon} /></ListItemIcon>
      <ListItemText className={style.listItemText} primary={<Typography variant="h1" className={style.typography} >Nicocale</Typography>} />
    </ListItem>
  );
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);