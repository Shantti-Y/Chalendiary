import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { DEFAULT_TAG_NAME } from '@utils/defaultValues';

import { changeCurrentMonth } from '@store/actions/date';
import { openMenu as openTagList } from '@store/actions/ui/headerNav/tagList';
import { openMenu as openNavMenu } from '@store/actions/ui/headerNav/navMenu';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MoreVert from '@material-ui/icons/MoreVert';

import TagList from './TagList';
import NavMenu from './NavMenu';

const HeaderNav = ({
  currentDate,
  tags,
  currentTagId,
  onChangeMonth,
  onClickTagList,
  onClickMenu
}) => {
  const currentTag = tags.find(tag => tag.id === currentTagId);
  const currentTagName = currentTag ? currentTag.name : DEFAULT_TAG_NAME;

  const formattedCurrentDate = currentDate.format("YYYY-MM");

  const addCurrentMonth = () => {
    const newDate = moment(currentDate).add(1, 'M');
    onChangeMonth(newDate);
  }

  const subtractCurrentMonth = () => {
    const newDate = moment(currentDate).subtract(1, 'M');
    onChangeMonth(newDate);
  }

  return (
    <>
      <h2 onClick={e => onClickTagList(e.currentTarget)}># {currentTagName}</h2>
      <ChevronLeft onClick={subtractCurrentMonth} />
      <h2># {formattedCurrentDate}</h2>
      <ChevronRight onClick={addCurrentMonth} />
      <MoreVert onClick={e => onClickMenu(e.currentTarget)} />
      <TagList />
      <NavMenu />
    </>
  )
};

const mapStateToProps = state => ({
  currentDate: state.date.currentDate,
  tags: state.tag.tags,
  currentTagId: state.tag.currentTagId,
});

const mapDispatchToProps = dispatch => ({
  onChangeMonth: date => dispatch(changeCurrentMonth({ date })),
  onClickTagList: anchorEl => dispatch(openTagList({ anchorEl })),
  onClickMenu: anchorEl => dispatch(openNavMenu({ anchorEl }))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);