import React from 'react';
import './style.scss';

import moment from 'moment';

import { connect } from 'react-redux';

import { recoverDiary } from '@store/actions/ui/submenu/popperMenu/recoverDiaryMenu';

import MenuItem from '@material-ui/core/MenuItem';

const RecoverDiaryMenu = ({
  diary,
  onClickRecover
}) => {
  return (
    <>
      <MenuItem onClick={() => onClickRecover(diary)}>Recover</MenuItem>
    </>
  );

}

const mapStateToProps = state => ({
  diary: state.ui.submenu.popperMenu.recoverDiaryMenu.diary
});

const mapDispatchToProps = dispatch => ({
  onClickRecover: diary => dispatch(recoverDiary({ diary }))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecoverDiaryMenu);