import React from 'react';
import style from './style';

import { connect } from 'react-redux';

import { changeCurrentTagId } from '@store/actions/tag';
import { setTagFormContent } from '@store/actions/ui/modalContent/base';

import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Style from '@material-ui/icons/Style';
import Edit from '@material-ui/icons/Edit';

import SectionContainer from '../SectionContainer';
import SectionItem from '../SectionItem';

const TagSection = ({
  me,
  tags,
  currentTagId,
  onClickTagItem,
  onClickTagEdit
}) => {

  const currentTag = tags.find(tag => tag.id === currentTagId);
  const otherTags = tags.filter(tag => tag.id !== currentTagId);

  const TagItem = ({ tag, clickable, onClick }) => (
    <SectionItem onClick={onClick} clickable={clickable}>
      <ListItemText style={style.listItem} primary={<Typography variant="h3" style={style.typography}>{tag.name}</Typography>} />
      {tag.ownerUser.id === me.id ? (
        <Button style={style.button}>
          <Edit style={style.icon} onClick={() => onClickTagEdit(tag)} />
        </Button>
      ) : null}
    </SectionItem>
  )

  return (
    <SectionContainer
      primaryIcon={<Style />}
      primaryText="Tags"
    >
      <ListSubheader style={style.listSubheader}>Active Tag</ListSubheader>
      {
        currentTag ? (
          <div style={style.currentTag}><TagItem tag={currentTag} clickable={false} onClick={() => true} /></div>
        ) : null
      }
      <ListSubheader></ListSubheader>
      {otherTags.map(tag => <TagItem tag={tag} clickable={true} onClick={() => onClickTagItem(tag.id)} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(TagSection);