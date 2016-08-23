'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gameReducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function gameReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'CREATE_GAME':
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.course)]);

    default:
      return state;
  }
}
//# sourceMappingURL=/Users/RSalerno/Documents/coding/poolghost-redux/reducers/gameReducer.js.map