import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import SectionContainer from '../SectionContainer';
import SectionItem from '../SectionItem';

import Group from '@material-ui/icons/Group';

const UserSection = ({
  users,
  me
}) => {

  const teamMembers = users.filter(user => user.id !== me.id);

  return (
    <SectionContainer
      primaryIcon={<Group />}
      primaryText="Users"
    >
      {teamMembers.map(user => (
        <SectionItem clickable={false}>
          <div className={style.activity}></div>
          <ListItemText primary={<Typography variant="h3" className={style.typography}>{user.screenName}</Typography>} />
        </SectionItem>
      ))}
    </SectionContainer>
  );
}


const mapStateToProps = state => ({
  users: state.user.users,
  me: state.me.me
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSection);