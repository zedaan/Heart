import { createSelector } from 'reselect';

/**
 * Direct selector to the complete state domain
 */
const selectCompleteDomain = (state) => state.get('complete');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Complete
 */

const makeSelectComplete = () => createSelector(
  selectCompleteDomain,
  (substate) => substate.toJS()
);

export default makeSelectComplete;
export {
  selectCompleteDomain,
};
