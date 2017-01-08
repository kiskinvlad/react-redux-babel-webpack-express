import axios from 'axios';

import {ACTION_REQUEST, ACTION_SUCCESS, ACTION_FAILURE} from '../constants/index';
import * as actionsUtils from './actionsUtils';

export const FETCH_OBJECTS_REQUEST = 'FETCH_OBJECTS' + ACTION_REQUEST;
export const FETCH_OBJECTS_SUCCESS = 'FETCH_OBJECTS' + ACTION_SUCCESS;
export const FETCH_OBJECTS_FAILURE = 'FETCH_OBJECTS' + ACTION_FAILURE;

export const INCREMENT_VALUE = 'INCREMENT_VALUE';

// Note this can be extracted out later
/**
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * @param method Object Data you wish to pass to the server
 * @param data String HTTP method, e.g. post, get, put, delete
 * @param id String id
 * @return Promise
 */
const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function fetchObjects() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/objects`,
    headers: []
  });

  return(dispatch) => {
    dispatch(actionsUtils.requestAction(FETCH_OBJECTS_REQUEST));
    return request
        .then(res => {
          if (res.status === 200) {
            return dispatch(actionsUtils.successAction(FETCH_OBJECTS_SUCCESS, Object.assign({},res.data)));
          }
          throw new Error('Oops! Something went wrong and we couldnt fetch your objects');
        })
        .catch(error => {
          const errMsg = error.message ? error.message : error.data;
          return dispatch(actionsUtils.failureAction(FETCH_OBJECTS_SUCCESS, {error: errMsg}));
        });
  };
}
export function incrementValue(val){
  return(dispatch) => {
    dispatch(actionsUtils.requestAction(INCREMENT_VALUE, val));
  }
}

