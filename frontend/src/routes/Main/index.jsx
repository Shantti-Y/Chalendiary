import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { Hidden } from '@material-ui/core';

import ForDesktop from '@routes/Main/ForDesktop';

class Main extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onFetchMe();
    this.props.onFetchTeams();
  }

  render(){
    return(
      <div id="main">
        <ForDesktop />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  me: state.me.me,
  currentDate: state.date.currentDate,

});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);