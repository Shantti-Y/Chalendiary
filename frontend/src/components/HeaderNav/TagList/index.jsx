import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { closeMenu, submitTagName } from '@store/actions/ui/headerNav/tagList';
import { setTagFormContent } from '@store/actions/ui/modalContent/base';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Edit from '@material-ui/icons/Edit';

const TagName = ({
  me,
  opened,
  tags,
  currentTagId,
  anchorEl,
  onClose,
  onChoose,
  onOpenTagForm
}) => {

  return (
    <Menu
      id="long-menu"
      open={opened}
      onClose={onClose}
      anchorEl={anchorEl}
      PaperProps={{
        style: {
          maxHeight: 30 * 4.5,
          width: 200,
        },
      }}
    >
      {tags.map(tag => (
        <MenuItem key={tag.id} selected={tag.id === currentTagId} >
          <div onClick={() => onChoose(tag.id)}>
            {tag.name}
          </div>
          {tag.ownerUser.id === me.id ? <Edit onClick={() => onOpenTagForm(tag)} /> : null}
        </MenuItem>
      ))}
    </Menu>
  )
};

const mapStateToProps = state => ({
  me: state.me.me,
  opened: state.ui.headerNav.tagList.opened,
  anchorEl: state.ui.headerNav.tagList.anchorEl,
  tags: state.tag.tags,
  currentTagId: state.tag.currentTagId
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(closeMenu()),
  onChoose: tagId => dispatch(submitTagName({ tagId })),
  onOpenTagForm: tag => {
    const userIds = tag.users.map(user => user.id);
    dispatch(setTagFormContent({ tag, userIds }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TagName);