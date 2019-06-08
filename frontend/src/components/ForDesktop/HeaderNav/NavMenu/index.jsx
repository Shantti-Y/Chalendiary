import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { closeMenu } from '@store/actions/ui/headerNav/navMenu';
import { setTagFormContent } from '@store/actions/ui/modalContent/base';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import firebase from '@utils/firebase';

const NavMenu = ({
  me,
  opened,
  anchorEl,
  onClose,
  onChoose,
  onOpenTagForm
}) => {

  // TODO: try to move to another directory location
  const logout = () => {
    firebase.signOut()
      .then(a => {})
      .catch(error => {
        const credential = error.credential;
        console.log("ERROR!!!!!!")
        console.log(credential)
      })
  }

  return (
    <Menu
      id="long-menu"
      open={opened}
      onClose={onClose}
      anchorEl={anchorEl}
    >
      <MenuItem onClick={onChoose}>About Team</MenuItem>
      <MenuItem onClick={() => onOpenTagForm(me)}>Create New Tag</MenuItem>
      <MenuItem onClick={onChoose}>Profile</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  )
};

const mapStateToProps = state => ({
  me: state.me.me,
  opened: state.ui.headerNav.navMenu.opened,
  anchorEl: state.ui.headerNav.navMenu.anchorEl
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(closeMenu()),
  onChoose: () => dispatch(closeMenu()),
  onOpenTagForm: ownerUser => {
    dispatch(setTagFormContent({ tag: { ownerUser }, userIds: [] }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);