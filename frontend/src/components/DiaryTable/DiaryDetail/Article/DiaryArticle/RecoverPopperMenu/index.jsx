import React from 'react';
import style from './style';

import { connect } from 'react-redux';
import { recoverDiary } from '@store/actions/ui/workspace/diaryTable/diaryDetail/article';

import PopperItem from '@components/PopperMenu/PopperItem';

const RecoverMenu = ({
  diary,
  onClickRecover
}) => {
  return (
    <>
      <PopperItem onClick={() => onClickRecover(diary)}>Recover</PopperItem>
    </>
  )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onClickRecover: diary => dispatch(recoverDiary({ diary }))
});

export default connect(null, mapDispatchToProps)(RecoverMenu);