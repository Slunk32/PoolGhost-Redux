'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _gameReducer = require('./gameReducer');

var _gameReducer2 = _interopRequireDefault(_gameReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use this when you create multiple reducers

var rootReducer = (0, _redux.combineReducers)({
  games: _gameReducer2.default // same as games: games. es6 short hand property names
});

exports.default = rootReducer;
//# sourceMappingURL=/Users/RSalerno/Documents/coding/poolghost-redux/reducers/index.js.map