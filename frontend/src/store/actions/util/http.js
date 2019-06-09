import { createAction } from 'redux-actions';

export const APPLY_HTTP_GET = 'util/http/APPLY_HTTP_GET';
export const applyHttpGet = createAction(APPLY_HTTP_GET);

export const APPLY_HTTP_POST = 'util/http/APPLY_HTTP_POST';
export const applyHttpPost = createAction(APPLY_HTTP_POST);
