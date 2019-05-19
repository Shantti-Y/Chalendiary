import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { Hidden } from '@material-ui/core';

// import ForDesktop from '@routes/Main/ForDesktop';
import ForMobile from '@routes/Main/ForMobile';

import { fetchMe } from '@store/actions/me';
import { searchDiaries } from '@store/actions/diary';
import { fetchUsers } from '@store/actions/user';
import { fetchTags, setCurrentTagId } from '@store/actions/tag';
import { fetchTeams, setCurrentTeamId } from '@store/actions/team';

// const ForDesktopWithState = connect(mapStateToProps, mapDispatchToProps)(ForDesktop);

// const Main = props => {
//   return (
//     <div id="main">
//       {/* 

//       <Hidden smDown><ForDesktopWithState /></Hidden> */}
//     </div>
//   )
// }

class Main extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onFetchMe();
    this.props.onFetchTeams();
  }

  componentDidUpdate(prevProps){
    const currentTeamDomain = new RegExp('teams\/(.+)').exec(window.location.href)[1];
    const currentTeam = this.props.teams.find(team => team.domain === currentTeamDomain);
    if (currentTeam) {
      this.props.onInitialize(currentTeam.id, this.props.currentDate);
    }
  }

  render(){
    return(
      <div id="main">
        <Hidden mdUp><ForMobile /></Hidden>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  me: state.me.me,
  teams: state.team.teams,
  currentDate: state.date.currentDate
});

const mapDispatchToProps = dispatch => ({
  onFetchMe: () => dispatch(fetchMe()),
  onFetchTeams: () => dispatch(fetchTeams()),
  onInitialize: (teamId, date) => {
    dispatch(setCurrentTeamId({ teamId }));
    dispatch(fetchTags({ teamId }));
    dispatch(setCurrentTagId({ tagId: 1, teamId }));
    dispatch(fetchUsers({ teamId }));
    dispatch(searchDiaries({ teamId, date }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);