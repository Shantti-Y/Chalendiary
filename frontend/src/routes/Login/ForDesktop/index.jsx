import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

class ForDesktop extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="for-desktop">
      </div>
    )
  }
}

export default connect(null, null)(ForDesktop);