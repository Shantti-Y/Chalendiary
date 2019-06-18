import React from 'react';
import style from './style';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { setTagFormContent, setUserFormContent } from '@store/actions/ui/modalContent/base';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MoreVert from '@material-ui/icons/MoreVert';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import AccountBox from '@material-ui/icons/AccountBox';
import ExitToApp from '@material-ui/icons/ExitToApp';

import SectionContainer from '../SectionContainer';

import firebase from '@utils/firebase';

const OtherSection = ({
  me,
  onOpenTagForm,
  onOpenUserForm
}) => {

  // TODO: try to move to another directory location
  const logout = () => {
    firebase.signOut()
      .then(a => { })
      .catch(error => {
        const credential = error.credential;
        console.log("ERROR!!!!!!")
        console.log(credential)
      })
  }

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
        <ListItem onClick={() => onOpenTagForm(me)}>
          <ListItemIcon><LibraryAdd /></ListItemIcon>
          <ListItemText primary="Create New Tag" />
        </ListItem>
        <ListItem onClick={() => onOpenUserForm(me)}>
          <ListItemIcon><AccountBox /></ListItemIcon>
          <ListItemText primary="Your Profile" />
        </ListItem>
        <ListItem onClick={logout}>
          <ListItemIcon><ExitToApp /></ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </SectionContainer>
  );
}


const mapStateToProps = state => ({
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
  onOpenTagForm: ownerUser => dispatch(setTagFormContent({ tag: { ownerUser }, userIds: [] })),
  onOpenUserForm: user => dispatch(setUserFormContent({ user }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(OtherSection));