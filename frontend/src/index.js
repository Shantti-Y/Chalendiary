import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import store from '@store';
import Main from '@routes/Main';

import '@assets/stylesheets/reset.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));