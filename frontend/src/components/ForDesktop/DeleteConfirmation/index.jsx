import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';

import { closeDeleteConfirmation } from '@store/actions/ui/deleteConfirmation/base';

import DiaryConfirmation from '@components/ForDesktop/DeleteConfirmation/DiaryConfirmation';
import ReplyConfirmation from '@components/ForDesktop/DeleteConfirmation/ReplyConfirmation';
import UserConfirmation from '@components/ForDesktop/DeleteConfirmation/UserConfirmation';

const Deleteconfirmation = ({
  currentContentName,
  onCloseConfirmation
}) => {

  const contents = {
    'diaryConfirmation': <DiaryConfirmation onClose={onCloseConfirmation} />,
    'replyConfirmation': <ReplyConfirmation onClose={onCloseConfirmation} />,
    'userConfirmation': <UserConfirmation onClose={onCloseConfirmation} />
  }

  const opened = currentContentName !== null;

  if (opened) {
    return (
      <Dialog
        open={opened}
        onClose={onCloseConfirmation}
        maxWidth="sm"
        fullWidth
      >
        {contents[currentContentName]}
      </Dialog>
    )
  } else {
    return null;
  }
}

const mapStateToProps = state => ({
  currentContentName: state.ui.deleteConfirmation.base.currentContentName
});

const mapDispatchToProps = dispatch => ({
  onCloseConfirmation: () => dispatch(closeDeleteConfirmation())
});

export default connect(mapStateToProps, mapDispatchToProps)(Deleteconfirmation);