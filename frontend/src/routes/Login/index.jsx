import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import ForDesktop from '@routes/Login/ForDesktop';

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="login">
        <ForDesktop />
      </div>
    )
  }
}

export default connect(null, null)(Login);