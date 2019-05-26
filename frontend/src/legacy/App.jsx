import React from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stompClient: null,
      userList: [
        { id: 1, name: "User1", active: false },
        { id: 2, name: "User2", active: false },
        { id: 3, name: "User3", active: false }
      ],
      messageList: [],
      currentUser: null,
      formData: {
        user: null,
        textContent: ''
      }
    }

    this.changeFormDataValue = this.changeFormDataValue.bind(this);
    this.submitWebSocket = this.submitWebSocket.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.updateMessageList = this.updateMessageList.bind(this);
    this.updateUserActivities = this.updateUserActivities.bind(this)
  }

  async submitWebSocket(){
    const socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    const newStompClient = Stomp.over(socket);

    await newStompClient.connect('1', 'password', async frame => {
      console.log('Connected: ' + frame);
      newStompClient.subscribe('/chat/messages', response => {
        this.updateMessageList(JSON.parse(response.body));
      });
      newStompClient.subscribe('/chat/activities', response => {
        this.updateUserActivities(JSON.parse(response.body))
      });
    });
    this.setState({
      stompClient: newStompClient,
      currentUser: this.state.formData.user
    })
  }

  changeFormDataValue(name, value){
    const newFormData = Object.assign({}, this.state.formData, null);
    newFormData[name] = value;
    this.setState({
      ...this.state,
      formData: newFormData
    });
  }

  sendMessage(){
    this.state.stompClient.send("/api/message", {}, JSON.stringify(this.state.formData));
  }

  

  updateMessageList(message){
    const newMessageList = Object.assign([], this.state.messageList, null);
    newMessageList.push(message)
    this.setState({
      ...this.state,
      messageList: newMessageList
    })
  }

  updateUserActivities(userIds){
    const newUserList = this.state.userList.map(user => {
      user.active = userIds.some(userId => user.id === parseInt(userId));
      return user
    })
    this.setState({
      ...this.state,
      userList: newUserList
    })
  }

  render(){
    if(this.state.currentUser){
      return (
        <div>
          <div>
            <label>You are {this.state.currentUser.name}</label><br />
            <input type="text" name="textContent" onChange={e => this.changeFormDataValue('textContent', e.target.value)} />
            <button onClick={this.sendMessage}>SendMessage!!</button>
          </div>
          <p>User Activities</p>
          <ul>
            {this.state.userList.map(user => {
              return (
                <li>
                  {user.name} : <div style={{ width: '10px', height: '10px', backgroundColor: user.active ? 'green' : 'black' }}></div>
                </li>
              )
            })}
          </ul>
          <p>Messages</p>
          <ul>
            {this.state.messageList.map(message => {
              return (
                <li>
                  {message.user.name} : {message.textContent}
                </li>
              )
            })}
          </ul>
        </div>
      )
    }else{
      return (
        <div>
          <label>Choose Users</label>
          {this.state.userList.map(user => {
            return (
              <div>
                <input type="radio" name="user" value={user.id} onClick={e => this.changeFormDataValue('user', user)} />
                <span>{user.name}</span>
              </div>
            )
          })}
          <button onClick={this.submitWebSocket}>Submit!!</button>
        </div>
      )
    }
    
  }
}