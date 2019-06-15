import React from 'react';
import style from './style';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import { changeCurrentTagId } from '@store/actions/tag';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';

import Style from '@material-ui/icons/Style';

import SectionContainer from '../SectionContainer';

const TagSection = ({
  tags,
  currentTagId,
  onClickTagItem
}) => {

  const currentTag = tags.find(tag => tag.id === currentTagId);
  const otherTags = tags.filter(tag => tag.id !== currentTagId);

  return (
    <SectionContainer
      primaryComponent={(
        <>
          <ListItemIcon><Style /></ListItemIcon>
          <ListItemText primary="Tags" />
        </>
      )}
    >
      <List component="nav"> 
        <ListSubheader>Active Tag</ListSubheader>
        {
          currentTag ? (
            <>
              <ListItem>
                <ListItemText primary={currentTag.name} />
              </ListItem>
              <Divider />
            </>
          ) : null
        }
        <ListSubheader></ListSubheader>
        {otherTags.map(tag => (
          <ListItem button onClick={() => onClickTagItem(tag.id)}>
            <ListItemText primary={tag.name} />
          </ListItem>
        ))}
      </List>
    </SectionContainer>
  );
}


const mapStateToProps = state => ({
  tags: state.tag.tags,
  currentTagId: state.tag.currentTagId
});

const mapDispatchToProps = dispatch => ({
  onClickTagItem: tagId => dispatch(changeCurrentTagId({ tagId }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(TagSection));