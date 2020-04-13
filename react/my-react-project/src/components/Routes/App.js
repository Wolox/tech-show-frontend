import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from '../../screens/Login';
import BookList from '../../screens/BookList';

import { store } from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/books" exact>
            <BookList />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
