import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

const Emoji = ({
  emoji,
  size
}) => {
  const fontSize = size || 14;
  return (<span className={style.emoji} style={{
    ...emoji.style,
    fontSize: `${fontSize}px`
  }} >
    {emoji.value}</span>)
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Emoji);