import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { DEFAULT_TAG_NAME } from '@utils/defaultValues';

import { changeCurrentMonth } from '@store/actions/date';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const HeaderNav = ({
  currentDate,
  tags,
  currentTagId,
  onChangeMonth
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
      <h2># {currentTagName}</h2>
      <ChevronLeft onClick={subtractCurrentMonth} />
      <h2># {formattedCurrentDate}</h2>
      <ChevronRight onClick={addCurrentMonth} />
    </>
  )
};

const mapStateToProps = state => ({
  currentDate: state.date.currentDate,
  tags: state.tag.tags,
  currentTagId: state.tag.currentTagId,
});

const mapDispatchToProps = dispatch => ({
  onChangeMonth: date => dispatch(changeCurrentMonth({ date }))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);