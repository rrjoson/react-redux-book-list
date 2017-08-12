import * as types from '../constants/ActionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case types.BOOK_SELECTED:
      return action.payload;
  }

  return state;
}
