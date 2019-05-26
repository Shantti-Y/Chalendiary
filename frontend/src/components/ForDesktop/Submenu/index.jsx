import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import DiaryDetail from './DiaryDetail';

const components = {
  'diaryDetail': <DiaryDetail />
}

const Submenu = ({
  currentComponentName
}) => {
  const currentComponent = components[currentComponentName];
  return (
    <div>
      {currentComponent}
    </div>
  )
}

const mapStateToProps = state => ({
  currentComponentName: state.ui.submenu.currentComponentName
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Submenu);