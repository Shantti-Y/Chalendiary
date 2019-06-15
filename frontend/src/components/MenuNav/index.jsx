import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { openMenuBar } from '@store/actions/ui/layout/menuBar';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden';

import Menu from '@material-ui/icons/Menu';

const MenuNav = ({
  onClickMenu
}) => {

  return (
    <div className="menu-nav">
      <Hidden smUp implementation="css">
        <AppBar position="static">
          <Toolbar>
            <Menu onClick={() => onClickMenu()} />
            <h2># channelName</h2>
          </Toolbar>
        </AppBar>
      </Hidden>
    </div>
  )
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onClickMenu: () => dispatch(openMenuBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuNav);