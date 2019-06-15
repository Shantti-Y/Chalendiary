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

import Group from '@material-ui/icons/Group';

import SectionContainer from '../SectionContainer';

const UserSection = ({
  users,
  me
}) => {

  const teamMembers = users.filter(user => user.id !== me.id);

  return (
    <SectionContainer
      primaryComponent={(
        <>
          <ListItemIcon><Group /></ListItemIcon>
          <ListItemText primary="Users" />
        </>
      )}
    >
      <List component="nav"> 
        {teamMembers.map(user => (
          <ListItem>
            <ListItemText primary={user.screenName} />
          </ListItem>
        ))}
      </List>
    </SectionContainer>
  );
}


const mapStateToProps = state => ({
  users: state.user.users,
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(UserSection));