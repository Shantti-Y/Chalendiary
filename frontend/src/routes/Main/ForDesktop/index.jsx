import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import { DEFAULT_TAG_NAME } from '@utils/defaultValues';

import { addNewDiary } from '@store/actions/diary';

class ForDesktop extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      newPostValue: ""
    }

    this.changePostValue = this.changePostValue.bind(this);
    this.postNewDiary = this.postNewDiary.bind(this);
  }

  changePostValue(value){
    this.setState({
      ...this.state,
      newPostValue: value
    });
  }

  postNewDiary(){
    const requestData = {
      userId: this.props.me.id,
      contentText: this.state.newPostValue,
      postedAt: this.props.currentDate.format("YYYY-MM-DD")
    }
    this.props.onPostDiary(requestData);
  }

  render(){
    const {
      newPostValue
    } = this.state;

    const {
      me,
      currentDate,
      tags,
      currentTagId,
      users,
      diaries
    } = this.props;

    const {
      changePostValue,
      postNewDiary
    } = this;

    const currentTagName = () => {
      const currentTag = tags.find(tag => tag.id === currentTagId);
      if (currentTag) {
        return currentTag.name;
      } else {
        return DEFAULT_TAG_NAME;
      }
    };
    const daysInMonth = currentDate.daysInMonth();
    const members = () => {
      if(currentTagId === null){
        return users;
      }

      return users.filter(user => {
        return user.tags.map(tag => tag.id).includes(currentTagId)
      });
    }

    return (
      <div id="for-desktop" className="layout-container">
        <div id="header">
          <div className="date-swapper">
            <span>Left</span>
            <span>2019/02</span>
            <span>Right</span>
            <span>{ currentTagName() }</span>
          </div>
          <div className="new-post">
            <input type="text" value={newPostValue} onChange={e => changePostValue(e.target.value)} />
            <button onClick={() => postNewDiary()}>Submit</button>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th className="user-column">Members</th>
                {[...Array(daysInMonth)].map((_, i) => {
                    const day = i + 1;
                    return (
                      <th key={day}>{ day }</th>
                    )
                  })}
              </tr>
            </thead>
            <tbody>
              {
                members().map(member => {
                  return (
                    <tr key={member.id}>
                      <td className="user-column">
                        { member.screenName }
                      </td>
                      {
                        [...Array(daysInMonth)].map((_, i) => {
                          const day = i + 1;
                          const diaryDataInDay = diaries.find(item => item.date === moment().date(day).format("YYYY-MM-DD"));
                          if (diaryDataInDay){
                            const diariesInDay = diaryDataInDay.diaries.find(diary => diary.user.id === member.id)
                            return (
                              <td key={`${member.id}-${day}`}>
                                {diariesInDay ? diariesInDay.contentText : null}
                              </td>
                            )
                          }else {
                            return null;
                          }
                        })
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onPostDiary: diary => {
    dispatch(addNewDiary({ diary }))
  }
});

export default connect(null, mapDispatchToProps)(ForDesktop);