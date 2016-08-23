'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGame = createGame;
function createGame(game) {
  return { type: 'CREATE_GAME', game: game }; // game is the same as game: game - es6 syntax
}
//# sourceMappingURL=/Users/RSalerno/Documents/coding/poolghost-redux/actions/gameActions.js.map