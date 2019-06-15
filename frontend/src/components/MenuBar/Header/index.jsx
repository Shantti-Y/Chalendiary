import React from 'react';
import style from './style';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// TODO: replace icon with iconic image
import Today from '@material-ui/icons/Today';

const Header = ({

}) => {

  return (
    <List component="nav">
      <ListItem>
        <ListItemIcon>
          <Today />
        </ListItemIcon>
        <ListItemText primary="Niko Cale" />
      </ListItem>
    </List>
  );
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Header));