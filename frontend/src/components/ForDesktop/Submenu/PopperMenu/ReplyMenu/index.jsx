import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { setReplyConfirmation } from '@store/actions/ui/deleteConfirmation/base';
import { setReplyFormContent } from '@store/actions/ui/modalContent/base';

import MenuItem from '@material-ui/core/MenuItem';

const ReplyMenu = ({
  reply,
  onOpenEditModal,
  onOpenDeleteConfirmation
}) => {
  return (
    <>
      <MenuItem onClick={() => onOpenEditModal(reply)}>Edit</MenuItem>
      <MenuItem onClick={() => onOpenDeleteConfirmation(reply)}>Delete</MenuItem>
    </>
  );

}

const mapStateToProps = state => ({
  reply: state.ui.submenu.popperMenu.replyMenu.reply
});

const mapDispatchToProps = dispatch => ({
  onOpenEditModal: reply => {
    const newReply = Object.assign({}, reply, { userId: reply.user.id })
    dispatch(setReplyFormContent({ reply: newReply }))
  },
  onOpenDeleteConfirmation: reply => dispatch(setReplyConfirmation({ reply }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyMenu);