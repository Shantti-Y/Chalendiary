import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

const Emoji = ({
  emoji
}) => {
  return <p style={{
    filter: 'contrast(200%)'
  }} >🍔</p>
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Emoji);