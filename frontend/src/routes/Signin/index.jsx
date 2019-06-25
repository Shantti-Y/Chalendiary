import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './style.scss';

import { connect } from 'react-redux';

import firebase, { googleAuthProvider } from '@utils/firebase';

import { sessionStatuses } from '@store/reducers/util/sessionStatus';

import Button from '@material-ui/core/Button';

import Today from '@material-ui/icons/Today';

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
      <div id="signin" className={style.page}>
        <div className={style.container}>
          <h1 className={style.header}><Today className={style.icon} /> Nikocale</h1>
          <Button className={style.signinButton} variant="contained" onClick={login}>
            <img className={style.googleLogo} src={require('@assets/images/google_logo.png')} alt="sign in with google" />
            <span className={style.text}>Sign in with Google</span>
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sessionStatus: state.util.sessionStatus.status
});

export default connect(mapStateToProps, null)(Signin);