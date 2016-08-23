import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Pool Ghost</h1>
        <p>Play Against The Ghost!</p>
        <Link to="game" className="btn btn-primary btn-lg">Start New Game</Link>
      </div>
    );
  }
}

export default HomePage;
