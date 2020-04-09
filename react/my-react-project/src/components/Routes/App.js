import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../../screens/Login';
import BookList from '../../screens/BookList';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/books" exact>
          <BookList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
