import { createStore } from 'redux';

export const INITIAL_STATE = {
  books: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_BOOKS': {
      return { ...state, books: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
