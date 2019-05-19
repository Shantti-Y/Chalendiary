import React from 'react';
import './style.scss';

import {
  Button,
  Toolbar,
  IconButton,
  Typography,
  Dialog,
  Slide 
} from '@material-ui/core';

// TODO: AppBarは共通化する(AboutChannelのAppBarとして)
import MobileNavbarLayout from '@components/NavbarLayout/MobileNavbarLayout';

const Transition = props => {
  return <Slide direction="left" {...props} />;
}

const PageletWidgetDialog = props => {

  const opened = () => {
    return props.contentName !== 'none';
  }

  return(
    <Dialog
      fullScreen
      open={opened()}
      onClose={props.onCloseDialog}
      TransitionComponent={Transition}
    >
      <MobileNavbarLayout>
        {props.navbarContent}
      </MobileNavbarLayout>

      {props.children}
    </Dialog>
  )
}

export default PageletWidgetDialog;