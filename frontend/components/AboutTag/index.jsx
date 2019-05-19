import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import {
  Button,
  Divider
} from '@material-ui/core';

import {
  ListAlt,
  SupervisedUserCircle,
  Create,
  Close,
  Launch
} from '@material-ui/icons';

import MenuHeader from '@components/MenuHeader';
import UserActivities from '@components/UserActivities';
import LongTextarea from '@components/Form/LongTextarea';

import { changeCurrentTag } from '@store/actions/tag';

class AboutTag extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      textareaOpened: false,
      textareaValue: ''
    }

    this.changeValue = this.changeValue.bind(this);
    this.toggleTextarea = this.toggleTextarea.bind(this);
    this.handleSubmitChannel = this.handleSubmitChannel.bind(this);
  }

  componentDidMount(){
    this.setState({
      ...this.state,
      textareaValue: this.props.currentTag.description
    })
  }

  changeValue(value){
    this.setState({
      ...this.state,
      textareaValue: value
    })
  }

  toggleTextarea(status){
    this.setState({
      ...this.state,
      textareaOpened: status
    })
  }

  handleSubmitChannel(){
    const newTag = {
      id: this.props.currentTag.id,
      name: this.props.currentTag.name,
      teamId: this.props.currentTag.teamId,
      description: this.state.textareaValue
    };
    this.props.onSubmit(newTag);
    this.toggleTextarea(false);
  }

  render(){
    const { changeValue, toggleTextarea, handleSubmitChannel } = this;
    const { textareaOpened, textareaValue } = this.state;
    const { currentTag, users } = this.props;

    return (
      <div className="about-tag">
        <div>
          <MenuHeader icon={<ListAlt />} label="Description" />
          {(() => {
            if(textareaOpened){
              return (
                <div>
                  <LongTextarea
                    value={textareaValue}
                    onChange={value => changeValue(value)}
                  />
                  <Divider />
                  <Button variant="outlined" className="about-tag-button" onClick={() => toggleTextarea(false)}><Close /></Button>
                  <Button variant="outlined" className="about-tag-button" onClick={() => handleSubmitChannel()}><Launch /></Button>
                </div>
              )
            }else{
              return (
                <div>
                  <p className="about-tag-description">{currentTag.description}</p>
                  <Button variant="outlined" className="about-tag-button" onClick={() => toggleTextarea(true)}><Create /></Button>
                </div>
              )
            }
          })()}
          
        </div>
        <div>
          <MenuHeader
            icon={<SupervisedUserCircle />}
            label="User Activities"
          />
          <UserActivities users={users} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTag: state.tag.tags.find(tag => tag.id === state.tag.currentTagId),
    users: state.user.users.filter(user => user.tags.map(tag => tag.id).includes(state.tag.currentTagId))
  }
}

const mapDispatchToProps = {
  onSubmit: tag => changeCurrentTagI(tag)
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutTag);