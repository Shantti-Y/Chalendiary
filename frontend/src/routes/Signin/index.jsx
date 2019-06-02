import React from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';

import { connect } from 'react-redux';

import ForDesktop from './ForDesktop';
import firebase, { googleAuthProvider } from '@utils/firebase';

const Signin = ({}) => {
  const login = () => {
    
    firebase.signInWithRedirect(googleAuthProvider)
      .then(a => {})
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log("ERROR!!!!!!")
        console.log(credential)
      })
  }

  if(firebase.currentUser){
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
export default connect(null, null)(Signin);