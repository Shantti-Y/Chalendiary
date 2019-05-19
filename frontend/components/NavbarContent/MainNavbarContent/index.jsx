import React from 'react';
import './style.scss';
import moment from 'moment';

import { connect } from 'react-redux';

import {
  Toolbar,
  IconButton,
  Hidden
} from '@material-ui/core'; 

import {
  Menu,
  ChevronLeft,
  ChevronRight,
  AddToPhotos,
  MoreVert
} from '@material-ui/icons';

import Submenu from '@components/Submenu';
import NavbarSpacing from '@components/NavbarContent/NavbarSpacing';
import NavbarText from '@components/NavbarContent/NavbarText';

import { changeCurrentDate } from '@store/actions/date';

class MobileNavbarContent extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      submenuOpened: null
    }

    this.toggleSubmenu = this.toggleSubmenu.bind(this);
    this.handleSelectSubmenu = this.handleSelectSubmenu.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  toggleSubmenu(status){
    this.setState({
      ...this.state,
      submenuOpened: status
    })
  }

  handleSelectSubmenu(name){
    // Depending on whether About or Leave channel
    this.props.onSelectSubmenu(name)
  }

  handleChangeDate(direction){
    const newDate = moment(this.props.currentDate, 'YYYY/MM/DD');
    const formattedNewDate = direction === 'next' ? newDate.add(1, 'days') : newDate.subtract(1, 'days');
    this.props.onChangeDate(formattedNewDate.format('YYYY/MM/DD'));
  }

  render(){
    const {
      handleSelectSubmenu,
      toggleSubmenu,
      handleChangeDate
    } = this;
    const { submenuOpened } = this.state;
    const {
      currentTag,
      currentDate,
      onOpenMenubar,
      onSelectSubmenu,
      onChangeDate
    } = this.props;

    const currentTagName = currentTag ? currentTag.name : '';

    return (
      <Toolbar className="main-navbar-content">
        <Hidden smDown>
          <NavbarText className="navbar-current-channel">{ currentTagName }</NavbarText>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => onOpenMenubar()}
            className="navbar-button"
          >
            <Menu />
          </IconButton>
        </Hidden>
        <IconButton
          color="inherit"
          aria-label="PrevDate"
          className="navbar-button"
          onClick={() => handleChangeDate('prev')}
        >
          <ChevronLeft />
        </IconButton>
        <NavbarText className="navbar-current-date">{ currentDate }</NavbarText>
        <IconButton
          color="inherit"
          aria-label="NextDate"
          className="navbar-button"
          onClick={() => handleChangeDate('next')}
        >
          <ChevronRight />
        </IconButton>
        <NavbarSpacing />
        <IconButton
          color="inherit"
          aria-label="NewDiaryPost"
          className="navbar-button"
          onClick={() =>  handleSelectSubmenu('new-post')}
        >
          <AddToPhotos />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="SubMenu"
          aria-controls="submenu"
          aria-haspopup="true"
          className="navbar-button"
          onClick={event => toggleSubmenu(event.currentTarget)}
        >
          <MoreVert />
        </IconButton>
        <Submenu
          opened={submenuOpened}
          onCloseSubmenu={() => toggleSubmenu(null)}
          onSelectSubmenu={name =>  handleSelectSubmenu(name)}
        />
      </Toolbar>
    )
  }
}

const mapStateToProps = state => ({
  currentTag: state.tag.tags.find(tag => tag.id === state.tag.currentTagId),
  currentDate: state.date.currentDate
});

const mapDispatchToProps = {
  onChangeDate: date => changeCurrentDate({ date })
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbarContent);