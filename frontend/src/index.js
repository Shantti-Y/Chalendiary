import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '@store';
import Routes from '@routes/root';

import firebase from '@utils/firebase';

const initializeApp = () => {
  const App = () => {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  };
  ReactDOM.render(<App />, document.getElementById('app'));
}

firebase.onAuthStateChanged(() => initializeApp());
