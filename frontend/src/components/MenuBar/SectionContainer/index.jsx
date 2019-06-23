import React from 'react';
import style from './style';

import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
    const { children, primaryIcon, primaryText } = this.props;
    const { toggleOpened } = this;
    return (
      <>
        <ListItem style={style.listItem} button={!opened} onClick={() => toggleOpened()}>
          <ListItemIcon style={style.listItemIcon}>{primaryIcon}</ListItemIcon>
          <ListItemText style={style.listItemText} primary={<Typography variant="h2" style={style.typography}>{primaryText}</Typography>} />
          {opened ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={opened} timeout="auto" unmountOnExit>
          <List style={style.listContent}>
            {children}
          </List>
        </Collapse>
        <Divider />
      </>
    );
  }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);