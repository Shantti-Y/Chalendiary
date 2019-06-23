import React from 'react';
import style from './style';

import { connect } from 'react-redux';

import { closeMenuBar } from '@store/actions/ui/layout/menuBar'

import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

import Header from './Header';
import TagSection from './TagSection';
import UserSection from './UserSection';
import OtherSection from './OtherSection';

const MenuBar = ({
  opened,
  onClose,
  classes
}) => {

  const Contents = (props) => {
    return (
      <List style={style.list} disablePadding component="nav">
        <Header />
        <Divider />
        <TagSection />
        <UserSection /> 
        <OtherSection />
      </List>
    )
  }

  return (
    <div className="menu-bar">
      <Hidden xsUp implementation="css">
        <div style={style.drawerForMobile}>
          <Drawer
            className="drawer"
            variant="temporary"
            onClose={() => onClose()}
            open={opened}
            ModalProps={{ keepMounted: true }}
            PaperProps={{ style: style.drawerPaper }}
          >
            <Contents />
          </Drawer>
        </div>
      </Hidden>
      <Hidden xsDown implementation="css">
        <div style={style.drawerForDesktop}>
          <Drawer
            className="drawer"
            variant="permanent"
            PaperProps={{ style: style.drawerPaper }}
            open={true}
          >
            <Contents />
          </Drawer>
        </div>
      </Hidden>
    </div>
    
  );
}


const mapStateToProps = state => ({
  opened: state.ui.layout.menuBar.opened
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(closeMenuBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);