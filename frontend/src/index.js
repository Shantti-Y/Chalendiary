import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import store from '@store';

import Main from '@routes/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));