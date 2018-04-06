

import * as c from './constants';

export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}

export function submitAction(payload) {
  return {
    typr: c.SUBMIT_ACTION,
    payload
  }
}