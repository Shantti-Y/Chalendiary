import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';
import { closeSnackbar } from '@store/actions/ui/snackbar';

import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

function TransitionDown(props) {
  return <Slide {...props} timeout={{ enter: 300, exit: 300 }} direction="down" />;
}

const NotifierSnackbar = ({
  icon,
  color,
  message,
  opened,
  onClose
}) => {
  return (
    <Snackbar
      className={`${style.notifierSnackbar} ${style[color]}`}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={opened}
      onClose={onClose}
      autoHideDuration={2500}
      TransitionComponent={TransitionDown}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span className={style.message} id="message-id">{icon}{message}</span>}
    />
  )
}

const mapStateToProps = state => ({
  icon: state.ui.snackbar.icon,
  color: state.ui.snackbar.color,
  message: state.ui.snackbar.message,
  opened: state.ui.snackbar.opened
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(closeSnackbar())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotifierSnackbar);