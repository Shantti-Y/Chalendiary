import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { closeMenu } from '@store/actions/ui/submenu/popperMenu/main';

import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';

import DiaryMenu from '@components/ForDesktop/Submenu/PopperMenu/DiaryMenu';
import ReplyMenu from '@components/ForDesktop/Submenu/PopperMenu/ReplyMenu';

const PopperMenu = ({
  currentMenuName,
  anchorEl,
  onClose
}) => {

  const menuComponents = {
    diaryMenu: <DiaryMenu onClose={onClose} />,
    replyMenu: <ReplyMenu onClose={onClose} />
  }

  const opened = currentMenuName !== null;

  const currentComponent = menuComponents[currentMenuName];

  if(opened){
    return (
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={opened}
        onClose={onClose}
        TransitionComponent={Fade}
      >
        {currentComponent}
      </Menu>
    );
  } else { 
    return null;
  }
  
}

const mapStateToProps = state => ({
  currentMenuName: state.ui.submenu.popperMenu.main.currentMenuName,
  anchorEl: state.ui.submenu.popperMenu.main.anchorEl
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopperMenu);