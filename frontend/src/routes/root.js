import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from '@routes/Main';
import Signin from '@routes/Signin';

import '@assets/stylesheets/reset.scss';

import firebase from '@utils/firebase';

const Root = () => {
  const currentUser = firebase.currentUser;
  const RouteWithAuth = Component => {
    if(currentUser){
      return <Component />
    } else {
      return <Redirect to="/signin" />
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => RouteWithAuth(Main)} />
        <Route path="/signin" exact render={() => <Signin />} />
      </Switch>
    </BrowserRouter>
  )
};


export default connect(null, null)(Root);