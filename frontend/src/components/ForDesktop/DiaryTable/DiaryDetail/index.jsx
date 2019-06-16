import React from 'react';
import style from './style'

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import { closeDetail } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

import Portal from '@material-ui/core/Portal';
import IconButton from '@material-ui/core/IconButton';

import Close from '@material-ui/icons/Close';

import DiaryForm from './DiaryForm';
import ReplyForm from './ReplyForm';
import Article from './Article';

import PopperMenu from '@components/ForDesktop/PopperMenu';

const DiaryDetail = ({
  classes,
  container,
  currentComponentName,
  onClose
}) => {

  const innerComponents = {
    'diaryForm': <DiaryForm />,
    'replyForm': <ReplyForm />,
    'article': <Article />
  }

  if(container){
    return (
      <Portal container={container.current}>
        <PopperMenu />
        <div className={classes.card}>
          <div>
            new post
            <IconButton
              onClick={onClose}
              edge="end"
              size="small"
            >
              <Close />
            </IconButton>
          </div>
          <div>{innerComponents[currentComponentName]}</div>
          <div>

          </div>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(DiaryDetail));