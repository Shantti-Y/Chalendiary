import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';
import { setTagFormContent, setUserProfileContent } from '@store/actions/ui/modalContent/base';

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
        <ListItemIcon className={style.listItemIcon}><LibraryAdd className={style.icon} /></ListItemIcon>
        <ListItemText className={style.listItemText} primary={<Typography variant="h3" className={style.typography}>Create New Tag</Typography>} />
      </SectionItem>
      <SectionItem clickable={true} onClick={() => onOpenUserForm(me.id)}>
        <ListItemIcon className={style.listItemIcon}><AccountBox className={style.icon} /></ListItemIcon>
        <ListItemText className={style.listItemText} primary={<Typography variant="h3" className={style.typography}>Your Profile</Typography>} />
      </SectionItem>
      <SectionItem clickable={true} onClick={logout}>
        <ListItemIcon className={style.listItemIcon}><ExitToApp className={style.icon} /></ListItemIcon>
        <ListItemText className={style.listItemText} primary={<Typography variant="h3" className={style.typography}>Log Out</Typography>} />
      </SectionItem>
    </SectionContainer>
  );
}


const mapStateToProps = state => ({
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
  onOpenTagForm: ownerUser => dispatch(setTagFormContent({ tag: { ownerUser }, userIds: [] })),
  onOpenUserForm: userId => dispatch(setUserProfileContent({ userId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherSection);