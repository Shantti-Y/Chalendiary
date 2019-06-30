import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { DEFAULT_TAG_NAME } from '@utils/defaultValues';

import { changeCurrentMonth } from '@store/actions/date';
import { closeDetail } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Portrait from '@material-ui/icons/Portrait';
import Public from '@material-ui/icons/Public';
import VpnKey from '@material-ui/icons/VpnKey';

const HeaderNav = ({
  currentDate,
  currentTag,
  onChangeMonth
}) => {
  const currentTagName = currentTag ? currentTag.name : DEFAULT_TAG_NAME;

  const formattedCurrentDate = currentDate.format("YYYY/MM");

  const addCurrentMonth = () => {
    const newDate = moment(currentDate).add(1, 'M');
    onChangeMonth(newDate);
  }

  const subtractCurrentMonth = () => {
    const newDate = moment(currentDate).subtract(1, 'M');
    onChangeMonth(newDate);
  }
  if(currentTag) {
    return (
      <>
        <h2 className={style.currentTagName}># {currentTagName}</h2>
        <IconButton className={style.chevronIcon} onClick={subtractCurrentMonth}><ChevronLeft /></IconButton>
        <h2 className={style.currentTagDate}>{formattedCurrentDate}</h2>
        <IconButton className={style.chevronIcon} onClick={addCurrentMonth}><ChevronRight /></IconButton>
        <Hidden xsDown implementation="css">
          <ul className={style.tagInfo}>
            <li className={style.tagInfoItem}><Portrait className={style.icon} /><span className={style.numberOfUsers}>{currentTag.users.length}</span></li>
            <li className={style.tagInfoItem}>
              <Tooltip className={style.tooltip} title={currentTag.publicFlag ? 'public' : 'private'}>
                {currentTag.publicFlag ? <Public className={style.icon} /> : <VpnKey className={style.icon} />}
              </Tooltip>
            </li>
          </ul>
        </Hidden>
      </>
    )
  } else {
    return null;
  }

  
};

const mapStateToProps = state => ({
  currentDate: state.date.currentDate,
  currentTag: state.tag.tags.find(tag => tag.id === state.tag.currentTagId)
});

const mapDispatchToProps = dispatch => ({
  onChangeMonth: date => {
    dispatch(closeDetail());
    dispatch(changeCurrentMonth({ date }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);