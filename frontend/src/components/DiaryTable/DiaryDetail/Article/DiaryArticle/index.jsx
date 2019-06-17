import React from 'react';
import style from './style';

import { connect } from 'react-redux';
import { openMenu } from '@store/actions/ui/popperMenu';

import Button from '@material-ui/core/Button';

import MoreVert from '@material-ui/icons/MoreVert';

import EditPopperMenu from './EditPopperMenu';
import RecoverPopperMenu from './RecoverPopperMenu';

const DiaryArticle = ({
  me,
  diary,
  onOpenMenu
}) => {
  const isYourDiary = diary.user.id === me.id;

  return (
    <>
      {
        diary.deletedAt === null ? (
          <div>
            {isYourDiary ? <Button><MoreVert onClick={e => onOpenMenu(e.currentTarget, <EditPopperMenu diary={diary} />)} /></Button> : null}
            {diary.user.screenName}
            {diary.contentText}
          </div>
        ) : (
            <div>
              Deleted!!
            {diary.deletedAt ? <Button><MoreVert onClick={e => onOpenMenu(e.currentTarget, <RecoverPopperMenu diary={diary} />)} /></Button> : null}
            </div>
          )
      }
    </>
  )
}

const mapStateToProps = state => ({
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
  onOpenMenu: (anchorEl, component) => dispatch(openMenu({ anchorEl, component })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryArticle);