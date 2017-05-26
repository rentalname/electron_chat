'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _Signup = require('./Signup');

var _Signup2 = _interopRequireDefault(_Signup);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Rooms = require('./Rooms');

var _Rooms2 = _interopRequireDefault(_Rooms);

var _Room = require('./Room');

var _Room2 = _interopRequireDefault(_Room);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _firebaseBrowser = require('firebase/firebase-browser');

var _firebaseBrowser2 = _interopRequireDefault(_firebaseBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();
var location = history.location;

var appRouting = _react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  { history: history },
  _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _Login2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/signup', component: _Signup2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/rooms', component: _Rooms2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/rooms/:roomId', component: _Room2.default }),
    _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' })
  )
);
console.log('A:' + history);
if (!location.hash.length) {
  console.log('B:' + history);
  history.push('/login');
}

var config = {
  apiKey: 'AIzaSyAp1-tXSIZPV_A4JW75kXRslcT4B_TFves',
  authDomain: 'electron-chat-6a535.firebaseapp.com',
  databaseURL: 'https://electron-chat-6a535.firebaseio.com',
  projectId: 'electron-chat-6a535',
  storageBucket: 'electron-chat-6a535.appspot.com',
  messagingSenderId: '982404448054'
};
_firebaseBrowser2.default.initializeApp(config);

(0, _reactDom.render)(appRouting, document.getElementById('app'));