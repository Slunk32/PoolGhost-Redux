'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _gameActions = require('../../actions/gameActions');

var gameActions = _interopRequireWildcard(_gameActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePage = function (_React$Component) {
  _inherits(GamePage, _React$Component);

  function GamePage(props, context) {
    _classCallCheck(this, GamePage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GamePage).call(this, props, context));

    _this.state = {
      game: { title: "" }
    };

    _this.onTitleChange = _this.onTitleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);

    return _this;
  }

  _createClass(GamePage, [{
    key: 'onTitleChange',
    value: function onTitleChange(event) {
      var game = this.state.game;
      game.title = event.target.value;
      this.setState({ game: game });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave() {
      this.props.createGame(this.state.game);
    }
  }, {
    key: 'gameRow',
    value: function gameRow(game, index) {
      return _react2.default.createElement(
        'div',
        { key: index },
        game.title
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'jumbotron' },
        _react2.default.createElement(
          'h1',
          null,
          'Game'
        ),
        this.props.games.map(this.gameRow),
        _react2.default.createElement(
          'h2',
          null,
          'New Game'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          onChange: this.onTitleChange,
          value: this.state.game.title }),
        _react2.default.createElement('input', {
          type: 'submit',
          value: 'save',
          onClick: this.onClickSave })
      );
    }
  }]);

  return GamePage;
}(_react2.default.Component);

GamePage.propTypes = {
  games: _react.PropTypes.array.isRequired,
  createGame: _react.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    games: state.games // state references from the store, and games refers to the name game reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createGame: function createGame(game) {
      return dispatch(gameActions.createGame(game));
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GamePage); // results of the first function get passed on to the other one
//# sourceMappingURL=/Users/RSalerno/Documents/coding/poolghost-redux/components/game/GamePage.js.map