import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/Routes/App';
import './scss/application.scss';

const render = () => {
  ReactDOM.render(
    <Router>
      <AppContainer>
        <App />
      </AppContainer>
    </Router>,
    document.getElementById('root')
  );
};

// Render once
render();

// Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     render();
//   });
// }
