import React from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';

import { connect } from 'react-redux';

import ForDesktop from './ForDesktop';
import firebase, { googleAuthProvider } from '@utils/firebase';

import { sessionStatuses } from '@store/reducers/util/sessionStatus';

const Signin = ({ sessionStatus }) => {
  const login = () => {
    firebase.signInWithRedirect(googleAuthProvider)
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log("ERROR!!!!!!")
        console.log(credential)
      })
  }

  if (sessionStatus === sessionStatuses.LOGGED_IN) {
    return <Redirect to="/" />
  } else {
    return (
      <div id="signin">
        <ForDesktop />
        <button onClick={login}>sign up</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sessionStatus: state.util.sessionStatus.status
});

export default connect(mapStateToProps, null)(Signin);