import React from 'react';
import './style.scss';
import moment from 'moment';

import DesktopNavbarLayout from '@components/NavbarLayout/DesktopNavbarLayout';
import Menubar from '@components/Menubar';
import DiaryPost from '@components/DiaryPost';
import PageletWidget from '@components/PageletWidget';

import MainNavbarContent from '@components/NavbarContent/MainNavbarContent';

import DiaryDetail from '@components/DiaryDetail';
import AboutTag from '@components/AboutTag';
import NewDiary from '@components/NewDiary';
import ProfileSetting from '@components/ProfileSetting';
import AboutService from '@components/AboutService';

class ForDesktop extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      menubarOpened: false,
      pageletDialogContentName: 'about-tag',
      pageletWidgetOpened: false
    }

    this.toggleMenubar = this.toggleMenubar.bind(this);
    this.togglePageletDialog = this.togglePageletDialog.bind(this);
  }

  toggleMenubar(status){
    this.setState({
      menubarOpened: status
    })
  }

  togglePageletDialog(status){
    this.setState({
      pageletDialogContentName: status
    })
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentTag.id !== this.props.currentTag.id ||
      prevProps.currentDate !== this.props.currentDate){
      const nextDate = moment(this.props.currentDate, 'YYYY/MM/DD');
      this.props.onChangeConditionDisplayingPosts(this.props.currentTag.id, nextDate);
    }
  }

  render(){
    const {
      menubarOpened,
      pageletDialogContentName,
      pageletWidgetOpened
    } = this.state;
    const {
      currentUser,
      currentTag,
      currentDate,
      postList,
      currentPost
    } = this.props;

    const pageletContents = {
      'none': {
        mainContent: null
      },
      'about-tag': {
        mainContent: <AboutTag />
      },
      'post-detail': {
        mainContent: <DiaryDetail />
      },
      'new-post': {
        mainContent: <NewDiary />
      },
      'profile-setting': {
        mainContent: <ProfileSetting />
      },
      'about-service': {
        mainContent: <AboutService />
      }
    }

    return (
      <div id="for-desktop" className="layout-container">
        <div className="container-block menubar-container">
          <Menubar
            currentUser={currentUser}
            currentDate={currentDate}
            currentTag={currentTag}
            onSelectSettingMenu={name => this.togglePageletDialog(name)}
          />
        </div>
        <div className="container-block main-content-container">
          <DesktopNavbarLayout>
            <MainNavbarContent
              currentTag={currentTag}
              currentDate={currentDate}
              onOpenMenubar={() => this.toggleMenubar(true)}
              onSelectSubmenu={name => this.togglePageletDialog(name)}
            />
          </DesktopNavbarLayout>
          <div className="diary-posts">
            {postList.map(post => {
              return (
                <DiaryPost
                  post={post}
                  onClickReplies={() => this.togglePageletDialog('post-detail')}
                />
              )
            })}
          </div>
        </div>
        <div className="container-block pagelet-widget-container">
          <PageletWidget>
            {pageletContents[pageletDialogContentName].mainContent}
          </PageletWidget>
        </div>
      </div>
    )
  }
}

export default ForDesktop;