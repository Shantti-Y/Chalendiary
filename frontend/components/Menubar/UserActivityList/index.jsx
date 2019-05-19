import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import { SupervisedUserCircle } from '@material-ui/icons';

import MenuHeader from '@components/MenuHeader';
import UserActivities from '@components/UserActivities';

const UserActivityList = props => {
  const { users } = props;
  return (
    <div>
      <MenuHeader icon={<SupervisedUserCircle />} label="User Activities" />
      <UserActivities users={users} />
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.user.users
})

export default connect(mapStateToProps, null)(UserActivityList);