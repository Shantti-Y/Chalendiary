import React from 'react';
import style from './style';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import { openMenuBar } from '@store/actions/ui/layout/menuBar';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

import Menu from '@material-ui/icons/Menu';

const MenuNav = ({
  component,
  onClickMenu
}) => {

  return (
    <div className="menu-nav">
      <Hidden smUp implementation="css">
        <AppBar position="static">
          <Toolbar>
            <Menu onClick={() => onClickMenu()} />
            {component}
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden xsDown implementation="css">
        <>
          <Toolbar>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(MenuNav));