import { put, all, takeLatest, call, select } from 'redux-saga/effects';

import httpClient from '@client/http';
import {
  FETCH_TEAMS,
  CHANGE_CURRENT_TEAM_ID,
  fetchTeams,
  succeedFetchTeams,
  failFetchTeams,
  setTeams,
  setCurrentTeamId
} from '@store/actions/team';

const getState = state => state.team;

// APIs
function* invokeFetchTeams(action){
  const { data } = yield call(httpClient.get, `/teams/me`);
  yield put(setTeams(data));
}

function* invokeSetCurrentTeamId(action){
  const { teamId } = action.payload;
  const { teams } = yield select(getState);
  if(!teams.find(team => team.id === teamId)){
    yield put(fetchTeams());
  }
  yield put(setCurrentTeamId({ teamId: teamId }));
}

function* watchAsyncTriggers(){
  yield takeLatest(FETCH_TEAMS, invokeFetchTeams);
  yield takeLatest(CHANGE_CURRENT_TEAM_ID, invokeSetCurrentTeamId);
}

export default function* teamSaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}