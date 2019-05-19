import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/team';

// REVIEW: currentTag would be currentTagIdx that fetch specific tag from tagList
const initialState = {
  currentTeamId: 0,
  teams: [{
    id: 0,
    name: '',
    domain: '',
    thumbnailPath: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    users: [],
    tags: []
  }]
};

const functions = {
  setTeams: (state, payload) => ({
    ...state,
    teams: payload.teams
  }),
  setCurrentTeamId: (state, payload) => ({
    ...state,
    currentTeamId: payload.teamId
  })
}

export default handleActions({
  [actions.SET_TEAMS]: (state, action) => functions.setTeams(state, action.payload),
  [actions.SET_CURRENT_TEAM_ID]: (state, action) => functions.setCurrentTeamId(state, action.payload),
}, initialState);