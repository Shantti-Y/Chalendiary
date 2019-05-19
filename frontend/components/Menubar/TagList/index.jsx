import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import {
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import { CollectionsBookmark } from '@material-ui/icons';
import { changeCurrentTagId } from '@store/actions/tag';

import MenuHeader from '@components/MenuHeader';

const TagList = props => {
  const {
    tags,
    currentTagId,
    onSelectTag
  } = props;

  const handleClick = tag => {
    if(tag.id !== currentTagId){
      onSelectTag(tag);
    }
  }
  
  const isActive = tagId => {
    return tagId === currentTagId;
  }

  return (
    <div className="channel-list">
      <MenuHeader icon={<CollectionsBookmark />} label="Tags" />
      <List dense={true}>
        {tags.map(tag => {
          return (
            <ListItem
              button
              className={isActive(tag.id) ? `active` : ``}
              onClick={() => handleClick(tag)}
            >
              <ListItemText className="channel-text" primary={`# ${tag.name}`} />
            </ListItem>
          )}
        )}
      </List>
    </div>
  )
}

// TODO: it should be delete later because it may violate functional component's principle
const mapStateToProps = state => {
  return {
    currentTagId: state.tag.currentTagId,
    tags: state.tag.tags
  };
};

const mapDispatchToProps = {
  onSelectTag: tag => changeCurrentTagId({ tagId: tag.id })
};

export default connect(mapStateToProps, mapDispatchToProps)(TagList);