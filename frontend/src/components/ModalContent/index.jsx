import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';

import { closeModalContent } from '@store/actions/ui/modalContent/base';

import DiaryForm from './DiaryForm';
import ReplyForm from './ReplyForm';
import TagForm from './TagForm';
import UserForm from './UserForm';
import UserProfile from './UserProfile';

const ModalContent = ({
  currentContentName,
  onCloseModal
}) => {

  const contents = {
    'diaryForm': <DiaryForm onClose={onCloseModal} />,
    'replyForm': <ReplyForm onClose={onCloseModal} />,
    'tagForm': <TagForm onClose={onCloseModal} />,
    'userForm': <UserForm onClose={onCloseModal} />,
    'userProfile': <UserProfile onClose={onCloseModal} />,
  }

  const opened = currentContentName !== null;

  if(opened){
    return (
      <Dialog
        open={opened}
        onClose={onCloseModal}
        maxWidth="sm"
        fullWidth
      >
        {contents[currentContentName]}
      </Dialog>
    )
  }else{
    return null;
  }
}

const mapStateToProps = state => ({
  currentContentName: state.ui.modalContent.base.currentContentName
});

const mapDispatchToProps = dispatch => ({
  onCloseModal: () => dispatch(closeModalContent())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);