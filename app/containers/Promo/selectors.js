import { createSelector } from 'reselect';

/**
 * Direct selector to the promo state domain
 */
const selectPromoDomain = (state) => state.get('promo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Promo
 */

const makeSelectPromo = () => createSelector(
  selectPromoDomain,
  (substate) => substate.toJS()
);

export default makeSelectPromo;
export {
  selectPromoDomain,
};
