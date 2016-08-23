import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as gameActions from '../../actions/gameActions';

class GamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: {title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event) {
    const game = this.state.game;
    game.title = event.target.value;
    this.setState({game: game });
  }

  onClickSave() {
    this.props.createGame(this.state.game);
  }

  gameRow(game, index) {
    return <div key={index}>{game.title}</div>;
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Game</h1>
        {this.props.games.map(this.gameRow)}
        <h2>New Game</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.game.title} />
        <input
          type="submit"
          value="save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

GamePage.propTypes = {
  games: PropTypes.array.isRequired,
  createGame: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    games: state.games // state references from the store, and games refers to the name game reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createGame: game => dispatch(gameActions.createGame(game))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage); // results of the first function get passed on to the other one
