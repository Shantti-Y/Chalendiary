import React from 'react';
import './style.scss';
import moment from 'moment';

import { connect } from 'react-redux';

import { searchDiaries } from '@store/actions/diary';

import { Drawer } from '@material-ui/core';

import MobileNavbarLayout from '@components/NavbarLayout/MobileNavbarLayout';
import Menubar from '@components/Menubar';
import DiaryPost from '@components/DiaryPost';
import PageletWidgetDialog from '@components/PageletWidgetDialog';

import MainNavbarContent from '@components/NavbarContent/MainNavbarContent';

import AboutTagNavbarContent from '@components/NavbarContent/AboutTagNavbarContent';
import DiaryDetailNavbarContent from '@components/NavbarContent/DiaryDetailNavbarContent';
import NewDiaryNavbarContent from '@components/NavbarContent/NewDiaryNavbarContent';
import ProfileSettingNavbarContent from '@components/NavbarContent/ProfileSettingNavbarContent';
import AboutServiceNavbarContent from '@components/NavbarContent/AboutServiceNavbarContent';

import DiaryDetail from '@components/DiaryDetail';
import AboutTag from '@components/AboutTag';
import NewDiary from '@components/NewDiary';
import ProfileSetting from '@components/ProfileSetting';
import AboutService from '@components/AboutService';

class ForMobile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      menubarOpened: false,
      pageletDialogContentName: 'none',
      pageletWidgetOpened: false
    }

    this.toggleMenubar = this.toggleMenubar.bind(this);
    this.togglePageletDialog = this.togglePageletDialog.bind(this);
    this.togglePageletWidget = this.togglePageletWidget.bind(this);
  }

  toggleMenubar(status){
    this.setState({
      ...this.state,
      menubarOpened: status
    });
  }

  togglePageletDialog(status){
    this.setState({
      ...this.state,
      pageletDialogContentName: status
    })
  }

  togglePageletWidget(status){
    this.setState({
      ...this.state,
      pageletWidgetOpened: status
    })
  }

  componentDidUpdate(prevProps){
    if (prevProps.currentDate !== this.props.currentDate){
      const nextDate = this.props.currentDate;
      this.props.onChangeCondition(this.props.currentTeamId, nextDate);
    }
  }

  render(){
    const {
      diaries,
      users,
      currentTeamId,
      currentTagId,
      currentDate
    } = this.props;

    const filteredUsers = users.filter(user => {
      const tagIds = user.tags.map(tag => tag.id);
      return tagIds.includes(currentTagId);
    });

    const filteredDiaries = diaries.filter(diary => {
      return filteredUsers.some(user => {
        return user.id === diary.user.id
      });
    });

    const pageletContents = {
      'none': {
        navbarContent: null,
        mainContent: null
      },
      'about-tag': {
        navbarContent: <AboutTagNavbarContent onCloseDialog={() => this.togglePageletDialog('none')} />,
        mainContent: <AboutTag />
      },
      'post-detail': {
        navbarContent: <DiaryDetailNavbarContent onCloseDialog={() => this.togglePageletDialog('none')} />,
        mainContent: <DiaryDetail />
      },
      'new-post': {
        navbarContent: <NewDiaryNavbarContent onCloseDialog={() => this.togglePageletDialog('none')} />,
        mainContent: <NewDiary />
      },
      'profile-setting': {
        navbarContent: <ProfileSettingNavbarContent onCloseDialog={() => this.togglePageletDialog('none')} />,
        mainContent: <ProfileSetting />
      },
      'about-service': {
        navbarContent: <AboutServiceNavbarContent onCloseDialog={() => this.togglePageletDialog('none')} />,
        mainContent: <AboutService />
      }
    }

    return (
      <div id="for-mobile">
        <Drawer
          anchor="left"
          open={this.state.menubarOpened}
          onClose={() => this.toggleMenubar(false)}
        >
          <div className="drawer-container">
            <Menubar onSelectSettingMenu={name => this.togglePageletDialog(name)} />
          </div>
        </Drawer>

        <MobileNavbarLayout>
          <MainNavbarContent
            onOpenMenubar={() => this.toggleMenubar(true)}
            onSelectSubmenu={name => this.togglePageletDialog(name)}
          />
        </MobileNavbarLayout>

        <div className="diary-posts">
          {filteredDiaries.map(diary => <DiaryPost diary={diary} onClickReplies={() => this.togglePageletDialog('post-detail')} />)}
        </div>
        
        <PageletWidgetDialog
          contentName={this.state.pageletDialogContentName}
          navbarContent={pageletContents[this.state.pageletDialogContentName].navbarContent}
        >
          {pageletContents[this.state.pageletDialogContentName].mainContent}
        </PageletWidgetDialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  diaries: state.diary.diaries,
  users: state.user.users,
  currentTeamId: state.team.currentTeamId,
  currentTagId: state.tag.currentTagId,
  currentDate: state.date.currentDate
});

const mapDispatchToProps = dispatch => ({
  onChangeCondition: (teamId, date) => dispatch(searchDiaries({ teamId, date }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ForMobile);