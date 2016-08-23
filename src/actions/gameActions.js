import * as types from './actionTypes';

export function createGame(game) {
  return { type: types.CREATE_GAME, game }; // game is the same as game: game - es6 syntax
}
