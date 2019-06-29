import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from '@layouts/Dashboard';

import Main from '@routes/Main';
import Signin from '@routes/Signin';

import '@assets/stylesheets/reset.scss';
import '@assets/stylesheets/emoji.scss';

import firebase from '@utils/firebase';

import { applyStatus, authenticateSession } from '@store/actions/util/sessionStatus';
import { sessionStatuses } from '@store/reducers/util/sessionStatus';
class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(firebase.currentUser){
      this.props.onAuthenticate();
    }else{
      this.props.onLoggedOut();
    }
  }

  render(){
    const { sessionStatus } = this.props;
    const RouteWithAuth = Component => {
      if (sessionStatus === sessionStatuses.LOGGED_IN) {
        return <Component />
      } else {
        return <Redirect to="/signin" />
      }
    }

    if (sessionStatus !== sessionStatuses.START_UP){
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/signin" exact render={() => <Signin />} />
            <Dashboard>
              <Route path="/" exact render={() => RouteWithAuth(Main)} />
            </Dashboard>
          </Switch>
        </BrowserRouter>
      )
    }else{
      return (
        <div>waiting...</div>
      )
    }
  }
}

const mapStateToProps = state => ({
  sessionStatus: state.util.sessionStatus.status
});

const mapDispatchToProps = dispatch => ({
  onAuthenticate: () => dispatch(authenticateSession()),
  onLoggedOut: () => dispatch(applyStatus({ status: sessionStatuses.LOGGED_OUT }))
});


export default connect(mapStateToProps, mapDispatchToProps)(Root);