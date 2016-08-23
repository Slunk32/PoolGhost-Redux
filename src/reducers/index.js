import {combineReducers} from 'redux';
import games from './gameReducer';

// Use this when you create multiple reducers

const rootReducer = combineReducers({
  games // same as games: games. es6 short hand property names
});

export default rootReducer;
