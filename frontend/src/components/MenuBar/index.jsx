import React from 'react';
import style from './style';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import { closeMenuBar } from '@store/actions/ui/layout/menuBar'

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
      <>
        <Header />
        <Divider />
        <TagSection />
        <UserSection /> 
        <OtherSection />
      </>
    )
  }

  return (
    <div className="menu-bar">
      <Hidden xsUp implementation="css">
        <div className={classes.drawerForMobile}>
          <Drawer
            className="drawer"
            variant="temporary"
            onClose={() => onClose()}
            classes={{ paper: classes.drawerPaper }}
            open={opened}
            ModalProps={{ keepMounted: true }}
          >
            <Contents />
          </Drawer>
        </div>
      </Hidden>
      <Hidden xsDown implementation="css">
        <div className={classes.drawerForDesktop}>
          <Drawer
            className="drawer"
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(MenuBar));