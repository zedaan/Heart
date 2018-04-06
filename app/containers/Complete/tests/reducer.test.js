
import { fromJS } from 'immutable';
import completeReducer from '../reducer';

describe('completeReducer', () => {
  it('returns the initial state', () => {
    expect(completeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
