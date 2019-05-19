import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { fetchMe } from '@store/actions/me';
import { fetchUsers } from '@store/actions/user';
import { searchDiaries } from '@store/actions/diary';
import { fetchTags } from '@store/actions/tag';

import ForDesktop from '@routes/Main/ForDesktop';

class Main extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onInitialize();
  }

  render(){
    const {
      me,
      currentDate,
      tags,
      currentTagId,
      users,
      diaries
    } = this.props;

    return(
      <div id="main">
        <ForDesktop
          me={me}
          currentDate={currentDate}
          tags={tags}
          currentTagId={currentTagId}
          users={users}
          diaries={diaries}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  me: state.me.me,
  currentDate: state.date.currentDate,
  users: state.user.users,
  tags: state.tag.tags,
  currentTagId: state.tag.currentTagId,
  diaries: state.diary.diaries
});

const mapDispatchToProps = dispatch => ({
  onInitialize: () => {
    dispatch(fetchMe());
    dispatch(fetchUsers());
    dispatch(fetchTags());
    const currentDate = moment().format('YYYY-MM');
    dispatch(searchDiaries({ date: currentDate }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);