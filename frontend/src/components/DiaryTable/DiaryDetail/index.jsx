import React from 'react';
import style from './style.scss'

import { connect } from 'react-redux';

import { closeDetail } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

import Portal from '@material-ui/core/Portal';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import Close from '@material-ui/icons/Close';

import DiaryForm from './DiaryForm';
import ReplyForm from './ReplyForm';

const DiaryDetail = ({
  container,
  currentComponentName,
  onClose
}) => {

  const innerComponents = {
    'diaryForm': <DiaryForm />,
    'replyForm': <ReplyForm />
  }

  if(container){
    return (
      <Portal container={container.current}>
        <Paper className={style.card}>
          <div className={style.cardHeader}>
            <IconButton
              onClick={onClose}
              className={style.iconButton}
            >
              <Close className={style.closeIcon} />
            </IconButton>
          </div>
          <div className={style.cardBody}>{innerComponents[currentComponentName]}</div>
        </Paper>
        
      </Portal>
    )
  }else{
    return null;
  }
}

const mapStateToProps = state => ({
  container: state.ui.workspace.diaryTable.diaryDetail.base.container,
  currentComponentName: state.ui.workspace.diaryTable.diaryDetail.base.currentComponentName
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(closeDetail())
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryDetail);