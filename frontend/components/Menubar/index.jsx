import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import {
  Tabs,
  Tab,
  Avatar,
} from '@material-ui/core';

import {
  CollectionsBookmark,
  DateRange,
  SupervisedUserCircle,
  Settings
} from '@material-ui/icons';

import TagList from './TagList';
import DatePickerCalendar from './DatePickerCalendar';
import UserActivityList from './UserActivityList';
import UserSettings from './UserSettings';

class Menubar extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      currentActiveMenu: 'channel-list'
    }

    this.changeCurrentActiveMenu = this.changeCurrentActiveMenu.bind(this);
  }

  changeCurrentActiveMenu(menuName){
    this.setState({
      ...this.state,
      currentActiveMenu: menuName
    })
  }

  render(){
    const {
      me,
      onSelectSettingMenu
    } = this.props;

    const menus = {
      'channel-list': {
        icon: <CollectionsBookmark />,
        component: <TagList />
      },
      'date-picker-calendar': {
        icon: <DateRange />,
        component: <DatePickerCalendar />
      },
      'user-activity-list': {
        icon: <SupervisedUserCircle />,
        component: <UserActivityList />
      },
      'user-settings': {
        icon: <Settings />,
        component: <UserSettings onSelectSettingMenu={menuName => onSelectSettingMenu(menuName)} />
      }
    }

    const currentMenuComponent = menus[this.state.currentActiveMenu].component;

    return (
      <div className="menubar">
        <div className="manubar-header">
          <Avatar className="header-avatar" alt="Remy Sharp" src={me.thumbnailPath} />
          <div className="header-contents">
            <p className="contents-fullname">{me.screenName}</p>
            <Tabs className="contents-tabs" onChange={() => console.log("hhhh")}>
              {Object.keys(menus).map(key => {
                return (
                  <Tab
                    className={`contents-tab ${this.state.currentActiveMenu === key ? `active` : ``}`}
                    onClick={() => this.changeCurrentActiveMenu(key)}
                    icon={menus[key].icon}
                  />
                )
              })}
            </Tabs>
          </div>
        </div>
        <div>{currentMenuComponent}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  me: state.me.me
});

export default connect(mapStateToProps, null)(Menubar);