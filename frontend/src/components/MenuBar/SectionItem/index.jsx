import React from 'react';
import style from './style';

import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';

const SectionItem = ({ children, clickable, onClick }) => (
  <ListItem style={style.listItem} button={clickable} onClick={onClick}>{children}</ListItem>
)

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionItem);