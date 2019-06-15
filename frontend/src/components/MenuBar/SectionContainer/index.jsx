import React from 'react';
import style from './style';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

// TODO: Use React Hooks instead of class based component
class SectionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    }

    this.toggleOpened = this.toggleOpened.bind(this);
  }

  toggleOpened() {
    this.setState({
      ...this.state,
      opened: !this.state.opened
    })
  }

  render() {
    const { opened } = this.state;
    const { children, classes, primaryComponent } = this.props;
    const { toggleOpened } = this;
    return (
      <List component="nav">
        <ListItem button onClick={() => toggleOpened()}>
          {primaryComponent}
          {opened ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={opened} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </List>
    );
  }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(SectionContainer));