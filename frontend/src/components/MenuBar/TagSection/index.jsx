import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import { DEFAULT_TAG_NAME } from '@utils/defaultValues';

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

  const TagItem = ({ tag, clickable, onClick }) => {
    return (
      <SectionItem onClick={onClick} clickable={clickable}>
        <ListItemText className={style.listItem} primary={<Typography variant="h3" className={style.typography}># {tag.name}</Typography>} />
        {tag.ownerUser.id === me.id && tag.name !== DEFAULT_TAG_NAME ? (
          <Button className={style.button}>
            <Edit className={style.icon} onClick={() => onClickTagEdit(tag)} />
          </Button>
        ) : null}
      </SectionItem>
    )
  }

  const currentTag = tags.find(tag => tag.id === currentTagId);
  const otherTags = tags.filter(tag => tag.id !== currentTag.id);
  const categorizedTags = {
    OWNED_TAGS: { header: 'Owned Tags', tags: [] },
    BELONGED_TAGS: { header: 'Belonged Tags', tags: [] },
    PUBLIC_TAGS: { header: 'Public Tags', tags: [] }
  }
    
  otherTags.map(tag => {
    if (tag.ownerUser.id === me.id){
      categorizedTags.OWNED_TAGS.tags.push(tag);
    } else if (tag.users.map(user => user.id).includes(me.id)){
      categorizedTags.BELONGED_TAGS.tags.push(tag);
    }else if(tag.publicFlag){
      categorizedTags.PUBLIC_TAGS.tags.push(tag);
    }
  });

  return (
    <SectionContainer
      primaryIcon={<Style />}
      primaryText="Tags"
    >
      <div className={style.listCategory}>
        <ListSubheader className={style.listSubheader}>Active Tag</ListSubheader>
        {
          currentTag ? (
            <div className={style.currentTag}><TagItem tag={currentTag} clickable={false} onClick={() => true} /></div>
          ) : null
        }
      </div>
      {Object.keys(categorizedTags).map(key => {
        const category = categorizedTags[key];
        if(category.tags.length > 0){
          return (
            <div key={key} className={style.listCategory}>
              <ListSubheader className={style.listSubheader}>{category.header}</ListSubheader>
              {category.tags.map(tag => <TagItem key={tag.id} tag={tag} clickable={true} onClick={() => onClickTagItem(tag.id)} />)}
            </div>
          )
        } else {
          return null;
        }
        
      })}
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