import React from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { connectWebSocketToServer, subscribeReceivedEvent } from '@utils/client/stomp';

import { fetchMe } from '@store/actions/me';
import { fetchUsers } from '@store/actions/user';
import { searchDiariesInMonth, receiveNewDiary, receiveEditDiary } from '@store/actions/diary';
import { receiveNewReply, receiveEditReply } from '@store/actions/reply';
import { fetchTags } from '@store/actions/tag';

import ForDesktop from '@routes/Main/ForDesktop';

import { appStatuses } from '@store/reducers/util/appStatus';


class Main extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onInitialize();
  }

  componentDidUpdate(prevProps){
    if(prevProps.me.id !== this.props.me.id){
      connectWebSocketToServer(this.props.me.id,  () => {
        subscribeReceivedEvent('/socket/diaries/new', this.props.onReceiveNewDiary);
        subscribeReceivedEvent('/socket/diaries/edit', this.props.onReceiveEditDiary);
        subscribeReceivedEvent('/socket/replies/new', this.props.onReceiveNewReply);
        subscribeReceivedEvent('/socket/replies/edit', this.props.onReceiveEditReply);
      })
    }
  }

  render(){
    if (this.props.appStatus === appStatuses.DANGER){
      return <Redirect to="/signin" />;
    }else{
      return (
        <div id="main">
          <ForDesktop />
        </div>
      )
    }

  }
}

const mapStateToProps = state => ({
  appStatus: state.util.appStatus.status,
  me: state.me.me
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