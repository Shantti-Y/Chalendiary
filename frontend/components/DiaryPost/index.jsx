import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { Avatar, Button } from '@material-ui/core';
import {
  Create,
  Close,
  Launch
} from '@material-ui/icons';

import ReactionButton from '@components/ReactionButton';
import InstantTextarea from '@components/Form/InstantTextarea';
import { changeCurrentDiaryId } from '@store/actions/diary';

class DiaryPost extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      textareaOpened: false,
      textareaValue: ''
    }

    this.changeValue = this.changeValue.bind(this);
    this.toggleTextarea = this.toggleTextarea.bind(this);
  }

  changeValue(value){
    this.setState({
      ...this.state,
      textareaValue: value
    });
  }

  toggleTextarea(status){
    this.setState({
      ...this.state,
      textareaOpened: status
    });
  }

  componentDidMount(){
    this.setState({
      ...this.state,
      textareaValue: this.props.diary.contentText
    })
  }

  render(){
    const { textareaOpened, textareaValue } = this.state;
    const { diary, onClickReplies, onChangeDiary, me } = this.props;
    const { changeValue, toggleTextarea } = this;

    const handleClickReplies = e => {
      e.preventDefault();
      onChangeDiary(diary);
      onClickReplies();
    }

    const uniqueUsers = diary.replies.map(reply => reply.user).filter((user, idx, self) => {
        const insideIdx = self.findIndex(insideUser => insideUser.id === user.id);
        return insideIdx === idx;
      }).slice(0, 5);

    const numberOfReplies = () => {
      if (diary.replies.length > 0){
        return `${diary.replies.length} Replies`;
      } else if (diary.replies.length === 1){
        return `1 Reply`;
      }else{
        return `No Reply`;
      }
    }

    return (
      <div className="diary-post">
        <div className="diary-post-name">
          <span>{ diary.user.screenName }</span>
          {(() => {
            if (diary.user.id === me.id && !textareaOpened){
              return <Button variant="outlined" className="diary-post-edit-button" onClick={() => toggleTextarea(true)}><Create /></Button>
            }
          })()}
        </div>
        <div className="diary-post-contents">
          <Avatar className="post-contents-avatar" alt="Remy Sharp" src={diary.user.thumbnailPath} />
          {(() => {
            if(textareaOpened){
              return (
                <div>
                  <InstantTextarea
                    value={textareaValue}
                    onChange={value => changeValue(value)}
                  />
                  <Button variant="outlined" className="diary-post-button" onClick={() => toggleTextarea(false)}><Close /></Button>
                  <Button variant="outlined" className="diary-post-button" onClick={() => handleSubmitPost()}><Launch /></Button>
                </div>
              )
              
            }else{
              return <p>{diary.contentText }</p>
            }
          })()}
          
        </div>
        <div className="diary-post-reaction">
          <ReactionButton />
          <div className="diary-post-reply">
            <div className="diary-post-repliers">
              {uniqueUsers.map(user => <Avatar className="post-replier" alt={user.screenName} src={user.thumbnailPath} />)}
            </div>
            <a className="post-reply-link" href="" onClick={e => handleClickReplies(e)}>{numberOfReplies()}</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    me: state.me.me,
    users: state.user.users
  }
}

const mapDispatchToProps = {
  onChangeDiary: diary => changeCurrentDiaryId({ diaryId: diary.id })
};

export default connect(mapStateToProps, mapDispatchToProps)(DiaryPost);