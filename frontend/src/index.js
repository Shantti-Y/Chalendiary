import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux'

import store from '@store';
import Main from '@routes/Main';
import Login from '@routes/Login';

import '@assets/stylesheets/reset.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));