import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Rooms from './Rooms';
import Room from './Room';

import createHistory from 'history/createBrowserHistory';
import firebase from 'firebase/firebase-browser';
import Config from './Config';

const firebaseConfig = Config.firebase;
const history = createHistory();
const location = history.location;

const appRouting = (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:roomId" component={Rooms} />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);

firebase.initializeApp(firebaseConfig);

render(appRouting, document.getElementById('app'));
