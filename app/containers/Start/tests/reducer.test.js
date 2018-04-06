
import { fromJS } from 'immutable';
import startReducer from '../reducer';

describe('startReducer', () => {
  it('returns the initial state', () => {
    expect(startReducer(undefined, {})).toEqual(fromJS({}));
  });
});
