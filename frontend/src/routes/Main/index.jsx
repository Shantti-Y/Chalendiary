import React from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { connectWebSocketToServer, subscribeReceivedEvent } from '@utils/client/stomp';

import { fetchMe } from '@store/actions/me';
import { fetchUsers } from '@store/actions/user';
import { searchDiariesInMonth, receiveNewDiary, receiveEditDiary, receiveDeleteDiary } from '@store/actions/diary';
import { receiveNewReply, receiveEditReply, receiveDeleteReply } from '@store/actions/reply';
import { receiveNewTag, receiveEditTag, receiveDeleteTag } from '@store/actions/tag';
import { receiveNewUser, receiveEditUser, receiveDeleteUser } from '@store/actions/user';
import { fetchTags } from '@store/actions/tag';

import ForDesktop from '@routes/Main/ForDesktop';

import { sessionStatuses } from '@store/reducers/util/sessionStatus';

import firebase from '@utils/firebase';

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
        subscribeReceivedEvent('/socket/diaries/destroy', this.props.onReceiveDeleteDiary);

        subscribeReceivedEvent('/socket/replies/new', this.props.onReceiveNewReply);
        subscribeReceivedEvent('/socket/replies/edit', this.props.onReceiveEditReply);
        subscribeReceivedEvent('/socket/replies/destroy', this.props.onReceiveDeleteReply);

        subscribeReceivedEvent('/socket/tags/new', this.props.onReceiveNewTag);
        subscribeReceivedEvent('/socket/tags/edit', this.props.onReceiveEditTag);
        subscribeReceivedEvent('/socket/tags/destroy', this.props.onReceiveDeleteTag);

        subscribeReceivedEvent('/socket/users/new', this.props.onReceiveNewUser);
        subscribeReceivedEvent('/socket/users/edit', this.props.onReceiveEditUser);
        subscribeReceivedEvent('/socket/users/destroy', this.props.onReceiveDeleteUser);
      })
    }

    if(
      prevProps.users.some(user => user.id === this.props.me.id)
      && this.props.users.every(user => user.id !== this.props.me.id)){
      firebase.signOut()
        .then(a => { })
        .catch(error => {
          const credential = error.credential;
          console.log("ERROR!!!!!!")
          console.log(credential)
        })
    }
  }

  render(){
    if (this.props.sessionStatus === sessionStatuses.LOGGED_OUT){
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
  sessionStatus: state.util.sessionStatus.status,
  me: state.me.me,
  users: state.user.users
});

const mapDispatchToProps = dispatch => ({
  onInitialize: () => {
    dispatch(fetchMe());
    dispatch(fetchUsers());
    dispatch(fetchTags());
    const date = moment();
    dispatch(searchDiariesInMonth({ date }));
  },
  // TODO: change response structure to reduce received actions below
  onReceiveNewDiary: data => dispatch(receiveNewDiary({ data })),
  onReceiveEditDiary: data => dispatch(receiveEditDiary({ data })),
  onReceiveDeleteDiary: data => dispatch(receiveDeleteDiary({ data })),
  onReceiveNewReply: data => dispatch(receiveNewReply({ data })),
  onReceiveEditReply: data => dispatch(receiveEditReply({ data })),
  onReceiveDeleteReply: data => dispatch(receiveDeleteReply({ data })),
  onReceiveNewTag: data => dispatch(receiveNewTag({ data })),
  onReceiveEditTag: data => dispatch(receiveEditTag({ data })),
  onReceiveDeleteTag: data => dispatch(receiveDeleteTag({ data })),
  onReceiveNewUser: data => dispatch(receiveNewUser({ data })),
  onReceiveEditUser: data => dispatch(receiveEditUser({ data })),
  onReceiveDeleteUser: data => dispatch(receiveDeleteUser({ data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);