'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gameReducer;

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function gameReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case types.CREATE_GAME:
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.game)]);

    default:
      return state;
  }
}
//# sourceMappingURL=/Users/RSalerno/Documents/coding/poolghost-redux/reducers/gameReducer.js.map