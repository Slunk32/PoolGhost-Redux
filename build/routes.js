'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _HomePage = require('./components/home/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _HelpPage = require('./components/help/HelpPage');

var _HelpPage2 = _interopRequireDefault(_HelpPage);

var _GamePage = require('./components/game/GamePage');

var _GamePage2 = _interopRequireDefault(_GamePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _App2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'game', component: _GamePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'help', component: _HelpPage2.default })
);
//# sourceMappingURL=/Users/RSalerno/Documents/coding/poolghost-redux/routes.js.map