import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import stompClient from '@client/stomp';

import { fetchMe } from '@store/actions/me';
import { fetchUsers } from '@store/actions/user';
import { searchDiariesInMonth, receiveNewDiary, receiveEditDiary } from '@store/actions/diary';
import { receiveNewReply, receiveEditReply } from '@store/actions/reply';
import { fetchTags } from '@store/actions/tag';

import ForDesktop from '@routes/Main/ForDesktop';

class Main extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onInitialize();
    stompClient.connect('1', 'password', async frame => {
      console.log('Connected: ' + frame);
      stompClient.subscribe('/socket/diaries/new', response => {
        this.props.onReceiveNewDiary(JSON.parse(response.body));
      });
      stompClient.subscribe('/socket/diaries/edit', response => {
        this.props.onReceiveEditDiary(JSON.parse(response.body));
      });
      stompClient.subscribe('/socket/replies/new', response => {
        this.props.onReceiveNewReply(JSON.parse(response.body));
      });
      stompClient.subscribe('/socket/replies/edit', response => {
        this.props.onReceiveEditReply(JSON.parse(response.body));
      });
    });
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
    const date = moment();
    dispatch(searchDiariesInMonth({ date }));
  },
  onReceiveNewDiary: data => dispatch(receiveNewDiary({ data })),
  onReceiveEditDiary: data => dispatch(receiveEditDiary({ data })),
  onReceiveNewReply: data => dispatch(receiveNewReply({ data })),
  onReceiveEditReply: data => dispatch(receiveEditReply({ data }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);