/*
 *
 * Promo actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_ACTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitAction(payload) {
  return {
    typr: SUBMIT_ACTION,
    payload
  }
}
