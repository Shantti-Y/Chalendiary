import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/user';

// REVIEW: property would be propertyIdx that fetch a specific user from userList
const initialState = {
  currentUserId: 0,
  users: [{
    id: 0,
    screenName: '',
    email: '',
    thumbnailPath: '',
    phone: '',
    uniqueId: '',
    createdAt: '',
    updatedAt: '',
    tags: []
  }]
};

const functions = {
  setUserList: (state, payload) => ({
    ...state,
    users: payload.users
  }),
  setCurrentUser: (state, payload) => ({
    ...state,
    currentUser: payload.user
  }),
  updateUser: (state, payload) => {
    const targetUserIdx = state.users.findIndex(user => user.id === payload.user.id);
    const newUsers = Object.assign([], state.users);
    newUsers.splice(targetUserIdx, 1, payload.user);
    return {
      ...state,
      currentUser: payload.user,
      users: newUsers
    }
  }
}

export default handleActions({
  [actions.SET_USERS]: (state, action) => functions.setUserList(state, action.payload),
  [actions.SET_CURRENT_USER]: (state, action) => functions.setCurrentUser(state, action.payload),
}, initialState);