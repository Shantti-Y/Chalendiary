import { createAction } from 'redux-actions';

export const FETCH_TEAMS = 'FETCH_TEAMS';
export const SUCCEED_FETCH_TEAMS = 'SUCCEED_FETCH_TEAMS';
export const FAIL_FETCH_TEAMS = 'FAIL_FETCH_TEAMS';

export const fetchTeams = createAction(FETCH_TEAMS);
export const succeedFetchTeams = createAction(SUCCEED_FETCH_TEAMS);
export const failFetchTeams = createAction(FAIL_FETCH_TEAMS);

export const CHANGE_TEAMS = 'CHANGE_TEAMS';
export const CHANGE_CURRENT_TEAM_ID = 'CHANGE_CURRENT_TEAM_ID';
export const changeTeams = createAction(CHANGE_TEAMS);
export const changeCurrentTeamId = createAction(CHANGE_CURRENT_TEAM_ID);

// for calling reducers
export const SET_TEAMS = 'SET_TEAMS';
export const SET_CURRENT_TEAM_ID = 'SET_CURRENT_TEAM_ID';
export const setTeams = createAction(SET_TEAMS);
export const setCurrentTeamId = createAction(SET_CURRENT_TEAM_ID);
