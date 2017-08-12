import * as types from '../constants/ActionTypes';

export function selectBook(book) {
  return {
    type: types.BOOK_SELECTED,
    payload: book,
  };
}
