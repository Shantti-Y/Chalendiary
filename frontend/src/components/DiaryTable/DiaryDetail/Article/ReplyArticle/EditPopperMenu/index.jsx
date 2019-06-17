import React from 'react';
import style from './style';

import moment from 'moment';
import { connect } from 'react-redux';
import { changeReplyForm } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';
import { closeMenu } from '@store/actions/ui/popperMenu';
import { setReplyConfirmation } from '@store/actions/ui/deleteConfirmation/base';

import PopperItem from '@components/PopperMenu/PopperItem';

const EditPopperMenu = ({
  reply,
  onClickEdit,
  onClickDelete
}) => {
  return (
    <>
      <PopperItem onClick={() => onClickEdit(reply)}>Edit</PopperItem>
      <PopperItem onClick={() => onClickDelete(reply)}>Delete</PopperItem>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  onClickEdit: reply => {
    const newReply = Object.assign({}, reply, { diaryId: reply.diaryId, userId: reply.user.id });
    dispatch(changeReplyForm({ reply: newReply }));
    dispatch(closeMenu());
  },
  onClickDelete: reply => {
    dispatch(setReplyConfirmation({ reply }));
    dispatch(closeMenu());
  }
});

export default connect(null, mapDispatchToProps)(EditPopperMenu);