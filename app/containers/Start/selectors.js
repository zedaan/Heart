import { createSelector } from 'reselect';

/**
 * Direct selector to the start state domain
 */
const selectStartDomain = (state) => state.get('start');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Start
 */

const makeSelectStart = () => createSelector(
  selectStartDomain,
  (substate) => substate.toJS()
);

export default makeSelectStart;
export {
  selectStartDomain,
};
