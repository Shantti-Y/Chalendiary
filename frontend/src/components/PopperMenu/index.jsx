import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import { closeMenu } from '@store/actions/ui/popperMenu';

import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';

const PopperMenu = ({
  anchorEl,
  component,
  onClose
}) => {

  const opened = anchorEl !== null;

  if(opened){
    return (
      <Menu
        className={style.menu}
        anchorEl={anchorEl}
        keepMounted
        open={opened}
        onClose={onClose}
        TransitionComponent={Fade}

      >
        {component}
      </Menu>
    );
  } else { 
    return null;
  }
  
}

const mapStateToProps = state => ({
  anchorEl: state.ui.popperMenu.anchorEl,
  component: state.ui.popperMenu.component
});

const mapDispatchToProps = dispatch=> ({
  onClose: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopperMenu);