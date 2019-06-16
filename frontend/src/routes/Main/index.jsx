import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { changeComponent } from '@store/actions/ui/layout/menuNav';

import ForDesktop from '@routes/Main/ForDesktop';
import HeaderNav from '@components/ForDesktop/HeaderNav';

const Main = ({
  onInitialize
}) => {
  onInitialize(<HeaderNav />);

  return (
    <div id="main">
      <ForDesktop />
    </div>
  )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onInitialize: component => dispatch(changeComponent({ component }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);