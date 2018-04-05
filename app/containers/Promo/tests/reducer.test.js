
import { fromJS } from 'immutable';
import promoReducer from '../reducer';

describe('promoReducer', () => {
  it('returns the initial state', () => {
    expect(promoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
