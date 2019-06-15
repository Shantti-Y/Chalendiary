import React from 'react';
import style from './style';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import { changeCurrentTagId } from '@store/actions/tag';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';

import MoreVert from '@material-ui/icons/MoreVert';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import AccountBox from '@material-ui/icons/AccountBox';
import ExitToApp from '@material-ui/icons/ExitToApp';

import SectionContainer from '../SectionContainer';

const OtherSection = ({
}) => {

  return (
    <SectionContainer
      primaryComponent={(
        <>
          <ListItemIcon><MoreVert /></ListItemIcon>
          <ListItemText primary="Actions" />
        </>
      )}
    >
      <List component="nav"> 
        <ListItem>
          <ListItemIcon><LibraryAdd /></ListItemIcon>
          <ListItemText primary="Create New Tag" />
        </ListItem>
        <ListItem>
          <ListItemIcon><AccountBox /></ListItemIcon>
          <ListItemText primary="Your Profile" />
        </ListItem>
        <ListItem>
          <ListItemIcon><ExitToApp /></ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </SectionContainer>
  );
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(OtherSection));