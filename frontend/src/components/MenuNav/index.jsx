import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import { openMenuBar } from '@store/actions/ui/layout/menuBar';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import Menu from '@material-ui/icons/Menu';

const MenuNav = ({
  component,
  onClickMenu
}) => {

  return (
    <div>
      <Hidden smUp implementation="css">
        <AppBar className={style.appBar} position="static">
          <Toolbar className={`${style.menuNav} ${style.forMobile}`}>
            <IconButton className={style.iconButton} onClick={() => onClickMenu()}>
              <Menu />
            </IconButton>
            {component}
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden xsDown implementation="css">
        <>
          <Toolbar className={`${style.menuNav}`}>
            {component}
          </Toolbar>
          <Divider />
        </>
      </Hidden>
    </div>
  )
};

const mapStateToProps = state => ({
  component: state.ui.layout.menuNav.component
});

const mapDispatchToProps = dispatch => ({
  onClickMenu: () => dispatch(openMenuBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuNav);