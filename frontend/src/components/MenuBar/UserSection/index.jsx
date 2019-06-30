import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import SectionContainer from '../SectionContainer';
import SectionItem from '../SectionItem';

import Group from '@material-ui/icons/Group';

const UserSection = ({
  users,
  me,
  currentTag
}) => {

  const categorizedMembers = {
    TAG_FILTERED: { header: currentTag.name, users: [] },
    OTHERS: { header: 'Other members', users: [] }
  }

  users.map(user => {
    const currentUserIds = currentTag.users.map(user => user.id);
    if (currentUserIds.includes(user.id)) {
      categorizedMembers.TAG_FILTERED.users.push(user);
    } else {
      categorizedMembers.OTHERS.users.push(user);
    }
  });

  return (
    <SectionContainer
      primaryIcon={<Group />}
      primaryText="Users"
    >
      {Object.keys(categorizedMembers).map(key => {
        const category = categorizedMembers[key];
        if (category.users.length > 0) {
          return (
            <div key={key} className={style.listCategory}>
              <ListSubheader className={style.listSubheader}># {category.header}</ListSubheader>
              {category.users.map(user => (
                <SectionItem key={user.id} clickable={false}>
                  <div className={style.activity}></div>
                  <ListItemText className={style.listItemText} primary={<Typography variant="h3" className={style.typography}>{user.screenName}</Typography>} />
                </SectionItem>
              ))}
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
  users: state.user.users,
  me: state.me.me,
  currentTag: state.tag.tags.find(tag => tag.id === state.tag.currentTagId)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSection);