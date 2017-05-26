import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Rooms from './Rooms';
import Room from './Room';

import createHistory from 'history/createBrowserHistory';
import firebase from 'firebase/firebase-browser';

const history = createHistory();
const location = history.location;

const appRouting = (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:roomId" component={Room} />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);
console.log(`A:${history}`);
if (!location.hash.length) {
  console.log(`B:${history}`);
  history.push('/login');
}

const config = {
  apiKey: 'AIzaSyAp1-tXSIZPV_A4JW75kXRslcT4B_TFves',
  authDomain: 'electron-chat-6a535.firebaseapp.com',
  databaseURL: 'https://electron-chat-6a535.firebaseio.com',
  projectId: 'electron-chat-6a535',
  storageBucket: 'electron-chat-6a535.appspot.com',
  messagingSenderId: '982404448054',
};
firebase.initializeApp(config);

render(appRouting, document.getElementById('app'));
