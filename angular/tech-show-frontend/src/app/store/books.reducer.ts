import { createReducer, on } from "@ngrx/store";
import { setBooks } from './books.actions';

const initialStore = {
  books: []
};

const _booksReducer = createReducer(initialStore,
  on(setBooks, (_, { books }) =>  ({ books }))
);

export function booksReducer(state, action) {
  return _booksReducer(state, action);
}
