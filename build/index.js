'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

require('./styles/styles.css');

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// arguments here could be used to get default state (maybe from db later)
// attaches store to react components
var store = (0, _configureStore2.default)(); // webpack imports this


(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
), document.getElementById('app'));
//# sourceMappingURL=/Users/RSalerno/Documents/coding/poolghost-redux/index.js.map