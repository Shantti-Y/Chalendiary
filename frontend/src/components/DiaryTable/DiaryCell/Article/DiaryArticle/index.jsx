import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';
import { openMenu } from '@store/actions/ui/popperMenu';

import IconButton from '@material-ui/core/IconButton';

import MoreVert from '@material-ui/icons/MoreVert';

import EditPopperMenu from './EditPopperMenu';
import RecoverPopperMenu from './RecoverPopperMenu';

const DiaryArticle = ({
  me,
  diary,
  container,
  onOpenMenu
}) => {
  const isYourDiary = diary.user.id === me.id;

  return (
    <div>
      {
        diary.deletedAt === null ? (
          <>
            {isYourDiary ? (
              <IconButton
                className={style.iconButton}
                onClick={e => onOpenMenu(e.currentTarget, <EditPopperMenu diary={diary} container={container} />)}
              >
                <MoreVert className={style.moveVertIcon} />
              </IconButton>
            ) : null}
            <p className={style.title}>Diary</p>
            <p className={style.contentText}>{diary.contentText}</p>
          </>
        ) : (
            <>
              {diary.deletedAt ? (
                <IconButton
                  className={style.iconButton}
                  onClick={e => onOpenMenu(e.currentTarget, <RecoverPopperMenu diary={diary} container={container} />)}
                >
                  <MoreVert className={style.moveVertIcon} />
                </IconButton>
              ) : null}
              <p className={style.title}>Deleted Post</p>
            </>
          )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
  onOpenMenu: (anchorEl, component) => dispatch(openMenu({ anchorEl, component })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryArticle);