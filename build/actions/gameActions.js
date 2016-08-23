'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGame = createGame;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createGame(game) {
  return { type: types.CREATE_GAME, game: game }; // game is the same as game: game - es6 syntax
}
//# sourceMappingURL=/Users/RSalerno/Documents/coding/poolghost-redux/actions/gameActions.js.map