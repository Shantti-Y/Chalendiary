import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import ForDesktop from '@routes/Main/ForDesktop';

const Main = () => {
  return (
    <div id="main">
      <ForDesktop />
    </div>
  )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);