import React from 'react';
import style from './style';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import { changeCurrentTagId } from '@store/actions/tag';
import { setTagFormContent } from '@store/actions/ui/modalContent/base';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Style from '@material-ui/icons/Style';
import Edit from '@material-ui/icons/Edit';

import SectionContainer from '../SectionContainer';

const TagSection = ({
  me,
  tags,
  currentTagId,
  onClickTagItem,
  onClickTagEdit
}) => {

  const currentTag = tags.find(tag => tag.id === currentTagId);
  const otherTags = tags.filter(tag => tag.id !== currentTagId);

  const TagItem = ({ tag, onClick }) => (
    <ListItem onClick={onClick}>
      <ListItemText primary={tag.name} />
      {tag.ownerUser.id === me.id ? <Edit onClick={() => onClickTagEdit(tag)} /> : null}
    </ListItem>
  )

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
              <TagItem tag={currentTag} onClick={() => true} />
              <Divider />
            </>
          ) : null
        }
        <ListSubheader></ListSubheader>
        {otherTags.map(tag => <TagItem tag={tag} onClick={() => onClickTagItem(tag.id)} />)}
      </List>
    </SectionContainer>
  );
}

const mapStateToProps = state => ({
  me: state.me.me,
  tags: state.tag.tags,
  currentTagId: state.tag.currentTagId
});

const mapDispatchToProps = dispatch => ({
  onClickTagEdit: tag => {
    const userIds = tag.users.map(user => user.id);
    dispatch(setTagFormContent({ tag, userIds }));
  },
  onClickTagItem: tagId => dispatch(changeCurrentTagId({ tagId }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(TagSection));