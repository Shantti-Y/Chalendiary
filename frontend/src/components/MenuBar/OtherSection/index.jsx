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
import Typography from '@material-ui/core/Typography';

import SectionContainer from '../SectionContainer';
import SectionItem from '../SectionItem';

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
      primaryIcon={<MoreVert />}
      primaryText="Actions"
    >
      <SectionItem clickable={true} onClick={() => onOpenTagForm(me)}>
        <ListItemIcon style={style.listItemIcon}><LibraryAdd style={style.icon} /></ListItemIcon>
        <ListItemText style={style.listItemText} primary={<Typography variant="h3" style={style.typography}>Create New Tag</Typography>} />
      </SectionItem>
      <SectionItem clickable={true} onClick={() => onOpenUserForm(me)}>
        <ListItemIcon style={style.listItemIcon}><AccountBox style={style.icon} /></ListItemIcon>
        <ListItemText style={style.listItemText} primary={<Typography variant="h3" style={style.typography}>Your Profile</Typography>} />
      </SectionItem>
      <SectionItem clickable={true} onClick={logout}>
        <ListItemIcon style={style.listItemIcon}><ExitToApp style={style.icon} /></ListItemIcon>
        <ListItemText style={style.listItemText} primary={<Typography variant="h3" style={style.typography}>Log Out</Typography>} />
      </SectionItem>
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