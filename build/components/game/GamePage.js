"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
      course: { title: "" }
    };

    _this.onTitleChange = _this.onTitleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);

    return _this;
  }

  _createClass(GamePage, [{
    key: "onTitleChange",
    value: function onTitleChange(event) {
      var course = this.state.course;
      course.title = event.target.value;
      this.setState({ course: course });
    }
  }, {
    key: "onClickSave",
    value: function onClickSave() {
      alert("Saving " + this.state.course.title);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "jumbotron" },
        _react2.default.createElement(
          "h1",
          null,
          "Game"
        ),
        _react2.default.createElement(
          "h2",
          null,
          "New Game"
        ),
        _react2.default.createElement("input", {
          type: "text",
          onChange: this.onTitleChange,
          value: this.state.course.title }),
        _react2.default.createElement("input", {
          type: "submit",
          value: "save",
          onClick: this.onClickSave })
      );
    }
  }]);

  return GamePage;
}(_react2.default.Component);

exports.default = GamePage;
//# sourceMappingURL=/Users/RSalerno/Documents/coding/poolghost-redux/components/game/GamePage.js.map