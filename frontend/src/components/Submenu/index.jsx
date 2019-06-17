import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import DiaryDetail from './DiaryDetail';
import PopperMenu from './PopperMenu';

const Submenu = ({
  currentComponentName
}) => {
  const components = {
    'diaryDetail': <DiaryDetail />
  }

  const currentComponent = components[currentComponentName];
  return (
    <div>
      <PopperMenu />
      {currentComponent}
    </div>
  )
}

const mapStateToProps = state => ({
  currentComponentName: state.ui.submenu.main.currentComponentName
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Submenu);